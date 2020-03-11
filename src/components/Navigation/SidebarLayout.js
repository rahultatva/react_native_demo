/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {CommonActions} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import {View, Text, Image, AsyncStorage} from 'react-native';
import styles from './styles';
import {color} from '../../assets/styles/color';

const SidebarLayout = props => {
  return (
    <DrawerContentScrollView {...props}>
      <ScrollView>
        <View style={styles.wrapper}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.profileImg}
          />
          <Text style={{fontWeight: 'bold', fontSize: 16, marginTop: 10}}>
            Janna Doe
          </Text>
          <Text style={{color: color.gray, marginBottom: 10}}>
            janna@doe.com
          </Text>
          <Text
            style={{color: color.saphire}}
            onPress={() => {
              AsyncStorage.removeItem('UserInfo');
              props.navigation.dispatch(
                CommonActions.reset({
                  index: 0,
                  routes: [
                    {
                      name: 'Auth',
                      params: {screen: 'Login'},
                    },
                  ],
                }),
              );
            }}>
            Logout
          </Text>
        </View>
        <DrawerItemList {...props} />
      </ScrollView>
    </DrawerContentScrollView>
  );
};

export default SidebarLayout;
