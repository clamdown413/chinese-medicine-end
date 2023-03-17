var express = require('express');
const dbConn = require('../../db/user')
var router = express.Router();
// var crypto = require("../../crypto/utils")

router.post('/', async function (req, res) {
    // let { publicKey,privateKey } = crypto.generateKey("user")

    // console.log(publicKey);
    // console.log(crypto.decrypt(code,privateKey))
    try {
        let result = await dbConn.selectUserList()
        res.json({
            code: 200,
            data: result
        })
    } catch (err) {
        console.log(err);
        res.json(err)
    }
})

module.exports = router;
