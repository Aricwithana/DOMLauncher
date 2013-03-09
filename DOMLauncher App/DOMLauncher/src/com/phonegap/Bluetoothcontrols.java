package com.phonegap;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.apache.cordova.api.CallbackContext;
import org.apache.cordova.api.CordovaPlugin;
import android.bluetooth.BluetoothAdapter;

public class Bluetoothcontrols extends CordovaPlugin { 

	@Override
	public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
		
		BluetoothAdapter mBluetoothAdapter = BluetoothAdapter.getDefaultAdapter();
	
		if(action.equals("enable")){				
		      mBluetoothAdapter.enable();
		      callbackContext.success(new JSONObject().put("returnVal", true));
		}
		
		if(action.equals("disable")){
			mBluetoothAdapter.disable();
			callbackContext.success(new JSONObject().put("returnVal", false));
		}
		
		if(action.equals("toggle")){			
			if(mBluetoothAdapter.isEnabled())
		    {
		      mBluetoothAdapter.disable();
		      callbackContext.success(new JSONObject().put("returnVal", false));
		    }else{
		      mBluetoothAdapter.enable();
		      callbackContext.success(new JSONObject().put("returnVal", true));
		    }
		}
		
		if(action.equals("check")){			
			if(mBluetoothAdapter.isEnabled())
		    {
				callbackContext.success(new JSONObject().put("returnVal", true));
		    }else{
		    	callbackContext.success(new JSONObject().put("returnVal", false));
		    }
		}

		return true;
	}  
}
     
	



		    

