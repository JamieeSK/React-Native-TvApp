# SportNoord App

![Documentation](https://img.shields.io/static/v1?label=!!!&message=Documentation&color=%3CCOLOR%3E)

App for Sportnoord, that will show all kind of videos about sports, and livestreams.

## Status

* Documentation (e.g. "How do I run this thing?")

## Requirements

To build Nexus, the following will need to be installed and available from your shell:

* [NodeJS](https://nodejs.org/en/) version 10.15.1 or higher not development versions!)
* [Git](https://git-scm.com/)
* [Android SDK](https://developer.android.com/studio)
* [xCode](https://developer.apple.com/xcode/)

## Getting started

You can build this project running the following commands;

>First, clone this repository:
```bash
git clone git@gitlab.com:het-kasteel/sportnoord/sportnoord-app.git && cd sportnoord-app
```

>Then use `git checkout` to go to the right branch:
```bash
git checkout features/styling
```

>Depending on the branch, install the following NPM dependecies:


features/styling

```bash
npm install
npm install --save react-native-video
npm install --save react-native-media-controls
npm add react-native-screens
npm install --save react-native-gesture-handler
```

>Next, start the application by either using the AndroidTV or tvOS scripts:

tvOS
```bash
sh scripts/tvos.sh
```
AndroidTV

```bash
sh scripts/androidtv.sh 
```

**NOTE: When using AndroidTV, make sure the emulater is already up and running before running the command.**

## Errors
It's possible that the first time you try to run the script you get the following error:
```
> Task :app:validateSigningDebug FAILED
```
>To solve this you need to create an debug keystore; `cd` to the android/app folder:
```
cd android/app
```
>Then add the following in this folder:
```
keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000
```

>Return back to your branch:
```
cd ../../
```
>Run the script again, it should work now!

If you get this error:
```
> Task: :app:installDebug FAILED
```
>Close your emulator, terminal and Metro Bundler

>Open terminal and emulator and run the script again, it should work now!

## Authors

This project is maintained by 'Het Kasteel'.

<table>
  <tbody>
    <tr>
      <td align="center">
        <a href="https://github.com/Vanture">
          <img width="150" height="150" src="https://gitlab.com/uploads/-/system/user/avatar/2254656/avatar.png?width=400">
          </br>
          Tim Twiest
        </a>
      </td>
        <td align="center">
        <a href="#">
          <img width="150" height="150" src="https://secure.gravatar.com/avatar/183f823645541791b1348ef9cbb0fbf9?s=800&d=identicon">
          </br>
          Jamie Konigferander
        </a>
      </td>
        <td align="center">
        <a href="#">
          <img width="150" height="150" src="https://gitlab.com/uploads/-/system/user/avatar/3538336/avatar.png?width=400">
          </br>
          Dennis Verhaagen
        </a>
      </td>
        <td align="center">
        <a href="#">
          <img width="150" height="150" src="https://secure.gravatar.com/avatar/183f823645541791b1348ef9cbb0fbf9?s=800&d=identicon">
          </br>
           Benjamin Nami
        </a>
      </td>
        <td align="center">
        <a href="#">
          <img width="150" height="150" src="https://secure.gravatar.com/avatar/183f823645541791b1348ef9cbb0fbf9?s=800&d=identicon">
          </br>
           Robbin Bakker
        </a>
      </td>
              <td align="center">
        <a href="#">
          <img width="150" height="150" src="https://gitlab.com/uploads/-/system/user/avatar/3456280/avatar.png?width=400">
          </br>
           Gerdine Kwebeman
        </a>
      </td>
    </tr>
  <tbody>
</table>
