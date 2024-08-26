const { uploadImage, getImageByName } = require('./image_service');
const multer = require('multer');

const Storage = multer.memoryStorage();
const upload = multer({ storage: Storage }).single('testImage');

const handleUpload = (req, res) => {
    upload(req, res, async (err) => {
        if (err) {
            console.error('Error uploading file:', err);
            return res.status(500).send('Error uploading file');
        }

        const { name } = req.body;
        const result = await uploadImage(name, req.file);

        if (result.success) {
            res.send('Successfully uploaded');
        } else {
            res.status(500).send('Error saving image to database');
        }
    });
};

const getImage = async (req, res) => {
    const { name } = req.params;
    const result = await getImageByName(name);

    if (result.success) {
        res.set('Content-Type', result.image.image.contentType);
        res.send(result.image.image.data);
    } else {
        res.status(404).send(result.message || 'Error retrieving image');
    }
};

module.exports = {
    handleUpload,
    getImage
};
