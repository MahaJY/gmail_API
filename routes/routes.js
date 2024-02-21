const express = require('express');
const controllers = require('../controllers/control');
const router = express.Router()

router.get('/mail/filter/:subject',controllers.getmail);

module.exports = router;