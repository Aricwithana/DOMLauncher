/**
 * 
 * Phonegap share plugin for Android
 * Kevin Schaul 2011
 *
 */

var Cellularsignalgetter = function() {};
            
Cellularsignalgetter.prototype.show = function(content, success, fail) {
    return cordova.exec( function(args) {
        success(args);
    }, function(args) {
        fail(args);
    }, 'Cellularsignalgetter', '', [content]);
};

if(!window.plugins) {
    window.plugins = {};
}
if (!window.plugins.cellularsignalgetter) {
    window.plugins.cellularsignalgetter = new Cellularsignalgetter();
}
