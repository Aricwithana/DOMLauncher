
package com.phonegap;

import java.io.File;

import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStreamWriter;

import org.json.JSONArray;
import org.json.JSONException;

import org.apache.cordova.api.Plugin;
import org.apache.cordova.api.PluginResult;

public class Simplesave extends Plugin {

	@Override
	public PluginResult execute(String action, JSONArray args, String callbackId) {
		
		try {
			String filePlace = args.getJSONObject(0).getString("filePlace");
			String fileObject = args.getJSONObject(0).getString("fileObject");
				
			//File file = new File("/data/data/com.awaa.chome/settings.xml");
			
			File myFile = new File(filePlace);
			//File myFile = new File("/mnt/sdcard/settings.xml");
			myFile.createNewFile();
			FileOutputStream fOut = new FileOutputStream(myFile);
			
			OutputStreamWriter myOutWriter = new OutputStreamWriter(fOut);
			myOutWriter.write(fileObject);
			myOutWriter.close();
			fOut.close();
		
			
			
		} catch (JSONException e) {
			return new PluginResult(PluginResult.Status.JSON_EXCEPTION);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return new PluginResult(PluginResult.Status.OK);
	}
	
	


}
