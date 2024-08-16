// src/firebase.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/messaging';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFnw8fVUGZ1Y-vuO2UPCY4r7koy8Ik-H8",
  authDomain: "pingoway-ed8c0.firebaseapp.com",
  projectId: "pingoway-ed8c0",
  storageBucket: "pingoway-ed8c0.appspot.com",
  messagingSenderId: "526962051313",
  appId: "1:526962051313:web:dad84497f4eb9dc8bfc150",
  measurementId: "G-2M2Q2GGP0X"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Retrieve Firebase Messaging object
const messaging = firebase.messaging();

// Request permission to show notifications
export const requestPermission = async () => {
  try {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      console.log('Notification permission granted.');
      const token = await messaging.getToken({
        vapidKey: 'BI00OZf2muuzp3OF8GsOk67qqGxVgvAktCSpJSHVRpjBEyWV8NWqDzP7_-siM9q7gT37-BiSQP7pJKR05l8dFio'
      });
      console.log('FCM Token:', token);
      // Send the token to your backend
      await fetch('http://127.0.0.1:8000/fcm/devices/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `JWT ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ registration_id: token, type: 'web' })
      });
      return token;
    } else {
      console.log('Unable to get permission to notify.');
    }
  } catch (error) {
    console.error('An error occurred while requesting permission:', error);
  }
};

// Handle incoming messages
export const onMessageListener = (callback) => {
  messaging.onMessage((payload) => {
    console.log('Message received: ', payload);
    callback(payload);
  });
};

export default messaging;
