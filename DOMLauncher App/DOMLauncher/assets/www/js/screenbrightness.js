/**
 * 
 * Phonegap share plugin for Android
 * Kevin Schaul 2011
 *
 */

var Screenbrightness = function() {};
            
Screenbrightness.prototype.show = function(content, success, fail) {
    return cordova.exec( function(args) {
        success(args);
    }, function(args) {
        fail(args);
    }, 'Screenbrightness', '', [content]);
};

if(!window.plugins) {
    window.plugins = {};
}
if (!window.plugins.screenbrightness) {
    window.plugins.screenbrightness = new Screenbrightness();
}
