const router = require('express').Router();
let Sales = require('../models/sales');
const User = require('../models/user');

router.route('/add').post((req, res) => {

    
    const cust_name = req.body.cust_name;
    const street_addr = req.body.street_addr;
    const city = req.body.city;
    const c_email = req.body.c_email;
    const phone_no = req.body.phone_no;


    const newSales = new Sales({
        
        cust_name,
        street_addr,
        city,
        c_email,
        phone_no,

    })

    newSales.save().then(() => {
        req.json('sales added!')
    }).catch((err) => {
        console.log(err);

    });
});
router.route('/').get((req, res) => {
    Sales.find().then((sales) => {
        res.json(sales)
    }).catch((err) => {
        console.log(err);
    });
});

// update deatails
router.route('/update/:id').post(async (req, res) => {
    let userid = req.params.id;
    const { cust_name, street_addr, city, c_email, phone_no } = req.body;
    const updateSales = {
        cust_name,
        street_addr,
        city,
        c_email,
        phone_no,
    }
    const update = await Sales.findByIdAndUpdate(userid, updateSales).then(() => {
        res.status(200).send({ status: "sales updated" })
    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error with updating data", error: err.message });
    })
});


// delete details
router.route("/delete/:id").delete(async (req, res) => {
    let userid = req.params.id;
    await Sales.findByIdAndDelete(userid)
        .then(() => {
            res.status(200).send({ status: "sales deleted" });
        })
        .catch((err) => {
            console.log(err.message);
            res.status(500).send({ status: "Error with deleting data", error: err.message });
        })

})

module.exports = router;