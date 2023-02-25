import React from 'react';
import {Home, Details} from '../screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import NavigationStrings from '../constants/NavigationStrings';
import Icons from 'react-native-vector-icons/Feather';
import HomeStack from './HomeStack';

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator
      initialRouteName={NavigationStrings.HOME}
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
          color: 'grey',
        },
        tabBarStyle: {
          backgroundColor: 'rgba(0,0,0,0.8)',
          position: 'absolute',
          height: 70,
          borderTopWidth: 0,
          elevation: 10,
          paddingRight: 10,
        },
      }}>
      <Tab.Screen
        name={NavigationStrings.HOME}
        component={HomeStack}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Icons name="home" size={25} color={focused ? 'red' : 'grey'} />
            );
          },
        }}
      />
      <Tab.Screen
        name={NavigationStrings.COMINGSOON}
        component={Details}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Icons name="clock" size={25} color={focused ? 'red' : 'grey'} />
            );
          },
        }}
      />
      <Tab.Screen
        name={NavigationStrings.SEARCH}
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Icons name="search" size={25} color={focused ? 'red' : 'grey'} />
            );
          },
        }}
      />
      <Tab.Screen
        name={NavigationStrings.DOWNLOADS}
        component={Details}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Icons
                name="download"
                size={25}
                color={focused ? 'red' : 'grey'}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabRoutes;
