const express = require('express');
const { handleUpload, getImage } = require('./image_controller');
const router = express.Router();

router.post('/upload', handleUpload);
router.get('/image/:name', getImage);

module.exports = router;
