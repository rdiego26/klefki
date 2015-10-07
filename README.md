# klefki
Simple substitution cipher module.

![Pokémon klefki](http://img.pokemondb.net/artwork/dream/klefki.png)


## Installation

  npm install klefki --save

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

  npm test