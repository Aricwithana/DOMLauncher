package com.awaa.domlauncher;

import java.io.File;

import android.os.Bundle;
import android.os.Environment;

import android.view.WindowManager;


import org.apache.cordova.*;

public class DOMLauncher extends DroidGap {

    @Override
    public void onCreate(Bundle savedInstanceState) {
  
    	super.onCreate(savedInstanceState);
        super.clearCache();      
       
        
     
      File sdcard = Environment.getExternalStorageDirectory();
      //Get the text file
 
      File fstxtfile = new File(sdcard,"/DOMLauncher/settings/isFullscreen.txt");
      File optionsScreen = new File(sdcard,"/DOMLauncher/settings/yesOptionscreen.txt");
      File settingsFile = new File(sdcard,"/DOMLauncher/settings/settings.xml"); 
      File themeFile = new File(sdcard,"/DOMLauncher/currentTheme/index.html");   
      File settingsMode = new File(sdcard,"/DOMLauncher/settings/triggersettings.txt");   	
      File testingMode =  new File(sdcard,"/DOMLauncher/testing/testing.txt");   
      
      if(settingsMode.exists()){
    	  super.loadUrl("file:///android_asset/www/options.html");	
      }else{
    	  
         if(settingsFile.exists()){ 			
  			if(themeFile.exists()){
  				if(optionsScreen.exists()){
  					super.loadUrl("file:///mnt/sdcard/DOMLauncher/options.html");
  				}else{
  					
  					if(testingMode.exists()){
	  					super.loadUrl("file:///android_asset/www/testing.html");  						
  					}else{
	  					super.loadUrl("file:///android_asset/www/index.html");
  					}
  				  				
  				}	
  			}else{ 					
				if(testingMode.exists()){
					super.loadUrl("file:///android_asset/www/testing.html");  						
				}else{
					super.loadUrl("file:///android_asset/www/options.html");
				}
  			}
  			
  		}else{         	  
  			super.loadUrl("file:///android_asset/www/options.html");
  		}
      		
      }
      
      
      if(fstxtfile.exists()){ 
			getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN, 
			WindowManager.LayoutParams.FLAG_FULLSCREEN | 
			WindowManager.LayoutParams.FLAG_FORCE_NOT_FULLSCREEN);
      }    
   }
} 


