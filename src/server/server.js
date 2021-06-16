const express = require('express');
const path = require('path');

const app = express();

const port = 8080;

app.get('/assets/:avatar', (req,res)=>{
    res.sendFile(req.params.avatar, {
        root: path.join(__dirname,'..', '..', 'images'),
    });
})

app.listen(8080, () => console.log('Listening on port 8080'));