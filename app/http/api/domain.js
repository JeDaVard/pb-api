const response = require('../helpers/response');
const { Router } = require('express');
const domainService = require('../../service/handlers/domain');

const router = Router();

router.post('/', async (req, res) => {
    domainService.getDomainInfo({
        urls: req.body.urls,
        name: req.body.name,
    }); // don't await for this
    response(res, 200, true, null, 'scheduled');
});

module.exports = router;
