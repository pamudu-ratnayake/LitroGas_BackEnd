const mongoose = require("mongoose");

const DealerSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  shop: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  tell: {
    type: Number,
    required: true,
  },
});

const dealer = mongoose.model("Dealer", DealerSchema);
module.exports = dealer;