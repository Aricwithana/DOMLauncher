/**
 * 
 * Phonegap share plugin for Android
 * Kevin Schaul 2011
 *
 */

var Missedcommunications = function() {};
            
Missedcommunications.prototype.show = function(content, success, fail) {
    return cordova.exec( function(args) {
        success(args);
    }, function(args) {
        fail(args);
    }, 'Missedcommunications', '', [content]);
};

if(!window.plugins) {
    window.plugins = {};
}
if (!window.plugins.missedcommunications) {
    window.plugins.missedcommunications = new Missedcommunications();
}
