const validateTodo = (req, res, next) => {
  const { title } = req.body;
  if (!title || typeof title !== "string") {
    return res.status(400).json({ message: "Invalid title" });
  }
  next();
};

module.exports = validateTodo;
