// const { getAllRumours } = require("../constrollers/rumorsController");
const express = require("express");
rummersController = require("../controller/rumorController");
const rummersRouter = express.Router();

rummersRouter.get("/", rummersController.getAllRumours);
rummersRouter.get("/:id", rummersController.getRumoursById);
rummersRouter.put("/:id", rummersController.updateRumourById);
rummersRouter.post("/", rummersController.createNewRumour);
rummersRouter.delete("/:id", rummersController.deleteRumourById);

module.exports = rummersRouter;