package com.phonegap;

import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

import org.json.JSONArray;
import org.json.JSONException;

import org.apache.cordova.api.Plugin;
import org.apache.cordova.api.PluginResult;

import android.content.Context;

import android.net.ConnectivityManager;


import android.telephony.TelephonyManager;




public class Mobiledatatoggler extends Plugin { 

	
	
	@Override
    public PluginResult execute(String action, JSONArray args, String callbackId) {
 

		
		try {
			
			Context ctx = this.cordova.getActivity();
			
			final ConnectivityManager conman = (ConnectivityManager) ctx.getSystemService(Context.CONNECTIVITY_SERVICE);
			final Class<?> conmanClass = Class.forName(conman.getClass().getName());
			final Field iConnectivityManagerField = conmanClass.getDeclaredField("mService");
			iConnectivityManagerField.setAccessible(true);
			final Object iConnectivityManager = iConnectivityManagerField.get(conman);
			final Class<?> iConnectivityManagerClass = Class.forName(iConnectivityManager.getClass().getName());
			
			final Method setMobileDataEnabledMethod = iConnectivityManagerClass.getDeclaredMethod("setMobileDataEnabled", Boolean.TYPE);
			setMobileDataEnabledMethod.setAccessible(true);
						
			TelephonyManager telephonyManager = (TelephonyManager) ctx.getSystemService(Context.TELEPHONY_SERVICE);

			
			
			String check = args.getJSONObject(0).getString("check");	 
			String state = args.getJSONObject(0).getString("state");
            if (check.equals("true")) {
                    
                if(telephonyManager.getDataState() == TelephonyManager.DATA_CONNECTED){
        			
                	return new PluginResult(PluginResult.Status.OK, true);
    				
    			}

                if(telephonyManager.getDataState() == TelephonyManager.DATA_DISCONNECTED){
    			
    				return new PluginResult(PluginResult.Status.OK, false);
    			}

            } 
            
            if(state.equals("toggle")){
            
            	if(telephonyManager.getDataState() == TelephonyManager.DATA_CONNECTED){
			
				setMobileDataEnabledMethod.invoke(iConnectivityManager, false);
				return new PluginResult(PluginResult.Status.OK, false);
				}           
	
	            if(telephonyManager.getDataState() == TelephonyManager.DATA_DISCONNECTED){
					setMobileDataEnabledMethod.invoke(iConnectivityManager, true);
					return new PluginResult(PluginResult.Status.OK, true);
				}
			
            }
			
			  
            if(state.equals("on")){
					setMobileDataEnabledMethod.invoke(iConnectivityManager, true);
					return new PluginResult(PluginResult.Status.OK, true);

            }		
			
			
            if(state.equals("off")){
 					setMobileDataEnabledMethod.invoke(iConnectivityManager, false);
 					return new PluginResult(PluginResult.Status.OK, false);

             }		
 					
			
		} catch (SecurityException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (NoSuchMethodException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IllegalArgumentException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IllegalAccessException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (NoSuchFieldException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}		
		return new PluginResult(PluginResult.Status.OK);			
	

		  
		   
		
		
	
		    
		 //int mode = Settings.System.getInt(this.cordova.getActivity().getContentResolver(), Settings.System.SCREEN_BRIGHTNESS);

		    //Settings.System.putInt(this.cordova.getActivity().getContentResolver(),Settings.System.SCREEN_BRIGHTNESS_MODE, 0);
		    
		    //Log.d(id, "is connected:" + bleh);
			

	}  
	

}
     

