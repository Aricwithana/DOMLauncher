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
      File fstxtfile = new File(sdcard,"/DOMLauncher/settings/fullscreenEnabled");
      File sdcardExists = new File(sdcard,"/DOMLauncher/settings/sdcardCheck");   	
  
      
  
    	  
       			
  			if(sdcardExists.exists()){
				
				
					super.loadUrl("file:///android_asset/www/index.html");
					 if(fstxtfile.exists()){ 
							getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN, 
							WindowManager.LayoutParams.FLAG_FULLSCREEN | 
							WindowManager.LayoutParams.FLAG_FORCE_NOT_FULLSCREEN);
				      }    
				
		  									
  			}else{ 					
			
					super.loadUrl("file:///android_asset/www/dummy.html");
				
  			}
  			    
      
     
   }
} 


