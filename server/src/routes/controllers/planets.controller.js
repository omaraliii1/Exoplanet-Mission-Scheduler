const { getAllPlanetsData } = require("../../models/planets.model");

async function getAllPlanets(req, res) {
  // Return the data as a JSON response
  return res.status(200).json(await getAllPlanetsData());
}

module.exports = {
  getAllPlanets,
};
