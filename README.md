# klefki

> The dependency checker

[![NPM Version](https://img.shields.io/npm/v/express.svg?style=flat)](https://www.npmjs.org/package/klefki)
[![Build Status](https://travis-ci.org/rdiego26/klefki.svg?branch=master)](https://travis-ci.org/rdiego26/klefki)
[![Dependencies](https://david-dm.org/rdiego26/klefki.svg)](https://david-dm.org/rdiego26/klefki.svg)

Simple substitution cipher module.
It basically consists of substituting every plaintext character for a different ciphertext character. It differs from the [Caesar cipher](http://practicalcryptography.com/ciphers/caesar-cipher/) in that the cipher alphabet is not simply the alphabet shifted, it is completely jumbled.  
![Pokémon klefki](http://img.pokemondb.net/artwork/dream/klefki.png)


## Installation

  `npm install klefki --save`

## Usage

```
var klefki = require('klefki'),
      _word = 'abracadabra',
      _myKey = 'myKey',
      _cipher = '';
      _cipher = klefki.encrypt(_word, _myKey);
      klefki.decrypt(_cipher) === _word; // true
```

## Tests

  `npm test`


## Contributing

Don't be shy, send a Pull Request! Here is how:

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## References
-  [https://en.wikipedia.org/wiki/Substitution_cipher](https://en.wikipedia.org/wiki/Substitution_cipher)
-  [https://inventwithpython.com/hacking/chapter18.html](https://inventwithpython.com/hacking/chapter18.html)
