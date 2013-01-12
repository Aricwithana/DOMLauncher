
package com.phonegap;


import java.io.ByteArrayOutputStream;
import java.io.File;

import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import org.apache.cordova.api.Plugin;
import org.apache.cordova.api.PluginResult;

import android.content.Intent;
import android.content.pm.ApplicationInfo;
import android.content.pm.PackageManager;
import android.graphics.Bitmap;
import android.graphics.drawable.BitmapDrawable;
import android.graphics.drawable.Drawable;

import android.util.Log;

public class Applist extends Plugin {

	@Override
	public PluginResult execute(String action, JSONArray args, String callbackId) {
		
		try {
			String refreshIcons = args.getJSONObject(0).getString("refreshIcons");
			
			if(refreshIcons.equals("true")){
				generateIcons();	
			}
			
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
				
		
		generateList(); 
		
		String appList = this.generateList();
				
		return new PluginResult(PluginResult.Status.OK, appList);
	}
	
private String generateList() {	

	final PackageManager pm = this.cordova.getActivity().getPackageManager();
		
		//Create new JSON Array.
		JSONArray jArray = new JSONArray();
		
		List<ApplicationInfo> packages = pm.getInstalledApplications(PackageManager.GET_META_DATA);
		
		for (ApplicationInfo packageInfo : packages) {
						
			String pkgName = packageInfo.packageName;
			 			
			Intent appActivity = pm.getLaunchIntentForPackage(packageInfo.packageName);
			    
			String appName = packageInfo.loadLabel(this.cordova.getActivity().getPackageManager()).toString();
		
			//Code to send package information to Eclipse Log.
			//Log.d(id, "Name:" + appName);
			// Log.d(id, "Package:" + pkgName);
			//Log.d(id, "Activity:" + appActivity);
		  
			try {
				
				if(appActivity != null){
					
					String[] appIntent = appActivity.toString().split("/");
					
					String appIFormated = appIntent[1].substring(0, appIntent[1].length() - 2);

					
					JSONObject json = new JSONObject();
					json.put("name", appName).put("intent", appIFormated).put("package", pkgName);				
					jArray.put(json);
				}
			
			} catch (JSONException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		
			
		
		}// Turns the JSON array into a string and returns the value. 
		
		String results = jArray.toString();
		return results;	
	}




private void generateIcons() {	

		PackageManager pm = this.cordova.getActivity().getPackageManager();

		List<ApplicationInfo> packages = pm.getInstalledApplications(PackageManager.GET_META_DATA);
		
		for (ApplicationInfo packageInfo : packages) {
			Log.d(id, "Icon Gen");
				
			Intent appActivity = pm.getLaunchIntentForPackage(packageInfo.packageName);
			
			if(appActivity != null){
				Log.d(id, "Package:" + appActivity);
				String pkgName = packageInfo.packageName;		
				Drawable appIcon = packageInfo.loadIcon(this.cordova.getActivity().getPackageManager());
							
				File file = new File("/mnt/sdcard/DOMLauncher/icons/"+pkgName+".png");
				FileOutputStream foStream = null;
				
				Bitmap bitmap = ((BitmapDrawable)appIcon).getBitmap();
				
				ByteArrayOutputStream oStream = new ByteArrayOutputStream();  
				bitmap.compress(Bitmap.CompressFormat.PNG, 100, oStream); //bm is the bitmap object   
				
				 byte[]	b = oStream.toByteArray();				
					try {
						foStream = new FileOutputStream(file);
						oStream.write(b);
						oStream.writeTo(foStream);
						oStream.close();
						foStream.close();					
					} catch (IOException e1) {
						// TODO Auto-generated catch block
						e1.printStackTrace();
					}
				pkgName = null;	
				appIcon = null;
				file = null;
				b = null;
				foStream = null;
				oStream = null;
				bitmap = null;
				System.gc();
			}				
		}// Turns the JSON array into a string and returns the value. 
		packages = null;
		pm = null;
		System.gc();
	}
}