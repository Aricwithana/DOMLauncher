package com.phonegap;

import org.json.JSONArray;

import org.apache.cordova.api.Plugin;
import org.apache.cordova.api.PluginResult;

import android.content.Context;
import android.net.wifi.WifiInfo;
import android.net.wifi.WifiManager;


public class Wifisignalgetter extends Plugin { 
    
	@Override
    public PluginResult execute(String action, JSONArray args, String callbackId) {
		
		
		//Log.d(id, "1 is:");
		WifiManager wifiManager = (WifiManager) this.cordova.getActivity().getSystemService(Context.WIFI_SERVICE);
		//Log.d(id, "2 is:");
		WifiInfo wifiInfo = wifiManager.getConnectionInfo();
		//Log.d(id, "3 is:" ); 
		int rssiVal = wifiInfo.getRssi();
		
		
		
		//Log.d(id, "signal is:" +haha);
		
		
		
		
			return new PluginResult(PluginResult.Status.OK, rssiVal);
		
			
	}
	
} 
