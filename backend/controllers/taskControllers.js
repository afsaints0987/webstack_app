const asyncHandler = require('express-async-handler')

// @desc Get Tasks
// @route GET /api/tasks
const getTasks = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Get Tasks'})
})

// @desc Set Task
// @route POST /api/tasks
const setTask = asyncHandler(async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('ERROR 404')
    }
    res.status(200).json({message: 'Set Task'})
})

// @desc Update Task
// @route PUT /api/tasks/:id
const updateTask = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Update task ${req.params.id}`})
})

// @desc Delete Task
// @route DELETE /api/task/:id
const deleteTask = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Delete task ${req.params.id}`})
})
module.exports = {
    getTasks,
    setTask,
    updateTask,
    deleteTask
}