/*Document Ready*/
document.addEventListener("deviceready", themeLoaded, false);

/*Document Ready Success Function*/
function themeLoaded(){

}
/*End Document Ready*/


var domCallbacks = {
	//Back Button Logic
	backButton: function(){
		
	},
	
	//Full Screen Controls
	fullscreenCheck: function(returnVal){
		/*Begin Theme Specific Editible Code*/

		/*End Theme Specific Editible Code*/
	},
	ringerUp: function(returnVal){
		/*Begin Theme Specific Editible Code*/
	
		/*End Theme Specific Editible Code*/
	},
	ringerDown: function(returnVal){
		/*Begin Theme Specific Editible Code*/
	
		/*End Theme Specific Editible Code*/
	},
	ringerPercentage: function(returnVal){
		/*Begin Theme Specific Editible Code*/

		/*End Theme Specific Editible Code*/
	},
	ringerSilent: function(){
		/*Begin Theme Specific Editible Code*/

		/*End Theme Specific Editible Code*/
	},
	ringerVibrate: function(){
		/*Begin Theme Specific Editible Code*/

		/*End Theme Specific Editible Code*/
	},
	ringerNormal: function(returnVal){
		/*Begin Theme Specific Editible Code*/

		/*End Theme Specific Editible Code*/
	},
	mediaUp: function(returnVal){
		/*Begin Theme Specific Editible Code*/

		/*End Theme Specific Editible Code*/
	},
	mediaDown: function(returnVal){
		/*Begin Theme Specific Editible Code*/

		/*End Theme Specific Editible Code*/
	},
	mediaPercentage: function(returnVal){
		/*Begin Theme Specific Editible Code*/

		/*End Theme Specific Editible Code*/
	},
	mediaMute: function(){
		/*Begin Theme Specific Editible Code*/

		/*End Theme Specific Editible Code*/
	},
	mediaCheck: function(returnVal){
		/*Begin Theme Specific Editible Code*/

		/*End Theme Specific Editible Code*/
	},
	ringerCheck: function(returnVal){
		/*Begin Theme Specific Editible Code*/

		/*End Theme Specific Editible Code*/
	},
	ringermodeCheck: function(returnVal){
		/*Begin Theme Specific Editible Code*/

		/*End Theme Specific Editible Code*/
	},
	airplaneToggle: function(returnVal){
		/*Begin Theme Specific Editible Code*/

		/*End Theme Specific Editible Code*/
	},
	airplaneCheck: function(returnVal){
		/*Begin Theme Specific Editible Code*/

		/*End Theme Specific Editible Code*/
	},
	airplaneEnable: function(returnVal){
		/*Begin Theme Specific Editible Code*/

		/*End Theme Specific Editible Code*/
	},
	airplaneDisable: function(returnVal){
		/*Begin Theme Specific Editible Code*/

		/*End Theme Specific Editible Code*/
	},
	bluetoothToggle: function(returnVal){
		/*Begin Theme Specific Editible Code*/
	
		/*End Theme Specific Editible Code*/
	},
	bluetoothCheck: function(returnVal){
		/*Begin Theme Specific Editible Code*/

		/*End Theme Specific Editible Code*/
	},
	bluetoothEnable: function(returnVal){
		/*Begin Theme Specific Editible Code*/
		
		/*End Theme Specific Editible Code*/
	},
	bluetoothDisable: function(returnVal){
		/*Begin Theme Specific Editible Code*/

		/*End Theme Specific Editible Code*/
	},
	
	//Data Connection
	dataconnectionToggle: function(returnVal){
		/*Begin Theme Specific Editible Code*/
	
		/*End Theme Specific Editible Code*/
	},
	dataconnectionCheck: function(returnVal){
		/*Begin Theme Specific Editible Code*/

		/*End Theme Specific Editible Code*/
	},
	dataconnectionEnable: function(returnVal){
		/*Begin Theme Specific Editible Code*/

		/*End Theme Specific Editible Code*/
	},
	dataconnectionDisable: function(returnVal){
		/*Begin Theme Specific Editible Code*/

		/*End Theme Specific Editible Code*/
	},
	cellularsignalEnable: function(returnVal){
		/*Begin Theme Specific Editible Code*/

		/*End Theme Specific Editible Code*/
	},
	cellularsignalDisable: function(returnVal){
		/*Begin Theme Specific Editible Code*/

		/*End Theme Specific Editible Code*/
	},
	
	//Wifi Controls
	wificontrolsToggle: function(returnVal){
		/*Begin Theme Specific Editible Code*/

		/*End Theme Specific Editible Code*/
	},
	wificontrolsCheck: function(returnVal){
		/*Begin Theme Specific Editible Code*/

		/*End Theme Specific Editible Code*/
	},
	wificontrolsEnable: function(returnVal){
		/*Begin Theme Specific Editible Code*/

		/*End Theme Specific Editible Code*/
	},
	wificontrolsDisable: function(returnVal){
		/*Begin Theme Specific Editible Code*/

		/*End Theme Specific Editible Code*/
	},
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
	},
	
	//Missed Calls/SMS
	missedSMS: function(returnVal){
		/*Begin Theme Specific Editible Code*/

		/*End Theme Specific Editible Code*/
	},
	missedCalls: function(returnVal){
		/*Begin Theme Specific Editible Code*/

		/*End Theme Specific Editible Code*/
	},

	//Screen Brightness
	brightnessvalueCheck: function(returnVal){
		/*Begin Theme Specific Editible Code*/

		/*End Theme Specific Editible Code*/
	},
	brightnessmodeCheck: function(returnVal){
		/*Begin Theme Specific Editible Code*/

		/*End Theme Specific Editible Code*/
	},
	brightnessautoEnable: function(returnVal){
		/*Begin Theme Specific Editible Code*/
		
		/*End Theme Specific Editible Code*/
	},
	brightnessautoDisable: function(returnVal){
		/*Begin Theme Specific Editible Code*/
		
		/*End Theme Specific Editible Code*/
	},
	brightnessautoToggle: function(returnVal){
		/*Begin Theme Specific Editible Code*/
		
		/*End Theme Specific Editible Code*/
	},
	brightnessValue: function(returnVal){
		/*Begin Theme Specific Editible Code*/

		/*End Theme Specific Editible Code*/
	},
	
	//File Access
	simplefileOpen: function(returnVal){
		/*Begin Theme Specific Editible Code*/

		/*End Theme Specific Editible Code*/
	},
	
	//Create App Icons and List
	generateappList: function(returnVal){
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
	},
	generateappIcons: function(){
		/*Begin Theme Specific Editible Code*/

		/*End Theme Specific Editible Code*/
	},
	
	//Battery Information
	battery: function(info){
		/*Begin Theme Specific Editible Code*/
			if(info.isPlugged !== false){
			}else{
			}
		/*End Theme Specific Editible Code*/
	},
	
	//DOMLauncher Settings
	domodList: function(returnVal){
		/*Begin Theme Specific Editible Code*/

		/*End Theme Specific Editible Code*/
	}
}





/*Handle the pause event*/
function onPause() {

}

	
	
	
/*Handle the resume event*/
function onResume() {

}
