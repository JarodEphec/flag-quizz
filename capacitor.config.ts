import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'poke.quizz',
  appName: 'poke-quizz',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
