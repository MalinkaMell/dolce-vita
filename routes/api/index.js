const router = require("express").Router();
const contactRoutes = require("./contact");
const requestRoutes = require("./request")

router.use("/contact", contactRoutes);
router.use("/request", requestRoutes);

module.exports = router;