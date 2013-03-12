/*Document Ready*/
document.addEventListener("deviceready", themeLoaded, false);


/*Document Ready Success Function*/
function themeLoaded(){

	window.addEventListener("batterystatus", domCallbacks.battery, false);

}
/*End Document Ready*/



window.domCallbacks = {
	//Backbutton Override
	backButton: function(){
		
	},
	
	//Full Screen Controls
	fullscreenCheck: function(returnVal){
		/*Begin Theme Specific Editible Code*/
		/*End Theme Specific Editible Code*/
	},
	fullscreenToggle: function(returnVal){
		/*Begin Theme Specific Editible Code*/
		/*End Theme Specific Editible Code*/
	},
	//Volume Controls
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
	missedSMS: function(returnVal){
		/*Begin Theme Specific Editible Code*/
	},
	missedCalls: function(returnVal){
		/*Begin Theme Specific Editible Code*/
		/*End Theme Specific Editible Code*/
	},
	wifiSignal: function(returnVal){
		maxStrength = -50; 
		minStrength = -120; 
		percentage = Math.round(100 - Math.max(0, Math.min((returnVal - maxStrength) / (minStrength - maxStrength), 1) * 100));	
	
		/*Begin Theme Specific Editible Code*/
		/*End Theme Specific Editible Code*/
	},
	cellularSignal: function(returnVal){
		maxStrength = -70; 
		minStrength = -100; 
		percentage = Math.round(100 - Math.max(0, Math.min((returnVal - maxStrength) / (minStrength - maxStrength), 1) * 100));
	
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
	
	//Create App Icons and List
	generateappList: function(returnVal){
		/*Begin Theme Specific Editible Code*/
		/*End Theme Specific Editible Code*/
	},
	generateappIcons: function(){
		/*Begin Theme Specific Editible Code*/
		/*End Theme Specific Editible Code*/
	},
	battery: function(info){
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
