package com.phonegap;

import org.json.JSONArray;
import org.json.JSONException;

import org.apache.cordova.api.Plugin;
import org.apache.cordova.api.PluginResult;



import android.content.Context;
import android.media.AudioManager;

import android.util.Log;


public class Volumecontrols extends Plugin { 

	@Override
    public PluginResult execute(String action, JSONArray args, String callbackId) {
		
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
						return new PluginResult(PluginResult.Status.OK, curPercent);	
					}else{
						int curVolume = audioManager.getStreamVolume(AudioManager.STREAM_MUSIC);
						return new PluginResult(PluginResult.Status.OK, curVolume);	
						
					}				
					
				}
	
				if(type.equals("ringer")){	
													
					if(percentage.equals("true")){
						int curVolume = audioManager.getStreamVolume(AudioManager.STREAM_RING);
						float curPercent = (curVolume* 100) / audioManager.getStreamMaxVolume(AudioManager.STREAM_RING) ;
						return new PluginResult(PluginResult.Status.OK, curPercent);							
					}else{					
						int curVolume = audioManager.getStreamVolume(AudioManager.STREAM_RING);		
						return new PluginResult(PluginResult.Status.OK, curVolume);							
					}			
				}
				
				if(type.equals("mode")){	
					
					int mode = audioManager.getRingerMode();	
				//Modes are:  0-Silent, 1-Vibrate, 2-Ringing					
				return new PluginResult(PluginResult.Status.OK, mode);												
				}
								
				if(type.equals("maxRinger")){	
					
					int curVolume = audioManager.getStreamMaxVolume(AudioManager.STREAM_RING);
					
					return new PluginResult(PluginResult.Status.OK, curVolume);				
				}
			
			}else{
				int percentVal = Integer.parseInt(percentage);
				if(type.equals("media")){
									
					
					if(percentVal >= 0){
						
						int mediaVal = (percentVal * audioManager.getStreamMaxVolume(AudioManager.STREAM_MUSIC)) / 100;
						
						if(toast.equals("off")){
							audioManager.setStreamVolume(AudioManager.STREAM_MUSIC, mediaVal, 0);
							return new PluginResult(PluginResult.Status.OK, percentVal );
						}else{
							audioManager.setStreamVolume(AudioManager.STREAM_MUSIC, mediaVal, AudioManager.FLAG_SHOW_UI);
							return new PluginResult(PluginResult.Status.OK, percentVal );
						}
					}else{
						if(vol.equals("up")){
							int maxVolume = audioManager.getStreamMaxVolume(AudioManager.STREAM_MUSIC);										
							int curVolume = audioManager.getStreamVolume(AudioManager.STREAM_MUSIC);
							
							if(curVolume != maxVolume){
								if(toast.equals("off")){																	
									audioManager.setStreamVolume(AudioManager.STREAM_MUSIC, curVolume + 1, 0);
									return new PluginResult(PluginResult.Status.OK, curVolume + 1);
								}else{
									audioManager.setStreamVolume(AudioManager.STREAM_MUSIC, curVolume + 1, AudioManager.FLAG_SHOW_UI);
									return new PluginResult(PluginResult.Status.OK, curVolume + 1);
								}
							}else{
								
								String maxVol = "max";
								return new PluginResult(PluginResult.Status.OK, maxVol);
								
							}
						}
		
						if(vol.equals("down")){	
																
							int curVolume = audioManager.getStreamVolume(AudioManager.STREAM_MUSIC);
							
							if(curVolume != 0){
								if(toast.equals("off")){
									audioManager.setStreamVolume(AudioManager.STREAM_MUSIC, curVolume - 1, AudioManager.FLAG_SHOW_UI);
									return new PluginResult(PluginResult.Status.OK, curVolume - 1);
								}else{
									audioManager.setStreamVolume(AudioManager.STREAM_MUSIC, curVolume - 1, AudioManager.FLAG_SHOW_UI);
									return new PluginResult(PluginResult.Status.OK, curVolume - 1);
								}
							}else{
								
								String minVol = "min";
								return new PluginResult(PluginResult.Status.OK, minVol);
								
							}
						}
						
						if(vol.equals("mute")){						
							if(toast.equals("off")){
								audioManager.setStreamVolume(AudioManager.STREAM_MUSIC, 0, 0);
								String muteTrue = "mute";
								return new PluginResult(PluginResult.Status.OK, muteTrue);
							}else{
								audioManager.setStreamVolume(AudioManager.STREAM_MUSIC, 0, AudioManager.FLAG_SHOW_UI);
								String muteTrue = "mute";
								return new PluginResult(PluginResult.Status.OK, muteTrue);
							}
						}
						return new PluginResult(PluginResult.Status.OK);
					}
				}
					
				
				
				
				
			 //int curVolume = audioManager.getStreamVolume(AudioManager.STREAM_RING);
					//audioManager.setStreamVolume(AudioManager.STREAM_RING, 0, AudioManager.FLAG_SHOW_UI);
				
				if(type.equals("ringer")){
					
					if(percentVal >= 0){
						
						int volumeVal = (percentVal  * audioManager.getStreamMaxVolume(AudioManager.STREAM_RING)) / 100;
						
						if(toast.equals("off")){
							audioManager.setStreamVolume(AudioManager.STREAM_RING, volumeVal, 0);
							return new PluginResult(PluginResult.Status.OK, percentVal);
						}else{
							audioManager.setStreamVolume(AudioManager.STREAM_RING, volumeVal, AudioManager.FLAG_SHOW_UI);
							return new PluginResult(PluginResult.Status.OK, percentVal);
						}
					}else{				
						if(vol.equals("up")){
							int maxVolume = audioManager.getStreamMaxVolume(AudioManager.STREAM_RING);										
							int curVolume = audioManager.getStreamVolume(AudioManager.STREAM_RING);
						
							if(curVolume != maxVolume){
								if(toast.equals("off")){
									audioManager.setRingerMode(AudioManager.RINGER_MODE_NORMAL);	
									audioManager.setStreamVolume(AudioManager.STREAM_RING, curVolume + 1, 0);
									return new PluginResult(PluginResult.Status.OK, curVolume + 1);
								}else{
									audioManager.setRingerMode(AudioManager.RINGER_MODE_NORMAL);	
									audioManager.setStreamVolume(AudioManager.STREAM_RING, curVolume + 1, AudioManager.FLAG_SHOW_UI);
									return new PluginResult(PluginResult.Status.OK, curVolume + 1);
								}
								
							}else{
								
								String maxVol = "max";
								return new PluginResult(PluginResult.Status.OK, maxVol);
								
							}
						}
			
						if(vol.equals("down")){	
							Log.d(id, "Down Yes");									
							int curVolume = audioManager.getStreamVolume(AudioManager.STREAM_RING);
							
							if(curVolume != 0){
								if(toast.equals("off")){
									audioManager.setRingerMode(AudioManager.RINGER_MODE_NORMAL);
									audioManager.setStreamVolume(AudioManager.STREAM_RING, curVolume - 1, 0);
									return new PluginResult(PluginResult.Status.OK, curVolume - 1);
								}else{
									audioManager.setRingerMode(AudioManager.RINGER_MODE_NORMAL);
									audioManager.setStreamVolume(AudioManager.STREAM_RING, curVolume - 1, AudioManager.FLAG_SHOW_UI);
									return new PluginResult(PluginResult.Status.OK, curVolume - 1);
								}
							}else{
								
								String minVol = "min";
								return new PluginResult(PluginResult.Status.OK, minVol);						
							}
						}				
					
						if(vol.equals("vibrate")){	
												
							if(ringerMode == 1){	
								audioManager.setRingerMode(AudioManager.RINGER_MODE_NORMAL);
								String vibNorm = "normal";Log.d(id, "Ringer Mode:  " +ringerMode);
								return new PluginResult(PluginResult.Status.OK, vibNorm);
							
							}else{Log.d(id, "Ringer Mode:  " +ringerMode);
								audioManager.setRingerMode(AudioManager.RINGER_MODE_VIBRATE);
								String ringerVib = "vibrate";
								return new PluginResult(PluginResult.Status.OK, ringerVib);
							}
						}							
							
						
						if(vol.equals("silent")){	
							
							if(ringerMode == 0){
							
							audioManager.setRingerMode(AudioManager.RINGER_MODE_NORMAL);
							String ringerNorm = "normal";
							return new PluginResult(PluginResult.Status.OK, ringerNorm);
	
							}else{
								audioManager.setRingerMode(AudioManager.RINGER_MODE_SILENT);
							String ringerSil = "silent";
							return new PluginResult(PluginResult.Status.OK, ringerSil);
							}			
						}					
						
									
						if(vol.equals("normal")){	
												
						audioManager.setRingerMode(AudioManager.RINGER_MODE_NORMAL);
						
						int curVolume = audioManager.getStreamVolume(AudioManager.STREAM_RING);
						return new PluginResult(PluginResult.Status.OK, curVolume);
	
						}											
					}
					return new PluginResult(PluginResult.Status.OK);
				}			
			}	

		 } catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();				 
		 }
		 
		 
		 return new PluginResult(PluginResult.Status.OK);	    
	}  
}
     

