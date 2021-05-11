const response = require('../helpers/response');
const { Router } = require('express');
const listService = require('../../service/handlers/list');

const router = Router();

router.get('/', async (req, res) => {
    const data = await listService.getLists();
    if (data.success) {
        response(res, 200, true, data.data);
    } else {
        response(res, 500);
    }
});
router.get('/:id', async (req, res) => {
    const data = await listService.getDomainsByList(req.params.id);
    if (data.success) {
        response(res, 200, true, data.data);
    } else {
        response(res, 500);
    }
});

module.exports = router;
