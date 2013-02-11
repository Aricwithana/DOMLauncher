clockTimer = null;
missedcallsTimer = null;
missedsmsTimer = null;

function themeLoaded(){
	

	appList({refreshIcons:false});
	document.addEventListener("pause", onPause, false);
	document.addEventListener("resume", onResume, false);
	clockTimer = setInterval(clock, 1000 );
	switches();
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

	
	/*	document.getElementById('systemControls').ontouchstart = function(e){
		leftVal = parseInt(this.style.left, 10);
		touch = event.touches[0];
		x = touch.pageX;
		
			this.ontouchmove = function(e){
				pos = e.changedTouches[0].pageX;
				
				if( pos < x){
					this.style.left = leftVal - (x - pos)+"px";
				}
				
				if( pos > x){
					this.style.left = leftVal + (pos - x)+"px";
				}
				
			}
		}*/
}






















// requestedPercentageVolume / 100 * getSteamMaxVolume()
function applistCallback(appList){	
		//Parse the appList
		var appListArray = JSON.parse(appList);
		//For each item in the JSON Array
			//@ appName - Application Name ('DOMLauncher')
			//@ appLaunch - Package class name ('com.awaa.domlauncher')
			//@ appActivity - Acivity Intent ('.DialtactsContactsEntryActivity')
		var	$appPanel = $('.appPanel_Content');
			$appPanel.empty();
		$.each(appListArray, function(e) {
			 appName = this.name
			 appLaunch = this.package
			 appActivity = this.intent
			
			if(this.package === "com.android.settings"){
				$appPanel.append('<div class="app" appLaunch="com.android.settings" appActivity=".Settings" appName="'+appName+'"><span>'+appName+'</span></div>');
				$appPanel.append('<a href="tel:" class="app dialer" appName="default_Dialer"><span>Dialer</span></a>');
			}else if(this.package === "com.android.contacts"){
				$appPanel.append('<div class="app" appLaunch="com.android.contacts" appActivity=".DialtactsContactsEntryActivity" appName="'+appName+'"><span>'+appName+'</span></div>');
			}else{
				$appPanel.append('<div class="app" appLaunch="'+appLaunch+'" appActivity="'+appActivity+'" appName="'+appName+'"><span>'+appName+'</span></div>');
			}
			var	 appName = null
			var appLaunch = null
			var appActivity = null
		});
		var appListArray = null;
		var $appPanel = null
}

/*Clock CSS
	http://css-tricks.com/css3-clock/
	PUBLISHED NOVEMBER 17, 2008
	Toby Pitman http://www.tobypitman.com/
	Modified by Aricwithana
*/

//@ clockTimer - Nulls the setInterval object.
//@ clockSec, clockHour, clockMin - Caches repeatedly Called DOM element.
function clock() {
	var date = new Date()
 
	document.getElementById("sec").style.WebkitTransform = "rotate(" + (date.getSeconds() * 6) + "deg)";
	document.getElementById("hour").style.WebkitTransform = "rotate(" + (date.getHours() * 30 + (date.getMinutes() / 2)) + "deg)";
	document.getElementById("min").style.WebkitTransform = "rotate(" + (date.getMinutes() * 6) + "deg)";

	var date = null;
}







/*Switches Widget Plugin
*	This plugin creates native-like switches.  Each element with the secified class
*		and correct DOM structure will create a working switch.  There is no 'universal'
*		Widget solution for every theme.  It should be customized.
*/
function switches(){
	$( ".switch>div:first-child" ).each(function(){
		$(this).draggable({containment: "parent",distance:0,
			create: function( event, ui ) {
			},
			stop: function( event, ui ) {
				var handle = $(this); //Switch Handle
				var switchID = $(handle).parent('.switch').attr('id');
				var handlePOS =  parseInt($(handle).css('left'))
				
				//Controls the switch state response on touch end.  Animates and called the switchCallback function passing its state and switch ID.
				if(handlePOS >= 49){if(handlePOS != 100){$(handle).css('left', '100px').addClass('on');}  switchCallback({state:"on", id:switchID});}
				if(handlePOS <= 50){$(handle).css('left', '0px').removeClass('on'); switchCallback({state:"off", id:switchID});}	  
				 
				var handlePOS = null;
				var switchID = null;
				var handle = null;
				
			},
			drag: function( event, ui ) {  
				var handle = $(this); //Switch Handle
				var handlePOS = parseInt($(handle).css('left'));
				
				//Controls the switch state response while dragging.  
				if( handlePOS >= 49  && $(handle).hasClass('on') == false){$(handle).addClass('on'); }
				if(handlePOS <= 50 && $(handle).hasClass('on') == true){$(handle).removeClass('on');}  
				//Prevents the screen scroll while interacting with a switch.

				
				var handlePOS = null;
				var handle = null;
			}
		});
	});
}

//Switch Widget Callback
	//@ switchID - ID of the switch
	//@ state - Current end state of the switch
function switchCallback(args){
	var switchID = args.id || null;
	var state = args.state || null;
	
	/*Begin Theme Specific Editible Code*/
		if(switchID === "toggle_fullScreen"){ 
			//Toggle Full Screen Call Function
				// @ toggleStatusbar({}) - Just call it, the app restarts with full screen toggled on or off.
				//Also accepts {check:"true"} to just check the if the app is fullscreen or not.
			toggleStatusbar({}); 
		}
		
		//Toggle Wifi Call Function
			// @ toggleWifi({}) - Call Function
			// @ {check:"on/off"} - Sets the state of the Wifi Connection.
				//Also accepts {check:"true"} to just check the current wifi connection state.
				//Also accepts {state:"toggle"} to just toggle the connection.
			//The plugin automatically creates a listener for the signal value which requires a callback function provided below.
		if(switchID === "toggle_wifi" && state === "on"){
			toggleWifi({state:"on"});
		}
		if(switchID === "toggle_wifi" && state === "off"){
			toggleWifi({state:"off"});
		}
		
		//Toggle Data Call Function
			// @ toggleData({}) - Call Function
			// @ state - Sets the state of the Data Connection.
				//Also accepts {check:"true"} to just check the current Data connection state.
				//Also accepts {state:"toggle"} to just toggle the connection.
		if(switchID === "toggle_data" && state === "off"){
			toggleData({state:"off"});
		}
		if(switchID === "toggle_data" && state === "on"){
			toggleData({state:"on"});
		}
		
		
		if(switchID === "toggle_Airplane" && state === "off"){
			toggleAirplane({state:"off"});
		}
		if(switchID === "toggle_Airplane" && state === "on"){
			toggleAirplane({state:"on"});
		}
		
		if(switchID === "toggle_autoBrightness" && state === "off"){
			screenBrightness({auto:"off"});
		}
		if(switchID === "toggle_autoBrightness" && state === "on"){
			screenBrightness({auto:"on"});
		}		
		
		if(switchID === "toggle_ringerSilent" && state === "off"){
			volumeControls({type:"ringer", vol:"normal"});
		}
		if(switchID === "toggle_ringerSilent" && state === "on"){
			volumeControls({type:"ringer", vol:"silent"});
		}	
		
		if(switchID === "toggle_ringerVibrate" && state === "off"){
			volumeControls({type:"ringer", vol:"normal"});
		}
		if(switchID === "toggle_ringerVibrate" && state === "on"){
			volumeControls({type:"ringer", vol:"vibrate"});
		}	
		
			
	/*End Theme Specific Editible Code*/
}	
	

//Screenbrightness Controls Callback
	// @ type - returns the type of value checked (will be 'sms' or 'calls')
	// @ returnVal - returns an integer or OK.
		// @ object_toggleWifi 

function screenbrightnessCallback(args){
	var value = args.value;
	var check = args.check;
	var float = args.float;
	var toggle = args.toggle;
	var auto = args.auto;
	var returnVar = args.returnVar;	
	
	if(mode == "auto" && returnVar == 1 || check == "mode" && returnVar == 1){
			
	}
	
	if(mode == "auto" && returnVar == 0 || check == "mode" && returnVar == 0){
		
	}
	
	if(value > 0){
		
	}

}


//Volume Control Callback
	// @ vol - returns the supplied volume type specified 'up/down/mute/silent/vibrate'
	// @ type - returns the supplised volume control type 'media/ringer/mode/maxRinger/normal'
	// @ check - returns the boolean true/false if the function is just being used to check information.
	// @ returnVal - returns integers, strings or booleans depending on the combination of input commands when the initial function is called.
		// @ object_toggle34G 
	
	 
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









//Air Plane Mode Toggle
function toggleairplaneCallback(args){
	var returnVal = args.returnVal //Returns boolean - true/false
	var state = args.state //Returns string - on/off
	var check = args.check //Returns boolean - true/false
		

	/*Begin Theme Specific Editible Code*/
		if(returnVal === false && document.getElementById('toggle_Airplane').firstChild.classList.contains('on') === true){
			//$('#toggle_Airplane>div').css('left', '0px').removeClass('on');
			document.getElementById('toggle_Airplane').firstChild.style.left = "0px";
			document.getElementById('toggle_Airplane').firstChild.className = "";
		}
		
		if(returnVal === true && document.getElementById('toggle_Airplane').firstChild.classList.contains('on') === false){
			//$('#toggle_Airplane>div').css('left', '100px').addClass('on');	
			document.getElementById('toggle_Airplane').firstChild.style.left = "100px";
			document.getElementById('toggle_Airplane').firstChild.className = "on";
		}
		setTimeout(function(){toggleWifi({check:"true"});}, 10000);
	/*End Theme Specific Editible Code*/
}





//Fullscreen Toggle Callback
	// @ returnVal - returns boolean true/false depending on if the app is full screen or not.
function fullscreentoggleCallback(args){
	var returnVal = args.returnVal
	/*Begin Theme Specific Editible Code*/
		if(returnVal != true){
			document.getElementById('toggle_fullScreen').firstChild.style.left = "0px";
			document.getElementById('toggle_fullScreen').firstChild.className = "";
		}else{
			document.getElementById('toggle_fullScreen').firstChild.style.left = "100px";
			document.getElementById('toggle_fullScreen').firstChild.className = "on";
		}
	/*End Theme Specific Editible Code*/
}



//Wifi Toggle Callback
	// @ check - returns the boolean true/false if the function is just being used to check information.
	// @ returnVal - returns boolean true/false depending on if the data connection is on or off.
	// @ state - returns the state on/off/toggle that was supplied in the original call.
function togglewifiCallback(args){
	var check = args.check
	var returnVal = args.returnVal
	var state = args.state
	
	/*Begin Theme Specific Editible Code*/
		if(returnVal === true && document.getElementById('toggle_wifi').firstChild.classList.contains('on') === false){
			document.getElementById('toggle_wifi').firstChild.style.left = "100px";
			document.getElementById('toggle_wifi').firstChild.className = "on";
		}
		if(returnVal === false && document.getElementById('toggle_wifi').firstChild.classList.contains('on') === true){
			document.getElementById('toggle_wifi').firstChild.style.left = "0px";
			document.getElementById('toggle_wifi').firstChild.className = "";
		}
		//Until there is a 'state listener' for when connections turn on and off, this timeout is needed to correctly respond to if the data connecton is active or not.
		setTimeout(function(){toggleData({check:"true"});}, 10000);
	/*End Theme Specific Editible Code*/
}



//Data Toggle Callback
	// @ check - returns the boolean true/false if the function is just being used to check information.
	// @ returnVal - returns boolean true/false depending on if the data connection is on or off.
function toggledataCallback(args){
	 var returnVal = args.returnVal
	 var check = args.check
	 var state = args.state 
	 
	/*Begin Theme Specific Editible Code*/
		if(returnVal === true && document.getElementById('toggle_data').firstChild.classList.contains('on') === false){
			document.getElementById('toggle_data').firstChild.style.left = "100px";
			document.getElementById('toggle_data').firstChild.className = "on";
		}
		if(returnVal === false && document.getElementById('toggle_data').firstChild.classList.contains('on') === true){
			document.getElementById('toggle_data').firstChild.style.left = "0px";
			document.getElementById('toggle_data').firstChild.className = "";
		}
	/*End Theme Specific Editible Code*/
}








//Wifi Signal Callback - A REQUIRED FUNCTION IF WIFI CONTROLS PLUGIN IS USED.
	// @ returnVal - returns a negative integer, -dBm
	// Since people in the past have bickered about the correctness
	// 		of the displayed signal value, any user can decide for 
	//		themselves to remove any chance of complaint.
	// @ wifiChange() - Sends the converted number (conversion is based 
	// 		on desired users wants) to the function that changes the UI.
	//		This was done to simply the code, not a neccessary thing.
	//	This function is called directly from within the Cordova API Java Plugin.
	//		DO NOT CHANGE THE FUNCTION CALL BACK NAMESPACE!

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



//Cellular Signal Callback
	// @ strengthDbm - returns a negative integer, -dBm
	// Since people in the past have bickered about the correctness
	// 		of the displayed signal value, any user can decide for 
	//		themselves to remove any chance of complaint.
	// @ cellsignalChange() - Sends the converted number (conversion is based 
	// 		on desired users wants) to the function that changes the UI.
	//		This was done to simply the code, not a neccessary thing.
	//
	//	This function is called directly from within the Cordova API Java Plugin.
	//		DO NOT CHANGE THE FUNCTION CALL BACK NAMESPACE!
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



//Battery Level Receiver 
	// @.isPlugged - boolean true/false if the device is plugged in.
	// @ .level - integer 0-100, battery level value
	// @ info  - MUST be used as the callback Variable!  This is a Cordova requirement, not mine.
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


//Launch App/Acitivity/Setting Callback
	// @ name - com.class.name that was supplised
	// @ activity - fully compiled activity call intent
	// @ settings - settings subgroup to be launched
	// @ object - DOM object original information was attached to. 
function launchappsCallback(args){
	var name = args.name
	var activity = args.activityFull
	var settings = args.settings
	var object = args.object
	/*Begin Theme Specific Editible Code*/
		//There is no response code supplised for this theme.  
	/*End Theme Specific Editible Code*/
}


//Missed Communications Callback
	// @ type - returns the type of value checked (will be 'sms' or 'calls')
	// @ returnVal - returns an integer or OK.
function missedcommunicationsCallback(args){
		var type = args.type;
		var returnVal = args.returnVal
	/*Begin Theme Specific Editible Code*/
		if(type == "calls"){
			$('#dialer_mainScreen').attr('data-missed', returnVal);
			if(returnVal != 0 && $('#dialer_mainScreen').hasClass('missedCommunications') === true){
				$('#dialer_mainScreen').addClass('missedCommunications')	
			}
			if(returnVal === 0 && $('#txtmsg_mainScreen').hasClass('missedCommunications') === false){
				$('#txtmsg_mainScreen').removeClass('missedCommunications')	
			}
		}
		
		if(type == "sms"){
			$('#txtmsg_mainScreen').attr('data-missed', returnVal);
			if(returnVal != 0 && $('#txtmsg_mainScreen').hasClass('missedCommunications') === false){
				$('#txtmsg_mainScreen').addClass('missedCommunications');
			}
			if(returnVal === 0 && $('#txtmsg_mainScreen').hasClass('missedCommunications') === true){
				$('#txtmsg_mainScreen').removeClass('missedCommunications');
			}
			
		}
		
		
	/*End Theme Specific Editible Code*/
}

    // Handle the pause event
    function onPause() {
		clearInterval(clockTimer);
		clearInterval(missedcallsTimer);
		clearInterval(missedsmsTimer);
		clockTimer = null;
		missedcallsTimer = null;
		missedsmsTimer = null;	
	}

	
	// Handle the resume event
	function onResume() {
		clockTimer = setInterval(clock, 1000);
		missedcallsTimer = setInterval(function(){missedCommunications({type:"calls"});}, 30000);
		missedsmsTimer = setInterval(function(){missedCommunications({type:"sms"});}, 30000);
	}
