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

    
## Contributing

Don't be shy, send a Pull Request! Here is how:

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D