package com.phonegap;

import org.json.JSONArray;
import org.apache.cordova.api.Plugin;
import org.apache.cordova.api.PluginResult;
import android.content.Intent;

public class Fullscreentoggle extends Plugin {

	@Override
	public PluginResult execute(String action, JSONArray args, String callbackId) {
		
		restartApp(); 
				
	return new PluginResult(PluginResult.Status.OK);
	
	}
	
private void restartApp() {
				
	this.cordova.getActivity().finish(); 
	this.cordova.getActivity().startActivity(new Intent(this.cordova.getActivity(), this.cordova.getActivity().getClass()));
		
	}

}