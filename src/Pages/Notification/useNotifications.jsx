// useNotifications.js
import { useEffect } from 'react';
import { messaging, getToken, onMessage } from './firebaseConfig';

const useNotifications = () => {
  useEffect(() => {
    const requestPermission = async () => {
      try {
        const permission = await Notification.requestPermission();
        if (permission === 'granted') {
          console.log('Notification permission granted.');
          const token = await getToken(messaging, { vapidKey: 'YOUR_VAPID_KEY' });
          console.log('FCM Token:', token);
          // Send the token to your Django backend
          await fetch('/send-notification/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token, title: "Welcome!", body: "Thank you for enabling notifications." }),
          });
        } else {
          console.log('Unable to get permission to notify.');
        }
      } catch (error) {
        console.error('An error occurred while requesting permission:', error);
      }
    };

    requestPermission();

    const unsubscribe = onMessage(messaging, (payload) => {
      console.log('Message received: ', payload);
      new Notification(payload.notification.title, {
        body: payload.notification.body,
        icon: payload.notification.icon,
      });
    });

    return () => unsubscribe();
  }, []);
};

export default useNotifications;
