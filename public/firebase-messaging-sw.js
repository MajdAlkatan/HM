import { useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/messaging';

const firebaseConfig = {
  // Your Firebase config
};

function Firebase_messaging_sw() {
  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    const messaging = firebase.messaging();

    // Get registration token
    messaging.getToken().then((token) => {
      console.log('FCM Token:', token);
      // Send this token to your server
      fetch('http://127.0.0.1:8000/fcm/devices/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('token'),
        },
        body: JSON.stringify({ registration_id: token }),
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
    }).catch((err) => {
      console.log('Failed to retrieve registration token. Error code: ', err.code);
      console.log('Error message: ', err.message);
    });

    return () => {
      messaging.onBackgroundMessage.unsubscribeAll();
    };
  }, []);

  return <div></div>;
}

export default Firebase_messaging_sw;
