```javascript
import * as AsyncStorage from 'async-storage';
import {Constants} from 'expo';

async function storeDeviceId() {
  try {
    const deviceId = await Constants.getAsync('deviceId');
    if (deviceId) {
      await AsyncStorage.setItem('deviceId', deviceId);
    } else {
      console.log('Device ID is not available');
    }
  } catch (error) {
    console.error('Error storing device ID:', error);
  }
}

//Call the function when component mounts or when the device ID is ready
export default function App() {
  useEffect(() => {
      storeDeviceId();
  }, []);

  // ...rest of your app code
}
```