`use strict`

require('dotenv').config();
const yelp = require(`yelp-fusion`);
const yelpInfo = {
    id: process.env.YELP_API_ID,
    secret: process.env.YELP_API_SECRET
}

module.exports = callback => {
    const token = yelp.accessToken(yelpInfo.id, yelpInfo.secret).then(response => {
        let token = response.jsonBody.access_token;
        callback(token);
    }).catch(e => {
        console.log(e)
        callback(e)
    })
}