/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import useCallAPI from '../api/call-api';
import race_image from '../features/race-image';

interface IData {
  link: any;
  archetype: any;
  attribute: any;
  race: any;
  level: any;
  def: any;
  atk: any;
  id: any;
  desc: string;
  type: any;
  name: string | null;
  number: number;
  image: string;
  image_url: string | null;
}

const ListView = () => {
  const cardData = useCallAPI().listYugiCard;
  const renderItem = ({item}: {item: IData}) => {
    return (
      <View
        style={{
          paddingTop: 2,
          flexDirection: 'row',
          flex: 1,
          top: 10,
          paddingBottom: 20,
        }}>
        <Image
          src={`https://images.ygoprodeck.com/images/cards/${item.id}.jpg`}
          style={{
            width: 123,
            height: 188,
            borderRadius: 3,
            flex: 1,
          }}
        />
        <View style={{flex: 2, marginLeft: 10, marginTop: 2, marginBottom: 5}}>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 18,
              fontWeight: 700,
              marginBottom: 8,
            }}>
            {item.name}
          </Text>

          <View style={{flexDirection: 'row', marginBottom: 8}}>
            <Image
              style={{
                width: 20,
                height: 20,
                marginRight: 10,
              }}
              source={race_image[item.race]}
            />
            <Text>{item.race}</Text>
            {item.attribute && (
              <View style={{flexDirection: 'row'}}>
                <Image
                  style={{
                    width: 20,
                    height: 20,
                    marginLeft: 20,
                    marginRight: 10,
                  }}
                  source={race_image[item.attribute]}
                />
                <Text>{item.attribute}</Text>
              </View>
            )}
          </View>
          <View style={{flexDirection: 'row', marginBottom: 4}}>
            {item.type === 'Spell Card' && (
              <Image
                style={{
                  width: 20,
                  height: 20,
                  marginRight: 10,
                }}
                source={require('../../images/SPELL.png')}
              />
            )}
            {item.type === 'Trap Card' && (
              <Image
                style={{
                  width: 20,
                  height: 20,
                  marginRight: 10,
                }}
                source={require('../../images/TRAP.png')}
              />
            )}
            <Text>{item.type}</Text>
          </View>
          {item.level && (
            <View style={{flexDirection: 'row', marginBottom: 4}}>
              <Text style={{marginRight: 10}}>Level: {item.level}</Text>
              {[...Array(item.level).keys()].map(() => (
                <Image
                  style={{
                    width: 20,
                    height: 20,
                  }}
                  source={require('../../images/Level.png')}
                />
              ))}
            </View>
          )}
          {item.atk && (
            <Text style={{marginBottom: 4}}>
              ATK/ {item.atk} - DEF/ {item.def}
            </Text>
          )}
          <ScrollView>
            <Text numberOfLines={undefined}>{item.desc}</Text>
          </ScrollView>
        </View>
      </View>
    );
  };
  return (
    <FlatList
      data={cardData}
      // style={{flex: 1}}
      renderItem={renderItem}
      contentContainerStyle={{
        paddingLeft: 4,
        paddingRight: 3,
      }}
    />
  );
};

export default ListView;
