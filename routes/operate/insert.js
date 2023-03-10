var express = require('express');
const dbConn = require('../../db/operate')
var router = express.Router();

router.post('/', async function (req, res) {
    let { operate_id, operate_detail } = req.body;
    try {
        let result = await dbConn.insertOperate(operate_id, operate_detail)
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
