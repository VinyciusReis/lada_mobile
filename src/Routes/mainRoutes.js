import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Main from '../pageS/Main';
import Perfil from '../pages/Perfil';
import Tecnologias from '../pages/Tecnologias';

const OtherStack = createStackNavigator();

const OtherRoutes = () => {
  return (
    <OtherStack.Navigator screenOptions={{headerShown: false}}>
      <OtherStack.Screen name="main" component={Main} />
      <OtherStack.Screen name="perfil" component={Perfil} />
      <OtherStack.Screen name="tecnologia" component={Tecnologias} />
    </OtherStack.Navigator>
  );
};

export default OtherRoutes;
