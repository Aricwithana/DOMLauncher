DOMLauncher
===========

Visit the new site! http://www.domlauncher.com


Cordova Powered Android App Launcher. 

1.1.1 Release! 

DOMLauncher is a custom Android Launcher specifically designed for web developers and designers.  Utilizing a webview and the Cordova Library, DOMLauncher allows any web developer/designer to use their skills of HTML/CSS/JS to create fully custom and unique user interfaces for their Android devices.  Users with Java coding skills have the ability to expand DOMLauncher's functionality.


Before going any further understand a couple key points:

1.  This is free for all to use as they please EXCEPT, make a competing Cordova/Phonegap Based launcher with this code that is not also open and free.  Commerical Profit Gain is Prohibited unless with a purchased license. Everything else, just credit me.  I retain all ownership of the project and code but happy to share!  If you really want, I'd love to see what others use this stuff for so drop me a line!

2.  This is a luxury launcher replacement at the moment as our devices evolve so minimum Android 4.0 requirements.  Android 4.4 will be adding all kinds of new features along with a proper Chromium based webview!

4.  The 'DOMod'-what a user loads for a custom UI, loads off your internal storage first and then the sdcard. There is a baked in 'dummy' DOMod if there is an issue loading a DOMod into the application.

If one can handle these things, you have in your hands the ability to create ANY USER INTERFACE you want for your device. Anything that you can imagine, you can create with the only real limitation is the hardware of the device.

Personally, I love LCARS.





Instructions:

Compile with Eclipse and intall on the device or copy the provided apk to device and install.  DOMLauncher will create a folder called 'DOMLauncher' either on the internal storage first and if that is not available onto the external sdcard.

Download the Tutorial DOMod:  https://github.com/AricwithanA/Tutorial_DOMod or create your own.  To install a DOMod copy the folder into 'DOMLauncher/DOMods/yourDOMod'

DEVELOPERS:

The app itself is not extensive, it is more like a shell application.  The 'bulk' of the app comes from the custom DOMods that I, you or others will create.  I have written a collection of additional Cordova API Plugins to make this app function, the rest is just HTML/CSS/JS.

Check out the additional plugins in the Wiki!

Many of these plugins are commonly asked for things for the Cordova Library or use in a native application.  Since my background is not in Java, I am looking for people that would like to optimize and tweak the Cordova Plugins since Java is not my coding language of choice.

Each plugin comes with a nice javascript call for ease of use!


DOMLauncher is missing two main features of a native launcher:

Native Widgets - By research could be done via canvas to render and a way to pass back events to the right activity listener.

Add Shortcut to desktop from application - Have plugin code provided by an awesome person but needs to be finished.

If anyone wants to contribute!  Go right ahead!  I am currently recruiting a java developer!

-Aricwithana


Credits & Thanks:

Cordova/Phonegap IRC Peoples:  Devgeeks, EionRobb, MitchW, BlinkyBill, and more!  Without these awesome people this would not exist. 
DOMLauncher Font:  http://www.levien.com/type/myfonts/inconsolata.html  
Cordova Developers

iDangero.us for their swiper

