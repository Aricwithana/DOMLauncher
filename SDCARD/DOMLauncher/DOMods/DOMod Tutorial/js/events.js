// JavaScript Document

//App Launch Event
$(document).on('click', '*[data-appPackage]', function(){
	window.plugins.launching.app(this);
});


//Hide Show App Panel
$(document).on('click', '#close_appPanel, #appPanel_Show', function(){
	if($('#appPanel').hasClass('visible')){
		$('#appPanel').removeClass('visible');
		setTimeout(function(){$('#appPanel').css('display', 'none');}, 500);
	}else{
		$('#appPanel').css('display', 'block');
		setTimeout(function(){$('#appPanel').addClass('visible');}, 10);
	}
});


//Refresh Apps
$(document).on('click', '#refresh_appPanel', function(){ 
	window.plugins.apps.generatelist(suc_generateappList);
	window.plugins.apps.generateicons();	
	window.plugins.apps.generatecss();	
});


//Main Control Events
$(document).on('click', '#btn_ringerDown', function(){ window.plugins.ringer.down(true, suc_ringerDown); });
$(document).on('click', '#btn_ringerUp', function(){ window.plugins.ringer.up(true, suc_ringerUp); });
$(document).on('click', '#btn_ringerSilent', function(){ window.plugins.ringer.silent(suc_ringerSilent); });
$(document).on('click', '#btn_ringerVibrate', function(){ window.plugins.ringer.vibrate(suc_ringerVibrate); });
$(document).on('click', '#btn_mediaDown', function(){ window.plugins.media.down(true); });
$(document).on('click', '#btn_mediaUp', function(){ window.plugins.media.up(true); });
$(document).on('click', '#btn_bluetooth', function(){ window.plugins.bluetooth.toggle(suc_bluetoothToggle); });
$(document).on('click', '#btn_wifi', function(){ window.plugins.wifi.toggle('wifiSignal', suc_wificontrolsToggle); });
$(document).on('click', '#btn_data', function(){ window.plugins.data.toggle(suc_dataconnectionToggle); });
$(document).on('click', '#btn_fullscreen', function(){ window.plugins.fullscreen.toggle(); });
$(document).on('click', '#btn_brightAuto', function(){window.plugins.brightness.autotoggle(suc_brightnessautoToggle);});
$(document).on('click', '#btn_portrait', function(){window.plugins.screenorient.portrait();});
$(document).on('click', '#btn_landscape', function(){window.plugins.screenorient.landscape();});
$(document).on('click', '#btn_rotate', function(){window.plugins.screenorient.rotate();});


/**
*	Brightness Controls
*		There is no default up/down for the brightness controls.
*		This is done on purpose because of the large range of
*		values for brightness.  More info, check the wiki.
*		Below shows off turning the value range into a 1-10 range.
*/

$(document).on('click', '#btn_brightDown', function(){
	var current = parseInt($('#btn_brightUp').attr('data-bright'));	
	var value = Math.round(((current-1) *.1)*255)
	$('#btn_displayAuto').removeAttr('enabled').attr('disabled', '');

	if(value > 0){
		window.plugins.brightness.value(value);
		$('#btn_brightDown, #btn_brightUp').attr('data-bright', current-1);
	}
});

$(document).on('click', '#btn_brightUp', function(){
	var current = parseInt($('#btn_brightUp').attr('data-bright'));	
	var value = Math.round(((current+1) *.1)*255);
	$('#btn_displayAuto').removeAttr('enabled').attr('disabled', '');
	if(value <= 255){
		window.plugins.brightness.value(value);
		$('#btn_brightUp, #btn_brightDown').attr('data-bright', current+1);
	}
});

