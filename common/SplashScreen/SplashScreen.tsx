import React from 'react';
import {View, Image} from 'react-native';

const SplashScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
      }}>
      <Image
        style={{
          height: 300,
          width: 300,
          resizeMode: 'contain',
        }}
        source={require('../../assets/splash.png')}
      />
    </View>
  );
};

export default SplashScreen;
