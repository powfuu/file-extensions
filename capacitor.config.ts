import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ev.extension.file',
  appName: 'FileExtension',
  webDir: 'www',
  server: {
    androidScheme: 'https',
  },
};

export default config;
