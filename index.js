var fifteen = require('fifteen-kilos');
var RawSource = require('webpack-sources/lib/RawSource');

function FifteenKilosPlugin() {}

FifteenKilosPlugin.prototype.apply = function(compiler) {
  var self = this;

  compiler.plugin('emit', function(compilation, done) {
    Object.keys(compilation.assets).forEach(function(name) {
      compilation.assets[name] = new RawSource(fifteen);
    });

    done();
  });
};

module.exports = FifteenKilosPlugin;
