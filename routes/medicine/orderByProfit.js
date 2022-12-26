
var express = require('express');
const dbConn = require('../../db/medicine')
var router = express.Router();

router.post('/', async function (req, res) {

    try {
        let result = await dbConn.orderByProfit()
        res.json({ code: 200, data: result })
    } catch (err) {
        console.log(err);
        res.json(err)
    }
})

module.exports = router;
