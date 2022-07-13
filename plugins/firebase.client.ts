import { initializeApp } from 'firebase/app';
const API_KEY=""
const AUTH_DOMAIN=""
const PROJECT_ID=""
const STORAGE_BUCKET=""
const MESSAGING_SENDER_ID=""
const APP_ID=""
const MEASUREMENT_ID=""
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID,
};
export const firebaseApp = initializeApp(firebaseConfig);
export default defineNuxtPlugin((nuxtApp) => {
  useState('firebaseApp', () => firebaseApp)
})
