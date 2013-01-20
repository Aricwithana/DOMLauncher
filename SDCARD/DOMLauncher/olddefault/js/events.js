/**	
*Cordova Plugin API Javascript Call Functions
*------------------------------------------
*	These call functions are simply easy to use javascript wrappers to work with
*	The call functions use the {} array to send information to the JS Wrappers and
*	the Cordova API Plugins without needing to handle that code.
*	
*	The surrouding events are irrelevant, only the call functions like
*		volumeControls({...});
*	If a value is not present it will internally default to false or other 
*	necessary value.
**/




//App Launch Call Function
	// @ launchApps(this) - This event sends the DOM Object to the 
	//		wrapper.  
	//		Using '*[appLaunch], *[settings]' as the handler maintains
	//		the ability for any element to launch an app but nnot necessary
	//		for the call to work.  As long as the correct information is passed
	//		this can be customized.
$(document).on('click', '*[appLaunch], *[settings]', function() {
	launchApps(this);
});






//App Launch Call Function
	// @ volumeControls({...}) - Sends the specified commands to the Cordova Plugin
	//		@ vol + @ type:ringer - accepts down, up, silent, normal & vibrate
	//		@ vol + @ type:media - accepts down, up, mute
	//		@ check + @ type - optional command {check:true} accepts true, type accepts ringer, media, mode & maxRinger
$('#vol_ringDown').on('touchend', function(){
	volumeControls({vol:"down", type:"ringer"})
});

$('#vol_ringUp').on('touchend', function(){
	volumeControls({vol:"up", type:"ringer"})
});

$('#vol_ringSilent').on('touchend',  function(){
	volumeControls({vol:"silent", type:"ringer"})
});

$('#vol_ringVibrate' ).on('touchend', function(){
	volumeControls({vol:"vibrate", type:"ringer"})
});

$('#vol_mediaDown').on('touchend',  function(){
	volumeControls({vol:"down", type:"media"})
});

$('#vol_mediaUp').on('touchend',  function(){
	volumeControls({vol:"up", type:"media"})
});

$('#vol_mediaSilent').on('touchend',  function(){
	volumeControls({vol:"mute", type:"media"})
});




//Toggle Full Screen Call Function
	// @ toggleStatusbar({}) - Just call it, the app restarts with full screen toggled on or off.
$('#toggle_Statusbar').on('touchend', function(){
	toggleStatusbar({});
});




//Toggle Wifi Call Function
	// @ toggleWifi({}) - Just call it, toggles connection
	// @ check - optional command {check:true} to find out if wifi is enabled or not.
$('#toggle_Wifi').on('touchend', function(){
	toggleWifi({});
});




//Toggle Data Call Function
	// @ toggleData({}) - Just call it, toggle connection
	// @ check - optional command {check:true} to find out if data is enabled or not.
$('#toggle_34G').on('touchend', function(){
	toggleData({});
});




//Toggle Data Call Function
	// @ toggleAirplane({}) - Just call it, toggles airplane mode.
$('#toggle_airplaneMode').on('touchend', function(){
	toggleAirplane({});
});




//Toggle Data Call Function
	// @ generateApplist(true) - True deletes the currently saved html file holding the app objects.
	//This is only specific to this theme, since the App List/Panel is custom to the theme.
$('.apppanelControls>span:first-child').on('click', function(){
	generateApplist(true);
});


//Brightness Controls Call Function
	// @ screenBrightness(true) - True deletes the currently saved html file holding the app objects.
	//This is only specific to this theme, since the App List/Panel is custom to the theme.
$('#btn_autoBrightness').on('click', function(){
	screenBrightness({mode:"auto"});
});



	
	





//Custom Theme Specific Events.  Nothing necessary.

//Show the App Panel and Controls
$('#apps').on('click', function(){
	$('.appPanel, .apppanelControls').fadeIn("fast");
});


//Hide the App Panel and Controls
$('.apppanelControls>span:last-child').on('click', function(){
	$('.appPanel, .apppanelControls').fadeOut("fast");
});





//Non-necessary function.
//Just showing off the Cordova Plugin Call Structure.
//This 'test' plugin is a plugin within DOMLauncher 
//	specifically used for a test bed for Cordova
//	API Plugin Development.





/*$(document).on('touchend', '#domlDummy', function(){
	window.plugins.test.show({}, 
		function(missedcalls) {alert(missedcalls);},//Success Function
		function(error) {alert('Test Plugin Failed'+error);}); // Failure function
});*/