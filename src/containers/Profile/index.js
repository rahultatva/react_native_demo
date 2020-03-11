import React from 'react';
import Topbar from '../../components/Header';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ScrollView} from 'react-native-gesture-handler';
import {View, Button} from 'react-native';
import styles from './styles';
import {Image, Text} from 'react-native-elements';
import {OutlinedTextField} from 'react-native-material-textfield';

const Profile: () => React$Node = ({navigation}) => {
  return (
    <>
      <Topbar navigation={navigation} name="Profile" />

      <ScrollView>
        <View style={styles.logoWrapper}>
          <Text style={styles.sectionHeader}>User Details</Text>
        </View>
        <View style={styles.topSpace}>
          <OutlinedTextField
            label="Name"
            name="name"
            style={styles.textFieldWithIcon}
            //value={email}
            //onChangeText={setEmail}
          />
          <Icon name="user" size={25} style={styles.icon} />
        </View>
        <View style={styles.topSpace}>
          <OutlinedTextField
            label="Email"
            name="email"
            keyboardType="email-address"
            style={styles.textFieldWithIcon}
            //value={email}
            //onChangeText={setEmail}
          />
          <Icon name="envelope" size={25} style={styles.icon} />
        </View>
        {/* <View style={styles.topSpace}>
          <OutlinedTextField
            label="Password"
            name="password"
            //value={password}
            //onChangeText={setPassword}
            secureTextEntry={true}
            style={styles.textFieldWithIcon}
          />
          <Icon name="lock" size={25} style={styles.icon} />
        </View> */}
        <View style={styles.topSpace}>
          <Button
            title="Save"
            //onPress={handleSubmit}
          />
        </View>

        <View style={styles.logoWrapper}>
          <Text style={styles.sectionHeader}>Change Password</Text>
        </View>
        <View style={styles.topSpace}>
          <OutlinedTextField
            label="Old Password"
            name="password"
            //value={password}
            //onChangeText={setPassword}
            secureTextEntry={true}
            style={styles.textFieldWithIcon}
          />
          <Icon name="lock" size={25} style={styles.icon} />
        </View>
        <View style={styles.topSpace}>
          <OutlinedTextField
            label="New Password"
            name="password"
            //value={password}
            //onChangeText={setPassword}
            secureTextEntry={true}
            style={styles.textFieldWithIcon}
          />
          <Icon name="lock" size={25} style={styles.icon} />
        </View>
        <View style={styles.topSpace}>
          <OutlinedTextField
            label="Confirm Password"
            name="password"
            //value={password}
            //onChangeText={setPassword}
            secureTextEntry={true}
            style={styles.textFieldWithIcon}
          />
          <Icon name="lock" size={25} style={styles.icon} />
        </View>
        <View style={styles.topSpace}>
          <Button
            title="Update Password"
            //onPress={handleSubmit}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default Profile;
