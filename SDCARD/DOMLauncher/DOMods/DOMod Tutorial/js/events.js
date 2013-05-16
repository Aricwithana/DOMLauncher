document.getElementById("close_appPanel").addEventListener("click", hs_appPanel, false);
document.getElementById("appPanel_Show").addEventListener("click", hs_appPanel, false);

function hs_appPanel(){
	if(document.getElementById('appPanel').classList.contains('visible') === true){
		document.getElementById('appPanel').className = "";
		setTimeout(function(){document.getElementById('appPanel').style.display = "none";}, 500);
	}else{
		document.getElementById('appPanel').style.display = "block";
		setTimeout(function(){document.getElementById('appPanel').className = "visible";}, 10);
	}
}

document.getElementById("refresh_appPanel").addEventListener("click", refresh_appPanel, false);

function refresh_appPanel(){
	window.plugins.apps.generatelist();
	window.plugins.apps.generateicons();	
	window.plugins.apps.generatecss();	
}



(function() {
  var httpRequest;
  document.getElementById("weatherWrapper").onclick = function() { 
		window.plugins.simplefile.openFile({file:'/mnt/sdcard/DOMLauncher/settings/config.txt'}, 			
			function(returnVal){
				var returnArray = JSON.parse(returnVal.returnVal);
				var city = returnArray.city; 
		
				makeRequest('http://api.openweathermap.org/data/2.1/find/name?q='+city+'&units=imperial&APPID=7687bs878b9nqcn87cs78098q222788y'); 
			 
				function makeRequest(url) {
					httpRequest = new XMLHttpRequest();
					if (!httpRequest) {
					  alert('Giving up :( Probably no internet access');
					  return false;
					}
					httpRequest.onreadystatechange = alertContents;
					httpRequest.open('GET', url);
					httpRequest.send();
				}
			 
				function alertContents() {
					if (httpRequest.readyState === 4) {
						if (httpRequest.status === 200) {
							var weatherArray = JSON.parse(httpRequest.responseText);
							var weatherWrapper = document.getElementById('weatherWrapper');
							var city = weatherArray.list[0].name ;
							var temp = weatherArray.list[0].main.temp ;
							weatherWrapper.dataset.appname = city;
							weatherWrapper.dataset.temp = Math.round(temp, 1)+"°F";
						} else {
							alert('Weather Request Error-Probably No Internet Access');
						}
					}
				}
			},
			function(error) {alert('DOMLSettings Change Acive DOMod Error ' + error);}); 	
		};
})();



