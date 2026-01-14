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
