/*Document Ready*/
document.addEventListener("deviceready", domodLoaded, false);

/*Document Ready Success Function*/
function domodLoaded(){
	window.addEventListener("batterystatus", suc_battery, false);
	document.addEventListener("pause", onPause, false);
	document.addEventListener("resume", onResume, false);
}
/*End Document Ready*/


//Back Button Event
var backButton = function(){}


//Preset Callbacks for Wifi/Celluar Signal Returns - Will be updated for custom callbacks.
var domCallbacks = {
	wifiSignal: function(returnVal){
		var maxStrength = -50; 
		var minStrength = -120; 
		var percentage = Math.round(100 - Math.max(0, Math.min((returnVal - maxStrength) / (minStrength - maxStrength), 1) * 100));	
	
		/*Begin Theme Specific Editible Code*/

		/*End Theme Specific Editible Code*/
	},
	cellularSignal: function(returnVal){
		var maxStrength = -100; 
		var minStrength = -70; 
		var percentage = Math.round(100 - Math.max(0, Math.min((returnVal - maxStrength) / (minStrength - maxStrength), 1) * 100));
	
		/*Begin Theme Specific Editible Code*/

		/*End Theme Specific Editible Code*/		
	}	
}



/**
*	Plugin Success Callbacks.
*		Not all of these calls are used in this DOMod.  They are only here
*		for quick reference.  Each API call has success call feature.
**/

//Full Screen Controls
function suc_fullscreenCheck(returnVal){
	/*Begin Theme Specific Editible Code*/

	/*End Theme Specific Editible Code*/
}

//Full Screen Controls
function suc_ringerUp(returnVal){
	/*Begin Theme Specific Editible Code*/

	/*End Theme Specific Editible Code*/
}

//Ringer Down
function suc_ringerDown(returnVal){
	/*Begin Theme Specific Editible Code*/

	/*End Theme Specific Editible Code*/
}

//Set Ringer by Percentage
function suc_ringerPercentage(returnVal){
	/*Begin Theme Specific Editible Code*/

	/*End Theme Specific Editible Code*/
}

//Ringer Silent
function suc_ringerSilent(){
	/*Begin Theme Specific Editible Code*/

	/*End Theme Specific Editible Code*/
}

//Full Screen Controls
function suc_ringerVibrate(){
	/*Begin Theme Specific Editible Code*/

	/*End Theme Specific Editible Code*/
}

//Full Screen Controls
function suc_ringerNormal(returnVal){
	/*Begin Theme Specific Editible Code*/

	/*End Theme Specific Editible Code*/
}

//Full Screen Controls
function suc_mediaUp(returnVal){
	/*Begin Theme Specific Editible Code*/

	/*End Theme Specific Editible Code*/
}

//Full Screen Controls
function suc_mediaDown(returnVal){
	/*Begin Theme Specific Editible Code*/

	/*End Theme Specific Editible Code*/
}

//Full Screen Controls
function suc_mediaPercentage(returnVal){
	/*Begin Theme Specific Editible Code*/

	/*End Theme Specific Editible Code*/
}

//Full Screen Controls
function suc_mediaCheck(returnVal){
	/*Begin Theme Specific Editible Code*/

	/*End Theme Specific Editible Code*/
}

//Full Screen Controls
function suc_ringerCheck(returnVal){
	/*Begin Theme Specific Editible Code*/

	/*End Theme Specific Editible Code*/
}

//Full Screen Controls
function suc_ringermodeCheck(returnVal){
	/*Begin Theme Specific Editible Code*/
	
	/*End Theme Specific Editible Code*/
}

//Full Screen Controls
function suc_airplaneToggle(returnVal){
	/*Begin Theme Specific Editible Code*/

	/*End Theme Specific Editible Code*/
}

//Full Screen Controls
function suc_airplaneCheck(returnVal){
	/*Begin Theme Specific Editible Code*/

	/*End Theme Specific Editible Code*/
}

//Full Screen Controls
function suc_airplaneEnable(returnVal){
	/*Begin Theme Specific Editible Code*/

	/*End Theme Specific Editible Code*/
}

//Full Screen Controls
function suc_airplaneDisable(returnVal){
	/*Begin Theme Specific Editible Code*/

	/*End Theme Specific Editible Code*/
}

//Full Screen Controls
function suc_bluetoothToggle(returnVal){
	/*Begin Theme Specific Editible Code*/

	/*End Theme Specific Editible Code*/
}

//Full Screen Controls
function suc_bluetoothCheck(returnVal){
	/*Begin Theme Specific Editible Code*/

	/*End Theme Specific Editible Code*/
}

//Full Screen Controls
function suc_bluetoothEnable(returnVal){
	/*Begin Theme Specific Editible Code*/
	
	/*End Theme Specific Editible Code*/
}

//Full Screen Controls
function suc_bluetoothDisable(returnVal){
	/*Begin Theme Specific Editible Code*/

	/*End Theme Specific Editible Code*/
}

//Data Connection
function suc_dataconnectionToggle(returnVal){
	/*Begin Theme Specific Editible Code*/

	/*End Theme Specific Editible Code*/
}

//Full Screen Controls
function suc_dataconnectionCheck(returnVal){
	/*Begin Theme Specific Editible Code*/

	/*End Theme Specific Editible Code*/
}

//Full Screen Controls
function suc_dataconnectionEnable(returnVal){
	/*Begin Theme Specific Editible Code*/

	/*End Theme Specific Editible Code*/
}

//Full Screen Controls
function suc_dataconnectionDisable(returnVal){
	/*Begin Theme Specific Editible Code*/

	/*End Theme Specific Editible Code*/
}

//Full Screen Controls
function suc_cellularsignalEnable(returnVal){
	/*Begin Theme Specific Editible Code*/

	/*End Theme Specific Editible Code*/
}

//Full Screen Controls
function suc_cellularsignalDisable(returnVal){
	/*Begin Theme Specific Editible Code*/

	/*End Theme Specific Editible Code*/
}
	
//Wifi Controls
function suc_wificontrolsToggle(returnVal){
	/*Begin Theme Specific Editible Code*/

	/*End Theme Specific Editible Code*/
}

//Full Screen Controls
function suc_wificontrolsCheck(returnVal){
	/*Begin Theme Specific Editible Code*/

	/*End Theme Specific Editible Code*/
}

//Full Screen Controls
function suc_wificontrolsEnable(returnVal){
	/*Begin Theme Specific Editible Code*/

	/*End Theme Specific Editible Code*/
}

//Full Screen Controls
function suc_wificontrolsDisable(returnVal){
	/*Begin Theme Specific Editible Code*/

	/*End Theme Specific Editible Code*/
}

	
//Missed Calls/SMS
function suc_missedSMS(returnVal){
	/*Begin Theme Specific Editible Code*/

	/*End Theme Specific Editible Code*/
}

//Full Screen Controls
function suc_missedCalls(returnVal){
	/*Begin Theme Specific Editible Code*/

	/*End Theme Specific Editible Code*/
}

//Screen Brightness
function suc_brightnessvalueCheck(returnVal){
	/*Begin Theme Specific Editible Code*/

	/*End Theme Specific Editible Code*/
}

//Full Screen Controls
function suc_brightnessmodeCheck(returnVal){
	/*Begin Theme Specific Editible Code*/

	/*End Theme Specific Editible Code*/
}

//Full Screen Controls
function suc_brightnessautoEnable(returnVal){
	/*Begin Theme Specific Editible Code*/
	
	/*End Theme Specific Editible Code*/
}

//Full Screen Controls
function suc_brightnessautoDisable(returnVal){
	/*Begin Theme Specific Editible Code*/
	
	/*End Theme Specific Editible Code*/
}

//Full Screen Controls
function suc_brightnessautoToggle(returnVal){
	/*Begin Theme Specific Editible Code*/
	
	/*End Theme Specific Editible Code*/
}

//Full Screen Controls
function suc_brightnessValue(returnVal){
	/*Begin Theme Specific Editible Code*/

	/*End Theme Specific Editible Code*/
}
	
//File Access
function suc_simplefileOpen(returnVal){
	/*Begin Theme Specific Editible Code*/

	/*End Theme Specific Editible Code*/
}
	
//Create App Icons and List
function suc_generateappList(returnVal){
	/*Begin Theme Specific Editible Code*/
		var previous_appIntent = document.querySelectorAll('*[appPackage]');
		
		for (var i = 0; i < previous_appIntent.length; i++)
		{
			previous_appIntent[i].removeEventListener("click", function(){window.plugins.launching.app(this);}, false);
		}
		
		var appListArray = JSON.parse(returnVal); 
		var appPanel = document.getElementById('appPanel_Content'); 
		appPanel.innerHTML = ''; 
		
		var dialer = document.createElement('a');
		dialer.setAttribute('class', 'app dialer');
		dialer.setAttribute('href', 'tel:');
		dialer.setAttribute('data-appName', 'Dialer');
		appPanel.appendChild(dialer);
	
		for(var ii = 0; ii < appListArray.length; ii++) {  
			var appInfo = appListArray[ii];
			var appName = appInfo.name; 
			var appPackage = appInfo.package; 
			var appActivity = appInfo.activity;
		
			var newdiv = document.createElement('div');
			newdiv.setAttribute('class', 'app');
			newdiv.setAttribute('appPackage', appPackage);
			newdiv.setAttribute('appActivity', appActivity);
			newdiv.setAttribute('data-appName', appName);
			appPanel.appendChild(newdiv);
		}
		
		var final_appIntent = document.querySelectorAll('*[appPackage]');
		
		for (var iii = 0; iii < final_appIntent.length; iii++)
		{
			final_appIntent[iii].addEventListener("click", function(){window.plugins.launching.app(this);}, false);
		}
	/*End Theme Specific Editible Code*/
}
	
// App Icons Generation	
function suc_generateappIcons(){
	/*Begin Theme Specific Editible Code*/

	/*End Theme Specific Editible Code*/
}
	
//Battery Information
function suc_battery(info){
	/*Begin Theme Specific Editible Code*/
		if(info.isPlugged !== false){
		}else{
		}
	/*End Theme Specific Editible Code*/
}
	
//DOMLauncher Settings
function suc_domodList(returnVal){
	/*Begin Theme Specific Editible Code*/

	/*End Theme Specific Editible Code*/
}

//Full Screen Controls
function suc_generateCSS(returnVal){
	/*Begin Theme Specific Editible Code*/

	/*End Theme Specific Editible Code*/
}




/*Handle the pause event*/
function onPause() {

}

	
	
	
/*Handle the resume event*/
function onResume() {

}
