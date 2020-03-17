import React from 'react';
import Topbar from '../../components/Header';
import {ListItem} from 'react-native-elements';
import {View} from 'react-native';
import I18n from '../../translations';

const Settings: () => React$Node = ({navigation}) => {
  const list = [
    {
      title: I18n.t('settings.appointments'),
      icon: 'av-timer',
    },
    {
      title: I18n.t('settings.trips'),
      icon: 'flight-takeoff',
    },
    {
      title: I18n.t('settings.passwords'),
      icon: 'settings',
    },
    {
      title: I18n.t('settings.updates'),
      icon: 'update',
    },
  ];
  return (
    <>
      <Topbar navigation={navigation} name={I18n.t('settings.settings')} />
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
