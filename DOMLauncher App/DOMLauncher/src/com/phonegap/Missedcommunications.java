package com.phonegap;

import org.json.JSONArray;
import org.json.JSONException;
import org.apache.cordova.api.Plugin;
import org.apache.cordova.api.PluginResult;
import android.annotation.SuppressLint;
import android.database.Cursor;
import android.net.Uri;
import android.provider.CallLog;
import android.provider.VoicemailContract;

import android.util.Log;

public class Missedcommunications extends Plugin { 

	@SuppressLint("NewApi")
	@Override
    public PluginResult execute(String action, JSONArray args, String callbackId) {
		
		try {
			String type = args.getJSONObject(0).getString("type");
			if(type.equals("sms")){
				String SMS_READ_COLUMN = "read"; 
		        String UNREAD_CONDITION = SMS_READ_COLUMN + "=0"; 

				String folder = "content://sms/inbox";

				Uri mSmsQueryUri = Uri.parse(folder);
				String columns[] = new String[] {"person", "address", "body", "date","status"}; 
				String sortOrder = "date ASC"; 
				Cursor c = this.cordova.getActivity().getContentResolver().query(mSmsQueryUri, columns, UNREAD_CONDITION, null, sortOrder);
				int nummissedSMS = c.getCount();
				c.close(); 
				return new PluginResult(PluginResult.Status.OK, nummissedSMS);
			
			}
			
			if(type.equals("calls")){
				String[] projection = { CallLog.Calls.CACHED_NAME, CallLog.Calls.CACHED_NUMBER_LABEL, CallLog.Calls.TYPE };
				
				String where = CallLog.Calls.TYPE+"="+CallLog.Calls.MISSED_TYPE+"="+CallLog.Calls.IS_READ+"=0";          
				
				Cursor c = this.cordova.getActivity().getContentResolver().query(CallLog.Calls.CONTENT_URI, projection, where, null, null );
				
				c.moveToFirst();  
				int nummissedCalls = c.getCount();
				c.close(); 
				return new PluginResult(PluginResult.Status.OK, nummissedCalls);
				
			}
		
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}    
        	
		return new PluginResult(PluginResult.Status.OK);
	}  
}
     
	



		    

