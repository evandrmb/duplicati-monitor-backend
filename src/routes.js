const { Router } = require('express');
const ReportsController = require('./app/controllers/ReportsController');
const BackupsController = require('./app/controllers/BackupsController');

const router = Router();

router.post('/', BackupsController.store);
router.get('/', BackupsController.index);

router.post('/:backupId', ReportsController.store);
router.get('/:backupId', ReportsController.index);
router.delete('/:backupId', ReportsController.deleteAll);

module.exports = router;
