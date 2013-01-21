package com.phonegap;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStreamWriter;

import org.json.JSONArray;
import org.json.JSONException;
import org.apache.cordova.api.Plugin;
import org.apache.cordova.api.PluginResult;
import android.content.Intent;
import android.os.Environment;

public class Fullscreentoggle extends Plugin {

	@Override
	public PluginResult execute(String action, JSONArray args, String callbackId) {
		
		
		try {
			String check = args.getJSONObject(0).getString("check");
			
			File sdcard = Environment.getExternalStorageDirectory();
			//Get the text file
			File fstxtfile = new File(sdcard,"/DOMLauncher/settings/fullscreenEnabled"); 	
			
			if(check.equals("true")){
					       			
				if(fstxtfile.exists()){
					
					return new PluginResult(PluginResult.Status.OK, true);
				}else{
					return new PluginResult(PluginResult.Status.OK, false);
				}
					
			}else{

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
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	return new PluginResult(PluginResult.Status.OK);
	
	}
	
private void restartApp() {
				
	this.cordova.getActivity().finish(); 
	this.cordova.getActivity().startActivity(new Intent(this.cordova.getActivity(), this.cordova.getActivity().getClass()));
		
	}

}