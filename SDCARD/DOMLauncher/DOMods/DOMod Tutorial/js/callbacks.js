/*Document Ready*/
document.addEventListener("deviceready", themeLoaded, false);

//setInterval Timer Variable Names
var clockTimer = null;
var missedcallsTimer = null;
var missedsmsTimer = null;

/*Document Ready Success Function*/
function themeLoaded(){
	scrollSwitch();
	
	window.addEventListener("batterystatus", domCallbacks.battery, false);
	document.addEventListener("pause", onPause, false);
	document.addEventListener("resume", onResume, false);
	
	window.plugins.wifi.check();
	window.plugins.fullscreen.check();
	window.plugins.airplanemode.check();
	window.plugins.ringer.check("percentage");
	window.plugins.media.check("percentage");
	window.plugins.ringer.modecheck();
	window.plugins.bluetooth.check();
	window.plugins.cellsignal.enable();
	window.plugins.brightness.valuecheck();
	window.plugins.brightness.modecheck();
	window.plugins.apps.generatelist();

	var clockTimer = setInterval(clock, 1000 );	
	var missedcallsTimer = setInterval(window.plugins.missed.calls(), 5000);
	var missedsmsTimer = setInterval(window.plugins.missed.sms, 5000);
}
/*End Document Ready*/

function checkInfo(){
	//var script=document.createElement('script');
	//script.src='http://mir.aculo.us/dom-monster/dommonster.js?'+Math.floor((+new Date)/(864e5));
	//document.body.appendChild(script);
	alert(Object.keys( window ));
		//window.plugins.save.file(Object.keys( window ), "/mnt/sdcard/DOMLauncher/global.txt");
}

/*Clock CSS*/
function clock() {
	var date = new Date();
 
	document.getElementById("sec").style.WebkitTransform = "rotate(" + (date.getSeconds() * 6) + "deg)";
	document.getElementById("hour").style.WebkitTransform = "rotate(" + (date.getHours() * 30 + (date.getMinutes() / 2)) + "deg)";
	document.getElementById("min").style.WebkitTransform = "rotate(" + (date.getMinutes() * 6) + "deg)";

	var date = null;
}

/*Slider Switches Widget Plugin*/
function scrollSwitch(){

	var switches = document.getElementsByClassName('scrollSwitch');
	
	for (var i = 0; i < switches.length; i++)
	{
		choosenElement = switches[i];
		choosenElement.scrollLeft = 100;
		choosenElement.ontouchstart = function(e)
		{			
			this.style.overflow = "auto";
			switchStart = this.dataset.state;
			scrollTotal = this.scrollWidth;
			this.onscroll = function(e)
			{			 
				var position = this.scrollLeft;
				if(position <= 49 ){this.dataset.state = "on";}
				if(position >= 50){this.dataset.state = "off";}  
			}		
						
			this.ontouchend = function(e)
			{
				var element = this;
				var switchID = element.id;
			
				setTimeout(function()
				{
					var switchState = element.dataset.state;
					if(switchState === "on"){element.style.overflow = "hidden"; element.scrollLeft = "0"; if(switchState !== switchStart){switchCallback("on", switchID);}}
					if(switchState === "off"){ element.style.overflow = "hidden";element.scrollLeft = "100"; if(switchState !== switchStart){switchCallback("off", switchID);} }	  	
				}, 300);
			}
		}
	}	
}



/*Switch Widget Callback*/
function switchCallback(state, switchID){

	/*Begin Theme Specific Editible Code*/
		
		//Toggle FullScreen 
		if(switchID === "toggle_fullScreen"){ 
			window.plugins.fullscreen.toggle();
		}
		
		//Toggle Wifi
		if(switchID === "toggle_wifi" && state === "on"){
			window.plugins.wifi.enable();
		}
		if(switchID === "toggle_wifi" && state === "off"){
			window.plugins.wifi.disable();
		}
		
		//Toggle Data 
		if(switchID === "toggle_data" && state === "off"){
			window.plugins.data.disable();
		}
		if(switchID === "toggle_data" && state === "on"){
			window.plugins.data.enable();
		}
		
		//Toggle Airplane
		if(switchID === "toggle_Airplane" && state === "off"){
			window.plugins.airplanemode.disable();
		}
		if(switchID === "toggle_Airplane" && state === "on"){
			window.plugins.airplanemode.enable();
		}
		
		//Toggle AutoBrightness 
		if(switchID === "toggle_autoBrightness" && state === "off"){
			window.plugins.brightness.autodisable();
		}
		if(switchID === "toggle_autoBrightness" && state === "on"){
			window.plugins.brightness.autoenable();
		}		
		
		//Toggle Ringer Silent
		if(switchID === "toggle_ringerSilent" && state === "off"){
			window.plugins.ringer.normal("percentage");
		}
		if(switchID === "toggle_ringerSilent" && state === "on"){
			window.plugins.ringer.silent();
		}	
		
		//Toggle Ringer Vibrate
		if(switchID === "toggle_ringerVibrate" && state === "off"){
			window.plugins.ringer.normal("percentage");
		}
		if(switchID === "toggle_ringerVibrate" && state === "on"){
			window.plugins.ringer.vibrate();
		}	
		
		//Toggle Bluetooth
		if(switchID === "switch_bluetooth" && state === "off"){
			window.plugins.bluetooth.disable();
		}
		if(switchID === "switch_bluetooth" && state === "on"){
			window.plugins.bluetooth.enable();
		}	
	/*End Theme Specific Editible Code*/
}	

	

var domCallbacks = {
	backButton: function(){
		
	},
	
	//Full Screen Controls
	fullscreenCheck: function(returnVal){
		/*Begin Theme Specific Editible Code*/
			if(returnVal === false){
				document.getElementById('toggle_fullScreen').scrollLeft = 100;
				document.getElementById('toggle_fullScreen').dataset.state = "off";
			}
			
			if(returnVal === true){
				document.getElementById('toggle_fullScreen').scrollLeft = 0;
				document.getElementById('toggle_fullScreen').dataset.state = "on";
			}
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
			document.getElementById('slider_ringerVol').parentNode.childNodes[1].innerHTML = 'Ringer Volume: ' + returnVal + "%";
			if(returnVal <= 14 && returnVal !== 0 && document.getElementById('toggle_ringerVibrate').dataset.state === "off" || returnVal >= 15 && returnVal !== 0 && document.getElementById('toggle_ringerSilent').dataset.state === "on"){
				document.getElementById('toggle_ringerVibrate').scrollLeft = 0;
				document.getElementById('toggle_ringerVibrate').dataset.state = "on";
				document.getElementById('toggle_ringerSilent').scrollLeft = 100;
				document.getElementById('toggle_ringerSilent').dataset.state = "off";
			}
			
			if(returnVal >= 15 && returnVal !== 0 && document.getElementById('toggle_ringerVibrate').dataset.state === "on" || returnVal >= 15 && returnVal !== 0 && document.getElementById('toggle_ringerSilent').dataset.state === "on"){
				document.getElementById('toggle_ringerVibrate').scrollLeft = 100;
				document.getElementById('toggle_ringerVibrate').dataset.state = "off";
				document.getElementById('toggle_ringerSilent').scrollLeft = 100;
				document.getElementById('toggle_ringerSilent').dataset.state = "off";
			}
			
			if(returnVal === 0 && document.getElementById('toggle_ringerVibrate').dataset.state === "off"){
				document.getElementById('toggle_ringerVibrate').scrollLeft = 0;
				document.getElementById('toggle_ringerVibrate').dataset.state = "on";
				document.getElementById('toggle_ringerSilent').scrollLeft = 100;
				document.getElementById('toggle_ringerSilent').dataset.state = "off";
			}		
		/*End Theme Specific Editible Code*/
	},
	ringerSilent: function(){
		/*Begin Theme Specific Editible Code*/
			document.getElementById('toggle_ringerVibrate').scrollLeft = 100;
			document.getElementById('toggle_ringerVibrate').dataset.state = "off";
		/*End Theme Specific Editible Code*/
	},
	ringerVibrate: function(){
		/*Begin Theme Specific Editible Code*/
			document.getElementById('toggle_ringerSilent').scrollLeft = 100;
			document.getElementById('toggle_ringerSilent').dataset.state = "off";
		/*End Theme Specific Editible Code*/
	},
	ringerNormal: function(returnVal){
		/*Begin Theme Specific Editible Code*/
			document.getElementById('slider_ringerVol').parentNode.childNodes[1].innerHTML = 'Ringer Volume: ' + returnVal + "%";
			document.getElementById('toggle_ringerSilent').scrollLeft = 100;
			document.getElementById('toggle_ringerSilent').dataset.state = "off";
			document.getElementById('toggle_ringerVibrate').scrollLeft = 100;
			document.getElementById('toggle_ringerVibrate').dataset.state = "off";
			document.getElementById('slider_ringerVol').value = returnVal;	
		
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
			document.getElementById('slider_mediaVol').parentNode.childNodes[1].innerHTML = 'Media Volume: ' + returnVal + "%";
		/*End Theme Specific Editible Code*/
	},
	mediaMute: function(){
		/*Begin Theme Specific Editible Code*/
		/*End Theme Specific Editible Code*/
	},
	mediaCheck: function(returnVal){
		/*Begin Theme Specific Editible Code*/
				document.getElementById('slider_mediaVol').value = returnVal;	
				document.getElementById('slider_mediaVol').parentNode.childNodes[1].innerHTML = 'Media Volume: ' + returnVal + "%";			
		/*End Theme Specific Editible Code*/
	},
	ringerCheck: function(returnVal){
		/*Begin Theme Specific Editible Code*/
				document.getElementById('slider_ringerVol').value = returnVal;	
				document.getElementById('slider_ringerVol').parentNode.childNodes[1].innerHTML = 'Ringer Volume: ' + returnVal + "%";
		/*End Theme Specific Editible Code*/
	},
	ringermodeCheck: function(returnVal){
		/*Begin Theme Specific Editible Code*/
			if(returnVal === 0){
				document.getElementById('toggle_ringerSilent').scrollLeft = 0;
				document.getElementById('toggle_ringerSilent').dataset.state = "on";
				document.getElementById('toggle_ringerVibrate').scrollLeft = 100;
				document.getElementById('toggle_ringerVibrate').dataset.state = "off";
			}
			if(returnVal === 1){
				document.getElementById('toggle_ringerVibrate').scrollLeft = 0;
				document.getElementById('toggle_ringerVibrate').dataset.state = "on";
				document.getElementById('toggle_ringerSilent').scrollLeft = 100;
				document.getElementById('toggle_ringerSilent').dataset.state = "off";
			}
			if(returnVal === 2){
				document.getElementById('toggle_ringerVibrate').scrollLeft = 100;
				document.getElementById('toggle_ringerVibrate').dataset.state = "off";
				document.getElementById('toggle_ringerSilent').scrollLeft = 100;
				document.getElementById('toggle_ringerSilent').dataset.state = "off";
			}
		/*End Theme Specific Editible Code*/
	},
	airplaneToggle: function(returnVal){
		/*Begin Theme Specific Editible Code*/
			if(returnVal === false){
				document.getElementById('toggle_Airplane').scrollLeft = 100;
				document.getElementById('toggle_Airplane').dataset.state = "off";
			}
			
			if(returnVal === true){
				document.getElementById('toggle_Airplane').scrollLeft = 0;
				document.getElementById('toggle_Airplane').dataset.state = "on";
				document.getElementById('meter_Cellular').previousSibling.innerHTML = 'Cellular Signal: - ';
				document.getElementById('meter_Cellular').firstChild.style.width = "0%";			
				
			}
			setTimeout(function(){domLibrary.wificontrolsCheck();}, 10000);
		/*End Theme Specific Editible Code*/
	},
	airplaneCheck: function(returnVal){
		/*Begin Theme Specific Editible Code*/
			if(returnVal === false){
				document.getElementById('toggle_Airplane').scrollLeft = 100;
				document.getElementById('toggle_Airplane').dataset.state = "off";
			}
			
			if(returnVal === true){
				document.getElementById('toggle_Airplane').scrollLeft = 0;
				document.getElementById('toggle_Airplane').dataset.state = "on";
				document.getElementById('meter_Cellular').previousSibling.innerHTML = 'Cellular Signal: - ';
				document.getElementById('meter_Cellular').firstChild.style.width = "0%";
			}	
		/*End Theme Specific Editible Code*/
	},
	airplaneEnable: function(returnVal){
		/*Begin Theme Specific Editible Code*/
			document.getElementById('toggle_Airplane').scrollLeft = 0;
			document.getElementById('toggle_Airplane').dataset.state = "on";
			document.getElementById('meter_Cellular').previousSibling.innerHTML = 'Cellular Signal: - ';
			document.getElementById('meter_Cellular').firstChild.style.width = "0%";
			setTimeout(function(){window.plugins.wifi.check();}, 10000);
		/*End Theme Specific Editible Code*/
	},
	airplaneDisable: function(returnVal){
		/*Begin Theme Specific Editible Code*/
			document.getElementById('toggle_Airplane').scrollLeft = 100;
			document.getElementById('toggle_Airplane').dataset.state = "off";
			setTimeout(function(){window.plugins.wifi.check();}, 10000);
		/*End Theme Specific Editible Code*/
	},
	bluetoothToggle: function(returnVal){
		/*Begin Theme Specific Editible Code*/
	
		/*End Theme Specific Editible Code*/
	},
	bluetoothCheck: function(returnVal){
		/*Begin Theme Specific Editible Code*/
			if(returnVal === true){
				document.getElementById('switch_bluetooth').scrollLeft = 0;
				document.getElementById('switch_bluetooth').dataset.state = "on";	
			}
			
			if(returnVal === false){
				document.getElementById('switch_bluetooth').scrollLeft = 100;
				document.getElementById('switch_bluetooth').dataset.state = "off";	
			}
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
			if(returnVal === true){
				document.getElementById('toggle_data').scrollLeft = 0;
				document.getElementById('toggle_data').dataset.state = "on";
			}
			
			if(returnVal === false){
				document.getElementById('toggle_data').scrollLeft = 100;
				document.getElementById('toggle_data').dataset.state = "off";
			}
		/*End Theme Specific Editible Code*/
	},
	dataconnectionEnable: function(returnVal){
		/*Begin Theme Specific Editible Code*/
			document.getElementById('toggle_data').scrollLeft = 0;
			document.getElementById('toggle_data').dataset.state = "on";
		/*End Theme Specific Editible Code*/
	},
	dataconnectionDisable: function(returnVal){
		/*Begin Theme Specific Editible Code*/
			document.getElementById('toggle_data').scrollLeft = 100;
			document.getElementById('toggle_data').dataset.state = "off";
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
			if(returnVal === true && document.getElementById('toggle_wifi').dataset.state === "off"){
				document.getElementById('toggle_wifi').scrollLeft = 0;
				document.getElementById('toggle_wifi').dataset.state = "on";
				document.getElementById('meter_Wifi').parentNode.childNodes[1].innerHTML = 'Wifi Signal: 100%';
				document.getElementById('meter_Wifi').firstChild.style.width = '100%';
			}
			if(returnVal === false && document.getElementById('toggle_wifi').dataset.state === "on"){
				document.getElementById('toggle_wifi').scrollLeft = 100;
				document.getElementById('toggle_wifi').dataset.state = "off";
			}
			if(returnVal === false && document.getElementById('meter_Wifi').firstChild.style.width != '0%'){
				document.getElementById('meter_Wifi').firstChild.style.width = '0%';
				document.getElementById('meter_Wifi').parentNode.childNodes[1].innerHTML = 'Wifi Signal: -';
			}
			setTimeout(function(){window.plugins.data.check();}, 10000);		
		/*End Theme Specific Editible Code*/
	},
	wificontrolsEnable: function(returnVal){
		/*Begin Theme Specific Editible Code*/
			if(returnVal === true && document.getElementById('toggle_wifi').dataset.state === "off"){
				document.getElementById('toggle_wifi').scrollLeft = 0;
				document.getElementById('toggle_wifi').dataset.state = "on";
				document.getElementById('meter_Wifi').parentNode.childNodes[1].innerHTML = 'Wifi Signal: 100%';
				document.getElementById('meter_Wifi').firstChild.style.width = '100%';
			}
			setTimeout(function(){window.plugins.data.check();}, 10000);
		/*End Theme Specific Editible Code*/
	},
	wificontrolsDisable: function(returnVal){
		/*Begin Theme Specific Editible Code*/
			if(returnVal === false && document.getElementById('toggle_wifi').dataset.state === "on"){
				document.getElementById('toggle_wifi').scrollLeft = 100;
				document.getElementById('toggle_wifi').dataset.state = "off";
			}
			if(returnVal === false && document.getElementById('meter_Wifi').firstChild.style.width != '0%'){
				document.getElementById('meter_Wifi').firstChild.style.width = '0%';
				document.getElementById('meter_Wifi').parentNode.childNodes[1].innerHTML = 'Wifi Signal: -';
			}
			setTimeout(function(){window.plugins.data.check();}, 10000);
		/*End Theme Specific Editible Code*/
	},
	missedSMS: function(returnVal){
		/*Begin Theme Specific Editible Code*/
			var smsUnread = document.getElementById('txtmsg_mainScreen').dataset.missed;
			if(smsUnread >= 0 && returnVal >0 || smsUnread > 0 && returnVal === 0  ){
				document.getElementById('txtmsg_mainScreen').dataset.missed =  returnVal;
			}		/*End Theme Specific Editible Code*/
	},
	missedCalls: function(returnVal){
		/*Begin Theme Specific Editible Code*/
			var dialerMissed = document.getElementById('dialer_mainScreen').dataset.missed;
			if(dialerMissed >= 0 && returnVal >0 || dialerMissed > 0 && returnVal === 0  ){	
				document.getElementById('dialer_mainScreen').dataset.missed =  returnVal;
			}		
		/*End Theme Specific Editible Code*/
	},
	wifiSignal: function(returnVal){
		var maxStrength = -50; 
		var minStrength = -120; 
		var percentage = Math.round(100 - Math.max(0, Math.min((returnVal - maxStrength) / (minStrength - maxStrength), 1) * 100));	
	
		/*Begin Theme Specific Editible Code*/
			document.getElementById('meter_Wifi').parentNode.childNodes[1].innerHTML = 'Wifi Signal: ' + percentage + '%';
			document.getElementById('meter_Wifi').firstChild.style.width = percentage + '%';
		/*End Theme Specific Editible Code*/
	},
	cellularSignal: function(returnVal){
		var maxStrength = -100; 
		var minStrength = -70; 
		var percentage = Math.round(100 - Math.max(0, Math.min((returnVal - maxStrength) / (minStrength - maxStrength), 1) * 100));
	
		/*Begin Theme Specific Editible Code*/
			document.getElementById('meter_Cellular').previousSibling.innerHTML = 'Cellular Signal: ' + percentage + "%";
			document.getElementById('meter_Cellular').firstChild.style.width = percentage + "%";
		/*End Theme Specific Editible Code*/		
	},
	
	//Screen Brightness
	brightnessvalueCheck: function(returnVal){
		/*Begin Theme Specific Editible Code*/
			document.getElementById('slider_brightness').value = returnVal;	
			document.getElementById('slider_brightness').parentNode.childNodes[1].innerHTML = 'Brightness: ' + returnVal;
		/*End Theme Specific Editible Code*/
	},
	brightnessmodeCheck: function(returnVal){
		/*Begin Theme Specific Editible Code*/
			if(returnVal === 0){
				document.getElementById('toggle_autoBrightness').scrollLeft = 100;
				document.getElementById('toggle_autoBrightness').dataset.state = "off";
			}else{
				document.getElementById('toggle_autoBrightness').scrollLeft = 0;
				document.getElementById('toggle_autoBrightness').dataset.state = "on";
			}
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
			if(returnVal > -1){
				document.getElementById('slider_brightness').parentNode.childNodes[1].innerHTML = 'Brightness: ' + returnVal;
			}		
		/*End Theme Specific Editible Code*/
	},
	simplefileOpen: function(returnVal){
		/*Begin Theme Specific Editible Code*/
			alert(returnVal);
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
			window.plugins.apps.generatecss();
		/*End Theme Specific Editible Code*/
	},
	battery: function(info){
		/*Begin Theme Specific Editible Code*/
			if(info.isPlugged !== false){
				document.getElementById('meter_Battery').parentNode.childNodes[1].innerHTML = 'Battery Charging:  '+info.level+'%';
				document.getElementById('meter_Battery').firstChild.style.width = info.level + '%';
			}else{
				document.getElementById('meter_Battery').parentNode.childNodes[1].innerHTML = 'Battery Level:  '+info.level+'%';
				document.getElementById('meter_Battery').firstChild.style.width = info.level + '%';
			}
		/*End Theme Specific Editible Code*/
	},
	domodList: function(returnVal){
		/*Begin Theme Specific Editible Code*/
			alert(returnVal);
		/*End Theme Specific Editible Code*/
	}
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
	var missedsmsTimer = setInterval(window.plugins.missed.sms, 5000);
	
	window.plugins.wifi.check();
	window.plugins.fullscreen.check();
	window.plugins.airplanemode.check();
	window.plugins.ringer.check("percentage");
	window.plugins.media.check("percentage");
	window.plugins.ringer.modecheck();
	window.plugins.bluetooth.check();
	window.plugins.brightness.valuecheck();
	window.plugins.brightness.modecheck();
}
