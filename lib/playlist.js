// Generated by CoffeeScript 1.10.0
(function() {
  var EventEmitter, Playlist, fs,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  require('coffee-script');

  fs = require('fs');

  EventEmitter = require('events').EventEmitter;

  Playlist = (function(superClass) {
    extend(Playlist, superClass);

    function Playlist() {
      this.addTrackToPlaylist = bind(this.addTrackToPlaylist, this);
      this.setName = bind(this.setName, this);
      this.setEnabled = bind(this.setEnabled, this);
      this.enabled = false;
      this.directory = null;
      this.name = null;
      this.playlistFile = null;
      this.traks = [];
    }

    Playlist.prototype.setEnabled = function(enabled) {
      this.enabled = enabled;
    };

    Playlist.prototype.setName = function(name) {
      this.name = name;
      return this.playlistFile = this.name.replace(/\//g, ' - ') + '.m3u';
    };

    Playlist.prototype.addTrackToPlaylist = function(file, callback) {
      var relativePath, track;
      if (!this.enabled) {
        return;
      }
      track = file.path;
      relativePath = 'test';
      if (track.indexOf(this.directory) !== -1) {
        relativePath = track.slice(track.indexOf(this.directory), track.length);
      }
      fs.appendFile(this.playlistFile, relativePath + "\n", (function(_this) {
        return function(err) {
          if (err) {
            throw err;
          }
        };
      })(this));
      return typeof callback === "function" ? callback() : void 0;
    };

    return Playlist;

  })(EventEmitter);

  module.exports = Playlist;

}).call(this);

//# sourceMappingURL=playlist.js.map
