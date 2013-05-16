package com.phonegap;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStreamWriter;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.apache.cordova.api.CallbackContext;
import org.apache.cordova.api.CordovaPlugin;
import android.content.Intent;
import android.os.Environment;

public class Fullscreencontrols extends CordovaPlugin {

	@Override
	   public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
	
			File sdcard = Environment.getExternalStorageDirectory();
			//Get the text file	
			File configFile = new File(sdcard,"/DOMLauncher/settings/config.txt");     

			try {	     
				FileInputStream is = new FileInputStream(configFile);
				int size = is.available();
				byte[] buffer = new byte[size];
				is.read(buffer);
				is.close();
				String text = new String(buffer);
				JSONObject jsnobject = new JSONObject(text);

				String fullscreen = jsnobject.getString("fullscreen");  
					
				if(action.equals("check")){		       							
					if(fullscreen.equals("true")){
						callbackContext.success(new JSONObject().put("returnVal", true));	
					}else{
						callbackContext.success(new JSONObject().put("returnVal", false));
					}				
				}			
			
				if(action.equals("toggle")){
					if(fullscreen.equals("true")){
						jsnobject.put("fullscreen", "false");
						try {
							
							String content = jsnobject.toString();
							
							File myFile = new File("/mnt/sdcard/DOMLauncher/settings/config.txt");
							myFile.createNewFile();
							FileOutputStream fOut = new FileOutputStream(myFile);
							
							OutputStreamWriter myOutWriter = new OutputStreamWriter(fOut);
							myOutWriter.write(content);
							myOutWriter.close();
							fOut.close();
							callbackContext.success(new JSONObject().put("returnVal", "File Saved"));
						} catch (JSONException e) {
							callbackContext.success(new JSONObject().put("returnVal", "JSON_EXCEPTION"));
						} catch (IOException e) {
							// TODO Auto-generated catch block
							e.printStackTrace();
						}
		  				restartApp(); 
		  			}else{	
		  				jsnobject.put("fullscreen", "true");
						try {
							
							String content = jsnobject.toString();
							
							File myFile = new File("/mnt/sdcard/DOMLauncher/settings/config.txt");
							myFile.createNewFile();
							FileOutputStream fOut = new FileOutputStream(myFile);
							
							OutputStreamWriter myOutWriter = new OutputStreamWriter(fOut);
							myOutWriter.write(content);
							myOutWriter.close();
							fOut.close();
							callbackContext.success(new JSONObject().put("returnVal", "File Saved"));
						} catch (JSONException e) {
							callbackContext.success(new JSONObject().put("returnVal", "JSON_EXCEPTION"));
						} catch (IOException e) {
							// TODO Auto-generated catch block
							e.printStackTrace();
						}		  				
		  				restartApp(); 		  				
		  			}
				}		
				
				if(action.equals("restart")){					
					restartApp();
				}
			} catch (IOException e) {
				// TODO Auto-generated catch block	
				e.printStackTrace();
			} catch (JSONException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
				

			return true;	
	}
	
	private void restartApp() {			
		this.cordova.getActivity().finish(); 
		this.cordova.getActivity().startActivity(new Intent(this.cordova.getActivity(), this.cordova.getActivity().getClass()));	
	}
}