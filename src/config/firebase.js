import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBMYQ2aNaXVg_nByLki8Ut4vsDf5sIUh4o",
  authDomain: "resume-cv-generator-f0d76.firebaseapp.com",
  projectId: "resume-cv-generator-f0d76",
  storageBucket: "resume-cv-generator-f0d76.firebasestorage.app",
  messagingSenderId: "453445178112",
  appId: "1:453445178112:web:be91ba7f903438f2a119e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;