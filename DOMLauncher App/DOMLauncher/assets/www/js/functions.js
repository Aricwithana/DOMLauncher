/**	
*Cordova Plugin API Javascript Wrappers
*------------------------------------------
*	These functions are simply easy to use javascript wrappers to work with
* 	the Cordova Plugin API Calls.  The Plugin Calls can be called seperately
*	but beware, these are the offical call functions for DOMLauncher.  Updates
*	to the API on the market release use these to standardize UI Plugin
*	development and upgrade compatability.
*
*	These are built as singular packages integrated wth the callback.js file.
*	{} Array/Dictionary/etc was used on purpose for ease of developers and new
*	developers to web technologies.  Variables all have a default value attached,
*	THIS IS A MUST FOR THE API PLUGINS TO FUNCTION.  Either the needed information
*	is passes to the Cordova Plugin or it is passed 'false/other default value'. 
**/




/*App/Activity Launcher*/
function launchApps(object){ //Object var represents a DOM Elements that holds the meta information for app or activity.
	//These pull all needed information from the passed DOM Object.
	 appName = $(object).attr('appLaunch') || false;  //com.class.name
	 appActivity = $(object).attr('appActivity') || false;  //.ActivityCall
	 activityFull = appName+appActivity || false;  //Pieces the the com.class.name and the .ActivityCall into one string.
	 settings = $(object).attr('settings') || false; //Signifies launch specified settings sub category.
	
	//Initiates the Cordova Plugin
	window.plugins.launch.show({appName: appName, appActivity: activityFull, settings:settings  }, //Passes the retrived information above to the Cordova Plugin
		function() {launchappsCallback({name:name, activity:activityFull, settings:settings, object:object});}, // Cordova Plugin Success function.  Triggers callback and passes back all sent varibles.
		function() {alert('Application/Activity Launch Failed')}); // Cordova Plugin Failure function
}




//Volume Controls-Ringer, Media & Ringer Mode
function volumeControls(args){
	//Information pulled from the sent {}
	 vol = args.vol || false; 
	 type = args.type || false;
	 check = args.check || false;
	//Initisates the Volumn Control Cordova Plugin
	window.plugins.volumecontrols.show({vol:vol, type:type, check:check}, //Passes the retrived information to the Cordova Plugin.
		function(returnVal) {volumecontrolsCallback({vol:vol, type:type, check:check, returnVal:returnVal});},// Cordova Plugin Success Function.  Triggers callback, passes back all sent variables and returned var.
		function() {alert('Vol Change Error');}); // Cordova Plugin Failure function
}




//Toggle Status Bar.
function toggleStatusbar(args){
		check = args.check || false;
		window.plugins.fullscreentoggle.show({check:check}, 
			function(returnVal) {fullscreentoggleCallback({returnVal:returnVal});}, // Success function
			function() {alert('Toggle Bar Failed')}); // Failure function
}


//Nulls WifiSignal Timer
wifiSignaltimer = null;

//Toggle Wifi Plugin
function toggleWifi(args){
	//Pulls the variables from the sent {}
	check = args.check || false;
	state = args.state || false;
	
	//Trigger Wifi Toggler Cordova Plugin
	window.plugins.wifitoggler.show({check:check, state:state}, 
		
		function(returnVal) { 
			togglewifiCallback({check:check, returnVal:returnVal})
			//Wifi Signal is seperate Plugin.  This initates or disables getting the signal value, checking every 1 second when running.  Should be converted to native broadcast listener.
			if(returnVal === true){
				wifiSignaltimer = setInterval(wifiSignal, 1000);
			}else{
				clearTimeout(wifiSignaltimer);	 
			}
		},// Cordova Plugin Success Function. Returns the passed variables and the return information. 
		function() {alert('Wifi Toggle Error');}); // Cordova Plugin Failure function.
}

//Wifi Signal Plugin.  This can be called any time.  Is specifically used with the Wifi Toggle JS Wrapper.
function wifiSignal(){
	//Triggers the Wifi Signal Getter Cordova Plugin
	window.plugins.wifisignalgetter.show({}, 
		function(returnVal) {wifisignalCallback({returnVal:returnVal});},// Cordova Plugin Success Function.  Returns the signal value to the callback function.
		function() {alert('Wifi Signal Error');}); // Failure function
}





//Toggle Mobile Data Plugin.  
function toggleData(args){
	//Pulls the variables from the sent {}
	 check = args.check || false;
	 state = args.state || false;
	//Triggers the Data Toggler Cordova Plugin
	window.plugins.mobiledatatoggler.show({check:check, state:state}, 
		function(returnVal) {toggledataCallback({check:check, returnVal:returnVal, state:state});}, //Cordova Plugin Success Function.  Returns the sent variables and returned value.
		function() {alert('Toggle Data Error');}); // Failure function
}




//Celluar Signal Plugin
function cellSiganl(args){
	 action = args.action
	//Triggers the Broadcast Receiving Cell Signal Cordova Plugin.
	//Accepts more than 'start', have to add the other options.
	//This plugins 'callback' is a specific function found in callback.js
	//	that is called from the native Java.  Not as a part of the code below.
	window.plugins.cellularsignalgetter.show({action:action}, 
		function() {console.log("Cell Signal Works"); },//Cordova Plugin Success Function
		function() {alert('Cellular Signal Error');	}); // Failure function
}




//Battery Level.  A simple wrapper for native Cordova API
function batteryLevel(){
	//Trigger the listener and sets the callback function when the battery information changes.
	window.addEventListener("batterystatus", batterylevelCallback, false);
}

 


//Toggle Air Plane Mode
function toggleAirplane(){	
	//Triggers API Plugin 
	window.plugins.airplane.show({}, 
		function(returnVal) {
			toggleairplaneCallback({returnVal:returnVal});
			if(returnVal === true){
				clearTimeout(wifiSignaltimer);
			}
		}, // Cordova Plugin Success function.  Auto-clears the built in Wifi Signal Getter Timer.  Returns the Airplane mode value.
		function() {alert('Airplane Toggle Failed')}); // Failure function
}






function screenBrightness(args){
	 value = args.value || -1
	 check = args.check || false
	 float = value || false
	 mode = args.mode || false
	window.plugins.screenbrightness.show({check:check, value:value, mode:mode, float:float}, 
		function(returnVar) { 
		screenbrightnessCallback({value:value, check:check, float:float, mode:mode, returnVar:returnVar})},//Success Function
		function(error) {alert('missed calls error' + error);}); // Failure function
}




//Toggle Options Mode.
function optionsMode(){
	
	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onRequestFileSystemSuccess, null);  //Initiates the Cordova File API

	function onRequestFileSystemSuccess(fileSystem) { 
		var findDirectory=fileSystem.root; 
		//Checks if triggersettings.txt file exists within the app Data Folder Loaded Theme Folder but does not create it.
		findDirectory.getFile("/mnt/sdcard/DOMLauncher/settings/triggersettings.txt", {create:true, exclusive: false}, onGetDirectorySuccess, onGetDirectoryFail); 
	} 
	function onGetDirectorySuccess(file) { 
		window.plugins.fullscreentoggle.show({}, 
				function() {}, // Success function
				function() {alert('Options Mode Failed')}); // Failure function
	} 
	function onGetDirectoryFail(error) { 	
	} 	
}


//Missed SMS/Calls Value.
function missedCommunications(args){
	 type = args.type || false;
	
	window.plugins.missedcommunications.show({type:type}, 
		function(returnVal) {missedcommunicationsCallback({type:type, returnVal:returnVal});},//Success Function
		function(error) {alert('Missed Plugin Failed'+error);}); // Failure function
}










function appList(args){
	 refreshIcons = args.refreshIcons || false
	
	window.plugins.applist.show({refreshIcons:refreshIcons}, 
		function(appList) {//appList is a JSON Object needing to be parsed.
			applistCallback(appList);	
	}, // Success function
	function() {alert('Loading App List Failed')}); // Failure function

}













function refresh_iconCSS(args){
	 refreshIcons = args.refreshIcons || false
	window.plugins.applist.show({refreshIcons:refreshIcons}, //App Package Name
		function(appList) {
			appListArray = JSON.parse(appList);
			styleVar = $('<style id="iconsCss">');
			
			$.each(appListArray, function(e) {
				var appName = this.name
				var appLaunch = this.package
				var appActivity = this.intent
				
					if(this.package === "com.android.settings"){
						$(styleVar).append('*[appLaunch="com.android.settings"]{background-image:url(file:///mnt/sdcard/DOMLauncher/settings/icons/com.android.settings.png);}');
						$(styleVar).append('*[appName="doml_Settings"]{background-image:url(file:///mnt/sdcard/DOMLauncher/settings/icons/com.android.settings.png);}');
					}else if(this.package === "com.android.contacts"){
						$(styleVar).append('*[appLaunch="com.android.contacts"]{background-image:url(file:///mnt/sdcard/DOMLauncher/settings/icons/com.android.contacts.png);}');
					}else{
						$(styleVar).append('*[appLaunch="'+appLaunch+'"]{background-image:url(file:///mnt/sdcard/DOMLauncher/settings/icons/'+appLaunch+'.png);}');
					}
			});
				$('#iconsCss').remove();
				$('head').append(styleVar);
				
				window.plugins.simplesave.show({fileObject:styleVar.text(), filePlace:"/mnt/sdcard/DOMLauncher/settings/icons/icons.css"}, 
				
				function() { //Success Function
					
					//alert('yes save css');
					},
				function() {// Failure function
					alert('no save css');
				}); 							
			
			}, // Success function
		function() {alert('Refresh Icons Failed')}); // Failure function						
} 
