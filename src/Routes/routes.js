import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthRoutes from './authRoutes';
import OtherRoutes from './mainRoutes';

export default function() {
  return (
    <NavigationContainer>
      {true ? <AuthRoutes /> : <OtherRoutes />}
    </NavigationContainer>
  );
}
