// CONTROLLER IS A FUNCTION THAT TAKES THE ROUTES
const asyncHandler = require("express-async-handler");
const Goal = require("../models/goalModel");
// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoal = async (req, res) => {
  const goals = await Goal.find();
  res.status(200).send(goals);
};

// @desc get goal
// @route POST /api/goals
// @access Private
const setGoal = async (req, res) => {
  try {
    const newGoal = new Goal({
      text: req.body.text,
    });
    const goal = await newGoal.save();
    res.status(200).json(goal);
  } catch (err) {
    res.status(500).json(err);
  }
};

// @desc Update goals
// @route PUT /api/goals/:id
// @access Private
const updateGoal = async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }
  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedGoal);

  // res.status(200).json({ message: `Update Goal ${req.params.id}` });
};

// @desc Delete goals
// @route Delete /api/goals/:id
// @access Private
const deleteGoal = async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Goal not found for delete");
  }
  await goal.remove();
  res.status(200).json({ id: req.params.id });
  // res.status(200).json({ message: `Delete Goal ${req.params.id}` });
};

module.exports = {
  getGoal,
  setGoal,
  updateGoal,
  deleteGoal,
};
