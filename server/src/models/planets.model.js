const { parse } = require("csv-parse");
const path = require("path");
const fs = require("fs");
const planets = require("./planets.mongo");

function isHabitablePlanet(planet) {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
}

function loadPlanets() {
  return new Promise((resolve, reject) => {
    fs.createReadStream(
      path.join(__dirname, "..", "..", "data", "kepler_data.csv")
    )
      .pipe(
        parse({
          comment: "#",
          columns: true,
        })
      )
      .on("data", async (data) => {
        if (isHabitablePlanet(data)) {
          console.log(data.kepler_name);
          await savePlanet(data);
        }
      })
      .on("error", (err) => {
        reject(err);
      })
      .on("end", async () => {
        const countHabitablePlanetsFound = (await getAllPlanetsData()).length;
        console.log(`${countHabitablePlanetsFound} habitable planets found!`);
        resolve();
      });
  });
}

async function getAllPlanetsData() {
  // const planetsAll = await planets.find({});
  // const keplerNames = planetsAll.map((planet) => planet.keplerName);
  // return planetsAll;

  return await planets.find({}, { _id: 0, __v: 0 }); //Exclude the _id and __v propirites from the documnet
}

async function savePlanet(planet) {
  try {
    await planets.updateOne(
      {
        keplerName: planet.kepler_name,
      },
      { keplerName: planet.kepler_name },
      {
        upsert: true,
      }
    );
  } catch (err) {
    console.error(`Couldn't save planet ${err}`);
  }
}
module.exports = {
  loadPlanets,
  getAllPlanetsData,
};
