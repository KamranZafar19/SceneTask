import React from 'react';
import {SafeAreaView} from 'react-native';
import RootNavigator from './navigation';
import { Provider } from 'react-redux';
import {STORE, PERSISTOR} from './store/storeConfig';
import {PersistGate} from 'redux-persist/integration/react';
import SplashScreen from 'react-native-splash-screen';


export default class App extends React.Component {
  
  componentDidMount() {
  // Runs after the first render() lifecycle
   console.log("Did mount called");
    SplashScreen.hide();
    }
  render() {
    return (
      <SafeAreaView style = {{flex:1}}>
        <Provider store={STORE}>
          <PersistGate persistor={PERSISTOR}>
                <RootNavigator />
          </PersistGate>
        </Provider>
      </SafeAreaView>
    );
  }
}