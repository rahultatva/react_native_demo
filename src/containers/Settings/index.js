import React from 'react';
import Topbar from '../../components/Header';
import {ListItem} from 'react-native-elements';
import { View } from 'react-native';

const Settings: () => React$Node = ({navigation}) => {
  const list = [
    {
      title: 'Appointments',
      icon: 'av-timer',
    },
    {
      title: 'Trips',
      icon: 'flight-takeoff',
    },
    {
      title: 'Passwords',
      icon: 'settings',
    },
    {
      title: 'Updates',
      icon: 'update',
    },
  ];
  return (
    <>
      <Topbar navigation={navigation} name="Settings" />
      <View>
        {list.map((item, i) => (
          <ListItem
            key={i}
            title={item.title}
            leftIcon={{name: item.icon}}
            bottomDivider
            chevron
          />
        ))}
      </View>
    </>
  );
};

export default Settings;
