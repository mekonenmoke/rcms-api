// const { getAllRumours } = require("../constrollers/rumorsController");
const express = require("express");
rummersController = require("../controller/rumorController");
const rummersRouter = express.Router();

rummersRouter.get("/", rummersController.getAllRumours);
rummersRouter.get("/rumors/:id", rummersController.getRumoursById);
rummersRouter.put("/rumors/:id", rummersController.updateRumourById);
rummersRouter.post("/rumors/create", rummersController.createNewRumour);
rummersRouter.delete("/rumors/:id", rummersController.deleteRumourById);

module.exports = rummersRouter;