/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {CommonActions} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {View, Image, Text} from 'react-native';
import styles from './styles';
import {color} from '../../assets/styles/color';
import I18n from '../../translations';

const SidebarLayout = props => {
  const dispatch = useDispatch();
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
            onPress={async () => {
              await dispatch({type: 'USER_LOGOUT'});
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
            {I18n.t('settings.logout')}
          </Text>
        </View>
        <DrawerItemList {...props} />
      </ScrollView>
    </DrawerContentScrollView>
  );
};

export default SidebarLayout;
