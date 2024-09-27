const express = require('express');
const bodyParser = require('body-parser');
const swaggerUI = require('swagger-ui-express');
const swaggerSpec = require('./swagger');
const basicAuth = require('basic-auth-connect');
const mongoose = require('mongoose');
const routes = require('./image_route');
const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Serve Swagger documentation
app.use('/api-docs',basicAuth('BookwalletDoc', 'BookWalletDocP@ssw0rd'), swaggerUI.serve, swaggerUI.setup(swaggerSpec));

mongoose.connect('mongodb+srv://kushan:malintha@cluster1.dtq7a.mongodb.net/upload', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('db is connected'))
.catch(err => console.log(err, 'it has an error'));

app.use('/api', routes);

app.listen(port, () => {
    console.log(`successfully running at http://localhost:${port}`);
});
