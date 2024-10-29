const express = require("express");
const {
  getLaunches,
  postAddLaunch,
  abortLaunch,
} = require("../controllers/launches.controller");

const launchesRouter = express.Router();
launchesRouter.get("/", getLaunches);
launchesRouter.post("/", postAddLaunch);
launchesRouter.delete("/", abortLaunch);

module.exports = launchesRouter;
