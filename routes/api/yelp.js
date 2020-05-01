const router = require("express").Router();
require("dotenv").config();
const yelp = require("yelp-fusion");
const client = yelp.client(process.env.yelpApiKey);
 //dolce-vita-italian-grocer-mesa

router.get("/gelato", (req, res) => {
  client.reviews("gelato-dolce-vita-mesa")
  .then(response => {
    res.json(response.jsonBody.reviews)
  }).catch(e => {
    console.log(e);
  })
})

router.get("/grocer", (req, res) => {
  client.reviews("dolce-vita-italian-grocer-mesa")
  .then(response => {
    res.json(response.jsonBody.reviews)
  }).catch(e => {
    console.log(e);
  })
})

module.exports = router;