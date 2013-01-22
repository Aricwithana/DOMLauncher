function applistCallback(appList){
	//Parse the appList
		
		appListArray = JSON.parse(appList);
		//For each item in the JSON Array
			// @ appName - Application Name ('DOMLauncher')
			// @ appLaunch - Package class name ('com.awaa.domlauncher')
			// @ appActivity - Acivity Intent ('.DialtactsContactsEntryActivity')
		$appPanel = $('.appPanel_Content');
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
			 appName = null
			 appLaunch = null
			 appActivity = null
		});
		appListArray = null;
		$appPanel = null
}

/*Clock CSS
	http://css-tricks.com/css3-clock/
	PUBLISHED NOVEMBER 17, 2008
	Toby Pitman http://www.tobypitman.com/
*/

//Clock Timer 
clockTimer = null;
	
 function clock() {
	date = new Date();
	mins = date.getMinutes();

	$("#sec").css({"-webkit-transform" : "rotate(" + date.getSeconds() * 6 + "deg)"});
	$("#hour").css({"-webkit-transform" : "rotate(" + date.getHours() * 30 + (mins / 2) + "deg)"});
	$("#min").css({"-webkit-transform": "rotate(" + mins * 6 + "deg)"});
	
	 date = null;
	 mins = null;
}







function switches(){
	$( ".switch>div:first-child" ).each(function(){
		$(this).draggable({containment: "parent",distance:1,
			create: function( event, ui ) {},
			stop: function( event, ui ) {
				handle = $(this);
				switchID = $(handle).parent('.switch').attr('id');
				handlePOS =  $(handle).attr('data-pos');
				
				if(handlePOS >= 49){if(handlePOS != 100){$(handle).animate({left:'100px'}, 250).addClass('on');}  switchCallback({state:"on", id:switchID});}
				if(handlePOS <= 50){$(handle).animate({left:'0px'}, 250).removeClass('on'); switchCallback({state:"off", id:switchID});}	  
				handlePOS = null;
				switchID = null;
				handle = null;
				
			},
			drag: function( event, ui ) {  
				handle = $(this);
				handlePOS = parseInt($(handle).css('left'))
				$(handle).attr('data-pos', handlePOS);
				
				if( handlePOS >= 49  && $(handle).hasClass('on') == false){$(handle).addClass('on'); }
				if(handlePOS <= 50 && $(handle).hasClass('on') == true){$(handle).removeClass('on');}  
				$('#slider>ul, #slider, #slider>ul>li').on('touchmove', function(e){e.stopPropagation();});   
				handlePOS = null;
				handle = null;
			}
		});
	});
}

function switchCallback(args){
	switchID = args.id || null;
	state = args.state || null;

	if(switchID === "toggle_fullScreen"){
		toggleStatusbar({});
	}
	
	if(switchID === "toggle_wifi" && state === "on"){
		toggleWifi({state:"on"});
	}
	
	if(switchID === "toggle_wifi" && state === "off"){
		toggleWifi({state:"off"});
	}
	
	if(switchID === "toggle_data" && state === "off"){
		toggleData({state:"off"});
	}
	if(switchID === "toggle_data" && state === "on"){
		toggleData({state:"on"});
	}
	
}	
	
function fullscreentoggleCallback(args){
	returnVal = args.returnVal
	
	if(returnVal != true){
		$('#toggle_fullScreen>div:first-child').css('left', '0px').removeClass('on');
	}else{
		$('#toggle_fullScreen>div:first-child').css('left', '100px').addClass('on');
	}
	
}



//Wifi Toggle Callback
	// @ check - returns the boolean true/false if the function is just being used to check information.
	// @ returnVal - returns boolean true/false depending on if the data connection is on or off.
		// @ object_toggleWifi 
	
function togglewifiCallback(args){
	 check = args.check
	 returnVal = args.returnVal
	 state = args.state
	/*Begin Theme Specific Editible Code*/
		if(returnVal === true){
			$('#toggle_wifi>div:first-child').css('left', '100px').addClass('on');
			setTimeout(function(){toggleData({check:"true"});}, 10000);
		}
		if(returnVal === false){
			$('#toggle_wifi>div:first-child').css('left', '0px').removeClass('on');
			setTimeout(function(){toggleData({check:"true"});}, 10000);
		
		}
	/*End Theme Specific Editible Code*/
}



//Data Toggle Callback
	// @ check - returns the boolean true/false if the function is just being used to check information.
	// @ returnVal - returns boolean true/false depending on if the data connection is on or off.
function toggledataCallback(args){
	 returnVal = args.returnVal
	 check = args.check
	 state = args.state
	/*Begin Theme Specific Editible Code*/
		if(returnVal === true){
			$('#toggle_data>div:first-child').css('left', '100px').addClass('on');
			
		}
		if(returnVal === false){
			$('#toggle_data>div:first-child').css('left', '0px').removeClass('on');
			
		
		}
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
function wifisignalCallback(args){
	 returnVal = args.returnVal
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
	
		function wifiChange(percentage){
		}
	/*End Theme Specific Editible Code*/
}












    // Handle the pause event
    function onPause() {
		clearInterval(clockTimer);
	}

	
	// Handle the resume event
	function onResume() {
		clockTimer = setInterval(clock, 1000);
	}
