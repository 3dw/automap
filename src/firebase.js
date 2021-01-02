import firebase from 'firebase/app'
import 'firebase/database';

// Initialize Firebase
const app = firebase.initializeApp({
  apiKey: 'AIzaSyDd4sKc1eN4qtprCxiKLWy8D_wK7rJURAI',
  authDomain: 'shackhand-autolearn.firebaseapp.com',
  databaseURL: 'https://shackhand-autolearn.firebaseio.com',
  projectId: 'shackhand-autolearn',
  storageBucket: 'shackhand-autolearn.appspot.com',
  messagingSenderId: '270389952986'
})

export const db = app.database()
export const handsRef = db.ref('hands')
export const chatsRef = db.ref('chats')
