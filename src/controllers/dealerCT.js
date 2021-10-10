const dealer = require('../../src/models/dealerMD');

// dealer controller

const dealerPost = (req, res, next) => {
    const name = req.body.name;
    const shop = req.body.shop;
    const address = req.body.address;
    const tell = req.body.tell;
    const distance = req.body.distance;

    const newDealer = new dealer ({
        name,
        shop,
        address,
        tell,
        distance
    });

    newDealer.save().then(() => {
        res.json("Dealer Added");
    }).catch((err) => {
        console.log(err);
    });
};

module.exports = {
    dealerPost,
};