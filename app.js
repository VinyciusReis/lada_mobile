import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import Routes from './src/Routes/routes';
import ContextProvider from './src/Context/middleware';

export default function() {
  return (
    <>
      <StatusBar backgroundColor="#8E44AD" barStyle={'light-content'} />
      <ContextProvider>
        <Routes />
      </ContextProvider>
    </>
  );
}
