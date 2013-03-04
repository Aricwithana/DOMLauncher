package com.phonegap;

import org.json.JSONArray;
import org.json.JSONException;
import org.apache.cordova.api.Plugin;
import org.apache.cordova.api.PluginResult;
import android.annotation.SuppressLint;
import android.bluetooth.BluetoothAdapter;
import android.database.Cursor;
import android.graphics.Camera;
import android.hardware.Camera.Parameters;
import android.net.Uri;
import android.provider.CallLog;

import android.util.Log;

public class Bluetoothcontrols extends Plugin { 

	
	@Override
    public PluginResult execute(String action, JSONArray args, String callbackId) {
		
		try {
			String state = args.getJSONObject(0).getString("state");
			String check = args.getJSONObject(0).getString("check");
			BluetoothAdapter mBluetoothAdapter = BluetoothAdapter.getDefaultAdapter();
		
			if(state.equals("on")){				
			      mBluetoothAdapter.enable();
			      return new PluginResult(PluginResult.Status.OK, true);
			}
			
			if(state.equals("off")){
				mBluetoothAdapter.disable();
				return new PluginResult(PluginResult.Status.OK, false);	
			}
			
			
			if(state.equals("toggle")){			
				if(mBluetoothAdapter.isEnabled())
			    {
			      mBluetoothAdapter.disable();
			      return new PluginResult(PluginResult.Status.OK, false);
			    }else{
			      mBluetoothAdapter.enable();
			      return new PluginResult(PluginResult.Status.OK, true);
			    }
			}
			
			if(check.equals("true")){			
				if(mBluetoothAdapter.isEnabled())
			    {
			      String returnVal = "on";
			      return new PluginResult(PluginResult.Status.OK, returnVal);
			    }else{
			    	 String returnVal = "off";
				     return new PluginResult(PluginResult.Status.OK, returnVal);
			    }
			}
	
		
		
		
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return new PluginResult(PluginResult.Status.OK);
	
	}  
}
     
	



		    

