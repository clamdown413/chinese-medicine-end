var express = require('express');
const dbConn = require('../../db/operate')
var router = express.Router();

router.post('/', async function (req, res) {
    let { name, medicine_number, last_data, buy_price, sale_price, grow_place, operate_mouth, operate_id } = req.body;
    try {
        await dbConn.insertMedicine(name, medicine_number, last_data, buy_price, sale_price, grow_place, operate_mouth, operate_id)
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
