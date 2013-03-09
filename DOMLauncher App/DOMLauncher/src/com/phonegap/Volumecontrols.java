package com.phonegap;

import org.json.JSONArray;
import org.json.JSONException;


import org.apache.cordova.api.CallbackContext;
import org.apache.cordova.api.CordovaPlugin;

import android.content.Context;
import android.media.AudioManager;

import android.util.Log;


public class Volumecontrols extends CordovaPlugin { 

	
	 @Override
	    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
		
		 try {
			
			AudioManager audioManager = (AudioManager)this.cordova.getActivity().getSystemService(Context.AUDIO_SERVICE);
			String vol = args.getJSONObject(0).getString("vol");
			String toast = args.getJSONObject(0).getString("toast");
			String type = args.getJSONObject(0).getString("type");
			String check = args.getJSONObject(0).getString("check");
			String percentage = args.getJSONObject(0).getString("percentage");
			int ringerMode = audioManager.getRingerMode();
			 
			if(check.equals("true")){
				
				if(type.equals("media")){
					
					if(percentage.equals("true")){
						int curVolume = audioManager.getStreamVolume(AudioManager.STREAM_MUSIC);
						float curPercent = (curVolume* 100) / audioManager.getStreamMaxVolume(AudioManager.STREAM_MUSIC) ;
						//return new PluginResult(PluginResult.Status.OK, curPercent);	
						callbackContext.success(""+ curPercent);
					}else{
						int curVolume = audioManager.getStreamVolume(AudioManager.STREAM_MUSIC);
						//return new PluginResult(PluginResult.Status.OK, curVolume);	
						callbackContext.success(""+curVolume);
					}				
					
				}
	
				if(type.equals("ringer")){	
													
					if(percentage.equals("true")){
						int curVolume = audioManager.getStreamVolume(AudioManager.STREAM_RING);
						float curPercent = (curVolume* 100) / audioManager.getStreamMaxVolume(AudioManager.STREAM_RING) ;
						callbackContext.success(""+ curPercent);							
					}else{					
						int curVolume = audioManager.getStreamVolume(AudioManager.STREAM_RING);		
						callbackContext.success(""+curVolume);						
					}			
				}
				
				if(type.equals("mode")){	
					
					int mode = audioManager.getRingerMode();	
				//Modes are:  0-Silent, 1-Vibrate, 2-Ringing					
					callbackContext.success(""+mode);												
				}
								
				if(type.equals("maxRinger")){	
					
					int curVolume = audioManager.getStreamMaxVolume(AudioManager.STREAM_RING);
					
					callbackContext.success(""+curVolume);			
				}
			
			}else{
				int percentVal = Integer.parseInt(percentage);
				if(type.equals("media")){
									
					
					if(percentVal >= 0){
						
						int mediaVal = (percentVal * audioManager.getStreamMaxVolume(AudioManager.STREAM_MUSIC)) / 100;
						
						if(toast.equals("off")){
							audioManager.setStreamVolume(AudioManager.STREAM_MUSIC, mediaVal, 0);
							callbackContext.success(""+percentVal);
						}else{
							audioManager.setStreamVolume(AudioManager.STREAM_MUSIC, mediaVal, AudioManager.FLAG_SHOW_UI);
							callbackContext.success(""+percentVal);
						}
					}else{
						if(vol.equals("up")){
							int maxVolume = audioManager.getStreamMaxVolume(AudioManager.STREAM_MUSIC);										
							int curVolume = audioManager.getStreamVolume(AudioManager.STREAM_MUSIC);
							
							if(curVolume != maxVolume){
								if(toast.equals("off")){																	
									audioManager.setStreamVolume(AudioManager.STREAM_MUSIC, curVolume + 1, 0);
									callbackContext.success(""+(curVolume + 1));
								}else{
									audioManager.setStreamVolume(AudioManager.STREAM_MUSIC, curVolume + 1, AudioManager.FLAG_SHOW_UI);
									callbackContext.success(""+(curVolume + 1));
								}
							}else{
								
								String maxVol = "max";
								callbackContext.success(""+maxVol);
								
							}
						}
		
						if(vol.equals("down")){	
																
							int curVolume = audioManager.getStreamVolume(AudioManager.STREAM_MUSIC);
							
							if(curVolume != 0){
								if(toast.equals("off")){
									audioManager.setStreamVolume(AudioManager.STREAM_MUSIC, curVolume - 1, AudioManager.FLAG_SHOW_UI);
									callbackContext.success(""+(curVolume - 1));
								}else{
									audioManager.setStreamVolume(AudioManager.STREAM_MUSIC, curVolume - 1, AudioManager.FLAG_SHOW_UI);
									callbackContext.success(""+(curVolume - 1));
								}
							}else{
								
								String minVol = "min";
								callbackContext.success(""+minVol);
								
							}
						}
						
						if(vol.equals("mute")){						
							if(toast.equals("off")){
								audioManager.setStreamVolume(AudioManager.STREAM_MUSIC, 0, 0);
								String muteTrue = "mute";
								callbackContext.success(""+muteTrue);
							}else{
								audioManager.setStreamVolume(AudioManager.STREAM_MUSIC, 0, AudioManager.FLAG_SHOW_UI);
								String muteTrue = "mute";
								callbackContext.success(""+muteTrue);
							}
						}
						callbackContext.success("ok");
					}
				}
					
				
				
				
				
			 //int curVolume = audioManager.getStreamVolume(AudioManager.STREAM_RING);
					//audioManager.setStreamVolume(AudioManager.STREAM_RING, 0, AudioManager.FLAG_SHOW_UI);
				
				if(type.equals("ringer")){
					
					if(percentVal >= 0){
						
						int volumeVal = (percentVal  * audioManager.getStreamMaxVolume(AudioManager.STREAM_RING)) / 100;
						
						if(toast.equals("off")){
							audioManager.setStreamVolume(AudioManager.STREAM_RING, volumeVal, 0);
							callbackContext.success(""+percentVal);
						}else{
							audioManager.setStreamVolume(AudioManager.STREAM_RING, volumeVal, AudioManager.FLAG_SHOW_UI);
							callbackContext.success(""+percentVal);
						}
					}else{				
						if(vol.equals("up")){
							int maxVolume = audioManager.getStreamMaxVolume(AudioManager.STREAM_RING);										
							int curVolume = audioManager.getStreamVolume(AudioManager.STREAM_RING);
						
							if(curVolume != maxVolume){
								if(toast.equals("off")){
									audioManager.setRingerMode(AudioManager.RINGER_MODE_NORMAL);	
									audioManager.setStreamVolume(AudioManager.STREAM_RING, curVolume + 1, 0);
									callbackContext.success(""+(curVolume + 1));
								}else{
									audioManager.setRingerMode(AudioManager.RINGER_MODE_NORMAL);	
									audioManager.setStreamVolume(AudioManager.STREAM_RING, curVolume + 1, AudioManager.FLAG_SHOW_UI);
									callbackContext.success(""+(curVolume + 1));
								}
								
							}else{
								
								String maxVol = "max";
								callbackContext.success(""+maxVol);
								
							}
						}
			
						if(vol.equals("down")){	
							Log.d(id, "Down Yes");									
							int curVolume = audioManager.getStreamVolume(AudioManager.STREAM_RING);
							
							if(curVolume != 0){
								if(toast.equals("off")){
									audioManager.setRingerMode(AudioManager.RINGER_MODE_NORMAL);
									audioManager.setStreamVolume(AudioManager.STREAM_RING, curVolume - 1, 0);
									callbackContext.success(""+(curVolume - 1));
								}else{
									audioManager.setRingerMode(AudioManager.RINGER_MODE_NORMAL);
									audioManager.setStreamVolume(AudioManager.STREAM_RING, curVolume - 1, AudioManager.FLAG_SHOW_UI);
									callbackContext.success(""+(curVolume - 1));
								}
							}else{
								
								String minVol = "min";
								callbackContext.success(""+minVol);						
							}
						}				
					
						if(vol.equals("vibrate")){	
												
							if(ringerMode == 1){	
								audioManager.setRingerMode(AudioManager.RINGER_MODE_NORMAL);
								String vibNorm = "normal";Log.d(id, "Ringer Mode:  " +ringerMode);
								callbackContext.success(""+vibNorm);
							
							}else{Log.d(id, "Ringer Mode:  " +ringerMode);
								audioManager.setRingerMode(AudioManager.RINGER_MODE_VIBRATE);
								String ringerVib = "vibrate";
								callbackContext.success(""+ringerVib);
							}
						}							
							
						
						if(vol.equals("silent")){	
							
							if(ringerMode == 0){
							
							audioManager.setRingerMode(AudioManager.RINGER_MODE_NORMAL);
							String ringerNorm = "normal";
							callbackContext.success(""+ringerNorm);
	
							}else{
								audioManager.setRingerMode(AudioManager.RINGER_MODE_SILENT);
							String ringerSil = "silent";
							callbackContext.success(""+ringerSil);
							}			
						}					
						
									
						if(vol.equals("normal")){	
												
						audioManager.setRingerMode(AudioManager.RINGER_MODE_NORMAL);
						
						int curVolume = audioManager.getStreamVolume(AudioManager.STREAM_RING);
						callbackContext.success(""+curVolume);
	
						}											
					}
					callbackContext.success("ok");
				}			
			}	

		 } catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();				 
		 }
		 
		 
		return true;
	}  
}
     

