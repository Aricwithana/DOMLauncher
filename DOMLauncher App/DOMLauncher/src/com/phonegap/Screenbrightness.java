package com.phonegap;

import org.json.JSONArray;
import org.json.JSONException;

import org.apache.cordova.api.Plugin;
import org.apache.cordova.api.PluginResult;

import android.content.Intent;


import android.provider.Settings;
import android.provider.Settings.SettingNotFoundException;

public class Screenbrightness extends Plugin { 

	
	 
	@Override
    public PluginResult execute(String action, JSONArray args, String callbackId) {
		
		
		try {
			String check = args.getJSONObject(0).getString("check");
			String mode = args.getJSONObject(0).getString("mode");
			int value = args.getJSONObject(0).getInt("value");
			float floater = args.getJSONObject(0).getInt("float");
			float floaterFinal = floater/255;
		
			
			if(check.equals("percentage")){
				
				int getBright = Settings.System.getInt(this.cordova.getActivity().getContentResolver(), Settings.System.SCREEN_BRIGHTNESS);
				return new PluginResult(PluginResult.Status.OK, getBright);
			}
			
			if(check.equals("mode")){
				int getMode = Settings.System.getInt(this.cordova.getActivity().getContentResolver(), Settings.System.SCREEN_BRIGHTNESS_MODE);
				return new PluginResult(PluginResult.Status.OK, getMode); 
			}
			
			

			if(mode.equals("auto")){
				int getMode = Settings.System.getInt(this.cordova.getActivity().getContentResolver(), Settings.System.SCREEN_BRIGHTNESS_MODE);			
				if(getMode == 1){
					
					Intent intent = new Intent(this.cordova.getActivity(), com.awaa.domlauncher.DummyBrightnessActivity.class);
					intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK); //this is important
					//in the next line 'brightness' should be a float number between 0.0 and 1.0
					intent.putExtra("toggle mode", 0); 
					
					this.cordova.getActivity().startActivity(intent);					
					
					int modeSend = 0;
					return new PluginResult(PluginResult.Status.OK, modeSend);
				}
				
				if(getMode == 0){
									
					Intent intent = new Intent(this.cordova.getActivity(), com.awaa.domlauncher.DummyBrightnessActivity.class);
					intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK); //this is important
					//in the next line 'brightness' should be a float number between 0.0 and 1.0
					intent.putExtra("toggle mode", 1); 		
					this.cordova.getActivity().startActivity(intent);
					
					
					int modeSend = 1;
					return new PluginResult(PluginResult.Status.OK, modeSend);
				}
			
			}
			
			if(value > 0){
				
				Intent intent = new Intent(this.cordova.getActivity(), com.awaa.domlauncher.DummyBrightnessActivity.class);
				intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK); //this is important
				//in the next line 'brightness' should be a float number between 0.0 and 1.0
				intent.putExtra("brightness value", floaterFinal); 		
				intent.putExtra("system value", value); 
				this.cordova.getActivity().startActivity(intent);
			
				return new PluginResult(PluginResult.Status.OK, value);
			}
			
			
			
			
			
		
		
		
		
		} catch (SettingNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	
 				return new PluginResult(PluginResult.Status.OK);
	}  
	

}
     
	
		    		


