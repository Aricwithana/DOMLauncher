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
			String type = args.getJSONObject(0).getString("type");
			String check = args.getJSONObject(0).getString("check");
			int ringerMode = audioManager.getRingerMode();
			
			if(check.equals("true")){
				
				if(type.equals("media")){
				
					int curVolume = audioManager.getStreamVolume(AudioManager.STREAM_MUSIC);
					
					return new PluginResult(PluginResult.Status.OK, curVolume);				
				}
	
				if(type.equals("ringer")){	
													
					int curVolume = audioManager.getStreamVolume(AudioManager.STREAM_RING);
					int mode = audioManager.getRingerMode();	
				
					Log.d(id, "Current Mode: " + mode);				
						return new PluginResult(PluginResult.Status.OK, curVolume);												
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
				if(type.equals("media")){
									
					if(vol.equals("up")){
						int maxVolume = audioManager.getStreamMaxVolume(AudioManager.STREAM_MUSIC);										
						int curVolume = audioManager.getStreamVolume(AudioManager.STREAM_MUSIC);
						
						if(curVolume != maxVolume){
																								//FLAG_REMOVE_SOUND_AND_VIBRATE
							audioManager.setStreamVolume(AudioManager.STREAM_MUSIC, curVolume + 1, AudioManager.FLAG_SHOW_UI);
							return new PluginResult(PluginResult.Status.OK, curVolume + 1);
						}else{
							
							String maxVol = "max";
							return new PluginResult(PluginResult.Status.OK, maxVol);
							
						}
					}
	
					if(vol.equals("down")){	
															
						int curVolume = audioManager.getStreamVolume(AudioManager.STREAM_MUSIC);
						
						if(curVolume != 0){
						
							audioManager.setStreamVolume(AudioManager.STREAM_MUSIC, curVolume - 1, AudioManager.FLAG_SHOW_UI);
							return new PluginResult(PluginResult.Status.OK, curVolume - 1);
						}else{
							
							String minVol = "min";
							return new PluginResult(PluginResult.Status.OK, minVol);
							
						}
					}
					
					if(vol.equals("mute")){						
							audioManager.setStreamVolume(AudioManager.STREAM_MUSIC, 0, AudioManager.FLAG_SHOW_UI);
							String muteTrue = "mute";
							return new PluginResult(PluginResult.Status.OK, muteTrue);
							
						}
					}
					
				
				
				}
				
			 //int curVolume = audioManager.getStreamVolume(AudioManager.STREAM_RING);
					//audioManager.setStreamVolume(AudioManager.STREAM_RING, 0, AudioManager.FLAG_SHOW_UI);
				
				if(type.equals("ringer")){
					
					if(vol.equals("up")){
						int maxVolume = audioManager.getStreamMaxVolume(AudioManager.STREAM_RING);										
						int curVolume = audioManager.getStreamVolume(AudioManager.STREAM_RING);
					
						if(curVolume != maxVolume){
							audioManager.setRingerMode(AudioManager.RINGER_MODE_NORMAL);	
							audioManager.setStreamVolume(AudioManager.STREAM_RING, curVolume + 1, AudioManager.FLAG_SHOW_UI);
							return new PluginResult(PluginResult.Status.OK, curVolume + 1);
							
							
						}else{
							
							String maxVol = "max";
							return new PluginResult(PluginResult.Status.OK, maxVol);
							
						}
					}
		
					if(vol.equals("down")){	
						Log.d(id, "Down Yes");									
						int curVolume = audioManager.getStreamVolume(AudioManager.STREAM_RING);
						
						if(curVolume != 0){
							audioManager.setRingerMode(AudioManager.RINGER_MODE_NORMAL);
							audioManager.setStreamVolume(AudioManager.STREAM_RING, curVolume - 1, AudioManager.FLAG_SHOW_UI);
							return new PluginResult(PluginResult.Status.OK, curVolume - 1);
							
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
					String ringerNorm = "normal";
					return new PluginResult(PluginResult.Status.OK, ringerNorm);

					}		
								
				
				
				
				}
				
				
				
			
	
			
			
		 } catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();				 
		 }
		 
		 
		 	
		 	return new PluginResult(PluginResult.Status.OK);
		    
		
        
		   
    	
        
		    
		    
		    //Log.d(id, "is connected:" + bleh);
			

	}  
	
	
	

	  
	

}
     

