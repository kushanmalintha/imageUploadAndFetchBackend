const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./image_route');
const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect('mongodb+srv://kushan:kushan@cluster1.dtq7a.mongodb.net/upload', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('db is connected'))
.catch(err => console.log(err, 'it has an error'));

app.use('/', routes);

app.listen(port, () => {
    console.log(`successfully running at http://localhost:${port}`);
});
