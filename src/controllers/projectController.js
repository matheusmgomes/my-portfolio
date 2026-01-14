const conn = require("../config/db");

exports.getProjects = async (req, res) => {
  try {
    const [rows] = await conn.query("SELECT * from portfolio;");

    res.status(200).json(rows);
  } catch (err) {
    console.log(err);
    res.status(500).json();
  }
};

exports.getProjectById = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const [rows] = await conn.query(
      `SELECT * from portfolio where id = ${id};`
    );

    res.status(200).json(rows);
  } catch (err) {
    console.log(err);
    res.status(500).json();
  }
};

exports.createProject = async (req, res) => {
  console.log(req.body);
  res.status(200).json();
};

exports.deleteProject = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    await conn.query(`DELETE FROM portfolio where id = ${id};`);

    res.status(200).json({ message: "row deleted" });
  } catch (err) {
    console.log(err);
    res.status(500).json();
  }
};
