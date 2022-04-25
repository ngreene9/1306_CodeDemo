# **Mapping Ivan Allen's Atlanta**
Atlanta is one of the fastest growing cities in the United States, but the rapid development has come at the cost of many of Atlanta's most storied civil rights landmarks. Our project intends to create an easy-to-navigate digital archive of civil rights era Atlanta. Users can view historic landmarks via our curated tour, or simply explore the archive on their own.
# Release Notes

## Version 1.0.0

### New Features
 * Guided Tour Functionality added, enabling users to view site information without having to access map
 * Images now feature brief descriptions, giving users context as to what they're being shown
 
### Bug Fixes
 * Issue where buttons are functionally larger than they visually appear has been fixed
 
### Known Issues / Missing Features
 * After being unable to resolve issues with AsyncStorage, bookmarking functionality is not implemented in
 the application. The UI elements are present, but currently do nothing on the back end.

## Version 0.4.0

### Bug Fixes
* Fixed some issues with async storage not working correctly

### Known Issues
* Several issues with AsyncStorage left unfixed
* Missing information needed to complete final version of application

## Version 0.3.0

### New Features
 * Users can now bookmark sites for quick access later
 * Users can now swipe open a navigation drawer to access their bookmarked sites / change view modes
 
### Bug Fixes
 * Fixed TouchableOpacity Components not functioning properly when placed inside nested navigator
 * Fixed improper resizing on older iPhones, causing buttons to be cut off the screen
 
### Known Issues
 * Async-Storage not being utilized correctly, causing site screens to forget they were bookmarked when returning to them in the stack
 * Navigation transitions stemming from button press became less smooth, seemingly out of nowhere. Nested Navigators probably have something to do with this

## Version 0.2.0

### New Features
 * Added & formatted Screens to view detailed site information
 * Added static images to site detail screen
 * Added scrolling text box to site detail screen
 * Reformatted code to place different screens in their own files, this will help with debugging in the future

### Bug Fixes
* Fixed issue where images would sometimes fail to load

### Known Issues
* When transitioning to site detail page from map screen, the image will sometimes stretch beyond the frame
   of the site screen, causing the animation to appear slightly choppy
* Bookmarking is a bit tricky, but we believe it can implemented in sprint 3 through the use of 
  async-storage and the React-Native Navigation-Drawer

## Version 0.1.0

### New Features
* Implemented React-Native Callouts into map markers
* Added Images into marker popups to preview site
* Prepared to implement navigation from marker popup to information screen

### Bug Fixes
* Fixed issue where Marker components could sometimes be inappropriately sized

### Known Issues
* **None as of now** ![Happy](https://ih1.redbubble.net/image.1759229733.7812/flat,128x,075,f-pad,128x128,f8f8f8.jpg)
>_but expecting this to change soon_
![Sadge](https://ih1.redbubble.net/image.1249935413.9251/flat,128x128,075,t-pad,128x128,f8f8f8.jpg)

# Installation Instructions

## Prerequisites 
 * Git must be installed on your computer. We recommend downloading Github Desktop, as it will install the latest version of Git onto your device automatically. 
 * You'll need some form of text editor, we recommend using Visual Studio or Visual Studio Code.
 * You'll need to install Node.js onto your device. Simply access the following link, and download the version that matches your operating system:  https://nodejs.org/en/download/
 
## Install Steps
 * With GitHub, you'll need to pull this repository onto your device. This can be done easily using GitHub Desktop. Locate the large green button near the top of this page labeled "Code" and press it. Once pressed, you will see a popup containing a link to this repository. Copy the link, and then go back to GitHub Desktop. Click the "Repositories" tab, then press "Add". Paste the link, and then the repository will be added to your device in a location of your choosing.
 * Open up your editor (Visual Studio or counterpart), and open up the folder you just saved to your device. From here, pull up the terminal. This can usually be done with shortcut (ctrl + ') or (ctrl + t). If neither works from your editor, then simply type 'cmd' into your windows search.
 * With the terminal open in the project folder, you'll type "npm install expo". This will install all the final prerequisites you need for your computer.
 * To run the application, type "npm start" into the terminal. This will generate a QR code. The first time you scan the QR code, you'll be prompted to download the expo app (Do it). Once the Expo application is downloaded, scanning the QR code will run the Mapping Ivan Allen's Atlanta application on your mobile device.
 
 ## Troubleshooting
 
 * When running the application using Expo, occasionally a lapse in network connection can cause the simulation to fail. When this happens, type 'ctrl + c' into the command prompt and then press enter to end the current session. After that, you can type 'npm start' again to start a new session.
 * If you encounter an error while running the application, you can restart the session by typing 'ctrl + r' into the command terminal
 * If you encounter any issues that are not addressed in this documentation we recommend searching the issue on stackOverflow and/or the React Native Expo forums linked here: https://forums.expo.dev/
 
 

