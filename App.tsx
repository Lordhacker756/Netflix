import React, {useState, useEffect} from 'react';
import SplashScreen from './common/SplashScreen';
import AuthRoutes from './Navigation/AuthRoutes';
import Routes from './Navigation/Routes';
const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 1000);
  }, []);

  return showSplash ? <SplashScreen /> : isLoggedIn ? <Routes /> : <Routes />;
};

export default App;
