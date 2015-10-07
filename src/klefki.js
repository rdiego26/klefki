/**
 * Created by ramos on 07/10/15.
 */

var klefki = {

    lastKey: '',

    generateRandomKey: function() {
        var keychars = "abcdefghijklmnopqrstuvwxyz",
            chars = keychars.split(""),
            result = "",
            limit = chars.length,
            index;

        for(i = 0; i < limit; i++) {
            index = Math.floor(chars.length*Math.random());
            result += chars[index];
            chars.splice(index,1);
        }

        return result;
    },

    /**
     * Encrypt string from key
     * @param plainText
     * @param optionalKey
     * @returns {string}
     */
    encrypt: function(plainText, optionalKey) {
        var _key = optionalKey || this.generateRandomKey(),
            _cipherText = "",
            _regex = /[a-z]/;

        if(plainText.length < 1) {
            throw 'Blank text!';
        }

        for(var i= 0, len = plainText.length; i < len; i++) {
            if(_regex.test(plainText.charAt(i))) _cipherText += _key.charAt(plainText.charCodeAt(i)-97);
            else  _cipherText += plainText.charAt(i);
        }

        this.lastKey = _key;

        return _cipherText;
    },

    /**
     * Decrypt string
     * @param cipherText
     * @returns {string}
     */
    decrypt: function(cipherText) {

        var _key = this.lastKey,
            _cipherText = cipherText.toLowerCase(),
            _plainText = "",
            _regex = /[a-z]/;

        if(_cipherText.length < 1) {
            throw 'Blank text!';
        }

        for(var i = 0, len = _cipherText.length; i < len; i++) {
            if(_regex.test(_cipherText.charAt(i))) _plainText += String.fromCharCode(key.indexOf(_cipherText.charAt(i))+97);
            else  _plainText += _cipherText.charAt(i);
        }

        return _plainText;

    }

};

module.exports = klefki;