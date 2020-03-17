import React from 'react';
import FlashMessage from 'react-native-flash-message';
import Navigation from './components/Navigation';
import {Provider} from 'react-redux';
import {store} from './store';
// const _XHR = GLOBAL.originalXMLHttpRequest
//   ? GLOBAL.originalXMLHttpRequest
//   : GLOBAL.XMLHttpRequest;

// XMLHttpRequest = _XHR;
const App: () => React$Node = () => {
  return (
    <>
      <Provider store={store}>
        <Navigation />
        <FlashMessage position="top" />
      </Provider>
    </>
  );
};

export default App;
