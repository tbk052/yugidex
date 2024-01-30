/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
// import TreeView from './tree-view';
import ListView from './list-view';

export const CardList = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{backgroundColor: 'green'}}>
        {/* <Image
          source={require('../../images/main-logo-3.png')}
          style={{
            borderRadius: 90,
            width: 40,
            height: 40,
            top: 20,
            alignSelf: 'center',
            backgroundColor: 'black',
          }}
        /> */}
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 30,
            paddingTop: 40,
          }}>
          <TextInput
            placeholder="Search..."
            style={{
              paddingLeft: 15,
              paddingVertical: 2,
              borderWidth: 1,
              borderRightWidth: 0,
              borderTopLeftRadius: 5,
              borderBottomLeftRadius: 5,
              width: 185,
              height: 35,
              fontWeight: '600',
              backgroundColor: '#FFFFFF',
            }}
          />
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              paddingHorizontal: 10,
              borderWidth: 1,
              borderLeftWidth: 0,
              borderTopRightRadius: 5,
              borderBottomRightRadius: 5,
              backgroundColor: '#FFFFFF',
            }}>
            <Image
              source={require('../../images/search-icon.png')}
              style={{
                top: 8,
                width: 19,
                height: 18,
              }}
            />
          </TouchableOpacity>
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
              Sort by:
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* <TreeView /> */}
      <ListView />
    </View>
  );
};
