/**
 * 
 * Phonegap share plugin for Android
 * Kevin Schaul 2011
 *
 */

var Wifitoggler = function() {};
            
Wifitoggler.prototype.show = function(content, success, fail) {
    return cordova.exec( function(args) {
        success(args);
    }, function(args) {
        fail(args);
    }, 'Wifitoggler', '', [content]);
};

if(!window.plugins) {
    window.plugins = {};
}
if (!window.plugins.wifitoggler) {
    window.plugins.wifitoggler = new Wifitoggler();
}
