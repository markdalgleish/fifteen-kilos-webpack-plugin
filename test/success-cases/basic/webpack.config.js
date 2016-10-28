var FifteenKilosPlugin = require('../../../');
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
var ejs = require('ejs');
var fs = require('fs');

var template = ejs.compile(fs.readFileSync(__dirname + '/template.ejs', 'utf-8'))

var paths = [
  '/',
  '/foo',
  '/foo/bar'
];

module.exports = {
  entry: {
    main: __dirname + '/index.js'
  },

  output: {
    filename: 'index.js',
    path: __dirname + '/actual-output',
    libraryTarget: 'umd'
  },

  plugins: [
    new StaticSiteGeneratorPlugin('index.js', paths, { template: template }),
    new FifteenKilosPlugin()
  ]
};
