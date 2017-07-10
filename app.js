`use strict`

const fs = require(`fs`);
const express = require(`express`);
const app = express();
const port = process.env.PORT || 5000;

////////////// Get the University data from the CollegeScoreCard API available at https://api.data.gov/docs/ed/ /////////////////////////////
let univData;
////////////// Use this section when hitting the API with registered key ////////////////////////
const univ = require(`./modules/uniData`)
univ(data => {
    univData = data;
});



///////////// Get the yelp information for restaurants nearby all of the univerities return in the results above //////////////////////////////
let rests;
////////////// Use this section when hitting the API with registered key ////////////////////////
const yelp = require(`./modules/yelpSearch`)
yelp(data => {
    rests = data;
})


app.use(`/`, express.static(`public`));

app.get(`/univ`, (req, res) => {
    res.json(univData)
});

app.get(`/yelp`, (req, res) => {
    res.json(rests)
});

app.listen(port)
