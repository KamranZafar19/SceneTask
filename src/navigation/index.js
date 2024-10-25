// In App.js in a new project

import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Provider as PaperProvider} from 'react-native-paper';
import {navigationRef} from '../utilities/navigation';
import MainPage from '../pages/mainPage/main';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { WP } from '../utilities';

const Main = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainScreen() {
  return (
    <Main.Navigator>
      <Main.Screen name="main" component={MainPage} options={{headerShown: false}} />
    </Main.Navigator>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}
function MoreScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>More!</Text>
    </View>
  );
}


function RootNavigator() {
    return (
    <PaperProvider>
        <NavigationContainer ref={navigationRef}>
        <Tab.Navigator screenOptions={
          {
            tabBarStyle: {height: WP(15)},
          tabBarInactiveBackgroundColor: '#FEF9F5',
          tabBarActiveBackgroundColor: '#FEF9F5',
          tabBarActiveTintColor: 'black'
        }}>
        <Tab.Screen name="Home" component={MainScreen} options={{headerShown: false, tabBarIcon:() => {return <Image source={require('../assets/images/Vector.png')} />}}} />
        <Tab.Screen name="Settings" component={SettingsScreen} options={{headerShown: false, tabBarLabel: '', tabBarIcon:() => {return <Image source={require('../assets/images/WoddleIcon.png')} style={{bottom: WP(5)}} />}}} />
        <Tab.Screen name="more" component={MoreScreen} options={{headerShown: false, tabBarIcon:() => {return <Image source={require('../assets/images/moreIcon.png')} />}}} />
      </Tab.Navigator>
        </NavigationContainer>
    </PaperProvider>
  );
}

export default RootNavigator;
