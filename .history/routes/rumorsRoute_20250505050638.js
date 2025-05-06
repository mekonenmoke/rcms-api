// const { getAllRumours } = require("../constrollers/rumorsController");
rummersController = require("../controller/rumorController");
const rummersRouter = express.Router();

rummersRouter.get("/", rummersController.getAllRumours);

module.exports = rummersRouter;