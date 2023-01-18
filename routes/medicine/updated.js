var express = require('express');
const dbConn = require('../../db/medicine')
var router = express.Router();

router.post('/', async function (req, res) {
    let { id, name, medicine_number, last_data, buy_price, sale_price, grow_place } = req.body;
    try {
        let result = await dbConn.updated(id, name, medicine_number, last_data, buy_price, sale_price, grow_place)
        res.json(
            {
                result,
                code: 200,
                message: "修改成功"
            }
        )
    } catch (err) {
        console.log(err);
        res.json(err)
    }
})

module.exports = router;
