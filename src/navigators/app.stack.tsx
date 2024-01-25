import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {CardList} from '../screen/card-list.screen';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Yugi-Card" component={CardList} />
    </Stack.Navigator>
  );
};

export default AppStack;
