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
			var appName = this.name
			var appLaunch = this.package
			var appActivity = this.intent
			
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