# Bağımlılık Anketi

React/TypeScript survey app packaged for Android and iOS with Capacitor.
Android application ID: `com.musaceylan.bagimlilik`.

## Android compatibility review — 12 September 2026

| Item | Project setting / finding |
| --- | --- |
| Compile / target SDK | Android 16, API 36 |
| Minimum Android | Android 6, API 23 (preserved) |
| Android Gradle Plugin / wrapper | 8.10.1 / 8.11.1 |
| Capacitor packages | 7.6.9 |
| Next Android version | 1.0.4, versionCode 5; confirm it exceeds every uploaded Play build before release |
| System bars and cutouts | Capacitor's `adjustMarginsForEdgeToEdge: 'auto'` keeps the WebView inside the safe area on Android 15+ |
| Window resizing | Activity handles density changes in addition to orientation and screen size, avoiding WebView recreation for those changes |
| Predictive back | No custom legacy back interception or opt-out found; verify back-to-home/resume on Android 16 |
| Native libraries | The signed APK and AAB from the successful Codemagic build contain no `.so` libraries; the workflow checks every build |

Google Play requires **API 36 for new phone/tablet apps and updates from
31 August 2026**. Existing API 35 releases meet the current availability threshold,
but do not meet the new-update submission threshold.
[Google Play target API policy](https://support.google.com/googleplay/android-developer/answer/11926878?hl=en).

The current Android documentation gives **1 February 2027** as the enforcement
date for 16 KB page-size support for updates. Java/Kotlin-only apps, including
their dependencies, already support 16 KB pages; native libraries need inspection.
[Android page-size guidance](https://developer.android.com/guide/practices/page-sizes).
Do not rely on the old APK as proof for a future release.

API 36 enforces edge-to-edge layout and changes back navigation and large-screen
resizing. No new permission is needed for this app's current Internet-only
manifest. [Android 16 behavior changes](https://developer.android.com/about/versions/16/behavior-changes-16).

This focused update retains Capacitor 7 to preserve Android 6 and iOS 14 support.
Capacitor 7 extended support ends **8 December 2026**; plan a separate Capacitor 8
migration, including its Android 7 / iOS 15 minimums and safe-area changes.
[Capacitor support policy](https://capacitorjs.com/docs/reference/support-policy).
[AGP 8.10 compatibility](https://developer.android.com/build/releases/agp-8-10-0-release-notes).

## Build and checks

Use Node 22.12+ (Node 24 LTS recommended), JDK 21, Android SDK Platform 36,
and Android SDK Build Tools 35.0.0. Set `JAVA_HOME` and `ANDROID_HOME`, or configure
the SDK path in the ignored `android/local.properties`.
The Gradle wrapper downloads Gradle 8.11.1.

```sh
npm ci
npm run lint
npm run android:check
```

On a machine that does not need Puppeteer's downloaded browser, install with
`PUPPETEER_SKIP_DOWNLOAD=true npm ci`.

`android:check` builds the web app, synchronizes Android assets/configuration,
then runs Android lint, unit tests, debug APK assembly, and instrumentation-test
APK compilation. With a device/emulator connected, execute instrumentation with
`cd android && ./gradlew connectedDebugAndroidTest`.

The checked-in instrumentation test verifies the actual app ID. The template
unit test alone is not evidence that survey behavior works.

Before uploading, exercise the landing page, every survey role, question
navigation, results/restart, and language switching on Android 16. Check gesture
and three-button navigation, system-bar/cutout clearance, back-to-home/resume,
landscape, and tablet/split-screen resizing while answering questions. Include
an older supported Android device and a 16 KB emulator/device where available.

The shared Capacitor packages include iOS patch updates; run `npx cap sync ios`
on the Mac build machine to refresh CocoaPods before the next iOS build.

## Release signing

Release credentials are read only from these environment variables:

- `BAGIMLILIK_KEYSTORE_PATH`: absolute path to the existing upload keystore.
- `BAGIMLILIK_KEYSTORE_PASSWORD`: keystore password.
- `BAGIMLILIK_KEY_ALIAS`: existing upload-key alias.
- `BAGIMLILIK_KEY_PASSWORD`: key password.

Provide them through your build system's secret storage, then run:

```sh
npm run android:bundle
```

The bundle is written to `android/app/build/outputs/bundle/release/app-release.aab`.
If all signing variables are absent, the release build is **unsigned** and cannot
be uploaded. A partial signing configuration fails with an actionable error.
Debug builds need no release credentials. Preserve the existing upload-key identity.

Signing passwords were previously embedded in the tracked Gradle file. Removing
them from the working tree does not remove them from Git history; the owner should
rotate the exposed passwords and assess upload-key replacement through Play App
Signing if the keystore was also exposed. No key or Play Console changes were made.

This source review cannot verify Play Console declarations, account verification,
Data safety, privacy-policy/health-app declarations, or the highest uploaded
versionCode. Review the release's Console notices before submission.

## Codemagic Android build

The `android-build` workflow runs on an M2 Mac with Node 24 and Java 21. It
installs SDK 36, runs the web and Android checks, builds a signed APK and AAB,
verifies signatures, and checks that neither artifact contains native `.so`
libraries. It has no automatic triggers, notifications, or store publishing.

The existing Bağımlılık Codemagic app uses the application-scoped secret group
`bagimlilik_android_signing`. All four variables are encrypted:
`BAGIMLILIK_KEYSTORE_BASE64`, `BAGIMLILIK_KEYSTORE_PASSWORD`,
`BAGIMLILIK_KEY_ALIAS`, and `BAGIMLILIK_KEY_PASSWORD`. The workflow decodes the
existing upload keystore to a temporary file and removes it when the build step
ends. The iOS workflow is unchanged.

### Successful cloud verification

[Codemagic build 3](https://codemagic.io/app/69444ac5d64f1d8a4028522c/build/6aa48872f0624dac92df782e)
built commit `de641e4a756b094288f537a20c6c76183e35eb86` on branch
`codex/android-api36-codemagic` successfully. Web lint/build, Android lint,
unit tests, debug and instrumentation-test APK compilation, and signed release
APK/AAB assembly passed. APK and bundle signature verification passed; neither
artifact contains native shared libraries. Download `app-release.apk` for
installation or `app-release.aab` for a later Play submission from the build page.

Device/emulator tests were not executed. Complete the device checks above before
release. This build did not publish to a store or run the iOS workflow.

## Verification on this workstation

- Before and after the update: TypeScript/Vite production build and ESLint passed.
- Capacitor Android sync passed; generated configuration contains the safe-area setting.
- Browser smoke check passed at a 390 × 844 viewport: switched Turkish to English,
  completed all 35 questions for each of the three roles, reached results, and
  restarted each survey. No browser runtime errors occurred. The role-selection
  screen also had no horizontal overflow at 1024 × 768.
- Manifest XML, package/lockfile consistency, and `git diff --check` passed.
- `npm run android:check` stopped at Gradle startup because Java is unavailable.
  This Linux ARM64 workstation has no JDK or Android SDK; native compilation,
  lint, unit tests, and signing were subsequently verified by the cloud build
  above. Browser checks do not verify native insets or predictive-back behavior.
