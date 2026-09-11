import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.musaceylan.bagimlilik',
  appName: 'Bağımlılık Anketi',
  webDir: 'dist',
  android: {
    // Keep controls clear of system bars and cutouts on Android 15 and newer.
    adjustMarginsForEdgeToEdge: 'auto'
  }
};

export default config;
