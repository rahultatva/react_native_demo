import {StyleSheet} from 'react-native';
import {color} from '../../assets/styles/color';

const styles = StyleSheet.create({
  container: {
    marginLeft: 30,
    marginRight: 30,
  },
  icon: {
    position: 'absolute',
    right: 20,
    top: 15,
    color: color.saphire,
  },
  sectionHeader: {
    color: color.saphire,
  },
  logo: {
    width: 200,
    height: 200,
  },
  logoWrapper: {
    alignItems: 'center',
    marginTop: 15,
  },
  textFieldWithIcon: {
    paddingRight: 40,
  },
  topSpace: {
    marginTop: 15,
  },
  error: {
    color: color.ligthRed,
  },
});
export default styles;
