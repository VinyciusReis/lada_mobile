import 'react-native-gesture-handler';
import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthRoutes from './authRoutes';
import OtherRoutes from './mainRoutes';
import AuthContext from '../Context/authContext';

function Routes() {
  const {isLogged} = useContext(AuthContext);

  return (
    <NavigationContainer>
      {isLogged ? <OtherRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}

export default Routes;
