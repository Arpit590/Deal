import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Provider} from 'react-redux'
import {createStore} from 'redux';
import reducers from './src/Store/Reducers/index'

import TransactionBuyingScreen from './src/Components/TransactionScreens/TransactionBuyingScreen';
import TransactionSellingScreen from './src/Components/TransactionScreens/TransactionSellingScreen';
import MyEarningsScreen from './src/Components/TransactionScreens/MyEarningsScreen/MyEarningsScreen';
import DealsScreen from './src/Components/TransactionScreens/DealsScreen/DealsScreen';
import ClaimForm from './src/Components/TransactionScreens/ClaimForm';
import DetailForm from './src/Components/TransactionScreens/DetailForm';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={createStore(reducers)}>
      <NavigationContainer>
        <Stack.Navigator
        screenOptions={{headerShown:false}}>
          <Stack.Screen name="Buying" component={TransactionBuyingScreen}/>
          <Stack.Screen name="Selling" component={TransactionSellingScreen}/>
          <Stack.Screen name="MyEarnings" component={MyEarningsScreen}/>
          <Stack.Screen name="Deals" component={DealsScreen}/>
          <Stack.Screen name="Claim Form" component={ClaimForm}/>
          <Stack.Screen name="Detail Form" component={DetailForm}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
