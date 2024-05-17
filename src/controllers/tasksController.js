
const taskModel = require('../models/tasksModel');

const getAll = async (request, response) => {
  // const tasks = await taskModel.getAll();
  // return response.status(200).json({ message: 'Controller OK', data: tasks });
  return "RETURN OK";
};

module.exports = {
  getAll
};