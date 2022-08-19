import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore/lite';
import {getDatabase} from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyD8bZF6YbVkNrWJ3nqtAPfVg2UpHIUusgs',
  authDomain: 'reactnativelabproject.firebaseapp.com',
  projectId: 'reactnativelabproject',
  storageBucket: 'reactnativelabproject.appspot.com',
  messagingSenderId: '377122131424',
  appId: '1:377122131424:web:fccdaca0c73776956aef85',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const database = getDatabase(app);
