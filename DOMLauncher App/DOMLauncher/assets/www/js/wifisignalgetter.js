/**
 * 
 * Phonegap share plugin for Android
 * Kevin Schaul 2011
 *
 */

var Wifisignalgetter = function() {};
            
Wifisignalgetter.prototype.show = function(content, success, fail) {
    return cordova.exec( function(args) {
        success(args);
    }, function(args) {
        fail(args);
    }, 'Wifisignalgetter', '', [content]);
};

if(!window.plugins) {
    window.plugins = {};
}
if (!window.plugins.wifisignalgetter) {
    window.plugins.wifisignalgetter = new Wifisignalgetter();
}
