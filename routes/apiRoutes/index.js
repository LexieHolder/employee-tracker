const express = require('express');
const router = express.Router();


router.use(require('./departmentRoutes'));
router.use(require('./epmloyeeRoutes'));
router.use(require('./roleRoutes'));

module.exports = router;
