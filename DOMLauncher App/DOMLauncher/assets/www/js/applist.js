/**
 * 
 * Phonegap share plugin for Android
 * Kevin Schaul 2011
 *
 */

var Applist = function() {};
            
Applist.prototype.show = function(content, success, fail) {
    return cordova.exec( function(args) {
        success(args);
    }, function(args) {
        fail(args);
    }, 'Applist', '', [content]);
};

if(!window.plugins) {
    window.plugins = {};
}
if (!window.plugins.applist) {
    window.plugins.applist = new Applist();
}
// JavaScript Document