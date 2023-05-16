const router = require('express').Router();
let BillPrediction = require('../models/bill_prediction');

router.route('/add').post((req, res) => {
    const lastBill = req.body.lastBill;
    const firstCount = req.body.firstCount;
    const secondCount = req.body.secondCount;
    const thirdCount = req.body.thirdCount;
    const predictCount = (((firstCount-lastBill)+(secondCount-firstCount)+(thirdCount-secondCount))/3)*30;

    const newibllPrediction = new BillPrediction({
        lastBill,
        firstCount,
        secondCount,
        thirdCount,
        predictCount
    });

    newibllPrediction.save().then(() => {
        res.json('Bill added!')
    }).catch((err) => {
        console.log(err);
    });
});



router.route('/').get((req, res) => {
    BillPrediction.find().then((bill_predictions) => {
        res.json(bill_predictions)
    }).catch((err) => {
        console.log(err);
    });
});

// update deatails
router.route('/update/:id').post(async(req, res) => {
    let billid = req.params.id;
    const{ lastBill,firstCount,secondCount,thirdCount,predictCount } = req.body;
    const updateBillPrediction = {
        lastBill,
        firstCount,
        secondCount,
        thirdCount,
        predictCount
    }
    const update = await BillPrediction.findByIdAndUpdate(billid, updateBillPrediction).then(() => {
 res.status(200).send({status: "bill updated"})
    }).catch((err) => {
      console.log(err);
        res.status(500).send({status: "Error with updating data" , error: err.message});
    })
})

// delete details
router.route("/delete/:id").delete(async(req, res) => {
 let billid = req.params.id;
 await BillPrediction.findByIdAndDelete(billid)
 .then(() => {
        res.status(200).send({status: "bill deleted"});
 })
    .catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with deleting data" , error: err.message});
    })

})

module.exports=router;