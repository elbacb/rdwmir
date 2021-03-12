/* i */
/* 
const bcrypt = require('crypto-js');

const encriptar = (cadena) => {
  const saltRounds = 10;

  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(cadena, salt);

  return hash;
};

const comparar = (cadena, hash) => bcrypt.compareSync(cadena, hash);

module.exports = { encriptar, comparar };
 */

/* libreria */
var CryptoJS = require("crypto-js");
 
var data = [{id: 1}, {id: 2}]
 
// Encrypt
var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), 'secret key 123').toString();
 
// Decrypt
var bytes  = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
 
console.log(decryptedData); // [{id: 1}, {id: 2}]

module.exports = { encriptar, comparar };
