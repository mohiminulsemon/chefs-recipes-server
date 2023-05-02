const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

const information = require('./chefinformation.json');

app.get('/information', (req, res) => {
    res.send(information)
})




app.listen(5000, () => {
    console.log('Server is running');
})