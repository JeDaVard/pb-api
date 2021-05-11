const { Router } = require('express');
const domainRouter = require('./domain');
const listRouter = require('./list');
const { errorHandler } = require('../middlewares/errors');

const router = Router();

router.use('/domain', domainRouter);
router.use('/list', listRouter);
router.use(errorHandler);

module.exports = router;
