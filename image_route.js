const express = require('express');
const { handleUpload, getImage, deleteImage } = require('./image_controller');
const router = express.Router();

router.post('/uploadprofileimage', handleUpload);
router.get('/getprofileimage/:name', getImage);
router.delete('/deleteprofileimage/:name', deleteImage);

module.exports = router;
