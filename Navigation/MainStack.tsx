import React from 'react';
import NavigationStrings from '../constants/NavigationStrings';
import {Login, MainLogin} from '../screens';
import TabRoutes from './TabRoutes';

export default function (Stack) {
  return (
    <>
      <Stack.Screen name={NavigationStrings.LOGIN} component={Login} />
      <Stack.Screen name={NavigationStrings.MAIN} component={MainLogin} />
      <Stack.Screen name={NavigationStrings.HOME} component={TabRoutes} />
      <Stack.Screen name={NavigationStrings.DETAILS} component={TabRoutes} />
      <Stack.Screen name={NavigationStrings.TABS} component={TabRoutes} />
    </>
  );
}
