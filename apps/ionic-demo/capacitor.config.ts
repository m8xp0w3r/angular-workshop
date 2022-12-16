import { CapacitorConfig } from '@capacitor/cli';
// @ts-ignore
import ip from 'ip';

const config: CapacitorConfig = {
  appId: 'de.diloc.ionicdemo',
  appName: 'ionic-demo',
  webDir: '../../dist/apps/ionic-demo',
  bundledWebRuntime: false,
  server: {
    url: `http://${ip.address()}:4200`,
    cleartext: true
  },
};

export default config;
