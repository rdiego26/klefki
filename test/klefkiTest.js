/**
 * Created by ramos on 07/10/15.
 */
var _klefki = require('../lib/klefki.js');

describe('klefki', function() {

    describe('Crypt', function() {

        it('Null string returns exception', function(done) {
                try {
                    _klefki.encrypt(null);
                } catch (e) {
                    done();
                }
         });

        it('String and key nulls returns exception', function(done) {
            try {
                _klefki.encrypt(null, null);
            } catch (e) {
                done();
            }
        });

        it('Valid string returns cipher', function(done) {
            var _cipher = _klefki.encrypt('abracadabra');
            if(_cipher.length > 0) done();
        });

        it('Valid string and key returns cipher', function(done) {
            var _cipher = _klefki.encrypt('abracadabra', 'myKey');
            if(_cipher.length > 0) done();
        });

    });

    describe('Decrypt', function() {

        it('Null string returns exception', function(done) {
            try {
                _klefki.decrypt(null);
            } catch (e) {
                done();
            }
        });

        it('Valid cipher string returns decrypt text', function(done) {
            var _word = 'abracadabra',
                _cipher = _klefki.encrypt(_word),
                _plainText;

            _plainText = _klefki.decrypt(_cipher);
            if(_plainText === _word) done();

        });

    });

});