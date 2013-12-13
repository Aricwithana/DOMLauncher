package com.phonegap;

import java.util.Timer;
import java.util.TimerTask;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import org.apache.cordova.api.CallbackContext;
import org.apache.cordova.api.CordovaPlugin;

import android.database.Cursor;
import android.net.Uri;
import android.provider.CallLog;
import android.util.Log;

public class Missedcommunications extends CordovaPlugin { 

	Timer smsTimer;
	Timer callsTimer; 
    int smsCount = -1;
    int callCount = -1;
    
    int smsTiming = -1;
    String smsCallback;
    int callsTiming = -1;
    String callsCallback;
    
    private void startSMS(final int timing, final String callback)
    {
    	smsCallback = callback;
    	smsTiming = timing;
		Timer smsTimer = new Timer();
		smsTimer.schedule(new TimerTask() {

            @Override
            public void run() {
                
            	smsRun(callback);
        		
            }
        }, timing);
    }
    
	private void stopSMS()
    {
		if(smsTimer != null){
			smsTimer.cancel();
		    smsCount = -1;
		    smsCallback = "";
		    smsTimer = null;						
		}

    }
	
    private void smsRun(String callback){
		String SMS_READ_COLUMN = "read"; 
        String UNREAD_CONDITION = SMS_READ_COLUMN + "=0"; 

		String folder = "content://sms/inbox";

		Uri mSmsQueryUri = Uri.parse(folder);
		String columns[] = new String[] {"person", "address", "body", "date","status"}; 
		String sortOrder = "date ASC"; 
		Cursor c = this.cordova.getActivity().getContentResolver().query(mSmsQueryUri, columns, UNREAD_CONDITION, null, sortOrder);
		int nummissedSMS = c.getCount();
		c.close();
		if(smsCount == -1){
			this.webView.sendJavascript(callback+"(" + nummissedSMS + ")"); 
			smsCount = nummissedSMS;
		}else if(smsCount == nummissedSMS){
			
		}else{
			smsCount = nummissedSMS;
			this.webView.sendJavascript(callback+"(" + nummissedSMS + ")");		
		}
		
		
    }

	
	
   private void startCalls(final int timing, final String callback)
    {
	   callsCallback = callback;
	   callsTiming = timing;
		Timer callsTimer = new Timer();
		callsTimer.schedule(new TimerTask() {

            @Override
            public void run() {
                
            	callsRun(callback);
        		
            }
        }, timing);
    }

	private void stopCalls()
    {
		if(callsTimer != null){
			callsTimer.cancel();
		    callCount = -1;
		    callsCallback = "";
		    callsTimer = null;						
		}

    }
   
   private void callsRun(String callback){
		String[] projection = { CallLog.Calls.CACHED_NAME, CallLog.Calls.CACHED_NUMBER_LABEL, CallLog.Calls.TYPE };
		
		String where = CallLog.Calls.TYPE+"="+CallLog.Calls.MISSED_TYPE+" AND "+CallLog.Calls.IS_READ+"=0";          

		Cursor c;
		
		try {
			c = this.cordova.getActivity().getContentResolver().query(CallLog.Calls.CONTENT_URI, projection, where, null, null ); 
		} catch(Exception e) {
			where = CallLog.Calls.TYPE+"="+CallLog.Calls.MISSED_TYPE+" AND "+CallLog.Calls.NEW+"=1";					
			c = this.cordova.getActivity().getContentResolver().query(CallLog.Calls.CONTENT_URI, projection, where, null, null );				
		}
		
		c.moveToFirst();  
		int nummissedCalls = c.getCount();
		c.close(); 

		if(callCount == -1){
			this.webView.sendJavascript(callback+"(" + nummissedCalls + ")"); 
			callCount = nummissedCalls;
		}else if(callCount == nummissedCalls){
			
		}else{
			callCount = nummissedCalls;
			this.webView.sendJavascript(callback+"(" + nummissedCalls + ")");		
		}
   
   
   }
   

	
	
    @Override
    public void onPause(boolean multitasking)
    {
       	if(smsTimer != null){stopSMS();}
       	if(callsTimer != null){stopCalls();}
    	
    	
    }
   
    @Override
    public void onResume(boolean multitasking)
    {
        if(smsCount != -1){
        	startSMS(smsTiming, smsCallback);	          
        }       
        
        if(callCount != -1){
        	startCalls(callsTiming, callsCallback);
        }   
    }

    @Override
    public void onDestroy()
    {
       	if(smsTimer != null){stopSMS();}
       	if(callsTimer != null){stopCalls();}
    }
  
	@Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
		Boolean enable = args.getJSONObject(0).getBoolean("enable");
		int timing = args.getJSONObject(0).getInt("timing");
		String callback = args.getJSONObject(0).getString("success");

		if(action.equals("sms")){
			if(enable == true){
				startSMS(timing, callback);
				callbackContext.success(new JSONObject().put("returnVal", true));							
			}
			
			if(enable == false){
				stopSMS();
			}

		}
		
		if(action.equals("calls")){
			if(enable == true){
				startCalls(timing, callback);
				callbackContext.success(new JSONObject().put("returnVal", true));							
			}
			
			if(enable == false){
				stopCalls();
			}

		}

		return true;
	}  
}
     
	



		    

