/*Document Ready*/

//Global Timer Variables
var mainSwiper = null;
var clockTimer = null;
var missedcallsTimer = null;
var missedsmsTimer = null;

//$(document).ready(function(){domodLoaded();});
document.addEventListener("deviceready", domodLoaded, false);

/*Document Ready Success Function*/
function domodLoaded(){
	//Create Main Screen Slider
	mainSwiper = new Swiper('.swiper-container ',{
		pagination: '.pagination',
	});
	
	//Enable Listeners
	window.addEventListener("batterystatus", suc_battery, false);
	document.addEventListener("pause", onPause, false);
	document.addEventListener("resume", onResume, false);
	
	//Check if app icons/css have been generated.
	iconCheck();
	
	//Start/Check API Calls	
	window.plugins.ringer.modecheck(suc_ringermodeCheck);
	window.plugins.bluetooth.check(suc_bluetoothCheck);
	window.plugins.data.check(suc_dataconnectionCheck);
	window.plugins.wifi.check(suc_wificontrolsCheck);
	window.plugins.power.check(suc_powerlevelCheck);
	window.plugins.cellsignal.enable();
	window.plugins.brightness.valuecheck(suc_brightnessvalueCheck);
	window.plugins.brightness.modecheck(suc_brightnessmodeCheck);
	window.plugins.fullscreen.check(suc_fullscreenCheck);
	window.plugins.apps.generatelist(suc_generateappList);
	window.plugins.screenorient.check(suc_orientationCheck);
	//Timers
	var clockTimer = setInterval(clock, 1000 );	
	var missedcallsTimer = setInterval(window.plugins.missed.calls(suc_missedCalls), 5000);
	var missedsmsTimer = setInterval(window.plugins.missed.sms(suc_missedSMS), 5000);
}
/*End Document Ready*/

  

/**
*	Check if Icons & CSS are Generated
*		This is an example of being able to call the plugin API directly.
*		The reason here was because access to the 'error' call of the plugin
*		was needed since it isn't provided in the provided js wrapper calls.
*/
function iconCheck(){	
	window.plugins.simplefile.openFile({file:'/mnt/sdcard/DOMLauncher/settings/icons/icons.css'}, 			
	function(returnVal){},
	function(error) {
		window.plugins.apps.generateicons();
		window.plugins.apps.generatecss();
	});	
}




//Clock
function clock() {
	var date = new Date();
	document.getElementById("sec").style.WebkitTransform = "rotate(" + (date.getSeconds() * 6) + "deg)";
	document.getElementById("hour").style.WebkitTransform = "rotate(" + (date.getHours() * 30 + (date.getMinutes() / 2)) + "deg)";
	document.getElementById("min").style.WebkitTransform = "rotate(" + (date.getMinutes() * 6) + "deg)";
	var date = null;
}

//Preset Callbacks for Backbutton, Wifi/Celluar Signal Returns. Must be Included.
var domCallbacks = {
	//Back Button
	backButton: function(){
		/*Begin Theme Specific Editible Code*/
			
		/*End Theme Specific Editible Code*/
	},
	wifiSignal: function(returnVal){
		var maxStrength = -50; 
		var minStrength = -120; 
		var percentage = Math.round(100 - Math.max(0, Math.min((returnVal - maxStrength) / (minStrength - maxStrength), 1) * 100));	
		/*Begin Theme Specific Editible Code*/
			$('#meter_wifi').css('background-color', 'rgba('+(100-percentage)+','+percentage+',0,.75)');
		/*End Theme Specific Editible Code*/
	},
	cellularSignal: function(returnVal){
		var maxStrength = -100; 
		var minStrength = -70; 
		var percentage = Math.round(100 - Math.max(0, Math.min((returnVal - maxStrength) / (minStrength - maxStrength), 1) * 100));
	
		/*Begin Theme Specific Editible Code*/
			$('#meter_cellular').css('background-color', 'rgba('+(100-percentage)+','+percentage+',0,.75)');
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
	if(returnVal === true){$('#btn_fullscreen').removeAttr('disabled').attr('enabled', '');}
	if(returnVal === false){$('#btn_fullscreen').removeAttr('enabled').attr('disabled', '');}
	/*End Theme Specific Editible Code*/
}

//Ringer Up
function suc_ringerUp(returnVal){
	/*Begin Theme Specific Editible Code*/
	if($('#btn_ringerSilent').hasAttr('enabled') || $('#btn_ringerVibrate').hasAttr('enabled')){
		$('#btn_ringerSilent, #btn_ringerVibrate').removeAttr('enabled').attr('disabled', '');
	}
	/*End Theme Specific Editible Code*/
}

//Ringer Down
function suc_ringerDown(returnVal){
	/*Begin Theme Specific Editible Code*/
	if($('#btn_ringerSilent').hasAttr('enabled') || $('#btn_ringerVibrate').hasAttr('enabled')){
		$('#btn_ringerSilent, #btn_ringerVibrate').removeAttr('enabled').attr('disabled', '');
	}
	if(returnVal <= 0){$('#btn_ringerVibrate').removeAttr('disabled').attr('enabled', '');}
	/*End Theme Specific Editible Code*/
}


//Ringer Silent
function suc_ringerSilent(){
	/*Begin Theme Specific Editible Code*/
		$('#btn_ringerSilent').removeAttr('disabled').attr('enabled', '');
		if($('#btn_ringerVibrate').hasAttr('enabled')){$('#btn_ringerVibrate').removeAttr('enabled').attr('disabled', '');}
	/*End Theme Specific Editible Code*/
}

//Ringer Vibrate
function suc_ringerVibrate(returnVal){
	/*Begin Theme Specific Editible Code*/
		$('#btn_ringerVibrate').removeAttr('disabled').attr('enabled', '');
		if($('#btn_ringerSilent').hasAttr('enabled')){$('#btn_ringerSilent').removeAttr('enabled').attr('disabled', '');}
	/*End Theme Specific Editible Code*/
}


//Check Ringer Mode
function suc_ringermodeCheck(returnVal){
	/*Begin Theme Specific Editible Code*/
	if(returnVal === 0){
		$('#btn_ringerSilent').removeAttr('disabled').attr('enabled', '');
		if($('#btn_ringerVibrate').hasAttr('enabled')){$('#btn_ringerVibrate').removeAttr('enabled').attr('disabled', '');}
	}
	if(returnVal === 1){
		$('#btn_ringerVibrate').removeAttr('disabled').attr('enabled', '');
		if($('#btn_ringerSilent').hasAttr('enabled')){$('#btn_ringerSilent').removeAttr('enabled').attr('disabled', '');}
	}
	if(returnVal === 2){
		$('#btn_ringerSilent, #btn_ringerVibrate').removeAttr('enabled').attr('disabled', '');	
	}
	/*End Theme Specific Editible Code*/
}

//Bluetooth Toggle
function suc_bluetoothToggle(returnVal){
	/*Begin Theme Specific Editible Code*/
	if(returnVal === true){$('#btn_bluetooth').removeAttr('disabled').attr('enabled', '');}
	if(returnVal === false){$('#btn_bluetooth').removeAttr('enabled').attr('disabled', '');}
	/*End Theme Specific Editible Code*/
}

//Bluetooth Check
function suc_bluetoothCheck(returnVal){
	/*Begin Theme Specific Editible Code*/
	if(returnVal === true){$('#btn_bluetooth').removeAttr('disabled').attr('enabled', '');}
	if(returnVal === false){$('#btn_bluetooth').removeAttr('enabled').attr('disabled', '');}
	/*End Theme Specific Editible Code*/
}


//Data Toggle
function suc_dataconnectionToggle(returnVal){
	/*Begin Theme Specific Editible Code*/
	if(returnVal === true){$('#btn_data').removeAttr('disabled').attr('enabled', ''); $('#btn_wifi').removeAttr('enabled').attr('disabled', ''); window.plugins.wifi.disable();}
	if(returnVal === false){$('#btn_data').removeAttr('enabled').attr('disabled', '');}
	/*End Theme Specific Editible Code*/
}

//Data Check
function suc_dataconnectionCheck(returnVal){
	/*Begin Theme Specific Editible Code*/
	if(returnVal === true){$('#btn_data').removeAttr('disabled').attr('enabled', '');}
	if(returnVal === false){$('#btn_data').removeAttr('enabled').attr('disabled', '');}
	/*End Theme Specific Editible Code*/
}



	
//Wifi Toggle
function suc_wificontrolsToggle(returnVal){
	/*Begin Theme Specific Editible Code*/
	if(returnVal === true){$('#btn_wifi').removeAttr('disabled').attr('enabled', ''); window.plugins.data.disable();$('#btn_data').removeAttr('enabled').attr('disabled', '');}
	if(returnVal === false){$('#btn_wifi').removeAttr('enabled').attr('disabled', '');}
	/*End Theme Specific Editible Code*/
}

//Wifi Check
function suc_wificontrolsCheck(returnVal){
	/*Begin Theme Specific Editible Code*/
	if(returnVal === true){$('#btn_wifi').removeAttr('disabled').attr('enabled', '');}
	if(returnVal === false){$('#btn_wifi').removeAttr('enabled').attr('disabled', '');}
	/*End Theme Specific Editible Code*/
}

	
//Missed SMS
function suc_missedSMS(returnVal){
	/*Begin Theme Specific Editible Code*/
		var smsUnread = document.getElementById('txtmsg_mainScreen').dataset.missed;
		if(smsUnread >= 0 && returnVal >0 || smsUnread > 0 && returnVal === 0  ){
			document.getElementById('txtmsg_mainScreen').dataset.missed =  returnVal;
		}		
	/*End Theme Specific Editible Code*/
}

//Missed Calls
function suc_missedCalls(returnVal){
	/*Begin Theme Specific Editible Code*/
		var smsUnread = document.getElementById('txtmsg_mainScreen').dataset.missed;
		if(smsUnread >= 0 && returnVal >0 || smsUnread > 0 && returnVal === 0  ){
			document.getElementById('dialer_mainScreen').dataset.missed =  returnVal;
		}		
	/*End Theme Specific Editible Code*/
}


//Brightness Mode Check
function suc_brightnessmodeCheck(returnVal){
	/*Begin Theme Specific Editible Code*/
	if(returnVal === 1){$('#btn_brightAuto').removeAttr('disabled').attr('enabled', '');}
	if(returnVal === 0){$('#btn_brightAuto').removeAttr('enabled').attr('disabled', '');}
	/*End Theme Specific Editible Code*/
}


//Brightness Toggle
function suc_brightnessautoToggle(returnVal){
	/*Begin Theme Specific Editible Code*/
	if(returnVal === true){$('#btn_brightAuto').removeAttr('disabled').attr('enabled', '');}
	if(returnVal === false){$('#btn_brightAuto').removeAttr('enabled').attr('disabled', '');}
	/*End Theme Specific Editible Code*/
}

//Brightness Value Check
function suc_brightnessvalueCheck(returnVal){
	/*Begin Theme Specific Editible Code*/
		var value = Math.round((returnVal/255)*10)
		$('#btn_brightUp, #btn_brightDown').attr('data-bright', value)	
	/*End Theme Specific Editible Code*/
}

//Create App Panel Content
function suc_generateappList(returnVal){
	/*Begin Theme Specific Editible Code*/
		
		var appListArray = JSON.parse(returnVal); 
		appPanel = $('#appPanel_Content'); 
		$(appPanel).empty(); 
		$(appPanel).append('<a href="tel:" class="app dialer" data-appName="Dialer"></a>');
	
		$(appListArray).each(function(){
			var appName = this.name; 
			var appPackage = this.package; 
			var appActivity = this.activity;
		
			var newdiv = $('<div>')
			$(newdiv).attr('data-appPackage', appPackage).attr('data-appActivity', appActivity).attr('data-appName', appName).addClass('app');
			$(appPanel).append(newdiv);
		});
		$('#appPanel_Content > *').tsort({attr:'data-appName'});

	/*End Theme Specific Editible Code*/
}

//Battery Event Listener
function suc_battery(info){
	/*Begin Theme Specific Editible Code*/
		if(info.isPlugged !== false){
			$('#meter_battery').css('background-color', 'rgba('+(100-info.level)+','+info.level+',0,.75)');
		}else{
			$('#meter_battery').css('background-color', 'rgba('+(100-info.level)+','+info.level+',0,.75)');
		}
	/*End Theme Specific Editible Code*/
}

//Current Battery Level.	
function suc_powerlevelCheck(returnVal){
	$('#meter_battery').css('background-color', 'rgba('+(100-returnVal)+','+returnVal+',0,.75)');
}
	
//Current Battery Level.	
function suc_orientationCheck(returnVal){
	if(returnVal === "portrait"){$('#btn_portrait').removeAttr('disabled').attr('enabled', '');}
	if(returnVal === "landscape"){$('#btn_landscape').removeAttr('disabled').attr('enabled', '');}
	if(returnVal === "rotate"){$('#btn_rotate').removeAttr('disabled').attr('enabled', '');}
}

//Weather Call Example
(function() {
  var httpRequest;
  document.getElementById("btn_weather").onclick = function() { 
		window.plugins.simplefile.openFile({file:'/mnt/sdcard/DOMLauncher/settings/config.txt'}, 			
			function(returnVal){
				var returnArray = JSON.parse(returnVal.returnVal);
				var city = returnArray.city; 
		
				makeRequest('http://api.openweathermap.org/data/2.5/weather?q='+city+'&units=imperial&APPID=7687bs878b9nqcn87cs78098q222788y'); 
			 
				function makeRequest(url) {
					httpRequest = new XMLHttpRequest();
					if (!httpRequest) {
					  alert('Giving up :( Probably no internet access');
					  return false;
					}
					httpRequest.onreadystatechange = alertContents;
					httpRequest.open('GET', url);
					httpRequest.send();
				}
			 
				function alertContents() {
					if (httpRequest.readyState === 4) {
						if (httpRequest.status === 200) {
							var weatherArray = JSON.parse(httpRequest.responseText);
							var weatherWrapper = document.getElementById('btn_weather');
							var temp = weatherArray.main.temp ;
							weatherWrapper.dataset.temp = Math.round(temp, 1)+"°F";
						} else {
							alert('Weather Request Error-Probably No Internet Access');
						}
					}
				}
			},
			function(error) {alert('DOMLSettings Change Acive DOMod Error ' + error);}); 	
		};
})();





//Custom extended jQuery to check if an object has a specific attribute.
$.fn.hasAttr = function(arg){
	return $(this)[0].hasAttribute(arg);				
}



/*Handle the pause event*/
function onPause() {
	clearInterval(clockTimer);
	clearInterval(missedcallsTimer);
	clearInterval(missedsmsTimer);
}

	
	
	
/*Handle the resume event*/
function onResume() {
	var clockTimer = setInterval(clock, 1000);
	var missedcallsTimer = setInterval(window.plugins.missed.calls(), 5000);
	var missedsmsTimer = setInterval(window.plugins.missed.sms(), 5000);
	
	window.plugins.brightness.valuecheck(suc_brightnessvalueCheck);
	window.plugins.wifi.check();
	window.plugins.data.check();
	window.plugins.fullscreen.check();
	window.plugins.ringer.modecheck();
	window.plugins.bluetooth.check();
	window.plugins.brightness.modecheck();
	window.plugins.power.check(suc_powerlevelCheck);
}
