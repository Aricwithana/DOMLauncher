DOMLauncher
===========

Cordova Powered Android App Launcher Replacement

This is a Beta.  

Before going any further understand a couple key points:

1.  This is free for all to use as they please EXCEPT, make a competing Cordova/Phonegap Based launcher with this code that is not also open and free.  Everyone else, just credit me.  If you really want, I'd love to see what others use this stuff for so drop me a line!

2.  I created this for myself.  I am namely a Front End Developer, not an app developer or native programmer.  It is a personification of one my loves:  User Interfaces.  

3.  This is a luxury launcher replacement.  I only offically support Android 4.0+ but the app CAN work down to version 2.3 if one compiles for themselves.

4.  It likes memory if you have it to give.  Average load is around 40 meg, but can jump when refreshing applicaiton icons (but drops back down).  This may be do to my newer device.  Did not see this happen on my old DroidX.

5.  This runs off your SDCARD. I changed this because my device allows the internal memory to be the 'sdcard' and the physical card is sdcardext.  A device that doesn't not do this, the same code instead references the physical SDCARD.  The key factor to remember when a device only has the external, physical card as the sdcard:  The App Will Not Load The Theme When The SDCARD IS MOUNTED.  I will have in place a 'dummy' theme that is one page and can access the very basics. This will be baked into the app for this possibility allowing functionality while the sdcard is mounted (when the phone is plugged into a computer and mounted as a drive).


If one can handle these things, you have in your hands the ability to create ANY USER INTERFACE you want for you Launcher Screen(s).  It is all HTML/CSS and some simple javascript if one want to dive into that.  Anything that you can imagine with the only real limitation is the hardware device.  

Personally, I love LCARS.

Instructions:

Compile with Eclipse and intall on the device.

Folder within the SD CARD folder, just copy stuff to your sdcard AFTER you launch the app the first time. 


-Aricwithana
