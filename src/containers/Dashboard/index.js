import React from 'react';
import Topbar from '../../components/Header';
import {PricingCard} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import {color} from '../../assets/styles/color';
import I18n from '../../translations';

const Dashboard: () => React$Node = ({navigation}) => {
  return (
    <>
      <Topbar navigation={navigation} name={I18n.t('dashboard.dashboard')} />
      <ScrollView>
        <PricingCard
          color={color.orange}
          title={I18n.t('dashboard.users')}
          price="100"
          button={{title: I18n.t('dashboard.manage'), icon: 'people'}}
        />

        <PricingCard
          color={color.green}
          title={I18n.t('dashboard.revenue')}
          price="$5000"
          button={{title: I18n.t('dashboard.manage'), icon: 'attach-money'}}
        />

        <PricingCard
          color={color.red}
          title={I18n.t('dashboard.expense')}
          price="$2000"
          button={{title: I18n.t('dashboard.manage'), icon: 'attach-money'}}
        />
      </ScrollView>
    </>
  );
};

export default Dashboard;
