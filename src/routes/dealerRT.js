const router = require("express").Router();
const dealerController = require("../../src/controllers/dealerCT");

router.post("/addDealer", dealerController.dealerPost);

module.exports = router;