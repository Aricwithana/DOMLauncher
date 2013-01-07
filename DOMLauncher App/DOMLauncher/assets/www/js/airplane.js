/**
 * 
 * Phonegap share plugin for Android
 * Kevin Schaul 2011
 *
 */

var Airplane = function() {};
            
Airplane.prototype.show = function(content, success, fail) {
    return cordova.exec( function(args) {
        success(args);
    }, function(args) {
        fail(args);
    }, 'Airplane', '', [content]);
};

if(!window.plugins) {
    window.plugins = {};
}
if (!window.plugins.airplane) {
    window.plugins.airplane = new Airplane();
}
