package com.phonegap;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import org.apache.cordova.api.CallbackContext;
import org.apache.cordova.api.CordovaPlugin;

import android.database.Cursor;
import android.net.Uri;
import android.provider.CallLog;

public class Missedcommunications extends CordovaPlugin { 

	@Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
		
		if(action.equals("sms")){
			String SMS_READ_COLUMN = "read"; 
	        String UNREAD_CONDITION = SMS_READ_COLUMN + "=0"; 

			String folder = "content://sms/inbox";

			Uri mSmsQueryUri = Uri.parse(folder);
			String columns[] = new String[] {"person", "address", "body", "date","status"}; 
			String sortOrder = "date ASC"; 
			Cursor c = this.cordova.getActivity().getContentResolver().query(mSmsQueryUri, columns, UNREAD_CONDITION, null, sortOrder);
			int nummissedSMS = c.getCount();
			c.close(); 
			
			callbackContext.success(new JSONObject().put("returnVal", nummissedSMS));
		}
		
		if(action.equals("calls")){
			String[] projection = { CallLog.Calls.CACHED_NAME, CallLog.Calls.CACHED_NUMBER_LABEL, CallLog.Calls.TYPE };
			
			String where = CallLog.Calls.TYPE+"="+CallLog.Calls.MISSED_TYPE+" AND "+CallLog.Calls.IS_READ+"=0";          
			int nummissedCalls = 0;
			Cursor c;
			
			try {
				c = this.cordova.getActivity().getContentResolver().query(CallLog.Calls.CONTENT_URI, projection, where, null, null ); 
			} catch(Exception e) {
				where = CallLog.Calls.TYPE+"="+CallLog.Calls.MISSED_TYPE+" AND "+CallLog.Calls.NEW+"=1";					
				c = this.cordova.getActivity().getContentResolver().query(CallLog.Calls.CONTENT_URI, projection, where, null, null );				
			}
			
			c.moveToFirst();  
			nummissedCalls = c.getCount();
			c.close(); 
			callbackContext.success(new JSONObject().put("returnVal", nummissedCalls));				
		}

		return true;
	}  
}
     
	



		    

