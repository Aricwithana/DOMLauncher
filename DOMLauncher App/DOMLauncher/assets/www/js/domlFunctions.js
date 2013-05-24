var domCallbacks = {
	backButton: function(){
		
	},	
	//Create App Icons and List
	generateappList: function(returnVal){
		/*Begin Theme Specific Editible Code*/
			var previous_appIntent = document.querySelectorAll('*[appPackage]');
			
			for (var i = 0; i < previous_appIntent.length; i++)
			{
				previous_appIntent[i].removeEventListener("click", function(){window.plugins.launching.app(this);}, false);
			}
			
			var appListArray = JSON.parse(returnVal); 
			var appPanel = document.getElementById('appPanel'); 
			appPanel.innerHTML = ''; 
			
			var dialer = document.createElement('a');
			dialer.setAttribute('class', 'app dialer');
			dialer.setAttribute('href', 'tel:');
			dialer.setAttribute('data-appName', 'Dialer');
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
				newdiv.setAttribute('data-appName', appName);
				appPanel.appendChild(newdiv);
			}
			
			var final_appIntent = document.querySelectorAll('*[appPackage]');
			
			for (var iii = 0; iii < final_appIntent.length; iii++)
			{
				final_appIntent[iii].addEventListener("click", function(){window.plugins.launching.app(this);}, false);
			}
		/*End Theme Specific Editible Code*/
	}
}