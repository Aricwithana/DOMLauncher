$('#close_appPanel').on('click', function(){
	$('.appPanel').fadeOut('fast');
});

$('#appPanel_Show').on('click', function(){
	$('.appPanel').fadeIn('fast');
});

$('#refresh_appPanel').on('click', function(){
	refresh_iconCSS({refreshIcons:false});
	appList({refreshIcons:true})	
});

$(document).on('click', '*[appLaunch], *[settings]', function() {
	launchApps(this);
});