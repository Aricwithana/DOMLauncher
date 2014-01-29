package com.awaa.domlauncher;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStreamWriter;

import android.content.pm.ActivityInfo;
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
				String orientation = jsnobject.getString("orientation");  
				
				File themeLocation = new File(sdcard,"/DOMLauncher/DOMods/"+activeTheme+"/index.html");
				
				if(themeLocation.exists()){  
					super.loadUrl("file:///" + themeLocation.getAbsolutePath());
					if(orientation.equals("landscape")){ 
						super.setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_LANDSCAPE);
					}
					if(orientation.equals("portrait")){ 
						super.setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_PORTRAIT);
					}  
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
			File appDir = new File(sdcard+"/DOMLauncher");
			if(sdcard.exists()){
			    if(!appDir.exists()){
			    	File domods = new File(sdcard+"/DOMLauncher/DOMods");
			    	File settings = new File(sdcard+"/DOMLauncher/settings");
			    	File icons = new File(sdcard+"/DOMLauncher/settings/icons");
			        appDir.mkdirs();
			        settings.mkdirs();
			        domods.mkdirs();
			        icons.mkdirs();
	
					try {		
						JSONObject json = new JSONObject();
						json.put("active", "null").put("fullscreen", "true").put("orientation", "portrait").put("city", "Fargo,ND").put("screen", "false");				
						String results = json.toString();	
						
						File myFile = new File(sdcard, "/DOMLauncher/settings/config.txt");
						myFile.createNewFile();
						FileOutputStream fOut = new FileOutputStream(myFile);
						  
						OutputStreamWriter myOutWriter = new OutputStreamWriter(fOut);
						myOutWriter.write(results);
						myOutWriter.close();
						fOut.close();
						
					} catch (IOException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					} catch (JSONException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
					
					
			    }
			}			
			super.loadUrl("file:///android_asset/www/dummy.html");				
		}
	}
} 


