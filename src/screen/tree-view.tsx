/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, View} from 'react-native';

const TreeView = () => {
  return (
    <View>
      <Image
        src={'https://images.ygoprodeck.com/images/cards/34541863.jpg'}
        style={{width: 140, height: 205, alignSelf: 'center'}}
      />
    </View>
  );
};

export default TreeView;
