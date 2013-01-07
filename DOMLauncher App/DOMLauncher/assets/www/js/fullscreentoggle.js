/**
 * 
 * Phonegap share plugin for Android
 * Kevin Schaul 2011
 *
 */

var Fullscreentoggle = function() {};
            
Fullscreentoggle.prototype.show = function(content, success, fail) {
    return cordova.exec( function(args) {
        success(args);
    }, function(args) {
        fail(args);
    }, 'Fullscreentoggle', '', [content]);
};

if(!window.plugins) {
    window.plugins = {};
}
if (!window.plugins.fullscreentoggle) {
    window.plugins.fullscreentoggle = new Fullscreentoggle();
}
