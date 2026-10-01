import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.moudistro.sales',
  appName: 'MOU Distro',
  webDir: '.',
  server: {
    url: 'https://mou-distro.pages.dev/',
    cleartext: false,
  },
};

export default config;
