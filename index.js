const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

const information = require('./chefinformation.json');

app.get('/information', (req, res) => {
    res.send(information)
})


app.get('/information/:id', (req, res) => {
    const id = req.params.id;
    const item = information?.find((pd)=> pd.id == id);
    res.send({item})
})


app.listen(5000, () => {
    console.log('Server is running');
})