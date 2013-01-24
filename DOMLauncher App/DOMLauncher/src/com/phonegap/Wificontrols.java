package com.phonegap;

import org.json.JSONArray;
import org.json.JSONException;

import org.apache.cordova.api.Plugin;
import org.apache.cordova.api.PluginResult;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;

import android.net.wifi.WifiManager;


public class Wificontrols extends Plugin { 

    
BroadcastReceiver wifireceiver;
	
	public Wificontrols() {
	    this.wifireceiver = new BroadcastReceiver() {
			@Override
			public void onReceive(Context context, Intent intent) {
				// TODO Auto-generated method stub
				
				if (intent.getAction().equals(WifiManager.RSSI_CHANGED_ACTION)) {
					updateSignalStrength(intent.getIntExtra(WifiManager.EXTRA_NEW_RSSI, -1));
				}
			}
		};
	}
	 
    private void updateSignalStrength(int strengthDbm) {
            sendJavascript("wifisignalCallback(" + strengthDbm + ")");
    }
	
    @Override
    public void onPause(boolean multitasking)
    {
            stopListen();
    }
   
    @Override
    public void onResume(boolean multitasking)
    {
            startListen();
    }
   
    @Override
    public void onDestroy()
    {
    	try {this.cordova.getActivity().unregisterReceiver(wifireceiver);} catch(IllegalArgumentException e) {}
    }
	
    private void startListen()
    {
		IntentFilter rssiFilter = new IntentFilter();
		rssiFilter.addAction(WifiManager.RSSI_CHANGED_ACTION);
		this.cordova.getActivity().registerReceiver(wifireceiver, rssiFilter);
    }


	private void stopListen()
    {
		try {this.cordova.getActivity().unregisterReceiver(wifireceiver);} catch(IllegalArgumentException e) {}
		
    }	
	
	
	
	
	@Override
    public PluginResult execute(String action, JSONArray args, String callbackId) {
		
		WifiManager wifiManager = (WifiManager)this.cordova.getActivity().getSystemService(Context.WIFI_SERVICE);	
		
		try {
			String check = args.getJSONObject(0).getString("check");					
			String state = args.getJSONObject(0).getString("state");	
			//Log.d(id, "Just Check:" +check);			
			if(check.equals("true")){				
				if (wifiManager.isWifiEnabled()) {	
					startListen();
					boolean wifiS = true;
					return new PluginResult(PluginResult.Status.OK, wifiS);				
				}else{
					boolean wifiS = false;
					return new PluginResult(PluginResult.Status.OK, wifiS);
				}												
			}
			
			if(check.equals("false")){				
				
				if(state.equals("on")){
					startListen();
					wifiManager.setWifiEnabled(true);
					return new PluginResult(PluginResult.Status.OK, true);	
					
				}
					
				if(state.equals("off")){
					stopListen();
					wifiManager.setWifiEnabled(false);									
					return new PluginResult(PluginResult.Status.OK, false);						
				}
						
				if(state.equals("toggle")){
					if (wifiManager.isWifiEnabled()) {				   
						//Log.d(id, "is connected:");
						stopListen();
						wifiManager.setWifiEnabled(false);									
						return new PluginResult(PluginResult.Status.OK, false);				
					}else{						
						startListen();
						wifiManager.setWifiEnabled(true);
						return new PluginResult(PluginResult.Status.OK, true);
					}							
				}				
			}
			
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();		
		}		
		return new PluginResult(PluginResult.Status.OK);			
	}	
} 
