package com.awaa.domlauncher;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;

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
		  
		File fstxtfile = new File(sdcard,"/DOMLauncher/settings/fullscreenEnabled");
		File activeTheme = new File(sdcard,"/DOMLauncher/settings/activeTheme.txt");     
	
		if(activeTheme.exists()){
			try {	     
				FileInputStream is = new FileInputStream(activeTheme);
				int size = is.available();
				byte[] buffer = new byte[size];
				is.read(buffer);
				is.close();
				String text = new String(buffer);
				   
				File themeLocation = new File(sdcard,"/DOMLauncher/"+text+"/index.html");
				
				if(themeLocation.exists()){  
					super.loadUrl("file:///sdcard/DOMLauncher/"+text+"/index.html");
					if(fstxtfile.exists()){ 
						getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN, 
						WindowManager.LayoutParams.FLAG_FULLSCREEN | 
						WindowManager.LayoutParams.FLAG_FORCE_NOT_FULLSCREEN);
					}  
				}else{
					super.loadUrl("file:///android_asset/www/dummy.html");    
				}	
			} catch (IOException e) {
				// TODO Auto-generated catch block	
				e.printStackTrace();
			}
		}else{ 								
			super.loadUrl("file:///android_asset/www/dummy.html");				
		}
	}
} 


