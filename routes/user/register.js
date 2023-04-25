var express = require('express');
const dbConn = require('../../db/user')
var router = express.Router();

router.post('/', async function (req, res) {
    let { username, password, level,nickname } = req.body;
    try {
        await dbConn.register(username, password, level,nickname)
        res.json({
            code: 200,
            stats: 'success'
        })
    } catch (err) {
        console.log(err);
        res.json({
            code: 201,
            stats: 'error'
        })
    }
})

module.exports = router;
