var express = require('express');
const dbConn = require('../../db/operate')
var router = express.Router();

router.post('/', async function (req, res) {
    let { operate_id } = req.body;
    try {
        let result = await dbConn.selectAllOperate(operate_id)
        res.json(
            {
                code: 200,
                data:result
            }
        )
    } catch (err) {
        console.log(err);
        res.json(err)
    }
})

module.exports = router;
