require("dotenv").config();
const PORT = process.env.PORT;
const { server } = require("./app");
const { mongoConnect } = require("./services/mongo");
const { loadPlanets } = require("./models/planets.model");

async function startServer() {
  await mongoConnect();
  await loadPlanets();

  server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });
}

startServer();
