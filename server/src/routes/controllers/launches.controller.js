const {
  getAllLaunches,
  addLaunch,
  removeLaunch,
} = require("../../models/launches.model");

async function getLaunches(req, res) {
  return res.json(await getAllLaunches());
}

function postAddLaunch(req, res) {
  const launch = req.body;
  if (
    !launch.launchDate ||
    isNaN(new Date(launch.launchDate).getTime()) ||
    !launch.mission ||
    !launch.rocket ||
    !launch.target
  ) {
    return res.status(400).json({
      message: "missing requires launch property",
    });
  }
  launch.launchDate = new Date(launch.launchDate);
  addLaunch(launch);
  res.json({
    message: "Launch added successfully!",
  });
}

async function abortLaunch(req, res) {
  const { flightNumber } = req.body;

  await removeLaunch(flightNumber);
  res.json({
    message: "Launch deleted successfully",
  });
}

module.exports = {
  getLaunches,
  postAddLaunch,
  abortLaunch,
};
