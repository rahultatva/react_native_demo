import React from 'react';
import {ListItem} from 'react-native-elements';
import {View} from 'react-native';
import {color} from '../../assets/styles/color';
import {ScrollView} from 'react-native-gesture-handler';
import Topbar from '../../components/Header';
import I18n from '../../translations';

const Notifications: () => React$Node = ({navigation}) => {
  const list = [
    {
      name: 'John has transferred $5000 in your savings account.',
      leftIcon: 'ios-cash',
      read: 0,
    },
    {
      name: 'John liked your post!',
      leftIcon: 'md-heart',
      read: 1,
    },
    {
      name: 'John has transferred $5000 in your savings account.',
      leftIcon: 'ios-cash',
      read: 0,
    },
    {
      name: 'John liked your post!',
      leftIcon: 'md-heart',
      read: 1,
    },
    {
      name: 'John has transferred $5000 in your savings account.',
      leftIcon: 'ios-cash',
      read: 0,
    },
    {
      name: 'John liked your post!',
      leftIcon: 'md-heart',
      read: 1,
    },
    {
      name: 'John has transferred $5000 in your savings account.',
      leftIcon: 'ios-cash',
      read: 0,
    },
    {
      name: 'John liked your post!',
      leftIcon: 'md-heart',
      read: 1,
    },
    {
      name: 'John has transferred $5000 in your savings account.',
      leftIcon: 'ios-cash',
      read: 0,
    },
    {
      name: 'John liked your post!',
      leftIcon: 'md-heart',
      read: 1,
    },
    {
      name: 'John has transferred $5000 in your savings account.',
      leftIcon: 'ios-cash',
      read: 0,
    },
    {
      name: 'John liked your post!',
      leftIcon: 'md-heart',
      read: 1,
    },
    {
      name: 'John has transferred $5000 in your savings account.',
      leftIcon: 'ios-cash',
      read: 0,
    },
    {
      name: 'John liked your post!',
      leftIcon: 'md-heart',
      read: 1,
    },
    {
      name: 'John has transferred $5000 in your savings account.',
      leftIcon: 'ios-cash',
      read: 0,
    },
    {
      name: 'John liked your post!',
      leftIcon: 'md-heart',
      read: 1,
    },
    {
      name: 'John has transferred $5000 in your savings account.',
      leftIcon: 'ios-cash',
      read: 0,
    },
    {
      name: 'John liked your post!',
      leftIcon: 'md-heart',
      read: 1,
    },
    {
      name: 'John has transferred $5000 in your savings account.',
      leftIcon: 'ios-cash',
      read: 0,
    },
    {
      name: 'John liked your post!',
      leftIcon: 'md-heart',
      read: 1,
    },
  ];
  return (
    <>
      <Topbar
        navigation={navigation}
        name={I18n.t('notifications.notifications')}
      />
      <ScrollView>
        <View>
          {list.map((l, i) => (
            <ListItem
              key={i}
              title={l.name}
              leftIcon={{
                name: l.leftIcon,
                type: 'ionicon',
              }}
              rightIcon={{
                name: 'lens',
                color: l.read ? color.darkGrey : color.saphire,
                size: 15,
              }}
              bottomDivider
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default Notifications;
