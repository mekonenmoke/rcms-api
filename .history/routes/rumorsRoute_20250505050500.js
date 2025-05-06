// const { getAllRumours } = require("../constrollers/rumorsController");
rummersController = require("../constrollers/rumorsController");
const rummersRouter = express.Router();

rummersRouter.get("/", rummersController.getAllRumours);

module.exports = rummersRouter;