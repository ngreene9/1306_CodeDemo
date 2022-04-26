# **Mapping Ivan Allen's Atlanta**
Atlanta is one of the fastest growing cities in the United States, but the rapid development has come at the cost of many of Atlanta's most storied civil rights landmarks. Our project intends to create an easy-to-navigate digital archive of civil rights era Atlanta. Users can view historic landmarks via our curated tour, or simply explore the archive on their own.
<p align="center">
<img src="https://github.com/ngreene9/JIE_1306_MappingAtlanta/blob/master/Home%20Screen.png" width="250">            <img src="https://github.com/ngreene9/JIE_1306_MappingAtlanta/blob/master/Guided%20Tour.png" width="250">            <img src="https://github.com/ngreene9/JIE_1306_MappingAtlanta/blob/master/List%20of%20Sites.png" width="250">
</p>

# Release Notes

## Version 1.0.0

### New Features
 * Guided tour functionality added, enabling users to view site information without having to access map.
 * Images now feature brief descriptions, giving users context for what they're being shown.
 
### Bug Fixes
 * Issue where buttons are functionally larger than they visually appear have been fixed.
 
### Known Issues / Missing Features
 * After being unable to resolve issues with AsyncStorage, bookmarking functionality is not implemented in
 the application. The UI elements are present, but currently do nothing on the back end.

## Version 0.4.0

### Bug Fixes
* Fixed some issues with Async-Storage not working correctly.

### Known Issues
* Several issues with Async-Storage left unfixed.
* Missing information needed to complete final version of application.

## Version 0.3.0

### New Features
 * Users can now bookmark sites for quick access later.
 * Users can now swipe open a navigation drawer to access their bookmarked sites or change view modes.
 
### Bug Fixes
 * Fixed TouchableOpacity Components not functioning properly when placed inside nested navigator.
 * Fixed improper resizing on older iPhones, causing buttons to be cut off the screen.
 
### Known Issues
 * Async-Storage not being utilized correctly, causing site screens to forget they were bookmarked when returning to them in the stack.
 * Navigation transitions stemming from button press became less smooth, seemingly out of nowhere. Nested navigators probably have something to do with this.

## Version 0.2.0

### New Features
 * Added and formatted screens to view detailed site information.
 * Added static images to site detail screen.
 * Added scrolling text box to site detail screen.

### Bug Fixes
* Fixed issue where images would sometimes fail to load.

### Known Issues
* When transitioning to site detail page from map screen, the image will sometimes stretch beyond the frame of the site screen, causing the animation to appear slightly choppy.
* Bookmarking is a bit tricky, but we believe it can implemented in Sprint 3 through the use of Async-Storage and the React-Native Navigation-Drawer.

## Version 0.1.0

### New Features
* Implemented React-Native Callouts into map markers.
* Added images into marker popups to preview site.
* Prepared to implement navigation from marker popup to information screen.

### Bug Fixes
* Fixed issue where marker components could sometimes be inappropriately sized

### Known Issues
* No issues as of now.

# Installation Instructions

## Prerequisites 
 * Git must be installed on your computer. Your computer should already have Git installed if it uses MacOS or Linux. If you own a Windows computer, you can download Git [here](https://gitforwindows.org/). We recommend downloading [Github Desktop](https://desktop.github.com/), as it will install the latest version of Git onto your device automatically. 
 * You'll need some form of text editor; we recommend using [Visual Studio or Visual Studio Code](https://visualstudio.microsoft.com/).
 * You'll need to install [Node.js](https://nodejs.org/en/download/) onto your device. Access the link provided, and download the version that matches your operating system. 
 * You'll need to install the Expo Go application on your [Android](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www) or [iOS](https://apps.apple.com/app/apple-store/id982107779) smartphone.
 
## Installation
 1. Pull this repository onto your device using GitHub Desktop. Locate the large green button near the top of this page labeled "Code" and press it. Once pressed, you will see a popup containing a link to this repository. Copy the link, and then go back to GitHub Desktop. Click the "Repositories" tab, then press "Add". Paste the link, and then the repository will be added to your device in a location of your choosing. <br> Alternatively, you can use this link: `https://github.com/ngreene9/JIE_1306_MappingAtlanta.git`
 2. Open up Visual Studio or some text editor of your choice, and open the folder you just saved to your device. From here, pull up the terminal. This can usually be done with shortcut <kbd>Ctrl</kbd> + <kbd>'</kbd>  or <kbd>Ctrl</kbd> + <kbd>T</kbd>. If neither works from your editor, then simply type `cmd` into your Windows search box.
 3. With the terminal open in the project folder, type `npm install expo`. This will install all the final prerequisites you need for your computer.
 4. To run the application, type `npm start` into the terminal. This will generate a QR code. If you haven't downloaded the Expo Go application on your phone, you'll be prompted to download when you scan the QR code with it. Once it is downloaded, scanning the QR code will run the Mapping Ivan Allen's Atlanta application on your mobile device.
 
 ## Troubleshooting
 
 * If you have trouble cloning the repository with GitHub, you can manually clone the repository in the terminal. 
      1. Create a folder where you want to store your repository, and open this folder with your text editor. From here, pull up the     terminal with the same steps as the installation guide above.
      2. Type `git clone https://github.com/ngreene9/JIE_1306_MappingAtlanta.git` into the terminal.
      3. Continue steps 3 and 4 of the installation guide above.
 * When running the application using Expo, occasionally a lapse in network connection can cause the simulation to fail. When this happens, type <kbd>Ctrl</kbd> + <kbd>C</kbd> while inside the command prompt and then press enter to end the current session. After that, you can type `npm start` again to start a new session.
 * If you encounter an error while running the application, you can restart the session by typing <kbd>Ctrl</kbd> + <kbd>R</kbd> into the command terminal.
 * If you encounter any issues that are not addressed in this documentation we recommend searching the issue on [Stack Overflow](https://stackoverflow.com/) and/or the [React Native Expo forums](https://forums.expo.dev/).
 
 

