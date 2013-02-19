document.getElementById("close_appPanel").addEventListener("click", hs_appPanel, false);
document.getElementById("appPanel_Show").addEventListener("click", hs_appPanel, false);

function hs_appPanel(){
	if(document.getElementById('appPanel').classList.contains('visible') === true){
		document.getElementById('appPanel').className = "";
		setTimeout(function(){document.getElementById('appPanel').style.display = "none;";}, 500);
	}else{
		document.getElementById('appPanel').style.display = "block";
		setTimeout(function(){document.getElementById('appPanel').className = "visible";}, 10);
	}
}

document.getElementById("refresh_appPanel").addEventListener("click", refresh_appPanel, false);

function refresh_appPanel(){
	refresh_iconCSS({refreshIcons:false});
	appList({refreshIcons:true});		
}