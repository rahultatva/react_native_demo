import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import {getCurrentUserSession} from '../../services/apiService';
import styles from './styles';

const SpashScreen: () => React$Node = ({navigation, route}) => {
  useEffect(() => {
    getCurrentUserSession()
      .then(() => {
        navigation.reset({
          index: 0,
          routes: [
            {
              name: 'App',
            },
          ],
        });
      })
      .catch(() => {
        navigation.replace('Login');
      });
  }, [navigation]);

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
