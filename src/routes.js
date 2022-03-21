const { Router } = require('express');
const ReportsController = require('./app/controllers/ReportsController');

const router = Router();

router.post('/', ReportsController.store);
router.get('/', ReportsController.index);

module.exports = router;
