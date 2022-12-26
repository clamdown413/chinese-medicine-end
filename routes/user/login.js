var express = require('express');
const dbConn = require('../../db/user')
var router = express.Router();
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'medicine';
router.post('/', async function (req, res) {
    let { username, password } = req.body;
    console.log(username, password);
    try {
        let result = await dbConn.login(username, password)
        let level = result[0].level
        let token = jwt.sign(
            {
                username: result[0].username,
                password: result[0].password,
                level: result[0].level
            }, SECRET_KEY,
            {
                expiresIn: "10h",

            },

        )
        res.json({
            code: 200,
            stats: 'success',
            data: {
                level, token,username
            }
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
