
package com.phonegap;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import android.content.Intent;
import android.provider.Settings;

import org.apache.cordova.api.Plugin;
import org.apache.cordova.api.PluginResult;

public class Airplane extends Plugin {

	@Override
	public PluginResult execute(String action, JSONArray args, String callbackId) {
		try {
			
			toggleAirplane(); 
			boolean isEnabled = this.isEnabled();
			
			JSONObject JSONresult = new JSONObject();
			JSONresult.put("enabled", isEnabled);
					
			return new PluginResult(PluginResult.Status.OK, isEnabled);
		} catch (JSONException e) {
			return new PluginResult(PluginResult.Status.JSON_EXCEPTION);
		}
	}
	
	
private void toggleAirplane() {	
	
	// read the airplane mode setting
	boolean isEnabled = Settings.System.getInt(
			this.cordova.getActivity().getContentResolver(), 
	      Settings.System.AIRPLANE_MODE_ON, 0) == 1;

	// toggle airplane mode
	Settings.System.putInt(
			this.cordova.getActivity().getContentResolver(),
	      Settings.System.AIRPLANE_MODE_ON, isEnabled ? 0 : 1);

	// Post an intent to reload
	Intent intent = new Intent(Intent.ACTION_AIRPLANE_MODE_CHANGED);
	intent.putExtra("state", !isEnabled);
	this.cordova.getActivity().sendBroadcast(intent);
		
		
	}


	private boolean isEnabled() {
      
	     boolean isEnabled = Settings.System.getInt(
				this.cordova.getActivity().getContentResolver(), 
			      Settings.System.AIRPLANE_MODE_ON, 0) == 1;
	    
	    return isEnabled;

	}

}