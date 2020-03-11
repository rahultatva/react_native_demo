import React from 'react';
import Topbar from '../../components/Header';
import {PricingCard} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import {color} from '../../assets/styles/color';

const Dashboard: () => React$Node = ({navigation}) => {
  return (
    <>
      <Topbar navigation={navigation} name="Dashboard" />
      <ScrollView>
        <PricingCard
          color={color.orange}
          title="Users"
          price="100"
          //info={['1 User', 'Basic Support', 'All Core Features']}
          button={{title: ' Manage', icon: 'people'}}
        />

        <PricingCard
          color={color.green}
          title="Revenue"
          price="$5000"
          button={{title: ' Manage', icon: 'attach-money'}}
        />

        <PricingCard
          color={color.red}
          title="Expense"
          price="$2000"
          button={{title: ' Manage', icon: 'attach-money'}}
        />
      </ScrollView>
    </>
  );
};

export default Dashboard;
