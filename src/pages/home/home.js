import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  FlatList,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import {CameraRoll} from '@react-native-camera-roll/camera-roll';

const Camera = () => {
  const [data, setData] = useState('');
  const hasAndroidPermission = async () => {
    const getCheckPermissionPromise = () => {
      if (Platform.Version >= 33) {
        return Promise.all([
          PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES),
          PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO),
        ]).then(
          ([hasReadMediaImagesPermission, hasReadMediaVideoPermission]) =>
            hasReadMediaImagesPermission && hasReadMediaVideoPermission,
        );
      } else {
        return PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE);
      }
    };
  
    const hasPermission = await getCheckPermissionPromise();
    if (hasPermission) {
      return true;
    }
    const getRequestPermissionPromise = () => {
      if (Platform.Version >= 33) {
        return PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
          PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO,
        ]).then(
          (statuses) =>
            statuses[PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES] ===
              PermissionsAndroid.RESULTS.GRANTED &&
            statuses[PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO] ===
              PermissionsAndroid.RESULTS.GRANTED,
        );
      } else {
        return PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE).then((status) => status === PermissionsAndroid.RESULTS.GRANTED);
      }
    };
  
    return await getRequestPermissionPromise();
  }
  const getPhotos = () => {
    CameraRoll.getPhotos({
      first: 50,
      assetType: 'Photos',
    })
      .then((res) => {
        setData(res.edges);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const askPermission = async () => {
    if (Platform.OS === 'android') {
      const result = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'Permission Explanation',
          message: 'ReactNativeForYou would like to access your photos!',
        },
      );
      if (result !== 'granted') {
        console.log('Access to pictures was denied');
        return;
      } else {
        getPhotos();
      }
    } else {
      getPhotos();
    }
  };

  useEffect(async () => {
    if (Platform.OS === "android" && !(await hasAndroidPermission())) {
      return;
    }
    getPhotos();
  }, []);

  return (
    <View>
      <FlatList
        data={data}
        numColumns={3}
        renderItem={({item}) => (
          <Image
            style={{
              width: '33%',
              height: 150,
            }}
            source={{uri: item.node.image.uri}}
          />
        )}
      />
    </View>
  );
};

export default Camera;