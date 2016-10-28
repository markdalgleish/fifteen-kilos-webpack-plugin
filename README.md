[![Build Status](https://img.shields.io/travis/markdalgleish/fifteen-kilos-webpack-plugin/master.svg?style=flat-square)](http://travis-ci.org/markdalgleish/fifteen-kilos-webpack-plugin) [![Coverage Status](https://img.shields.io/coveralls/markdalgleish/fifteen-kilos-webpack-plugin/master.svg?style=flat-square)](https://coveralls.io/r/markdalgleish/fifteen-kilos-webpack-plugin) [![Dependency Status](https://img.shields.io/david/markdalgleish/fifteen-kilos-webpack-plugin.svg?style=flat-square)](https://david-dm.org/markdalgleish/fifteen-kilos-webpack-plugin) [![npm](https://img.shields.io/npm/v/fifteen-kilos-webpack-plugin.svg?style=flat-square)](https://npmjs.org/package/fifteen-kilos-webpack-plugin)

# fifteen-kilos-webpack-plugin

Bring the magic of [fifteen-kilos](https://github.com/mxstbr/fifteen-kilos) to your entire project.

```bash
$ npm install --save-dev fifteen-kilos-webpack-plugin
```

### webpack.config.js

```js
const FifteenKilosPlugin = require('fifteen-kilos-webpack-plugin');

module.exports = {

  ...

  plugins: [
    new FifteenKilosPlugin()
  ]

};
```

## License

[MIT License](http://markdalgleish.mit-license.org)
