// JavaScript Document

/**
 * 
 * Phonegap share plugin for Android
 * Kevin Schaul 2011
 *
 */

var Simplesave = function() {};
            
Simplesave.prototype.show = function(content, success, fail) {
    return cordova.exec( function(args) {
        success(args);
    }, function(args) {
        fail(args);
    }, 'Simplesave', '', [content]);
};

if(!window.plugins) {
    window.plugins = {};
}
if (!window.plugins.simplesave) {
    window.plugins.simplesave = new Simplesave();
}
