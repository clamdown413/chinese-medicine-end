// utils.js
const crypto = require('crypto');
const { generateKeyPairSync, publicEncrypt, privateDecrypt } = require('crypto')

// 加密方法
exports.encrypt = (data, key) => {
    // 注意，第二个参数是Buffer类型
    return crypto.publicEncrypt(key, Buffer.from(data));
};

// 解密方法
exports.decrypt = (encrypted, key) => {
    // 注意，encrypted是Buffer类型
    return crypto.privateDecrypt(key, encrypted);
};

const { publicKey, privateKey } = generateKeyPairSync('rsa', {
    modulusLength: 1024,
    publicKeyEncoding: {
        type: 'spki',
        format: 'pem'
    },
    privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem'
    }
});

exports.modles = {
    publicKey,
    privateKey,
    publicEncrypt,
    privateDecrypt
}