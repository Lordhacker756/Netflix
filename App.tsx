import React, {useState, useEffect} from 'react';
import SplashScreen from './common/SplashScreen';
import Routes from './Navigation/Routes';

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 1000);
  }, []);

  return showSplash ? <SplashScreen /> : <Routes />;
};

export default App;
