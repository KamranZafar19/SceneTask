import Toast from 'react-native-simple-toast';
import React, {Component} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Platform, PermissionsAndroid} from 'react-native';
import {DotIndicator} from 'react-native-indicators';
export const showToast = (message, duration) => {
  Toast.show(message, duration ? Toast.LONG : Toast.SHORT);
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
