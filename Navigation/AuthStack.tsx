import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login, MainLogin} from '../screens/';
const Stack = createNativeStackNavigator();
import {Home, Details} from '../screens';
const AuthStack = () => {
  return (
    <>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Main" component={MainLogin} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </>
  );
};

export default AuthStack;
