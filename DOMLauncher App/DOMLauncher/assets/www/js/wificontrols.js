/**
 * 
 * Phonegap share plugin for Android
 * Kevin Schaul 2011
 *
 */

var Wificontrols = function() {};
            
Wificontrols.prototype.show = function(content, success, fail) {
    return cordova.exec( function(args) {
        success(args);
    }, function(args) {
        fail(args);
    }, 'Wificontrols', '', [content]);
};

if(!window.plugins) {
    window.plugins = {};
}
if (!window.plugins.wificontrols) {
    window.plugins.wificontrols = new Wificontrols();
}
