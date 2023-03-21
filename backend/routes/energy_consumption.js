const router = require('express').Router();
let EnergyConsumption = require('../models/energy_consumption');

router.route('/add').post((req, res) => {
    const owner_name = req.body.owner_name;
    const home_address = req.body.home_address;

    const newEnergyConsumption = new EnergyConsumption({
        owner_name,
        home_address,
    });

    newEnergyConsumption.save().then(() => {
        res.json('Energy Consumption added!')
    }).catch((err) => {
        console.log(err);
    });
});

router.route('/').get((req, res) => {
    EnergyConsumption.find().then((energy_consumptions) => {
        res.json(energy_consumptions)
    }).catch((err) => {
        console.log(err);
    });
});


module.exports=router;