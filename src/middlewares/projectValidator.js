module.exports = function validateBody(req, res, next) {
  if (!req.body.name) {
    return res.status(400).json({ message: "name not found" });
  }
  if (!req.body.stacks) {
    return res.status(400).json({ message: "stacks not found" });
  }
  if (!req.body.github_link) {
    return res.status(400).json({ message: "github_link not found" });
  }
  next();
};
