const express = require("express");
const controller = require("../controllers/projectController");

const router = express.Router();

router.get("/", controller.getProjects);
router.get("/:id", controller.getProjectById);
router.post("/", controller.createProject);
router.delete("/:id", controller.deleteProject);

module.exports = router;
