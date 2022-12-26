var express = require('express');
const dbConn = require('../../db/medicine')
var router = express.Router();

router.post('/', async function (req, res) {
    let { id, name, number, last_data, buy_price, sale_price, grow_place } = req.body;
    console.log(last_data);
    try {
        let result = await dbConn.insertMedicine(id, name, number, last_data, buy_price, sale_price, grow_place)
        res.json(result)
    } catch (err) {
        console.log(err);
        res.json(err)
    }
})

module.exports = router;
