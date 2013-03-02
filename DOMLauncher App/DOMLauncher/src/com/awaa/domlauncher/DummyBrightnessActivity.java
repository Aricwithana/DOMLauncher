package com.awaa.domlauncher;

import java.io.File;

import android.content.Intent;
import android.os.Bundle;
import android.os.Environment;
import android.os.Handler;
import android.os.Message;
import android.provider.Settings;
import android.view.WindowManager;


import org.apache.cordova.*;

//@SuppressLint("HandlerLeak")
public class DummyBrightnessActivity extends DroidGap{

    private static final int DELAYED_MESSAGE = 1;
    //static class MyHandler extends Handler { private DummuBrightnessActivity activity = null; MyHandler(DummBrightnessActivity activity) { this.activity = activity; } 
    static class MyHandler extends Handler { 
    	private DummyBrightnessActivity activity = null; 
    	MyHandler(DummyBrightnessActivity activity) { 
    		
    		this.activity = activity; 
    		
    		  
               
    		}

    	public void handleMessage(Message msg) {
            if(msg.what == DELAYED_MESSAGE) {
                activity.finish();
            }
            super.handleMessage(msg);
        }
    }
    private Handler handler;

    @Override
	public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);            
        handler = new MyHandler(this);
        
        File sdcard = Environment.getExternalStorageDirectory();
   
        File fstxtfile = new File(sdcard,"/DOMLauncher/settings/fullscreenEnabled");
     
  		if(fstxtfile.exists()){ 
  			getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN, 
  			WindowManager.LayoutParams.FLAG_FULLSCREEN | 
  			WindowManager.LayoutParams.FLAG_FORCE_NOT_FULLSCREEN);
        }
  		
  		
        Intent brightnessIntent = this.getIntent();
        float brightness = brightnessIntent.getFloatExtra("brightness value", 0.1f);
        
        int sysbright = brightnessIntent.getIntExtra("system value", 1);
        int toggleMode = brightnessIntent.getIntExtra("toggle mode", 3);
        WindowManager.LayoutParams lp = getWindow().getAttributes();
      
        lp.screenBrightness = brightness;

        
        if(toggleMode != 3 ){
        	
        	Settings.System.putInt(getContentResolver(),Settings.System.SCREEN_BRIGHTNESS_MODE, toggleMode); 
            //android.provider.Settings.System.putInt(getContentResolver(), android.provider.Settings.System.SCREEN_BRIGHTNESS, sysbright);
            //getWindow().setAttributes(lp);

            Message message = handler.obtainMessage(DELAYED_MESSAGE);
            //this next line is very important, you need to finish your activity with slight delay
            handler.sendMessageDelayed(message,500);         	
        }
        
        
        if(toggleMode == 3 ){
	        Settings.System.putInt(getContentResolver(),Settings.System.SCREEN_BRIGHTNESS_MODE, 0); 
	        android.provider.Settings.System.putInt(getContentResolver(), android.provider.Settings.System.SCREEN_BRIGHTNESS, sysbright);
	        getWindow().setAttributes(lp);
	
	        Message message = handler.obtainMessage(DELAYED_MESSAGE);
	        //this next line is very important, you need to finish your activity with slight delay
	        handler.sendMessageDelayed(message,500); 
        }
    }

}


