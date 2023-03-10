var express = require('express');
const dbConn = require('../../db/medicine')
var router = express.Router();

router.post('/', async function (req, res) {
    let { name, medicine_number, last_data, buy_price, sale_price, grow_place } = req.body;
    console.log(last_data);
    try {
        let result = await dbConn.insertOperate(name, medicine_number, last_data, buy_price, sale_price, grow_place)
        res.json(
            {
                code: 200,
                message: "添加成功"
            }
        )
    } catch (err) {
        console.log(err);
        res.json(err)
    }
})

module.exports = router;
