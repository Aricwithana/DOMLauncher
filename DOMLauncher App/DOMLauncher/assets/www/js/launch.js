/**
 * 
 * Phonegap share plugin for Android
 * Kevin Schaul 2011
 *
 */

var Launch = function() {};
            
Launch.prototype.show = function(content, success, fail) {
    return cordova.exec( function(args) {
        success(args);
    }, function(args) {
        fail(args);
    }, 'Launch', '', [content]);
};

if(!window.plugins) {
    window.plugins = {};
}
if (!window.plugins.launch) {
    window.plugins.launch = new Launch();
}
