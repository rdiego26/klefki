const alphaValidator = new RegExp(/[a-z]/);
const blankTextMessage = {message: 'Blank text!'};
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

		if (plainText.length < 1) {
			throw blankTextMessage;
		}

		this.lastKey = _key;

		return Array.from(plainText)
			.map((letter, index) => {
				if (!alphaValidator.test(letter)) {
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

		if (_cipherText.length < 1) {
			throw blankTextMessage;
		}

		return Array.from(_cipherText)
			.map(letter => {
				if (!alphaValidator.test(letter)) {
					return letter;
				}

				return String.fromCharCode(_key.indexOf(letter) + 97);
			})
			.join('');
	}

};
