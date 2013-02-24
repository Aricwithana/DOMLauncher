
package com.phonegap;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import android.content.Intent;
import android.provider.Settings;

import org.apache.cordova.api.Plugin;
import org.apache.cordova.api.PluginResult;

public class Launch extends Plugin {

	@Override
	public PluginResult execute(String action, JSONArray args, String callbackId) {
		
		try {
			JSONObject appPackage = args.getJSONObject(0);
			JSONObject appActivity = args.getJSONObject(0);
			JSONObject appSettings = args.getJSONObject(0);
			
			launchApp(appPackage.getString("appPackage"), appActivity.getString("appActivity"), appSettings.getString("settings") ); 
			return new PluginResult(PluginResult.Status.OK);
		} catch (JSONException e) {
			return new PluginResult(PluginResult.Status.JSON_EXCEPTION);
		}
	}
	
	
private void launchApp(String aPackage, String aI, String setting) {	
		
	//Intent appActivity = new Intent(Intent.ACTION_VIEW);
	//appActivity.setClassName(aName, aActivity);
	//this.cordova.getActivity().startActivity(appActivity);
	if(setting.equals("false")){
			try
		{
			Intent intent = this.cordova.getActivity().getPackageManager().getLaunchIntentForPackage(aPackage);		
			
			this.cordova.getActivity().startActivity(intent);
		}
		catch(Exception e)
		{
			Intent activityIntent = new Intent(Intent.ACTION_VIEW);
			activityIntent.setClassName(aPackage, aI);
			this.cordova.getActivity().startActivity(activityIntent);
		}
	}else if(setting.equals("accessability")){
		this.cordova.getActivity().startActivity(new Intent(Settings.ACTION_ACCESSIBILITY_SETTINGS));		
	}else if(setting.equals("addaccount")){
		this.cordova.getActivity().startActivity(new Intent(Settings.ACTION_ADD_ACCOUNT));		
	}else if(setting.equals("airplanemode")){
		this.cordova.getActivity().startActivity(new Intent(Settings.ACTION_AIRPLANE_MODE_SETTINGS));		
	}else if(setting.equals("apn")){
		this.cordova.getActivity().startActivity(new Intent(Settings.ACTION_APN_SETTINGS));		
	}else if(setting.equals("appdetails")){
		this.cordova.getActivity().startActivity(new Intent(Settings.ACTION_APPLICATION_DETAILS_SETTINGS));		
	}else if(setting.equals("appdevelopment")){
		this.cordova.getActivity().startActivity(new Intent(Settings.ACTION_APPLICATION_DEVELOPMENT_SETTINGS));		
	}else if(setting.equals("apps")){
		this.cordova.getActivity().startActivity(new Intent(Settings.ACTION_APPLICATION_SETTINGS));		
	}else if(setting.equals("bluetooth")){
		this.cordova.getActivity().startActivity(new Intent(Settings.ACTION_BLUETOOTH_SETTINGS));		
	}else if(setting.equals("dataroaming")){
		this.cordova.getActivity().startActivity(new Intent(Settings.ACTION_DATA_ROAMING_SETTINGS));		
	}else if(setting.equals("date")){
		this.cordova.getActivity().startActivity(new Intent(Settings.ACTION_DATE_SETTINGS));		
	}else if(setting.equals("deviceinfo")){
		this.cordova.getActivity().startActivity(new Intent(Settings.ACTION_DEVICE_INFO_SETTINGS));		
	}else if(setting.equals("display")){
		this.cordova.getActivity().startActivity(new Intent(Settings.ACTION_DISPLAY_SETTINGS));		
	}else if(setting.equals("inputmethod")){
		this.cordova.getActivity().startActivity(new Intent(Settings.ACTION_INPUT_METHOD_SETTINGS));		
	}else if(setting.equals("inputmethodsubtype")){
		this.cordova.getActivity().startActivity(new Intent(Settings.ACTION_INPUT_METHOD_SUBTYPE_SETTINGS));		
	}else if(setting.equals("internalstorage")){
		this.cordova.getActivity().startActivity(new Intent(Settings.ACTION_INTERNAL_STORAGE_SETTINGS));		
	}else if(setting.equals("locale")){
		this.cordova.getActivity().startActivity(new Intent(Settings.ACTION_LOCALE_SETTINGS));		
	}else if(setting.equals("locationsource")){
		this.cordova.getActivity().startActivity(new Intent(Settings.ACTION_LOCATION_SOURCE_SETTINGS));		
	}else if(setting.equals("manageallapps")){
		this.cordova.getActivity().startActivity(new Intent(Settings.ACTION_MANAGE_ALL_APPLICATIONS_SETTINGS));		
	}else if(setting.equals("manageapps")){
		this.cordova.getActivity().startActivity(new Intent(Settings.ACTION_MANAGE_APPLICATIONS_SETTINGS));		
	}else if(setting.equals("memorycard")){
		this.cordova.getActivity().startActivity(new Intent(Settings.ACTION_MEMORY_CARD_SETTINGS));		
	}else if(setting.equals("networkoperator")){
		this.cordova.getActivity().startActivity(new Intent(Settings.ACTION_NETWORK_OPERATOR_SETTINGS));		
	}else if(setting.equals("nfcsharing")){
		this.cordova.getActivity().startActivity(new Intent(Settings.ACTION_NFCSHARING_SETTINGS));		
	}else if(setting.equals("nfc")){
		this.cordova.getActivity().startActivity(new Intent(Settings.ACTION_NFC_SETTINGS));		
	}else if(setting.equals("privacy")){
		this.cordova.getActivity().startActivity(new Intent(Settings.ACTION_PRIVACY_SETTINGS));		
	}else if(setting.equals("quicklaunch")){
		this.cordova.getActivity().startActivity(new Intent(Settings.ACTION_QUICK_LAUNCH_SETTINGS));		
	}else if(setting.equals("search")){
		this.cordova.getActivity().startActivity(new Intent(Settings.ACTION_SEARCH_SETTINGS));		
	}else if(setting.equals("security")){
		this.cordova.getActivity().startActivity(new Intent(Settings.ACTION_SECURITY_SETTINGS));		
	}else if(setting.equals("sound")){
		this.cordova.getActivity().startActivity(new Intent(Settings.ACTION_SOUND_SETTINGS));		
	}else if(setting.equals("sync")){
		this.cordova.getActivity().startActivity(new Intent(Settings.ACTION_SYNC_SETTINGS));		
	}else if(setting.equals("userdictionary")){
		this.cordova.getActivity().startActivity(new Intent(Settings.ACTION_USER_DICTIONARY_SETTINGS));		
	}else if(setting.equals("wifiip")){
		this.cordova.getActivity().startActivity(new Intent(Settings.ACTION_WIFI_IP_SETTINGS));		
	}else if(setting.equals("wifi")){
		this.cordova.getActivity().startActivity(new Intent(Settings.ACTION_WIFI_SETTINGS));			
	}else if(setting.equals("wireless")){
		this.cordova.getActivity().startActivity(new Intent(Settings.ACTION_WIRELESS_SETTINGS));	
	}else if(setting.equals("battery")){
		this.cordova.getActivity().startActivity(new Intent(Intent.ACTION_POWER_USAGE_SUMMARY));	
	
	}
	
	
	
	
	
}

}
