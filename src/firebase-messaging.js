import { messaging } from './firebase';
import { getToken } from 'firebase/messaging';

export const requestForToken = async () => {
  try {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      const token = await getToken(messaging, {
        vapidKey: 'BCbdf4RHw-5m49VxpsZK7ph_zuX4MlmSTqtQPgQ5qogemEhkvLzmGycsLVQdlK8Hy3YvigIiHuVsydT4r2Uv91k'
      });
      console.log('FCM Token:', token);
      // ✅ Send this token to your backend to save for later push notifications
      return token;
    } else {
      console.log('Notification permission not granted');
    }
  } catch (err) {
    console.error('FCM error:', err);
  }
};
