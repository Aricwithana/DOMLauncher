$('#close_appPanel, #appPanel_Show').on('click', function(){
	
	if($('.appPanel').hasClass('visible')){
		$('.appPanel').removeClass('visible');
		setTimeout(function(){$('.appPanel').css('display', 'none');}, 500);
	}else{
		
		$('.appPanel').css('display', 'block');
		
		setTimeout(function(){$('.appPanel').addClass('visible');}, 10);
	}

});

$('#refresh_appPanel').on('click', function(){
	refresh_iconCSS({refreshIcons:false});
	appList({refreshIcons:true})	
});

$(document).on('click', '*[appLaunch], *[settings]', function() {
	launchApps(this);
});