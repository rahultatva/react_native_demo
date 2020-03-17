import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {View, Button, Text} from 'react-native';
import {OutlinedTextField} from 'react-native-material-textfield';
import Icon from 'react-native-vector-icons/FontAwesome';
import Topbar from '../../components/Header';
import styles from './styles';
import I18n from '../../translations';

const Profile: () => React$Node = ({navigation}) => {
  return (
    <>
      <Topbar navigation={navigation} name={I18n.t('profile.profile')} />

      <ScrollView>
        <View style={styles.container}>
          <View style={styles.logoWrapper}>
            <Text style={styles.sectionHeader}>
              {I18n.t('profile.userDetails')}
            </Text>
          </View>
          <View style={styles.topSpace}>
            <OutlinedTextField
              label={I18n.t('profile.name')}
              name="name"
              style={styles.textFieldWithIcon}
            />
            <Icon name="user" size={25} style={styles.icon} />
          </View>
          <View style={styles.topSpace}>
            <OutlinedTextField
              label={I18n.t('login.email')}
              name="email"
              keyboardType="email-address"
              style={styles.textFieldWithIcon}
            />
            <Icon name="envelope" size={25} style={styles.icon} />
          </View>
          <View style={styles.topSpace}>
            <Button title={I18n.t('profile.save')} />
          </View>

          <View style={styles.logoWrapper}>
            <Text style={styles.sectionHeader}>
              {I18n.t('profile.changePassword')}
            </Text>
          </View>
          <View style={styles.topSpace}>
            <OutlinedTextField
              label={I18n.t('profile.oldPassword')}
              name="password"
              secureTextEntry={true}
              style={styles.textFieldWithIcon}
            />
            <Icon name="lock" size={25} style={styles.icon} />
          </View>
          <View style={styles.topSpace}>
            <OutlinedTextField
              label={I18n.t('profile.newPassword')}
              name="password"
              secureTextEntry={true}
              style={styles.textFieldWithIcon}
            />
            <Icon name="lock" size={25} style={styles.icon} />
          </View>
          <View style={styles.topSpace}>
            <OutlinedTextField
              label={I18n.t('profile.confirmPassword')}
              name="password"
              secureTextEntry={true}
              style={styles.textFieldWithIcon}
            />
            <Icon name="lock" size={25} style={styles.icon} />
          </View>
          <View style={styles.topSpace}>
            <Button title={I18n.t('profile.updatePassword')} />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Profile;
