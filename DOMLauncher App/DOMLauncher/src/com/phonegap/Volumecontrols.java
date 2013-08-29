package com.phonegap;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import org.apache.cordova.api.CallbackContext;
import org.apache.cordova.api.CordovaPlugin;
import android.content.Context;
import android.media.AudioManager;

public class Volumecontrols extends CordovaPlugin { 
	
	 @Override
	    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
		
		 AudioManager audioManager = (AudioManager)this.cordova.getActivity().getSystemService(Context.AUDIO_SERVICE);
		
		 //Ringer Check
		 if(action.equals("ringerCheck")){
			String check = args.getJSONObject(0).getString("check");
			 
			if(check.equals("percentage")){
				int curVolume = audioManager.getStreamVolume(AudioManager.STREAM_RING);
				float curPercent = (curVolume* 100) / audioManager.getStreamMaxVolume(AudioManager.STREAM_RING) ;
				callbackContext.success(new JSONObject().put("returnVal", curPercent));
			}else if(check.equals("max")){	
				int maxVolume = audioManager.getStreamMaxVolume(AudioManager.STREAM_RING);
				callbackContext.success(new JSONObject().put("returnVal", maxVolume));
			}else{
				int curVolume = audioManager.getStreamVolume(AudioManager.STREAM_RING);		
				callbackContext.success(new JSONObject().put("returnVal", curVolume));						
			}					 
		 }
		 
		 //Media Check
		 if(action.equals("mediaCheck")){
			String check = args.getJSONObject(0).getString("check");
			 
			if(check.equals("percentage")){
				int curVolume = audioManager.getStreamVolume(AudioManager.STREAM_MUSIC);
				float curPercent = (curVolume* 100) / audioManager.getStreamMaxVolume(AudioManager.STREAM_MUSIC) ;
				callbackContext.success(new JSONObject().put("returnVal", curPercent));
		 	}else if(check.equals("max")){	
				int maxVolume = audioManager.getStreamMaxVolume(AudioManager.STREAM_MUSIC);
				callbackContext.success(new JSONObject().put("returnVal", maxVolume));
			}else{
				int curVolume = audioManager.getStreamVolume(AudioManager.STREAM_MUSIC);		
				callbackContext.success(new JSONObject().put("returnVal", curVolume));						
			}					 
		 }		 
		
		 //Ringer Mode Check 0 - Silent/ 1 - Vibrate/ 2 - Normal
		 if(action.equals("ringermodeCheck")){
			int mode = audioManager.getRingerMode();
			callbackContext.success(new JSONObject().put("returnVal", mode));				 
		 }			 
		 
		 //Media Controls
		 if(action.equals("mediaPercentage")){
			 int percentVal = Integer.parseInt(args.getJSONObject(0).getString("percentage"));
			 int mediaVal = (percentVal * audioManager.getStreamMaxVolume(AudioManager.STREAM_MUSIC)) / 100;
			 String toast = args.getJSONObject(0).getString("toast");
	
			 if(toast.equals("true")){
				audioManager.setStreamVolume(AudioManager.STREAM_MUSIC, mediaVal, AudioManager.FLAG_SHOW_UI);
				callbackContext.success(new JSONObject().put("returnVal", percentVal));
			}else{
				audioManager.setStreamVolume(AudioManager.STREAM_MUSIC, mediaVal, 0);
				callbackContext.success(new JSONObject().put("returnVal", percentVal));
			}
		 }			 
		 		 
		 if(action.equals("mediaUp")){									
			int curVolume = audioManager.getStreamVolume(AudioManager.STREAM_MUSIC);
			String toast = args.getJSONObject(0).getString("toast");
			if(toast.equals("true")){																	
				audioManager.setStreamVolume(AudioManager.STREAM_MUSIC, curVolume + 1, AudioManager.FLAG_SHOW_UI);
				int newVolume = audioManager.getStreamVolume(AudioManager.STREAM_MUSIC);
				callbackContext.success(new JSONObject().put("returnVal", newVolume));
			}else{
				audioManager.setStreamVolume(AudioManager.STREAM_MUSIC, curVolume + 1, 0);
				int newVolume = audioManager.getStreamVolume(AudioManager.STREAM_MUSIC);
				callbackContext.success(new JSONObject().put("returnVal", newVolume));
			}
		 }
		 
		 if(action.equals("mediaDown")){									
			int curVolume = audioManager.getStreamVolume(AudioManager.STREAM_MUSIC);
			String toast = args.getJSONObject(0).getString("toast");
			if(toast.equals("true")){																	
				if(curVolume == 0){	
				}else{
					audioManager.setStreamVolume(AudioManager.STREAM_MUSIC, curVolume - 1, AudioManager.FLAG_SHOW_UI);
				}
				int newVolume = audioManager.getStreamVolume(AudioManager.STREAM_MUSIC);
				callbackContext.success(new JSONObject().put("returnVal", newVolume));
			}else{
				if(curVolume == 0){	
				}else{
					audioManager.setStreamVolume(AudioManager.STREAM_MUSIC, curVolume - 1, 0);
				}
				int newVolume = audioManager.getStreamVolume(AudioManager.STREAM_MUSIC);
				callbackContext.success(new JSONObject().put("returnVal", newVolume));
			}
		 }		 
		 
		 if(action.equals("mediaMute")){									
			String toast = args.getJSONObject(0).getString("toast");
			if(toast.equals("false")){																	
				audioManager.setStreamVolume(AudioManager.STREAM_MUSIC, 0, 0);
			}else{
				audioManager.setStreamVolume(AudioManager.STREAM_MUSIC, 0, AudioManager.FLAG_SHOW_UI);
			}
		 }	
		 
		 //Ringer Controls
		 if(action.equals("ringerPercentage")){
			 int percentVal = Integer.parseInt(args.getJSONObject(0).getString("percentage"));
			 int mediaVal = (percentVal * audioManager.getStreamMaxVolume(AudioManager.STREAM_RING)) / 100;
			 String toast = args.getJSONObject(0).getString("toast");
	
			 if(toast.equals("true")){
				audioManager.setStreamVolume(AudioManager.STREAM_RING, mediaVal, AudioManager.FLAG_SHOW_UI);
				callbackContext.success(new JSONObject().put("returnVal", percentVal));
			}else{
				audioManager.setStreamVolume(AudioManager.STREAM_RING, mediaVal, 0);
				callbackContext.success(new JSONObject().put("returnVal", percentVal));
			}
		 }	 
		 
		 if(action.equals("ringerUp")){									
			int curVolume = audioManager.getStreamVolume(AudioManager.STREAM_RING);
			String toast = args.getJSONObject(0).getString("toast");
			if(toast.equals("true")){																	
				audioManager.setRingerMode(AudioManager.RINGER_MODE_NORMAL);
				audioManager.setStreamVolume(AudioManager.STREAM_RING, curVolume + 1, AudioManager.FLAG_SHOW_UI);
				int newVolume = audioManager.getStreamVolume(AudioManager.STREAM_RING);
				callbackContext.success(new JSONObject().put("returnVal", newVolume));
			}else{
				audioManager.setRingerMode(AudioManager.RINGER_MODE_NORMAL);
				audioManager.setStreamVolume(AudioManager.STREAM_RING, curVolume + 1, 0);
				int newVolume = audioManager.getStreamVolume(AudioManager.STREAM_RING);
				callbackContext.success(new JSONObject().put("returnVal", newVolume));
			}
		 }
		 
		 if(action.equals("ringerDown")){									
			int curVolume = audioManager.getStreamVolume(AudioManager.STREAM_RING);
			String toast = args.getJSONObject(0).getString("toast");
			if(toast.equals("true")){																	
				if(curVolume == 0){	
					audioManager.setRingerMode(AudioManager.RINGER_MODE_VIBRATE);
				}else{	
					audioManager.setRingerMode(AudioManager.RINGER_MODE_NORMAL);
					audioManager.setStreamVolume(AudioManager.STREAM_RING, curVolume - 1, AudioManager.FLAG_SHOW_UI);
				}
				int newVolume = audioManager.getStreamVolume(AudioManager.STREAM_RING);
				callbackContext.success(new JSONObject().put("returnVal", newVolume));
			}else{
				if(curVolume == 0){	
					audioManager.setRingerMode(AudioManager.RINGER_MODE_VIBRATE);
				}else{	
					audioManager.setRingerMode(AudioManager.RINGER_MODE_NORMAL);
					audioManager.setStreamVolume(AudioManager.STREAM_RING, curVolume - 1, 0);
				}
				int newVolume = audioManager.getStreamVolume(AudioManager.STREAM_RING);
				callbackContext.success(new JSONObject().put("returnVal", newVolume));
			}
		 }			 
		 
		 //Ringer Modes
		 if(action.equals("ringerVibrate")){									
			 audioManager.setRingerMode(AudioManager.RINGER_MODE_VIBRATE);
			int curVolume = audioManager.getStreamVolume(AudioManager.STREAM_RING);
			callbackContext.success(new JSONObject().put("returnVal", curVolume));						
		 
		 }			 
		 
		 if(action.equals("ringerSilent")){									
			 audioManager.setRingerMode(AudioManager.RINGER_MODE_SILENT);
			int curVolume = audioManager.getStreamVolume(AudioManager.STREAM_RING);
			callbackContext.success(new JSONObject().put("returnVal", curVolume));						
		 
		 }	
		 
		 if(action.equals("ringerNormal")){									
			 
			 String value = args.getJSONObject(0).getString("value");
			 if(value.equals("percentage")){
				 	audioManager.setRingerMode(AudioManager.RINGER_MODE_NORMAL);			 		
				 	int curVolume = audioManager.getStreamVolume(AudioManager.STREAM_RING);
				 	float curPercent = (curVolume* 100) / audioManager.getStreamMaxVolume(AudioManager.STREAM_RING) ;
					callbackContext.success(new JSONObject().put("returnVal", curPercent));
				}else{
					audioManager.setRingerMode(AudioManager.RINGER_MODE_NORMAL);									
					int curVolume = audioManager.getStreamVolume(AudioManager.STREAM_RING);
					callbackContext.success(new JSONObject().put("returnVal", curVolume));						
				}			
			
		 
		 }
		 	 
		return true;
	}  
}
     

