package com.phonegap;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStreamWriter;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.apache.cordova.api.CallbackContext;
import org.apache.cordova.api.CordovaPlugin;

public class Simplesave extends CordovaPlugin {

	@Override
	   public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
		
		if(action.equals("saveFile")){
			try {
				String path = args.getJSONObject(0).getString("file");
				String content = args.getJSONObject(0).getString("content");
				
				File myFile = new File(path);
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
		return true;
	}
}
