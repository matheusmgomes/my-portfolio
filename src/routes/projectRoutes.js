const express = require("express");
const controller = require("../controllers/projectController");

const router = express.Router();

router.get("/", controller.getProjects);

module.exports = router;
