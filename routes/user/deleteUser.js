var express = require('express');
const dbConn = require('../../db/user')
var router = express.Router();

router.post('/', async function (req, res) {
    let {username} = req.body
    try {
        let result = await dbConn.deleteUser(username)

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
