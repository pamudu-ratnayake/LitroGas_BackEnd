const dealer = require('../../src/models/dealerMD');

// dealer controller

const dealerPost = (req, res, next) => {
    const name = req.body.name;
    const shop = req.body.shop;
    const address = req.body.address;
    const tell = req.body.tell;

    const newDealer = new dealer ({
        name,
        shop,
        address,
        tell,
    });

    newDealer.save().then(() => {
        res.json("Dealer Added");
    }).catch((err) => {
        console.log(err);
    });
};

const dealerUpdate = (req, res, next) => {
    let ID = req.params.id;
    const {
        name,
        shop,
        address,
        tell,
    } = req.body;

    const updateDealer = {
        name,
        shop,
        address,
        tell
    };

    const update = dealer.findByIdAndUpdate(ID,updateDealer).then(() => {
        res.status(200).send({status: "Dealer Updated", user: update});
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data"});
    });
};

// const dealerDelete = (req, res, next) => {
//     let ID =req.params.id;
//     dealer.findByIdAndDelete(ID).then(() => {
//         res.status(200).send({status: "Dealer Deleted"});
//     }).catch((err) => {
//         console.log(err.message);
//         res.status(500).send({ status: "Error with delete user", error: err.message})
//     });
// };

// const dealerGet = (req, res, next) => {
//     let ID = req.params.id;

//     const dealerInfor = dealer.findById(ID).then((dealerData) => {
//         res.json(dealerData);
//     }).catch((err) => {
//         console.log(err.message);
//         res.status(500).send({ status: "Error with get user", error: err.message});
//     });
// };

module.exports = {
    dealerPost,
    dealerUpdate,
    // dealerDelete,
    // dealerGet
};