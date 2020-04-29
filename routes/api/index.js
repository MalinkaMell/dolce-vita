const router = require("express").Router();
const contactRoutes = require("./contact");
const requestRoutes = require("./request");
const bookingRoutes = require("./booking");

router.use("/contact", contactRoutes);
router.use("/request", requestRoutes);
router.use("/booking", bookingRoutes);

module.exports = router;