const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Campground= require('./models/campground');

mongoose.connect('mongodb://localhost:27017/yelp-camp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("mongo connection open");
    })
    .catch(err => {
        console.log("oh no error");
        console.log(err);
    })


const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.send('Home Page');
})

app.get('/campgrounds', async(req, res) => {
    const campgrounds = await Campground.find({});
    res.render('campgrounds/index', {campgrounds});
})


app.listen(3000, () => {
    console.log("servint on port 3000");
})