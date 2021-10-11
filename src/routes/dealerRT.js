const router = require("express").Router();
const dealerController = require("../../src/controllers/dealerCT");

router.post("/addDealer", dealerController.dealerPost);

router.put("/updateDealer/:id", dealerController.dealerUpdate);

router.delete("/deleteDealer/:id", dealerController.dealerDelete);

// router.get("/getDealer/:id", dealerController.dealerGet);

module.exports = router;