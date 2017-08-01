'use strict';

const crypto = require('crypto');
const encryption_key = process.env.ENCRYPTION_KEY;
const iv_length = Number(process.env.IV_LENGTH);
const algorithm = process.env.ALGORITHM;

function encrypt(text) {
 let iv = crypto.randomBytes(iv_length);
 let cipher = crypto.createCipheriv(algorithm, new Buffer(encryption_key), iv);
 let encrypted = cipher.update(text);
 encrypted = Buffer.concat([encrypted, cipher.final()]);

 return iv.toString('hex') + ':' + encrypted.toString('hex');
}

function decrypt(text) {
 let textParts = text.split(':');
 let iv = new Buffer(textParts.shift(), 'hex');
 let encryptedText = new Buffer(textParts.join(':'), 'hex');
 let decipher = crypto.createDecipheriv(algorithm, new Buffer(encryption_key), iv);
 let decrypted = decipher.update(encryptedText);
 decrypted = Buffer.concat([decrypted, decipher.final()]);

 return decrypted.toString();
}

module.exports = { decrypt, encrypt };