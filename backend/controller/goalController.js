// CONTROLLER IS A FUNCTION THAT TAKES THE ROUTES
// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoal = (req, res) => {
  res.status(200).json({ message: "Get Goal successful" });
};

// @desc get goal
// @route POST /api/goals
// @access Private
const setGoal = (req, res) => {
  res.status(201).json({ message: "Set Goal successful" });
};

// @desc Update goals
// @route PUT /api/goals/:id
// @access Private
const updateGoal = (req, res) => {
  res.status(200).json({ message: `Update Goal ${req.params.id}` });
};

// @desc Delete goals
// @route Delete /api/goals/:id
// @access Private
const deleteGoal = (req, res) => {
  res.status(200).json({ message: `Delete Goal ${req.params.id}` });
};

module.exports = {
  getGoal,
  setGoal,
  updateGoal,
  deleteGoal,
};
