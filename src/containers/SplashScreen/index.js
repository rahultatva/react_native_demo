import React from 'react';
import {View, Image, AsyncStorage} from 'react-native';
import _ from 'lodash';
import styles from './styles';

const SpashScreen: () => React$Node = ({navigation, route}) => {
  let userInfo;
  AsyncStorage.getItem('UserInfo').then(value => {
    userInfo = JSON.parse(value);
  });

  setTimeout(() => {
    //If user logged in than redirect to Home page else login page
    if (userInfo && !_.isEmpty(userInfo.email)) {
      navigation.reset({
        index: 0,
        routes: [
          {
            name: 'App',
          },
        ],
      });
      //AsyncStorage.removeItem('UserInfo');
    } else {
      navigation.replace('Login');
    }
  }, 3000);

  return (
    <>
      <View style={styles.logoWrapper}>
        <Image
          style={styles.logo}
          source={require('../../assets/images/logo.png')}
        />
      </View>
    </>
  );
};

export default SpashScreen;
