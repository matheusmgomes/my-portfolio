const express = require("express");
const projectRoutes = require("./routes/projectRoutes");

const app = express();

app.use(express.json());

app.use("/api/projects", projectRoutes);

// app.get("/", async (req, res) => {
//   try {
//     const [rows] = await conn.query("SELECT * from portfolio;");

//     res.status(200).json(rows);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json();
//   }
// });

app.listen(3000);
