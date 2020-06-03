import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../Pages/Login';
import Cadastro from '../Pages/Cadastro';

const AuthStack = createStackNavigator();

const AuthRoutes = () => {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="login" component={Login} />
      <AuthStack.Screen name="cadastro" component={Cadastro} />
    </AuthStack.Navigator>
  );
};

export default AuthRoutes;
