const cors = require("cors");
const http = require("http");
const helmet = require("helmet");
const morgan = require("morgan");
const express = require("express");
const planetsRouter = require("./routes/planets/planets.router");
const launchesRouter = require("./routes/launches/launches.router");

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(helmet());
app.use(express.json());
app.use(morgan("combined"));

app.use("/planets", planetsRouter);
app.use("/launch", launchesRouter);

const server = http.createServer(app);
module.exports = {
  server,
};
