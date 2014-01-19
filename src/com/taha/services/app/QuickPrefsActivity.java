package com.taha.services.app;

import android.content.Intent;
import android.os.Bundle;
import android.preference.PreferenceActivity;
import android.view.Menu;
import android.view.MenuItem;

public class QuickPrefsActivity extends PreferenceActivity{

	@Override
	public void onCreate(Bundle savedInstanceState) {
		
		super.onCreate(savedInstanceState);
		addPreferencesFromResource(R.xml.preferences);
	}

	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		
		menu.add(Menu.NONE, 0,0,"Show Current Settings");
		return super.onCreateOptionsMenu(menu);
	}

	@Override
	public boolean onOptionsItemSelected(MenuItem item) {
		System.out.println("=========== Item Selected is : "+item.getItemId());
		//boolean flag = false;
		//String redirectActivity = "";
		switch (item.getItemId()) {
		case 1:
			startActivity(new Intent(this, ShowSettingsActivity.class));
			return true;
		default:
			return false;
		}
	}
	
	
}
