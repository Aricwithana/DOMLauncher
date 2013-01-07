/**
 * 
 * Phonegap share plugin for Android
 * Kevin Schaul 2011
 *
 */

var Volumecontrols = function() {};
            
Volumecontrols.prototype.show = function(content, success, fail) {
    return cordova.exec( function(args) {
        success(args);
    }, function(args) {
        fail(args);
    }, 'Volumecontrols', '', [content]);
};

if(!window.plugins) {
    window.plugins = {};
}
if (!window.plugins.volumecontrols) {
    window.plugins.volumecontrols = new Volumecontrols();
}
