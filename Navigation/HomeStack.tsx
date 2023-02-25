import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NavigationStrings from '../constants/NavigationStrings';

import {Home, Details} from '../screens';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={NavigationStrings.HOME} component={Home} />
      <Stack.Screen name={NavigationStrings.DETAILS} component={Details} />
    </Stack.Navigator>
  );
}
