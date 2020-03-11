import React from 'react';
import FlashMessage from 'react-native-flash-message';
import Navigation from './components/Navigation';

const App: () => React$Node = () => {
  return (
    <>
      <Navigation />
      <FlashMessage position="top" />
    </>
  );
};

export default App;
