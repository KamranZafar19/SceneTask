// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Provider as PaperProvider} from 'react-native-paper';
import {navigationRef} from '../utilities/navigation';
import Login from '../pages/login/login';
import Homes from '../pages/home/home'

const Auth = createNativeStackNavigator();
const Home = createNativeStackNavigator();
const Stack = createNativeStackNavigator();

function AuthScreen() {
  return (
    <Auth.Navigator>
      <Auth.Screen name="login" component={Login} options={{headerShown: false}} />
    </Auth.Navigator>
  );
}

function HomeScreen() {
  return (
    <Home.Navigator>
      <Home.Screen name="homeScreen" component={Homes} options={{headerShown: false}} />
    </Home.Navigator>
  );
}


function RootNavigator() {
    return (
    <PaperProvider>
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator>
                <Stack.Screen name="auth" component={AuthScreen} options={{headerShown: false}}/>
                <Stack.Screen name="home" component={HomeScreen} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    </PaperProvider>
  );
}

export default RootNavigator;