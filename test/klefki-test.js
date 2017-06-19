const _klefki = require('../lib/klefki.js');

describe('Crypt - Cipher - SimpleSubstitution', () => {
	it('Using character outside of the listing the same is used', done => {
		const _word = '@@';
		const _cipher = _klefki.ciphers.simpleSubstitution.encrypt(_word);

		if (_word === _cipher) {
			done();
		}
	});

	it('Null string returns exception', done => {
		try {
			_klefki.ciphers.simpleSubstitution.encrypt(null);
		} catch (err) {
			done();
		}
	});

	it('Empty string returns exception', done => {
		try {
			_klefki.ciphers.simpleSubstitution.encrypt('');
		} catch (err) {
			done();
		}
	});

	it('String and key nulls returns exception', done => {
		try {
			_klefki.encrypt(null, null);
		} catch (err) {
			done();
		}
	});

	it('Valid string returns cipher', done => {
		const _cipher = _klefki.ciphers.simpleSubstitution.encrypt('abracadabra');

		if (_cipher.length > 0) {
			done();
		}
	});

	it('Valid string and key returns cipher', done => {
		const _cipher = _klefki.ciphers.simpleSubstitution.encrypt('abracadabra', 'myKey');

		if (_cipher.length > 0) {
			done();
		}
	});
});

describe('Decrypt - Cipher - SimpleSubstitution', () => {
	it('Using character outside of the listing the same is used', done => {
		const _word = '@@';
		const _cipher = _klefki.ciphers.simpleSubstitution.encrypt(_word);
		const _result = _klefki.ciphers.simpleSubstitution.decrypt(_cipher);

		if (_result === _cipher) {
			done();
		}
	});

	it('Null string returns exception', done => {
		try {
			_klefki.ciphers.simpleSubstitution.decrypt(null);
		} catch (err) {
			done();
		}
	});

	it('Empty string returns exception', done => {
		try {
			_klefki.ciphers.simpleSubstitution.decrypt('');
		} catch (err) {
			done();
		}
	});

	it('Valid cipher string returns decrypt text', done => {
		const _word = 'abracadabra';
		const _cipher = _klefki.ciphers.simpleSubstitution.encrypt(_word);
		const _plainText = _klefki.ciphers.simpleSubstitution.decrypt(_cipher);

		if (_plainText === _word) {
			done();
		}
	});
});
