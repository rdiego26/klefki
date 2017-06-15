const _klefki = require('../lib/klefki.js');

describe('klefki', function() {

    describe('Cipher - SimpleSubstitution', function() {

        describe('Crypt', function() {

            it('Using character outside of the listing the same is used', function(done) {

                const _word = '@@',
                  _cipher = _klefki.ciphers.simpleSubstitution.encrypt(_word);

                if(_word === _cipher) {
                  done();
                }

            });

            it('Null string returns exception', function(done) {
                try {
                    _klefki.ciphers.simpleSubstitution.encrypt(null);
                } catch (e) {
                    done();
                }
            });

            it('Empty string returns exception', function(done) {
                try {
                  _klefki.ciphers.simpleSubstitution.encrypt('');
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
                var _cipher = _klefki.ciphers.simpleSubstitution.encrypt('abracadabra');
                if(_cipher.length > 0) done();
            });

            it('Valid string and key returns cipher', function(done) {
                var _cipher = _klefki.ciphers.simpleSubstitution.encrypt('abracadabra', 'myKey');
                if(_cipher.length > 0) done();
            });

        });

        describe('Decrypt', function() {

            it('Using character outside of the listing the same is used', function(done) {

                const _word = '@@',
                  _cipher = _klefki.ciphers.simpleSubstitution.encrypt(_word),
                  _result = _klefki.ciphers.simpleSubstitution.decrypt(_cipher);

                if(_result === _cipher) {
                  done();
                }

            });

            it('Null string returns exception', function(done) {
                try {
                    _klefki.ciphers.simpleSubstitution.decrypt(null);
                } catch (e) {
                    done();
                }
            });

            it('Empty string returns exception', function(done) {
            try {
              _klefki.ciphers.simpleSubstitution.decrypt('');
            } catch (e) {
              done();
            }
            });

            it('Valid cipher string returns decrypt text', function(done) {
                var _word = 'abracadabra',
                    _cipher = _klefki.ciphers.simpleSubstitution.encrypt(_word),
                    _plainText;

                _plainText = _klefki.ciphers.simpleSubstitution.decrypt(_cipher);
                if(_plainText === _word) done();

            });

        });


    });

});
