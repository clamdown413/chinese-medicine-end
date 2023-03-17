const { generateKeyPairSync, publicEncrypt, privateDecrypt } = require('crypto')


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

function generatePublicKey(str) {//生成公钥
    console.log(publicKey);
    return publicKey.toString(str)
}
function generatePrivateKey(str) {//生成私钥
    console.log(privateKey);
    return privateKey.toString(str)
}

function generateKey(str) {
    return {
        publicKey:publicKey.toString(str),
        privateKey:privateKey.toString(str)
    }
}
function encryption(data, publicKey) { //公钥加密
    return publicEncrypt(publicKey, Buffer.from(data)).toString('base64');
}

function decrypt(encryptData, encryptData) { //私钥解密
    return privateDecrypt(privateKey, Buffer.from(encryptData.toString('base64'), 'base64'));
}
module.exports = {
    generatePublicKey,
    generatePrivateKey,
    encryption,
    decrypt,
    generateKey
}