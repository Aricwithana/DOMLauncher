/*Document Ready*/
document.addEventListener("deviceready", themeLoaded, false);

//setInterval Timer Variable Names
clockTimer = null;
missedcallsTimer = null;
missedsmsTimer = null;

/*Document Ready Success Function*/
function themeLoaded(){
	scrollSwitch();
	appList({refreshIcons:false});
	document.addEventListener("pause", onPause, false);
	document.addEventListener("resume", onResume, false);
	clockTimer = setInterval(clock, 1000 );
	toggleStatusbar({check:"true"});
	toggleWifi({check:"true"});
	toggleData({check:"true"});
	cellSiganl({action:"start"});
	batteryLevel();
	toggleAirplane({check:"true"});
	volumeControls({check:"true", type:"media"});
	volumeControls({check:"true", type:"ringer"});
	missedcallsTimer = setInterval(function(){missedCommunications({type:"calls"});}, 5000);
	missedsmsTimer = setInterval(function(){missedCommunications({type:"sms"});}, 5000);
}
/*End Document Ready*/




/*App Panel Generation & App Launcher Event Bindings*/
function applistCallback(appList){	
	
	var previous_appIntent = document.querySelectorAll('*[appPackage]');
	
	for (var i = 0; i < previous_appIntent.length; i++)
	{
		previous_appIntent[i].removeEventListener("click", function(){launchApps(this);}, false);
	}
	
	var appListArray = JSON.parse(appList);
	var appPanel = document.getElementById('appPanel_Content'); 
	appPanel.innerHTML = ''; 
	
	var dialer = document.createElement('a');
	dialer.setAttribute('class', 'app dialer');
	dialer.setAttribute('href', 'tel:');
	dialer.setAttribute('appName', 'Dialer');
	appPanel.appendChild(dialer);

	for(var I = 0; I < appListArray.length; I++) {  
		var appInfo = appListArray[I];
		var appName = appInfo.name; 
		var appPackage = appInfo.package; 
		var appActivity = appInfo.activity;
	
		var newdiv = document.createElement('div');
		newdiv.setAttribute('class', 'app');
		newdiv.setAttribute('appPackage', appPackage);
		newdiv.setAttribute('appActivity', appActivity);
		newdiv.setAttribute('appName', appName);
		appPanel.appendChild(newdiv);
	}
	
	var final_appIntent = document.querySelectorAll('*[appPackage]');
	
	for (var i = 0; i < final_appIntent.length; i++)
	{
		final_appIntent[i].addEventListener("click", function(){launchApps(this);}, false);
	}
		
}



/*Clock CSS*/
function clock() {
	var date = new Date()
 
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
					if(switchState == "on"){element.style.overflow = "hidden"; element.scrollLeft = "0"; if(switchState != switchStart){switchCallback({state:"on", id:switchID});}}
					if(switchState == "off"){ element.style.overflow = "hidden";element.scrollLeft = "100"; if(switchState != switchStart){switchCallback({state:"off", id:switchID});} }	  	
				}, 300);
			}
		}
	}	
}



/*Switch Widget Callback*/
function switchCallback(args){
	var switchID = args.id || null;
	var state = args.state || null;
	
	/*Begin Theme Specific Editible Code*/
		
		//Toggle FullScreen 
		if(switchID === "toggle_fullScreen"){ 
			toggleStatusbar({}); 
		}
		
		//Toggle Wifi
		if(switchID === "toggle_wifi" && state === "on"){
			toggleWifi({state:"on"});
		}
		if(switchID === "toggle_wifi" && state === "off"){
			toggleWifi({state:"off"});
		}
		
		//Toggle Data 
		if(switchID === "toggle_data" && state === "off"){
			toggleData({state:"off"});
		}
		if(switchID === "toggle_data" && state === "on"){
			toggleData({state:"on"});
		}
		
		//Toggle Airplane
		if(switchID === "toggle_Airplane" && state === "off"){
			toggleAirplane({state:"off"});
		}
		if(switchID === "toggle_Airplane" && state === "on"){
			toggleAirplane({state:"on"});
		}
		
		//Toggle AutoBrightness 
		if(switchID === "toggle_autoBrightness" && state === "off"){
			screenBrightness({auto:"off"});
		}
		if(switchID === "toggle_autoBrightness" && state === "on"){
			screenBrightness({auto:"on"});
		}		
		
		//Toggle Ringer Silent
		if(switchID === "toggle_ringerSilent" && state === "off"){
			volumeControls({type:"ringer", vol:"normal"});
		}
		if(switchID === "toggle_ringerSilent" && state === "on"){
			volumeControls({type:"ringer", vol:"silent"});
		}	
		
		//Toggle AutoBrightness
		if(switchID === "toggle_ringerVibrate" && state === "off"){
			volumeControls({type:"ringer", vol:"normal"});
		}
		if(switchID === "toggle_ringerVibrate" && state === "on"){
			volumeControls({type:"ringer", vol:"vibrate"});
		}	
	/*End Theme Specific Editible Code*/
}	
	

/*Screenbrightness Controls Callback*/
function screenbrightnessCallback(args){
	var value = args.value;
	var check = args.check;
	var float = args.float;
	var toggle = args.toggle;
	var auto = args.auto;
	var returnVar = args.returnVar;	
	
	/*Begin Theme Specific Editible Code*/
		if(mode == "auto" && returnVar == 1 || check == "mode" && returnVar == 1){
				
		}
		
		if(mode == "auto" && returnVar == 0 || check == "mode" && returnVar == 0){
			
		}
		
		if(value > 0){
			
		}
	/*End Theme Specific Editible Code*/
}




/*Volume Control Callback*/
function volumecontrolsCallback(args){
	var vol = args.vol
	var type = args.type
	var check = args.check
	var returnVal = args.returnVal
	var percentage = args.percentage
	var toast = args.toast
	
	/*Begin Theme Specific Editible Code*/
		if(type == "ringer"){
			document.getElementById('slider_ringerVol').parentNode.childNodes[1].innerHTML = 'Ringer Volume: ' + returnVal;
		}
		
		if(type == "media"){
			document.getElementById('slider_mediaVol').parentNode.childNodes[1].innerHTML = 'Media Volume: ' + returnVal;
		}
	/*End Theme Specific Editible Code*/
}




/*Air Plane Mode Toggle*/
function toggleairplaneCallback(args){
	var returnVal = args.returnVal 
	var state = args.state 
	var check = args.check 
		
	/*Begin Theme Specific Editible Code*/
		if(returnVal === false && document.getElementById('toggle_Airplane').dataset.state === "on"){
			document.getElementById('toggle_Airplane').scrollLeft = 100;
			document.getElementById('toggle_Airplane').dataset.state = "off";
		}
		
		if(returnVal === true && document.getElementById('toggle_Airplane').dataset.state === "off"){
			document.getElementById('toggle_Airplane').scrollLeft = 0;
			document.getElementById('toggle_Airplane').dataset.state = "on";
		}
		setTimeout(function(){toggleWifi({check:"true"});}, 10000);
	/*End Theme Specific Editible Code*/
}




/*Fullscreen Toggle Callback*/
function fullscreentoggleCallback(args){
	var returnVal = args.returnVal
	
	/*Begin Theme Specific Editible Code*/
		if(returnVal != true){
			document.getElementById('toggle_fullScreen').scrollLeft = 100;
			document.getElementById('toggle_fullScreen').dataset.state = "off";
		}else{
			document.getElementById('toggle_fullScreen').scrollLeft = 0;
			document.getElementById('toggle_fullScreen').dataset.state = "on";
		}
	/*End Theme Specific Editible Code*/
}




/*Wifi Toggle Callback*/
function togglewifiCallback(args){
	var check = args.check
	var returnVal = args.returnVal
	var state = args.state
	
	/*Begin Theme Specific Editible Code*/
		if(returnVal === true && document.getElementById('toggle_wifi').dataset.state === "off"){
			document.getElementById('toggle_wifi').scrollLeft = 0;
			document.getElementById('toggle_wifi').dataset.state = "on";
		}
		
		if(returnVal === false && document.getElementById('toggle_wifi').dataset.state === "on"){
			document.getElementById('toggle_wifi').scrollLeft = 100;
			document.getElementById('toggle_wifi').dataset.state = "off";
		}
		//Until there is a 'state listener' for when connections turn on and off, this timeout is needed to correctly respond to if the data connecton is active or not.
		setTimeout(function(){toggleData({check:"true"});}, 10000);
	/*End Theme Specific Editible Code*/
}




/*Data Toggle Callback*/
function toggledataCallback(args){
	 var returnVal = args.returnVal
	 var check = args.check
	 var state = args.state 
	 
	/*Begin Theme Specific Editible Code*/
		if(returnVal === true && document.getElementById('toggle_data').dataset.state === "off"){
			document.getElementById('toggle_data').scrollLeft = 0;
			document.getElementById('toggle_data').dataset.state = "on";
		}
		
		if(returnVal === false && document.getElementById('toggle_data').dataset.state === "on"){
			document.getElementById('toggle_data').scrollLeft = 100;
			document.getElementById('toggle_data').dataset.state = "off";
		}
	/*End Theme Specific Editible Code*/
}




/*Wifi Signal Callback - A REQUIRED FUNCTION IF WIFI CONTROLS PLUGIN IS USED.*/
function wifisignalCallback(strengthDbm){
	
	/*Begin Theme Specific Editible Code*/
		if (strengthDbm <= -97.75) { wifiChange(0); 
		} else if (strengthDbm > -97.75 && strengthDbm <= -95.5) { wifiChange(5);  
		} else if (strengthDbm > -95.5 && strengthDbm <= -93.25) { wifiChange(10);
		} else if (strengthDbm > -93.25 && strengthDbm <= -91) { wifiChange(15);
		} else if (strengthDbm > -91 && strengthDbm <= -88.75) { wifiChange(20);
		} else if (strengthDbm > -88.75 && strengthDbm <= -86.5) { wifiChange(25);
		} else if (strengthDbm > -86.5 && strengthDbm <= -84.25) { wifiChange(30);
		} else if (strengthDbm > -84.25 && strengthDbm <= -82) { wifiChange(35);
		} else if (strengthDbm > -82 && strengthDbm <= -79.75) { wifiChange(40);
		} else if (strengthDbm > -79.75 && strengthDbm <= -77.5) { wifiChange(45);
		} else if (strengthDbm > -77.5 && strengthDbm <= -75.25) { wifiChange(50);
		} else if (strengthDbm > -75.25 && strengthDbm <= -73) { wifiChange(55);
		} else if (strengthDbm > -73 && strengthDbm <= -70.75) { wifiChange(60);
		} else if (strengthDbm > -70.75 && strengthDbm <= -68.5) { wifiChange(65);
		} else if (strengthDbm > -68.5 && strengthDbm <= -66.25) { wifiChange(70);
		} else if (strengthDbm > -66.25 && strengthDbm <= -64) { wifiChange(75);
		} else if (strengthDbm > -64 && strengthDbm <= -61.75) { wifiChange(80);
		} else if (strengthDbm > -61.75 && strengthDbm <= -59.5) { wifiChange(85);
		} else if (strengthDbm > -59.5 && strengthDbm <= -57.25) { wifiChange(90);
		} else if (strengthDbm > -57.25 && strengthDbm <= -55) { wifiChange(95);
		} else if (strengthDbm > -55) { wifiChange(100);
		}	
	/*End Theme Specific Editible Code*/
}
	//Used with the Wifi Signal Callback Function.
	function wifiChange(percentage){
		document.getElementById('meter_Wifi').parentNode.childNodes[1].innerHTML = 'Wifi Signal: ' + percentage + '%';
		document.getElementById('meter_Wifi').firstChild.style.width = percentage + '%';
	}




/*Cellular Signal Callback*/
function cellsignalCallback(strengthDbm){
	/*Begin Theme Specific Editible Code*/
		if (strengthDbm <= -97.75) { cellsignalChange("0%"); 
			} else if (strengthDbm > -97.75 && strengthDbm <= -95.5) { cellsignalChange("10%");  
			} else if (strengthDbm > -95.5 && strengthDbm <= -93.25) { cellsignalChange("20%");
			} else if (strengthDbm > -93.25 && strengthDbm <= -91) { cellsignalChange("30%");
			} else if (strengthDbm > -91 && strengthDbm <= -88.75) { cellsignalChange("40%");
			} else if (strengthDbm > -88.75 && strengthDbm <= -86.5) { cellsignalChange("50%");
			} else if (strengthDbm > -86.5 && strengthDbm <= -84.25) { cellsignalChange("60%");
			} else if (strengthDbm > -84.25 && strengthDbm <= -82) { cellsignalChange("70%");
			} else if (strengthDbm > -82 && strengthDbm <= -79.75) { cellsignalChange("80%");
			} else if (strengthDbm > -79.75 && strengthDbm <= -77.5) { cellsignalChange("90%");
			} else if (strengthDbm > -77.5 && strengthDbm <= -75.25) { cellsignalChange("100%");
		}
	/*End Theme Specific Editible Code*/
}
	//Used with the Cellular Signal Callback Function.
	function cellsignalChange(percentage){
		document.getElementById('meter_Cellular').previousSibling.innerHTML = 'Cellular Signal: ' + percentage;
		document.getElementById('meter_Cellular').firstChild.style.width = percentage;
		//$('#meter_Cellular').children('div').css('width', percentage + '%');
	}




/*Battery Level Receiver */
function batterylevelCallback(info){ 
	
	/*Begin Theme Specific Editible Code*/
		if(info.isPlugged != false){
			document.getElementById('meter_Battery').parentNode.childNodes[1].innerHTML = 'Battery Charging:  '+info.level+'%';
			document.getElementById('meter_Battery').firstChild.style.width = info.level + '%';
		}else{
			document.getElementById('meter_Battery').parentNode.childNodes[1].innerHTML = 'Battery Level:  '+info.level+'%';
			document.getElementById('meter_Battery').firstChild.style.width = info.level + '%';
		}
	/*End Theme Specific Editible Code*/
}




/*Launch App/Acitivity/Setting Callback*/
function launchappsCallback(args){
	var package = args.package
	var activity = args.activityFull
	var settings = args.settings
	var object = args.object
	
	/*Begin Theme Specific Editible Code*/
		//There is no response code supplised for this theme.  
	/*End Theme Specific Editible Code*/
}




/*Missed Communications Callback*/
function missedcommunicationsCallback(args){
	var type = args.type;
	var returnVal = args.returnVal
	
	/*Begin Theme Specific Editible Code*/
		if(type == "calls"){
			var dialerMissed = document.getElementById('dialer_mainScreen').dataset.missed;

			if(dialerMissed >= 0 && returnVal >0 || dialerMissed > 0 && returnVal === 0  ){	
				document.getElementById('dialer_mainScreen').dataset.missed =  returnVal;
			}
		}
		
		if(type == "sms"){
			var smsUnread = document.getElementById('txtmsg_mainScreen').dataset.missed;
			if(smsUnread >= 0 && returnVal >0 || smsUnread > 0 && returnVal === 0  ){
				document.getElementById('txtmsg_mainScreen').dataset.missed =  returnVal;
			}
		}
	/*End Theme Specific Editible Code*/
}




/*Handle the pause event*/
function onPause() {
	clearInterval(clockTimer);
	clearInterval(missedcallsTimer);
	clearInterval(missedsmsTimer);
	clockTimer = null;
	missedcallsTimer = null;
	missedsmsTimer = null;	
}

	
	
	
/*Handle the resume event*/
function onResume() {
	clockTimer = setInterval(clock, 1000);
	missedcallsTimer = setInterval(function(){missedCommunications({type:"calls"});}, 5000);
	missedsmsTimer = setInterval(function(){missedCommunications({type:"sms"});}, 5000);

	toggleWifi({check:"true"});
	toggleAirplane({check:"true"});
	volumeControls({check:"true", type:"media"});
	volumeControls({check:"true", type:"ringer"});	
}
