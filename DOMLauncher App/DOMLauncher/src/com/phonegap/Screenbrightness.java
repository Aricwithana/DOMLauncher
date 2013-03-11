package com.phonegap;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import org.apache.cordova.api.CallbackContext;
import org.apache.cordova.api.CordovaPlugin;

import android.content.Intent;
import android.provider.Settings;
import android.provider.Settings.SettingNotFoundException;

public class Screenbrightness extends CordovaPlugin { 
 
	@Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
			
		try {
		
			if(action.equals("checkValue")){	
				int getBright = Settings.System.getInt(this.cordova.getActivity().getContentResolver(), Settings.System.SCREEN_BRIGHTNESS);
				callbackContext.success(new JSONObject().put("returnVal", getBright));
			}
			
			if(action.equals("checkMode")){
				int getMode = Settings.System.getInt(this.cordova.getActivity().getContentResolver(), Settings.System.SCREEN_BRIGHTNESS_MODE);
				callbackContext.success(new JSONObject().put("returnVal", getMode));
			}
			
			if(action.equals("autoEnable")){	
				Intent intent = new Intent(this.cordova.getActivity(), com.awaa.domlauncher.DummyBrightnessActivity.class);
				intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK); //this is important
				intent.putExtra("toggle mode", 1); 
				this.cordova.getActivity().startActivity(intent);					
				
				callbackContext.success(new JSONObject().put("returnVal", true));
			}
			
			if(action.equals("autoDisable")){				
				Intent intent = new Intent(this.cordova.getActivity(), com.awaa.domlauncher.DummyBrightnessActivity.class);
				intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK); //this is important
				intent.putExtra("toggle mode", 0); 		
				this.cordova.getActivity().startActivity(intent);

				callbackContext.success(new JSONObject().put("returnVal", true));
			}
		
			if(action.equals("autoToggle")){
				int getMode = Settings.System.getInt(this.cordova.getActivity().getContentResolver(), Settings.System.SCREEN_BRIGHTNESS_MODE);			
				if(getMode == 1){					
					Intent intent = new Intent(this.cordova.getActivity(), com.awaa.domlauncher.DummyBrightnessActivity.class);
					intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK); //this is important
					intent.putExtra("toggle mode", 0); 
					this.cordova.getActivity().startActivity(intent);					
					
					callbackContext.success(new JSONObject().put("returnVal", false));
				}
				
				if(getMode == 0){									
					Intent intent = new Intent(this.cordova.getActivity(), com.awaa.domlauncher.DummyBrightnessActivity.class);
					intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK); //this is important
					intent.putExtra("toggle mode", 1); 		
					this.cordova.getActivity().startActivity(intent);

					callbackContext.success(new JSONObject().put("returnVal", true));
				}			
			}
			
			if(action.equals("value")){		
				int value = args.getJSONObject(0).getInt("value");
				float valueFloat = args.getJSONObject(0).getInt("value");
				float floater = valueFloat/255;
				if(value > 0){
					Intent intent = new Intent(this.cordova.getActivity(), com.awaa.domlauncher.DummyBrightnessActivity.class);
					intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK); //this is important
					//in the next line 'brightness' should be a float number between 0.0 and 1.0
					intent.putExtra("brightness value", floater); 		
					intent.putExtra("system value", value); 
					this.cordova.getActivity().startActivity(intent);
					
					callbackContext.success(new JSONObject().put("returnVal", value));
				}
			}	
		} catch (SettingNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return true;
	}  
}
     
	
		    		


