const { Router } = require('express');
const listsRouter = require('../modules/lists/router');
const tasksRouter = require('../modules/tasks/router');

const router = new Router();

// Service  API
router.use('/api', listsRouter);
router.use('/api', tasksRouter);
// End of service API

module.exports = router;
