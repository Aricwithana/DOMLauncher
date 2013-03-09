package com.phonegap;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import android.content.Intent;
import android.provider.Settings;

import org.apache.cordova.api.CallbackContext;
import org.apache.cordova.api.CordovaPlugin;

public class Airplane extends CordovaPlugin {

	@Override
	public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
	
			if(action.equals("check")){
				boolean isEnabled = Settings.System.getInt(this.cordova.getActivity().getContentResolver(), Settings.System.AIRPLANE_MODE_ON, 0) == 1;
				callbackContext.success(new JSONObject().put("returnVal", isEnabled));
			}
			
			if(action.equals("enable")){
				Settings.System.putInt(this.cordova.getActivity().getContentResolver(), Settings.System.AIRPLANE_MODE_ON, 1);
				Intent intent = new Intent(Intent.ACTION_AIRPLANE_MODE_CHANGED);
				intent.putExtra("state", 1);
				this.cordova.getActivity().sendBroadcast(intent);
				
				callbackContext.success(new JSONObject().put("returnVal", true));
			}
			
			if(action.equals("disable")){
				Settings.System.putInt(this.cordova.getActivity().getContentResolver(), Settings.System.AIRPLANE_MODE_ON, 0);
				Intent intent = new Intent(Intent.ACTION_AIRPLANE_MODE_CHANGED);
				intent.putExtra("state", 0);
				this.cordova.getActivity().sendBroadcast(intent);
				
				callbackContext.success(new JSONObject().put("returnVal", false));
			}
			
			if(action.equals("toggle")){
				toggleAirplane(); 
				boolean isEnabled = this.isEnabled();
				
				callbackContext.success(new JSONObject().put("returnVal", isEnabled));
			}

		return true;
	}
	
	
	private void toggleAirplane() {	
	
		// read the airplane mode setting
		boolean isEnabled = Settings.System.getInt(this.cordova.getActivity().getContentResolver(), Settings.System.AIRPLANE_MODE_ON, 0) == 1;
	
		// toggle airplane mode
		Settings.System.putInt(this.cordova.getActivity().getContentResolver(), Settings.System.AIRPLANE_MODE_ON, isEnabled ? 0 : 1);
	
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