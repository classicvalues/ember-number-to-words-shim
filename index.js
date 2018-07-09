'use strict';

const path = require('path');

module.exports = {
  name: 'ember-number-to-words-shim',

  included() {
    this._super.included.apply(this, arguments);

    this.import(path.resolve(path.dirname(require.resolve('number-to-words')), '../numberToWords.js').substr(process.cwd().length + 1));
    this.import('vendor/shims/number-to-words.js');
  }
};
