import React, {useState} from 'react';
import {View, Button, Image, ScrollView} from 'react-native';
import {OutlinedTextField} from 'react-native-material-textfield';
import {showMessage} from 'react-native-flash-message';
import _ from 'lodash';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import {isEmail, isEmpty, saveItemToStorage} from '../../components/Common';

const Login: () => React$Node = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //Login form submit
  const handleSubmit = async () => {
    //Validations
    let validateErrors;
    if (isEmpty(email)) {
      validateErrors = 'Please enter email';
    } else if (!isEmail(email)) {
      validateErrors = 'Please enter valid email';
    } else if (isEmpty(password)) {
      validateErrors = 'Please enter password';
    }

    //setErrors(validateErrors);
    if (_.keys(validateErrors).length === 0) {
      showMessage({
        message: 'Login success!',
        type: 'success',
        icon: 'auto',
      });
      const userDetail = {
        email: email,
        password: password,
      };
      await saveItemToStorage('UserInfo', JSON.stringify(userDetail));
      //Redirect to homepage after user loged in
      navigation.reset({
        index: 0,
        routes: [
          {
            name: 'App',
          },
        ],
      });
    } else {
      showMessage({
        message: validateErrors,
        type: 'danger',
        icon: 'auto',
      });
    }
  };

  return (
    <>
      <ScrollView>
        <View style={styles.logoWrapper}>
          <Image
            style={styles.logo}
            source={require('../../assets/images/logo.png')}
          />
        </View>
        <View style={styles.topSpace}>
          <OutlinedTextField
            label="Email"
            name="email"
            keyboardType="email-address"
            style={styles.textFieldWithIcon}
            value={email}
            onChangeText={setEmail}
          />
          <Icon name="envelope" size={25} style={styles.icon} />
        </View>
        <View style={styles.topSpace}>
          <OutlinedTextField
            label="Password"
            name="password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
            style={styles.textFieldWithIcon}
          />
          <Icon name="lock" size={25} style={styles.icon} />
        </View>
        <View style={styles.topSpace}>
          <Button title="Login" onPress={handleSubmit} />
        </View>
      </ScrollView>
    </>
  );
};

export default Login;
