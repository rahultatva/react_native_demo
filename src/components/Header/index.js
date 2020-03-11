import React from 'react';
import {Header} from 'react-native-elements';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SidebarMenu = props => {
  return (
    <View>
      <Icon
        name="ios-menu"
        color="#fff"
        size={35}
        onPress={() => props.navigation.toggleDrawer()}
      />
    </View>
  );
};

const Topbar: () => React$Node = props => {
  return (
    <>
      <Header
        leftComponent={<SidebarMenu navigation={props.navigation} />}
        centerComponent={{
          text: props.name,
          style: {color: '#fff', fontSize: 20},
        }}
      />
    </>
  );
};

export default Topbar;
