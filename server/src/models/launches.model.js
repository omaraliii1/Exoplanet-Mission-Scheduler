const launches = require("./launches.mongo");

async function getAllLaunches() {
  try {
    return await launches.find({});
  } catch (error) {
    console.error("Error fetching launches:", error);
    throw new Error("Could not retrieve launches");
  }
}

async function addLaunch(launch) {
  try {
    const latestLaunch = await launches.findOne().sort("-flightNumber");
    console.log(latestLaunch);
    const latestFlightNumber = latestLaunch
      ? latestLaunch.flightNumber + 1
      : 100;

    await launches.create({
      launchDate: launch.launchDate,
      mission: launch.mission,
      rocket: launch.rocket,
      target: launch.target,
      flightNumber: latestFlightNumber,
      customer: launch.customers,
      upcoming: launch.upcoming,
      success: launch.success,
    });
    console.log("Launch added successfully.");
  } catch (error) {
    console.error("Error adding launch:", error);
    throw new Error("Could not add launch");
  }
}

async function removeLaunch(flightNumber) {
  try {
    const result = await launches.deleteOne({ flightNumber });
    if (result.deletedCount === 0) {
      console.log("No launch found with that flight number.");
    } else {
      console.log("Launch removed successfully.");
    }
  } catch (error) {
    console.error("Error removing launch:", error);
    throw new Error("Could not remove launch");
  }
}

module.exports = {
  getAllLaunches,
  addLaunch,
  removeLaunch,
};
