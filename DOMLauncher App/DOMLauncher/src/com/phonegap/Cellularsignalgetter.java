package com.phonegap;

import org.json.JSONArray;

import org.apache.cordova.api.Plugin;
import org.apache.cordova.api.PluginResult;

import android.content.Context;
import android.telephony.PhoneStateListener;
import android.telephony.SignalStrength;
import android.telephony.TelephonyManager;

public class Cellularsignalgetter extends Plugin {
    PhoneStateListener phoneStateListener;
   
    public Cellularsignalgetter() {
            this.phoneStateListener = new PhoneStateListener() {
                    @Override
                    public void onSignalStrengthsChanged(SignalStrength signalStrength)
                    {
                            super.onSignalStrengthsChanged(signalStrength);
                           
                            int strengthDbm = -1;
                            if (signalStrength.isGsm()){
                            	
                                    strengthDbm = -140 + 2 * signalStrength.getGsmSignalStrength();
                            } else {
                                    strengthDbm = signalStrength.getCdmaDbm();
                                    if (strengthDbm == -1){
                                            strengthDbm = signalStrength.getEvdoDbm();
                            }}
                            updateSignalStrength(strengthDbm);
                    }
            };
    }
   
    private void updateSignalStrength(int strengthDbm) {
            sendJavascript("cellsignalCallback(" + strengthDbm + ")");
    }
   
    @Override
    public void onPause(boolean multitasking)
    {
            stopListen();
    }
   
    @Override
    public void onResume(boolean multitasking)
    {
            startListen();
    }
   
    @Override
    public void onDestroy()
    {
            stopListen();
    }
   
   
    private void startListen()
    { TelephonyManager telephonyManager = (TelephonyManager) this.cordova.getActivity().getSystemService(Context.TELEPHONY_SERVICE);
            telephonyManager.listen(phoneStateListener, PhoneStateListener.LISTEN_SIGNAL_STRENGTHS);
    }
    private void stopListen()
    { TelephonyManager telephonyManager = (TelephonyManager) this.cordova.getActivity().getSystemService(Context.TELEPHONY_SERVICE);
            telephonyManager.listen(phoneStateListener, PhoneStateListener.LISTEN_NONE);
    }
   
    @Override
public PluginResult execute(String action, JSONArray args, String callbackId) {
           
            try {
            	String csgAction = args.getJSONObject(0).getString("action");	 
                   
                    if (csgAction.equals("start")) {
                            startListen();
                    } else if (csgAction.equals("stop")) {
                            stopListen();
                    }
                   
                    return new PluginResult(PluginResult.Status.OK, "");
            } catch(Exception e) {
                    return new PluginResult(PluginResult.Status.JSON_EXCEPTION);
            }
    }
   
}
//String set = args.getJSONObject(0).getString("action");