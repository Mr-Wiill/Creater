const NodeRSA = require('node-rsa');
const fs = require('fs');
 
// 公钥加密
function encrypt(data) {
    const publicKey = fs.readFileSync('./files/rsa_public_key_1024.txt');
    const nodersa = new NodeRSA(publicKey);
    // nodersa.setOptions({ encryptionScheme: 'pkcs1' });
    const encrypted = nodersa.encrypt(data, 'base64');
    return encrypted;
}
 
 
// 私钥解密
function decrypt(data) {
    const privateKey = fs.readFileSync('./files/rsa_private_key_1024.txt');
    const nodersa = new NodeRSA(privateKey);
    const decrypted = nodersa.decrypt(data, 'utf8');
    return decrypted;
}
 
 
// 实例
const data = { name: 'owen', age: 20 };
const encrypted = encrypt(data);
console.log('encrypted:', encrypted);
 
const decrypted = decrypt(encrypted);
console.log('decrypted:', decrypted);