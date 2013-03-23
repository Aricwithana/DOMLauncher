document.getElementById("close_appPanel").addEventListener("click", hs_appPanel, false);
document.getElementById("appPanel_Show").addEventListener("click", hs_appPanel, false);

function hs_appPanel(){
	if(document.getElementById('appPanel').classList.contains('visible') === true){
		document.getElementById('appPanel').className = "";
		setTimeout(function(){document.getElementById('appPanel').style.display = "none";}, 500);
	}else{
		document.getElementById('appPanel').style.display = "block";
		setTimeout(function(){document.getElementById('appPanel').className = "visible";}, 10);
	}
}

document.getElementById("refresh_appPanel").addEventListener("click", refresh_appPanel, false);

function refresh_appPanel(){
	window.plugins.apps.generatelist();
	window.plugins.apps.generateicons();	
}








function testing(){
window.test.startActivity({}, 

function(returnVal) { //Success Function
	alert('Test ok' + returnVal);
	},
function(error) {// Failure function
	alert('Test no' + error);
}); 
}
	
	
	
	
(function(cordova){
    var Test = function() {};

    Test.prototype.startActivity = function(params, success, fail) {
        return cordova.exec(function(args) {
            success(args);
        }, function(args) {
            fail(args);
        }, 'Test', '', [params]);
    };


    cordova.addConstructor(function() {
        window.test = new Test();
    });
	        
        // backwards compatibility
       // window.plugins = window.plugins || {};
        //window.plugins.test = window.test;	
})(window.PhoneGap || window.Cordova || window.cordova);




		
