package com.phonegap;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStreamWriter;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.apache.cordova.api.CallbackContext;
import org.apache.cordova.api.CordovaPlugin;
import org.apache.cordova.api.Plugin;
import org.apache.cordova.api.PluginResult;
import android.content.Intent;
import android.os.Environment;

public class Fullscreencontrols extends CordovaPlugin {

	@Override
	   public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
		
		
	
			//String check = args.getJSONObject(0).getString("check");
			
			File sdcard = Environment.getExternalStorageDirectory();
			//Get the text file
			File fstxtfile = new File(sdcard,"/DOMLauncher/settings/fullscreenEnabled"); 	
			
			if(action.equals("check")){		       							
				if(fstxtfile.exists()){
					callbackContext.success(new JSONObject().put("returnVal", true));	
				}else{
					callbackContext.success(new JSONObject().put("returnVal", false));
				}				
			}

			if(action.equals("toggle")){
				if(fstxtfile.exists()){
	  				fstxtfile.delete();
	  				restartApp(); 
	  			}else{	  				
	  				try {
						fstxtfile.createNewFile();
						restartApp(); 
					} catch (IOException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}	  				
	  			}
			}		
			return true;	
	}
	
	private void restartApp() {			
		this.cordova.getActivity().finish(); 
		this.cordova.getActivity().startActivity(new Intent(this.cordova.getActivity(), this.cordova.getActivity().getClass()));	
	}
}