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


/*$('.switch>div:last-child').on('touchend', function(){
	handle = $(this).siblings('div');
	switchID = $(this).parent('.switch').attr('id');
	handlePOS = parseInt($(handle).css('left'));
	
	if(handlePOS <= 49){$(handle).animate({left:'100px'}, 250).addClass('on'); switchCallback({state:"on", id:switchID});}
	if(handlePOS >= 50){$(handle).animate({left:'0px'}, 250).removeClass('on');switchCallback({state:"off", id:switchID});}	  
	handlePOS = null;
	handle = null;
});	*/
