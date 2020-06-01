import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Main from './../pages/Main/index';
import Login from './../pages/Login/index';
import Cadastro from './../pages/Cadastro/index';
import Perfil from './../pages/Perfil/index';
import Techs from './../pages/Tecnologias/index';
import AuthContext from './../Context/authContext';

const Stack = createStackNavigator();

export default function() {
  return (
    <NavigationContainer>
      <AuthContext.Provider value={true}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {React.useContext(AuthContext) ? (
            <>
              <Stack.Screen name="main" component={Main} />
              <Stack.Screen name="perfil" component={Perfil} />
              <Stack.Screen name="techs" component={Techs} />
            </>
          ) : (
            <>
              <Stack.Screen name="login" component={Login} />
              <Stack.Screen name="cadastro" component={Cadastro} />
            </>
          )}
        </Stack.Navigator>
      </AuthContext.Provider>
    </NavigationContainer>
  );
}
