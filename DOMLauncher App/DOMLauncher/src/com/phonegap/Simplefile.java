package com.phonegap;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStreamWriter;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.apache.cordova.api.CallbackContext;
import org.apache.cordova.api.CordovaPlugin;

import android.os.Environment;

public class Simplefile extends CordovaPlugin {

	@Override
	   public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
		File sdcard = Environment.getExternalStorageDirectory();
		if(action.equals("saveFile")){
			try {	
				String path = args.getJSONObject(0).getString("file");
				String content = args.getJSONObject(0).getString("content");
				
				File myFile = new File(sdcard, path);
				myFile.createNewFile();
				FileOutputStream fOut = new FileOutputStream(myFile);
				  
				OutputStreamWriter myOutWriter = new OutputStreamWriter(fOut);
				myOutWriter.write(content);
				myOutWriter.close();
				fOut.close();
				callbackContext.success(new JSONObject().put("returnVal", "File Saved"));
			} catch (JSONException e) {
				callbackContext.success(new JSONObject().put("returnVal", "JSON_EXCEPTION"));
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		
		if(action.equals("openFile")){	
			try {
				String path = args.getJSONObject(0).getString("file");
				File file = new File(sdcard, path);

				FileInputStream is = new FileInputStream(file.getAbsolutePath());
				int size = is.available();
				byte[] buffer = new byte[size];
				is.read(buffer);
				is.close();
				String text = new String(buffer);

				callbackContext.success(new JSONObject().put("returnVal", text));
			} catch (IOException e) {
                callbackContext.success(new JSONObject().put("returnVal", false));
				// TODO Auto-generated catch block	
				e.printStackTrace();
			} catch (JSONException e) {
                callbackContext.success(new JSONObject().put("returnVal", false));
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
		} 
		
		if(action.equals("domodList")){
			File f = new File(sdcard,"/DOMLauncher/DOMods");
			File[] files = f.listFiles();
			JSONArray jArray = new JSONArray();
		
			for (File inFile : files) {
			    if (inFile.isDirectory()) {		    	
			    	String[] folderName = inFile.toString().split("/");			
			    	String lastItem = folderName[folderName.length - 1];					    							
					jArray.put(lastItem);
			    }
			}
			
			callbackContext.success(new JSONObject().put("returnVal", jArray));
			
		}		
		return true;
	}
}
