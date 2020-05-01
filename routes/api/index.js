const router = require("express").Router();
const contactRoutes = require("./contact");
const requestRoutes = require("./request");
const bookingRoutes = require("./booking");
const yelpRoutes = require("./yelp");

router.use("/contact", contactRoutes);
router.use("/request", requestRoutes);
router.use("/booking", bookingRoutes);
router.use("/yelp", yelpRoutes);

module.exports = router;