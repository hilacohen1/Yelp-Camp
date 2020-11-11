const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req,res)=>{
    res.send('Home Page');
})

app.listen(3000, () => {
    console.log("servint on port 3000");
})