const express = require('express');
const router = express.Router();
const { getTasks, setTask, updateTask, deleteTask} = require('../controllers/taskControllers')

// GET and POST Chain Request
router.route('/').get(getTasks).post(setTask)

// PUT and DELETE Chain Request
router.route('/:id').put(updateTask).delete(deleteTask)

module.exports = router