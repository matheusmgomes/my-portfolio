const express = require("express");
const controller = require("../controllers/projectController");
const validator = require("../middlewares/projectValidator");

const router = express.Router();

router.get("/", controller.getProjects);
router.get("/:id", controller.getProjectById);
router.post("/", validator, controller.createProject);
router.put("/:id", validator, controller.updateProject);
router.delete("/:id", controller.deleteProject);

module.exports = router;
