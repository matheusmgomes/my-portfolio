const conn = require("../config/db");
const knex = require("../config/knex");

exports.getProjects = async (req, res) => {
  try {
    const projects = await knex("project").select("*");
    if (projects.length == 0) {
      res.status(404).json({ message: "item not found" });
    }
    res.status(200).json(projects);
  } catch (err) {
    console.log(err);
    res.status(500).json();
  }
};

exports.getProjectById = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const project = await knex("project").where("id", id);
    if (project.length === 0) {
      res.status(404).json({ message: "item not found" });
    }
    res.status(200).json(project);
  } catch (err) {
    console.log(err);
    res.status(500).json();
  }
};

exports.createProject = async (req, res) => {
  try {
    const name = req.body.name;
    const stacks = req.body.stacks;
    const github = req.body.github_link;
    const [result] = await knex("project").insert({
      name: name,
      stacks: stacks,
      github_link: github,
    });
    res.status(201).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json();
  }
};

exports.updateProject = async (req, res) => {
  const name = req.body.name;
  const stacks = req.body.stacks;
  const github = req.body.github_link;
  const id = parseInt(req.params.id);

  try {
    // const [result] = await conn.query(
    //   `UPDATE portfolio SET name = ?, stacks=?, github_link = ? WHERE id = ${id};`,
    //   [name, stacks, github]
    // );
    const result = await knex("project")
      .where({ id: id })
      .update({ name: name, stacks: stacks, github_link: github });

    if (result === 0) {
      res.status(404).json({ message: "item not found" });
    }

    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json();
  }
};

exports.deleteProject = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    await knex("project").where({ id }).del();

    res.status(204).json({ message: "row deleted" });
  } catch (err) {
    console.log(err);
    res.status(500).json();
  }
};
