import React from 'react';
import _ from 'lodash';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AppNavigation from './AppNavigation';
import AuthNavigation from './AuthNavigation';
import TabNavigation from './HomeTabNavigation';
//import {AsyncStorage} from 'react-native';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={'Auth'}>
          <Stack.Screen
            name="App"
            component={AppNavigation}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Auth"
            component={AuthNavigation}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Navigation;
