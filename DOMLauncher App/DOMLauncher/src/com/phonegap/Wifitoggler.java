package com.phonegap;

import org.json.JSONArray;
import org.json.JSONException;

import org.apache.cordova.api.Plugin;
import org.apache.cordova.api.PluginResult;

import android.content.Context;

import android.net.wifi.WifiManager;

public class Wifitoggler extends Plugin { 
    
	@Override
    public PluginResult execute(String action, JSONArray args, String callbackId) {
		
		//ConnectivityManager connManager = (ConnectivityManager) this.cordova.getActivity().getSystemService(Context.CONNECTIVITY_SERVICE);
		//NetworkInfo mWifi = connManager.getNetworkInfo(ConnectivityManager.TYPE_WIFI);
		WifiManager wifiManager = (WifiManager)this.cordova.getActivity().getSystemService(Context.WIFI_SERVICE);	
		
		try {
			String check = args.getJSONObject(0).getString("check");		
			//Log.d(id, "Just Check:" +check);			
			if(check.equals("true")){				
				if (wifiManager.isWifiEnabled()) {					   				
					boolean wifiS = true;
					return new PluginResult(PluginResult.Status.OK, wifiS);				
				}else{	
					boolean wifiS = false;
					return new PluginResult(PluginResult.Status.OK, wifiS);
				}												
			}
			if(check.equals("false")){				
				if (wifiManager.isWifiEnabled()) {				   
					//Log.d(id, "is connected:");
					wifiManager.setWifiEnabled(false);					
					boolean wifiS = false;					
					return new PluginResult(PluginResult.Status.OK, wifiS);				
				}else{	
					boolean wifiS = true;
					wifiManager.setWifiEnabled(true);
					return new PluginResult(PluginResult.Status.OK, wifiS);
				}								
			}						
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();		
		}		
		return new PluginResult(PluginResult.Status.OK);			
	}	
} 
