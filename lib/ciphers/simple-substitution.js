const generateRandomKey = () => {
	const keychars = 'abcdefghijklmnopqrstuvwxyz';

	return keychars
		.split('')
		.sort(() => 0.5 - Math.random())
		.join('');
};

module.exports = {

	lastKey: '',

    /**
     * Encrypt string from key
     * @param plainText
     * @param optionalKey
     * @returns {string}
     */
	encrypt: (plainText, optionalKey = generateRandomKey()) => {
		const _key = optionalKey;
		const _regex = /[a-z]/;

		if (plainText.length < 1) {
			throw Object.assign({}, {
				message: 'Blank text!'
			});
		}

		this.lastKey = _key;

		return Array.from(plainText)
			.map((letter, index) => {
				if (!_regex.test(letter)) {
					return letter;
				}

				return _key.charAt(plainText.charCodeAt(index) - 97);
			})
			.join('');
	},

    /**
     * Decrypt string
     * @param cipherText
     * @returns {string}
     */
	decrypt: cipherText => {
		const _key = this.lastKey;
		const _cipherText = cipherText.toLowerCase();
		const _regex = /[a-z]/;

		if (_cipherText.length < 1) {
			throw Object.assign({}, {
				message: 'Blank text!'
			});
		}

		return Array.from(_cipherText)
			.map(letter => {
				if (!_regex.test(letter)) {
					return letter;
				}

				return String.fromCharCode(_key.indexOf(letter) + 97);
			})
			.join('');
	}

};
