/**
 * Created by ramos on 07/10/15.
 */
var _klefki = require('../index.js');

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

});