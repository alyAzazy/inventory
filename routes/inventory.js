var express = require("express");
var router = express.Router();
const client = require("mongodb").MongoClient
const uri = "mongodb+srv://alyelazazy:azazypassword123%5E_@cluster0.1mkgj.mongodb.net/rabbit?authMechanism=DEFAULT";

/* GET home page. */
router.post('/update', function(req, res, next) {

    client.connect(uri, (err, dbclient) => {
        if (err) throw err
        const db = dbclient.db("rabbit")
        db.collection('products').updateOne(
            { 'id': req.body.productID },
            { '$inc': { 'stock': req.body.quantity } }
          );
        /*db.collection('products').findOne({"id": req.body.productID}, (err, result) => {
            if (err) throw err
            
            db.result.stock.update({$dec: {stock: req.body.quantity}})
        })*/
    })
    /*res.json({
        "id": req.body.productID,
        "count": req.body.quantity
    });*/
    res.sendStatus(200);
});

module.exports = router;
