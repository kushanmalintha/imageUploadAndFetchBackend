const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'BookWallet',
        version: '1.0.0',
        description: 'BookWallet API documnentation'
    },
};

const options = {
    swaggerDefinition,
    apis: ['image_route.js', 'swagger.js']
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;

/**
 * @swagger
 * components:
 *  schemas:
 *      Image:
 *          type: object
 *          required:
 *              - name
 *              - image
 *          properties:
 *              name:
 *                  type: string
 *                  description: 
 *              image:
 *                  type: object
 *                  description: 
 *          example:
 *              name: image1
 *              image: image1.jpg
 */