import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import Home from './screens/Home/Home';
import SplashScreen from './common/SplashScreen';
const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 1000);
  }, []);

  return showSplash ? <SplashScreen /> : <Home />;
};

export default App;
