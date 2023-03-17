var express = require('express');
const { generateKeyPairSync, publicEncrypt, privateDecrypt } = require('crypto')
const dbConn = require('../../db/medicine')
var router = express.Router();


const { publicKey, privateKey } = generateKeyPairSync('rsa', {
    modulusLength: 4096,
    publicKeyEncoding: {
        type: 'spki',
        format: 'pem'
    },
    privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem'
    }
});



router.post('/', async function (req, res) {
    let { id } = req.body
    let { token } = req.header
    try {
        let result = await dbConn.getMedicineInfoById(id)

        // const data = JSON.stringify(result);
        // const pub = publicKey.toString('abcdfv')
        // // console.log(pub,"pub");
        // // 公钥加密过程
        // const encryptData = publicEncrypt(pub, Buffer.from(data)).toString('base64');
        // console.log('encode:', encryptData);

        // const pri = privateKey.toString('ascii')
        // // 私钥解密
        // // console.log(pri,"pri");
        // const decryptData = privateDecrypt(pri, Buffer.from(encryptData.toString('base64'), 'base64'));
        // console.log('decode:', decryptData.toString())

        res.json({ code: 200, data: result })
    } catch (err) {
        console.log(err);
        res.json(err)
    }
})


module.exports = router;
