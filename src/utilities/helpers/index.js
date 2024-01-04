import Toast from 'react-native-simple-toast';
import React, {Component} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Platform, PermissionsAndroid} from 'react-native';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {DotIndicator} from 'react-native-indicators';
export const showToast = (message, duration) => {
  Toast.show(message, duration ? Toast.LONG : Toast.SHORT);
};

  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs camera permission',
          },
        );
        // If CAMERA Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else return true;
  };

  const requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs write permission',
          },
        );
        // If WRITE_EXTERNAL_STORAGE Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        alert('Write permission err', err);
      }
      return false;
    } else return true;
  };
export const getPicture = async (type,success, reject) => {
  console.log('type', type)
  const options = {
    quality: 1,
    maxWidth:600,
    maxHeight:850,
    mediaType:'photo',
    saveToPhotos:true,
    includeBase64:true
  };
  let isCameraPermitted = await requestCameraPermission();
  let isStoragePermitted = await requestExternalWritePermission();
  console.log('',isCameraPermitted, isStoragePermitted);
  if (type === 'camera') {
    launchCamera(options, response => {
      console.log('Response = ', response);
      if (response.didCancel) {
        alert('User cancelled camera picker');
        // reject()
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Camera not available on device');
        // reject()
      } else if (response.errorCode == 'permission') {
        alert('Permission not satisfied');
        // reject()
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        // reject()
      }else{
        success(response)
      }
    });
  }
  if (type === 'gallary') {
    launchImageLibrary(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        alert('User cancelled camera picker');
        // reject()
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Camera not available on device');
        // reject()
      } else if (response.errorCode == 'permission') {
        alert('Permission not satisfied');
        // reject()
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        // reject()
      }else{
        success(response)
      }
    })
  }
};

export const emailValidator = val => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val);
};

export const consoleLogger = (indicator, value) => {
  console.log(indicator, value)
}

export const BusinessemailValidator = val => {
  const checker = /([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)\@massygroup([\.])com/g.test(
    val,
  );
  if (checker) {
    return true;
  } else {
    return false;
  }
};

export const Lumper = size => {
  return <DotIndicator color="black" size={size ? size : 20} />;
};

export const storeToStorage = async (key, data) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};
export const retriveFromStorage = (key, token) => {
  AsyncStorage.getItem(key, (err, value) => {
    if (err) {
      console.log(err);
      token(null);
    } else {
      token(JSON.parse(value));
    }
  });
};
export const clearAsyncStorage = success => {
  AsyncStorage.getAllKeys()
    .then(keys => AsyncStorage.multiRemove(keys))
    .then(() => success(true));
};
