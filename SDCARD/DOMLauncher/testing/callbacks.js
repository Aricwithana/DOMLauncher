/**	
*Cordova Plugin API Javascript Callbacks
*------------------------------------------
*	A UI needs to do more than accept input but to respond to
*	that input and changes of the system.  This file, callbacks.js
*	holds the required callbacks when utilizing the built in javascript
*	wrapper API functions.
*	
*	These callbacks pass all entered information within the {} of each 
*	API call function.  They also returns any result information, signified
*	as the universal built in variable 'returnVar'. 
*
*	'args' is a required thing because of the {} usage.   If a value was
*	not used in the call function the value will auto return false.
**/



//Battery Level Receiver 
	// @.isPlugged - boolean true/false if the device is plugged in.
	// @ .level - integer 0-100, battery level value
	// @ info  - MUST be used as the callback Variable!  This is a Cordova requirement, not mine.
		// @ object_toggle34G 
	object_databatteryLevel = $('#data_batteryLevel')
function batterylevelCallback(info){ 
	/*Begin Theme Specific Editible Code*/
		if(info.isPlugged != false){
			object_databatteryLevel.text('Battery Charging:  '+info.level+'%');  
		}else{
			object_databatteryLevel.text('Battery Level:  '+info.level+'%'); 
		}
	/*End Theme Specific Editible Code*/
}




//Volume Control Callback
	// @ vol - returns the supplied volume type specified 'up/down/mute/silent/vibrate'
	// @ type - returns the supplised volume control type 'media/ringer/mode/maxRinger/normal'
	// @ check - returns the boolean true/false if the function is just being used to check information.
	// @ returnVal - returns integers, strings or booleans depending on the combination of input commands when the initial function is called.
		// @ object_toggle34G 
	object_valueringerVol = $('#value_ringerVol')
	object_valuemediaVol = $('#value_mediaVol')
function volumecontrolsCallback(args){
	var vol = args.vol
	var type = args.type
	var check = args.check
	var returnVal = args.returnVal
	/*Begin Theme Specific Editible Code*/
		if(type == "ringer"){
			object_valueringerVol.text('Ringer Vol: ' + returnVal)	
		}
		if(type == "media"){
			object_valuemediaVol.text('Ringer Vol: ' + returnVal)	
		}
	/*End Theme Specific Editible Code*/
}


//Data Toggle Callback
	// @ check - returns the boolean true/false if the function is just being used to check information.
	// @ returnVal - returns boolean true/false depending on if the data connection is on or off.
		// @ object_toggle34G 
	object_toggle34G = $('#toggle_34G')
function toggledataCallback(args){
	var returnVal = args.returnVal
	var check = args.check
	/*Begin Theme Specific Editible Code*/
		if(returnVal === true){
			object_toggle34G.attr('src', 'file:///mnt/sdcard/DOMLauncher/testing/icon_34genabled.jpg');
		}else{
			object_toggle34G.attr('src', 'file:///mnt/sdcard/DOMLauncher/testing/icon_34g.jpg');	
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




//Wifi Signal Callback
	// @ returnVal - returns a negative integer, -dBm
	// Since people in the past have bickered about the correctness
	// 		of the displayed signal value, any user can decide for 
	//		themselves to remove any chance of complaint.
	// @ wifiChange() - Sends the converted number (conversion is based 
	// 		on desired users wants) to the function that changes the UI.
	//		This was done to simply the code, not a neccessary thing.
		// @ object_datawifiSignal 
	object_datawifiSignal = $('#data_wifiSignal')
function wifisignalCallback(args){
	var returnVal = args.returnVal
	/*Begin Theme Specific Editible Code*/
		if (returnVal <= -97.75) { wifiChange(0); 
		} else if (returnVal > -97.75 && returnVal <= -95.5) { wifiChange(5);  
		} else if (returnVal > -95.5 && returnVal <= -93.25) { wifiChange(10);
		} else if (returnVal > -93.25 && returnVal <= -91) { wifiChange(15);
		} else if (returnVal > -91 && returnVal <= -88.75) { wifiChange(20);
		} else if (returnVal > -88.75 && returnVal <= -86.5) { wifiChange(25);
		} else if (returnVal > -86.5 && returnVal <= -84.25) { wifiChange(30);
		} else if (returnVal > -84.25 && returnVal <= -82) { wifiChange(35);
		} else if (returnVal > -82 && returnVal <= -79.75) { wifiChange(40);
		} else if (returnVal > -79.75 && returnVal <= -77.5) { wifiChange(45);
		} else if (returnVal > -77.5 && returnVal <= -75.25) { wifiChange(50);
		} else if (returnVal > -75.25 && returnVal <= -73) { wifiChange(55);
		} else if (returnVal > -73 && returnVal <= -70.75) { wifiChange(60);
		} else if (returnVal > -70.75 && returnVal <= -68.5) { wifiChange(65);
		} else if (returnVal > -68.5 && returnVal <= -66.25) { wifiChange(70);
		} else if (returnVal > -66.25 && returnVal <= -64) { wifiChange(75);
		} else if (returnVal > -64 && returnVal <= -61.75) { wifiChange(80);
		} else if (returnVal > -61.75 && returnVal <= -59.5) { wifiChange(85);
		} else if (returnVal > -59.5 && returnVal <= -57.25) { wifiChange(90);
		} else if (returnVal > -57.25 && returnVal <= -55) { wifiChange(95);
		} else if (returnVal > -55) { wifiChange(100);
		}
	/*End Theme Specific Editible Code*/
}

function wifiChange(percentage){
	object_datawifiSignal.text('Wifi Signal:  '+percentage+'%');	
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
		// @ object_datawifiSignal 
	object_datacellsignal = $('#data_cellSignal')
function cellsignalCallback(strengthDbm){
	/*Begin Theme Specific Editible Code*/
		if (strengthDbm <= -97.75) { cellsignalChange(0); 
		} else if (strengthDbm > -97.75 && strengthDbm <= -95.5) { cellsignalChange(10);  
		} else if (strengthDbm > -95.5 && strengthDbm <= -93.25) { cellsignalChange(20);
		} else if (strengthDbm > -93.25 && strengthDbm <= -91) { cellsignalChange(30);
		} else if (strengthDbm > -91 && strengthDbm <= -88.75) { cellsignalChange(40);
		} else if (strengthDbm > -88.75 && strengthDbm <= -86.5) { cellsignalChange(50);
		} else if (strengthDbm > -86.5 && strengthDbm <= -84.25) { cellsignalChange(60);
		} else if (strengthDbm > -84.25 && strengthDbm <= -82) { cellsignalChange(70);
		} else if (strengthDbm > -82 && strengthDbm <= -79.75) { cellsignalChange(80);
		} else if (strengthDbm > -79.75 && strengthDbm <= -77.5) { cellsignalChange(90);
		} else if (strengthDbm > -77.5 && strengthDbm <= -75.25) { cellsignalChange(100);
		}
		function cellsignalChange(percentage){
			object_datacellsignal.text('Cell Signal:  '+percentage+'%');		
		}
	/*End Theme Specific Editible Code*/
}



//Wifi Toggle Callback
	// @ check - returns the boolean true/false if the function is just being used to check information.
	// @ returnVal - returns boolean true/false depending on if the data connection is on or off.
		// @ object_toggleWifi 
	object_toggleWifi = $('#toggle_Wifi')
function togglewifiCallback(args){
	var check = args.check
	var returnVal = args.returnVal
	/*Begin Theme Specific Editible Code*/
		if(returnVal === true){
			object_toggleWifi.attr('src', 'file:///mnt/sdcard/DOMLauncher/testing/icon_wifienabled.jpg');
			setTimeout(function(){toggleData({check:"true"});}, 10000);
		}else{
			object_toggleWifi.attr('src', 'file:///mnt/sdcard/DOMLauncher/testing/icon_wifi.jpg');
			object_datawifiSignal.text('Wifi Signal:  Disabled');	
			setTimeout(function(){toggleData({check:"true"});}, 10000);
		}
	/*End Theme Specific Editible Code*/
}




//Missed Communications Callback
	// @ type - returns the type of value checked (will be 'sms' or 'calls')
	// @ returnVal - returns an integer or OK.
		// @ object_valuemissedCalls 
	object_valuemissedCalls = $('#value_missedCalls')
	object_valueunreadSMS = $('#value_unreadSMS')
function missedcommunicationsCallback(args){
		var type = args.type;
		var returnVal = args.returnVal
	/*Begin Theme Specific Editible Code*/
		if(type == "calls"){
			object_valuemissedCalls.text("Missed Calls: " + returnVal);	
		}
		
		if(type == "sms"){
			object_valueunreadSMS.text("Unread SMS: " + returnVal);	
		}
	/*End Theme Specific Editible Code*/
}


//Screenbrightness Controls Callback
	// @ type - returns the type of value checked (will be 'sms' or 'calls')
	// @ returnVal - returns an integer or OK.
		// @ object_toggleWifi 
	object_btnautoBrightness = $('#btn_autoBrightness')
function screenbrightnessCallback(args){
	var value = args.value;
	var check = args.check;
	var float = args.float;
	var mode = args.mode;
	var returnVar = args.returnVar;	
	
	if(mode == "auto" && returnVar == 1 || check == "mode" && returnVar == 1){
		object_btnautoBrightness.text("Auto Brightness On");	
	}
	
	if(mode == "auto" && returnVar == 0 || check == "mode" && returnVar == 0){
		object_btnautoBrightness.text("Auto Brightness Off");	
	}
	
	if(value > 0){
		object_btnautoBrightness.text("Auto Brightness On");
	}

}


//Air Plane Mode Toggle
		// @ object_toggleWifi 
	object_toggleairplaneMode = $('#toggle_airplaneMode')
function toggleairplaneCallback(args){
	var returnVal = args.returnVal //Returns boolean - true/false
	/*Begin Theme Specific Editible Code*/
		if(returnVal === true){
			object_datawifiSignal.text('Wifi Signal: Disabled');	
			object_toggle34G = $('#toggle_34G').attr('src', 'file:///mnt/sdcard/DOMLauncher/testing/icon_34g.jpg');
			object_toggleWifi.attr('src', 'file:///mnt/sdcard/DOMLauncher/testing/icon_wifi.jpg');
			object_toggleairplaneMode.attr('src', 'file:///mnt/sdcard/DOMLauncher/testing/icon_airplanemodeenabled.jpg');
		}
		
		if(returnVal === false){
			object_datawifiSignal.text('Wifi Signal: Checking');	
			object_datacellsignal.text('Cell Signal: Checking');		
			object_toggleairplaneMode.attr('src', 'file:///mnt/sdcard/DOMLauncher/testing/icon_airplanemode.jpg');
			setTimeout(function(){toggleWifi({check:"true"});toggleData({check:"true"});}, 3000);
		}
	/*End Theme Specific Editible Code*/
}


/**	
*Cordova Plugin App Launcher
*------------------------------------------
*	I have choosen not to withhold any side of this plugin or javscript wrapper
*	because of how tailored an App Panel could become.
*
*	This means every feature of an 'app panel' will be on the shoulders of the 
*	theme developer.  
*
*	Below is just how the app panel is handled for this tutorial theme.
*
*	The App List Cordova API plugin does two things:  
*		Return a JSON object containing the launchable installed apps 
*		com.class.name (com.awaa.domlauncher), App Name (Camera) and
*		the apps launch activity (.DialtactsContactsEntryActivity).
*
*		The plugin also generates out, optionally, the icon image files to 
*		the apps data folder.  This is a function of the Cordova Plugin,
*		to generatate the icons or css, better to use refreshIcons() as
*		explained below.
*	
*	Some Apps are screened in the proces, not sure entirely why.  
*		The Dialer, Contacts and Settings do not show up in this list.
*		These must be custom generated like below.  The plugin is * friendly
*		making any element able to 'launch' an app.  Using <a> for the Dialer
*		allows for the system to launch the default dialer.  The attribte:
*			appName="default_Dialer"
*		is neccessary for the the baked in default dialer Icon to appear.
*		The 'default dialer' because of this, does not utilize the App Launch
*		Cordova API Plugin.  Just the native aLink web intent.
*
*	There is a universal function called refreshIcons().  This function can be used
*		and namely used for, refreshing the icon cache and rebuilding the CSS 
*		and saving both to the system.
*
*	'appName="doml_Settings"' auto generated element is an easy way to put the
*		DOMLauncher App into Settings Mode.
**/

	// @ generate - DOM Object to generate the panel contents to.
	// @ reIcon	 - boolean, true/false to have the Cordova Plugin Refresh the Icon Cache.
function generateApplist(regen){
	//Checks if the appPanel data file (.html file holding DOM Objects) exists via the native Cordova File API.
	//Does not create the file via the File API, just if it exists with 'create:false'.
	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onRequestFileSystemSuccess, null);
		function onRequestFileSystemSuccess(fileSystem) { 
			var findDirectory=fileSystem.root; 
			findDirectory.getFile("/mnt/sdcard/DOMLauncher/testing/appPanel.html", {create:false, exclusive:false}, onGetFileSuccess, onGetFileFail); 
		} 
		//File exists, load it into the DOM.
		function onGetFileSuccess(file) { 
			console.log("created"+file.name); 		
			if(regen == true){
				file.remove(success, fail);
				
				function success(){
				  console.log("ISFS Removed"); 
				}
				//File Remove Fail Callback
				function fail(){
				  console.log("ISFS Remove Failed"); 
				}
				generateApplist();
			}else{
				$('.appPanel').load('file:///mnt/sdcard/DOMLauncher/testing/appPanel.html');
			}
		} 
		//File doesn't exist.		
		function onGetFileFail(error) { 
			console.log("file does not exist"); 
			//Refreshes the Icon Cache and Regenerates the CSS File.
			refreshIcons();
			//This is the App List Cordova Plugin.  'refreshIcons:' must be either true/false.
			//True ONLY refreshes the Icon Cache.  Nothing more.
			//Generally false is the only value needed since refreshIcons(); exists for easier use.
			window.plugins.applist.show({refreshIcons:false}, 
				function(appList) {//appList is a JSON Object needing to be parsed.
					//Parse the appList
					appListArray = JSON.parse(appList);
					//For each item in the JSON Array
						// @ appName - Application Name ('DOMLauncher')
						// @ appLaunch - Package class name ('com.awaa.domlauncher')
						// @ appActivity - Acivity Intent ('.DialtactsContactsEntryActivity')
					$.each(appListArray, function(e) {
						var appName = this.name
						var appLaunch = this.package
						var appActivity = this.intent
						//I utilize a 'pixel block', 1px/1px off screen, overflow hidden to store the generated DOM Elements into.		
						$('body').append('<div class="pixelBlock"></div>');
						//Since we have some packages without intents (and these apps need the activity to launch, we listen and segment)
						if(this.package === "com.android.settings"){
							$('.pixelBlock').append('<div class="app" appLaunch="com.android.settings" appActivity=".Settings" appName="'+appName+'"><span>'+appName+'</span></div>');
							$('.pixelBlock').append('<div class="app"  appName="doml_Settings"><span>DOMLauncher Settings</span></div>');
							$('.pixelBlock').append('<a href="tel:" class="app dialer" appName="default_Dialer"><span>Dialer</span></a>');
						}else if(this.package === "com.android.contacts"){
							$('.pixelBlock').append('<div class="app" appLaunch="com.android.contacts" appActivity=".DialtactsContactsEntryActivity" appName="'+appName+'"><span>'+appName+'</span></div>');
						}else{
							$('.pixelBlock').append('<div class="app" appLaunch="'+appLaunch+'" appActivity="'+appActivity+'" appName="'+appName+'"><span>'+appName+'</span></div>');
						}
					});
				//I use a plugin called tSort to sort the DOM Elements generated.	
				$('.pixelBlock> *').tsort({attr:'appName'});
				//Collect the stored DOM Elements
				var appElements = $('.pixelBlock').html();
				//Custom Plugin to save basic non-formatted text files to the system.
				//Saves the DOM Objects generated onto the system.
				window.plugins.simplesave.show({fileObject:appElements, filePlace:"mnt/sdcard/DOMLauncher/testing/appPanel.html"}, 
					
					function() { //Success Function
						//Clears the current App Panel
						$('.appPanel').empty();
						//Removes the pixel block
						$('.pixelBlock').remove();
						//Loads the newly created file of DOM Objects into the App Panel
						$('.appPanel').load('file:///mnt/sdcard/DOMLauncher/testing/appPanel.html');
						},
					function() {alert('App Panel did not save');});// Failure function 							
			}, // Success function
			function() {alert('Loading App List Failed')}); // Failure function
		}
}
