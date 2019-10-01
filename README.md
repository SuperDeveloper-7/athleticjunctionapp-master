# React Native Project

For interacting with AthleticJunctionEvents.com API.

- Scanning/validating tickets

# Android Release
Steps
1) Remove exisiting app from Android Phone, or android phone will complain about signatures
2) Bump version in android/app/src/main/AndroidManifest.xml `android:versionCode="2"` && `android:versionName="2"`
3) Bump version in `versionCode` && `versionName` in `android/app/build.gradle`
3) Go to `android/` folder and run `./gradlew assembleRelease`
4) Go to [https://play.google.com/apps/publish/?account=6654504379226661832#AppDashboardPlace:p=com.athleticjunctionevents](play.google.com/apps)
5) Upload `android/app/build/outputs/apk/app-release.apk` in a beta release.
6) Release to beta and test on phone, then if successful, release to production.

## Forked
- [EventBinge.com](https://github.com/dreamsportingtrips/EventBingeApp) is a fork -- it also has release notes