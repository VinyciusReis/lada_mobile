import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Main from './src/Main/index';
import Login from './src/pages/Login/index';
import Cadastro from './src/pages/Cadastro/index';
import Perfil from './src/pages/Perfil/index';
import Techs from './src/pages/Tecnologias/index';

const Stack = createStackNavigator();

export default function() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="perfil"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="main" component={Main} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="cadastro" component={Cadastro} />
        <Stack.Screen name="perfil" component={Perfil} />
        <Stack.Screen name="techs" component={Techs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
