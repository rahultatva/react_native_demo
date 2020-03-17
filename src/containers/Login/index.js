import React, {useState, useEffect} from 'react';
import {View, Button, Image, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {OutlinedTextField} from 'react-native-material-textfield';
import {showMessage} from 'react-native-flash-message';
import _ from 'lodash';
import Icon from 'react-native-vector-icons/FontAwesome';
import {isEmail, isEmpty} from '../../components/Common';
import I18n from '../../translations';
import styles from './styles';

const Login: () => React$Node = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loader, setLoader] = useState(false);

  const dispatch = useDispatch();
  const loginStatus = useSelector(state => state.auth.loginStatus);

  useEffect(() => {
    if (!_.isNull(loginStatus)) {
      if (loginStatus === true) {
        showMessage({
          message: I18n.t('login.loginSuccess'),
          type: 'success',
          icon: 'auto',
        });
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
          message: I18n.t('login.incorrectEmailPassword'),
          type: 'danger',
          icon: 'auto',
        });
      }
      setLoader(false);
    }
  }, [loginStatus, navigation]);

  //Login form submit
  const handleSubmit = async () => {
    //Validations
    let validateErrors;
    if (isEmpty(email)) {
      validateErrors = I18n.t('login.enterEmail');
    } else if (!isEmail(email)) {
      validateErrors = I18n.t('login.enterValidEmail');
    } else if (isEmpty(password)) {
      validateErrors = I18n.t('login.enterPassword');
    }

    //setErrors(validateErrors);
    if (_.keys(validateErrors).length === 0) {
      const userDetail = {
        email: email,
        password: password,
      };
      setLoader(true);
      await dispatch({type: 'USER_LOGIN', userDetail});
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
        <View style={styles.container}>
          <View style={styles.logoWrapper}>
            <Image
              style={styles.logo}
              source={require('../../assets/images/logo.png')}
            />
          </View>
          <View style={styles.topSpace}>
            <OutlinedTextField
              label={I18n.t('login.email')}
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
              label={I18n.t('login.password')}
              name="password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
              style={styles.textFieldWithIcon}
            />
            <Icon name="lock" size={25} style={styles.icon} />
          </View>
          <View style={styles.topSpace}>
            <Button
              title={I18n.t('login.login')}
              onPress={handleSubmit}
              disabled={loader}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Login;
