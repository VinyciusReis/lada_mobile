import 'react-native-gesture-handler';
import React from 'react';
import Routes from './src/Routes/routes';
import ContextProvider from './src/Context/middleware';

export default function() {
  return (
    <ContextProvider>
      <Routes />
    </ContextProvider>
  );
}
