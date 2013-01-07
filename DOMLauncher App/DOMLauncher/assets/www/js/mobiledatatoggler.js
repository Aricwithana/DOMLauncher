/**
 * 
 * Phonegap share plugin for Android
 * Kevin Schaul 2011
 *
 */

var Mobiledatatoggler = function() {};
            
Mobiledatatoggler.prototype.show = function(content, success, fail) {
    return cordova.exec( function(args) {
        success(args);
    }, function(args) {
        fail(args);
    }, 'Mobiledatatoggler', '', [content]);
};

if(!window.plugins) {
    window.plugins = {};
}
if (!window.plugins.mobiledatatoggler) {
    window.plugins.mobiledatatoggler = new Mobiledatatoggler();
}
