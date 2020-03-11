import React from 'react';
import _ from 'lodash';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../../containers/Login';
import {color} from '../../assets/styles/color';
import SpashScreen from '../../containers/SplashScreen';

const Stack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={'SpashScreen'}>
      <Stack.Screen
        name="SplashScreen"
        component={SpashScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: 'Login',
          headerStyle: {
            backgroundColor: color.saphire,
          },
          headerTintColor: color.white,
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
