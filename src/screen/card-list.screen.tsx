/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';

export const CardList = () => {
  return (
    <View>
      <View style={{backgroundColor: 'green'}}>
        <Image
          source={require('../../images/main-logo-2.png')}
          style={{
            width: 320,
            height: 160,
            top: 20,
            alignSelf: 'center',
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 30,
            paddingTop: 40,
          }}>
          <TextInput
            style={{
              borderWidth: 1,
              width: 295,
              height: 35,
              backgroundColor: '#FFFFFF',
            }}
          />
          <TouchableOpacity style={{alignSelf: 'center'}}>
            <Text
              style={{
                borderWidth: 1,
                width: 50,
                height: 25,
                marginLeft: 10,
                textAlign: 'center',
                textAlignVertical: 'center',
              }}>
              Filter
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={{marginTop: 15, marginLeft: 15}}>
          <Text>Sort by:</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Image
          src={'https://images.ygoprodeck.com/images/cards/34541863.jpg'}
          style={{width: 140, height: 205, backgroundColor: 'red'}}
        />
      </View>
    </View>
  );
};
