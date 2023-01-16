const asyncHandler = require("express-async-handler");
// @desc Get Goals
// @route GET /api/goals
// @access PRIVATE ( After authentication)
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get goals" });
});

// @desc Set Goals
// @route POST /api/goals
// @access PRIVATE ( After authentication)
const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  res.status(200).json({ message: "Set goal" });
});

// @desc Update Goals
// @route PUT /api/goals/:id
// @access PRIVATE ( After authentication)
const updateGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
});

// @desc Delete Goals
// @route Delete /api/goals/:id
// @access PRIVATE ( After authentication)
const deleteGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
});
module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
};
