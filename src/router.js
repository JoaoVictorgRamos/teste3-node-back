const express = require('express');
const router = express.Router();
const taskController = require('./controllers/tasksController');

router.get('/', (request, response) => {
  response.status(200).send('API OK');
});

router.get('/teste', taskController.getAll);

module.exports = router;