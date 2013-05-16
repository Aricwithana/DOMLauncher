package com.awaa.domlauncher;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;

import android.os.Bundle;
import android.os.Environment;

import android.view.WindowManager;

import org.apache.cordova.*;
import org.json.JSONException;
import org.json.JSONObject;

public class DOMLauncher extends DroidGap {

	@Override
	public void onCreate(Bundle savedInstanceState) {
	    	
		super.onCreate(savedInstanceState);
		super.clearCache();      
		
		File sdcard = Environment.getExternalStorageDirectory();
		File configFile = new File(sdcard,"/DOMLauncher/settings/config.txt");     
	  
		if(configFile.exists()){
			try {	     
				FileInputStream is = new FileInputStream(configFile);
				int size = is.available();
				byte[] buffer = new byte[size];
				is.read(buffer);
				is.close();
				String text = new String(buffer);
				JSONObject jsnobject = new JSONObject(text);

				String activeTheme = jsnobject.getString("active");
				String fullscreen = jsnobject.getString("fullscreen");  
				
				File themeLocation = new File(sdcard,"/DOMLauncher/DOMods/"+activeTheme+"/index.html");
				
				if(themeLocation.exists()){  
					super.loadUrl("file:///sdcard/DOMLauncher/DOMods/"+activeTheme+"/index.html");
					if(fullscreen.equals("true")){ 
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
			} catch (JSONException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}else{ 								
			super.loadUrl("file:///android_asset/www/dummy.html");				
		}
	}
} 


