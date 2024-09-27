const express = require('express');
const { handleUpload, getImage, deleteImage } = require('./image_controller');
const router = express.Router();

router.post('/uploadprofileimage', handleUpload);
router.get('/getprofileimage/:name', getImage);
router.delete('/deleteprofileimage/:name', deleteImage);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Image
 *   description: Image upload, get, and delete
 */

/**
 * @swagger
 * /api/uploadprofileimage:
 *   post:
 *     summary: Upload a profile image
 *     tags: [Image]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the image
 *               file:
 *                 type: string
 *                 format: binary
 *                 description: The image file to upload
 *     responses:
 *       200:
 *         description: Image uploaded successfully
 *       500:
 *         description: Error saving image to the database
 * 
 * /api/getprofileimage/{name}:
 *   get:
 *     summary: Get profile image by name
 *     tags: [Image]
 *     parameters:
 *       - in: path
 *         name: name
 *         schema:
 *           type: string
 *         required: true
 *         description: The name of the image
 *     responses:
 *       200:
 *         description: Successfully retrieved the image
 *         content:
 *           application/json:
 *             schema:
 *               items:
 *                 $ref: '#/components/schemas/Image'
 *       500:
 *         description: Error getting image from the database
 * 
 * /api/deleteprofileimage/{name}:
 *   delete:
 *     summary: Delete profile image by name
 *     tags: [Image]
 *     parameters:
 *       - in: path
 *         name: name
 *         schema:
 *           type: string
 *         required: true
 *         description: The name of the image
 *     responses:
 *       200:
 *         description: Image deleted successfully
 *       404:
 *         description: Error deleting image
 *       500:
 *         description: Error getting image from the database
 */
