import React from 'react';
import NavigationStrings from '../constants/NavigationStrings';
import TabRoutes from './TabRoutes';

export default function (Stack) {
  return (
    <>
      <Stack.Screen name={NavigationStrings.TABS} component={TabRoutes} />
    </>
  );
}
