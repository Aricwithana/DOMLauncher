package com.phonegap;

import org.json.JSONArray;

import org.apache.cordova.api.Plugin;
import org.apache.cordova.api.PluginResult;

import android.content.Context;
import android.net.wifi.WifiInfo;
import android.net.wifi.WifiManager;


public class Wifisignalgetter extends Plugin { 
    BroadcastReceiver wifireceiver;
	
	public Wifisignalgetter() {
	    this.wifireceiver = new BroadcastReceiver() {
			@Override
			public void onReceive(Context context, Intent intent) {
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
            stopListen();
    }
	
    private void startListen()
    {
		IntentFilter rssiFilter = new IntentFilter();
		rssiFilter.addAction(WifiManager.RSSI_CHANGED_ACTION);
		registerReceiver(wifireceiver, rssiFilter);
    }
    private void stopListen()
    {
		unregisterReceiver(wifireceiver);
    }
	
	@Override
    public PluginResult execute(String action, JSONArray args, String callbackId) {
		
            try {
            	String csgAction = args.getJSONObject(0).getString("action");	 
                   
                    if (csgAction.equals("start")) {
                            startListen();
							return new PluginResult(PluginResult.Status.OK, "");
                    } else if (csgAction.equals("stop")) {
                            stopListen();
							return new PluginResult(PluginResult.Status.OK, "");
                    }
                   
            } catch(Exception e) {
                    return new PluginResult(PluginResult.Status.JSON_EXCEPTION);
            }
		
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