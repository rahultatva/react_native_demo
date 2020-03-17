import React from 'react';
import _ from 'lodash';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../../containers/Login';
import {color} from '../../assets/styles/color';
import SpashScreen from '../../containers/SplashScreen';
import I18n from '../../translations';

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
          title: I18n.t('login.login'),
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
