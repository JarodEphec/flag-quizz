import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'flag.quizz',
  appName: 'flag-quizz',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
