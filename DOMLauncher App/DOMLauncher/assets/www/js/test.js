var Test = function() {};
            
Test.prototype.show = function(content, success, fail) {
    return cordova.exec( function(args) {
        success(args);
    }, function(args) {
        fail(args);
    }, 'Test', '', [content]);
};

if(!window.plugins) {
    window.plugins = {};
}
if (!window.plugins.test) {
    window.plugins.test = new Test();
}
