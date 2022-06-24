// import express from "express";
const express = require("express");
const router = express.Router();
const {
  getGoal,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controller/goalController");
// router.route('/').get(getGoal).post(setGoal)
// router.route('/:id').put(updateGoal).delete(deleteGoal)
router.get("/", getGoal);

router.post("/", setGoal);

router.put("/:id", updateGoal);

router.delete("/:id", deleteGoal);

// export default router;
module.exports = router;
