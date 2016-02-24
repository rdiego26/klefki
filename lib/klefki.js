/**
 * Created by ramos on 07/10/15.
 */

var path = require('path'),
    simpleSubstitution = require( path.resolve('lib/ciphers/simpleSubstitution') );

var klefki = {

    ciphers: {
        simpleSubstitution: simpleSubstitution
    }

};

module.exports = klefki;