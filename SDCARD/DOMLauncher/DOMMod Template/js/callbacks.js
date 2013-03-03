/*Document Ready*/
document.addEventListener("deviceready", themeLoaded, false);

/*Document Ready Success Function*/
function themeLoaded(){

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
	var appPanel = document.getElementById('appPanel_Content'); //Choose the place the app icons are generated.
	appPanel.innerHTML = ''; 
	
	var dialer = document.createElement('a');
	dialer.setAttribute('class', 'app dialer');
	dialer.setAttribute('href', 'tel:');
	dialer.setAttribute('appName', 'Dialer');
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
		newdiv.setAttribute('appName', appName);
		appPanel.appendChild(newdiv);
	}
	
	var final_appIntent = document.querySelectorAll('*[appPackage]');
	
	for (var iii = 0; iii < final_appIntent.length; iii++)
	{
		final_appIntent[iii].addEventListener("click", function(){launchApps(this);}, false);
	}
		
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
	/*End Theme Specific Editible Code*/
}	
	

/*Screenbrightness Controls Callback*/
function screenbrightnessCallback(args){
	var value = args.value;
	var check = args.check;
	var float = args.float;
	var toggle = args.toggle;
	var auto = args.auto;
	var returnVal = args.returnVal;	

	/*Begin Theme Specific Editible Code*/
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
	/*End Theme Specific Editible Code*/
}




/*Air Plane Mode Toggle*/
function toggleairplaneCallback(args){
	var returnVal = args.returnVal 
	var state = args.state 
	var check = args.check 
		
	/*Begin Theme Specific Editible Code*/
	/*End Theme Specific Editible Code*/
}




/*Fullscreen Toggle Callback*/
function fullscreentoggleCallback(args){
	var returnVal = args.returnVal
	
	/*Begin Theme Specific Editible Code*/
	/*End Theme Specific Editible Code*/
}




/*Wifi Toggle Callback*/
function togglewifiCallback(args){
	var check = args.check
	var returnVal = args.returnVal
	var state = args.state
	
	/*Begin Theme Specific Editible Code*/
	/*End Theme Specific Editible Code*/
}




/*Data Toggle Callback*/
function toggledataCallback(args){
	 var returnVal = args.returnVal
	 var check = args.check
	 var state = args.state 
	 
	/*Begin Theme Specific Editible Code*/
	/*End Theme Specific Editible Code*/
}




/*Wifi Signal Callback - A REQUIRED FUNCTION IF WIFI CONTROLS PLUGIN IS USED.*/
function wifisignalCallback(strengthDbm){
	
	/*Begin Theme Specific Editible Code*/
		maxStrength = -50; 
		minStrength = -120; 
		wifiChange(Math.round(100 - Math.max(0, Math.min((strengthDbm - maxStrength) / (minStrength - maxStrength), 1) * 100)))	
	/*End Theme Specific Editible Code*/
}
	//Used with the Wifi Signal Callback Function.
	function wifiChange(percentage){
	}




/*Cellular Signal Callback*/
function cellsignalCallback(strengthDbm){
	/*Begin Theme Specific Editible Code*/
		maxStrength = -70; 
		minStrength = -100; 
		cellsignalChange(Math.round(100 - Math.max(0, Math.min((strengthDbm - maxStrength) / (minStrength - maxStrength), 1) * 100)))	
	/*End Theme Specific Editible Code*/
}
	//Used with the Cellular Signal Callback Function.
	function cellsignalChange(percentage){
	}




/*Battery Level Receiver */
function batterylevelCallback(info){ 
	
	/*Begin Theme Specific Editible Code*/
	/*End Theme Specific Editible Code*/
}




/*Launch App/Acitivity/Setting Callback*/
function launchappsCallback(args){
	var package = args.package
	var activity = args.activityFull
	var settings = args.settings
	var object = args.object
	
	/*Begin Theme Specific Editible Code*/
	/*End Theme Specific Editible Code*/
}




/*Missed Communications Callback*/
function missedcommunicationsCallback(args){
	var type = args.type;
	var returnVal = args.returnVal
	
	/*Begin Theme Specific Editible Code*/
	/*End Theme Specific Editible Code*/
}




/*Handle the pause event*/
function onPause() {
}

	
	
	
/*Handle the resume event*/
function onResume() {
}
