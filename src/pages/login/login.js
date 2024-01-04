import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import * as Util from '../../utilities';

const App = () => {
  const [filePath, setFilePath] = useState({});

  const capturePicture = () => {
    Util.getPicture(
      'camera',
      image => {
        const source = { uri: 'data:image/jpeg;base64,' + image.assets.map((data) => { return data.base64 }) };
        console.log('source', source);
        setFilePath(source);
        console.log(setFilePath);
      });
  }

  const gallaryPicture = () => {
    Util.getPicture(
      'gallary',
      image => {
        const source = { uri: 'data:image/jpeg;base64,' + image.assets.map((data) => { return data.base64 }) };
        console.log('source', source);
        setFilePath(source);
        console.log(setFilePath);
      });
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text style={styles.titleText}>
        React Native Image Background Removal
      </Text>
      <View style={styles.container}>
        <Image
          source={filePath}
          style={styles.imageStyle}
        />
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
          onPress={capturePicture}>
          <Text style={styles.textStyle}>
            Launch Camera for Image
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
          onPress={gallaryPicture}>
          <Text style={styles.textStyle}>Choose Image</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  textStyle: {
    padding: 10,
    color: 'black',
    textAlign: 'center',
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 5,
    marginVertical: 10,
    width: 250,
  },
  imageStyle: {
    width: '90%',
    height: '70%',
    margin: 5,
  },
});