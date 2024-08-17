// src/hooks/useNotifications.jsx
import { useEffect } from 'react';
import { requestPermission, onMessageListener } from '../../firebase';

const useNotifications = () => {
  useEffect(() => {
    const fetchTokenAndRequestPermission = async () => {
      await requestPermission();
    };

    fetchTokenAndRequestPermission();

    const unsubscribe = onMessageListener((payload) => {
      const { title, body, icon } = payload.notification;
      new Notification(title, {
        body,
        icon,
      });
    });

    return () => {
      unsubscribe();
    };
  }, []);
};

export default useNotifications;
