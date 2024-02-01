/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
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

const cardDesDetail = {
  id: null,
  name: null,
  type: null,
  frameType: null,
  desc: null,
  atk: null,
  def: null,
  level: null,
  race: null,
  attribute: null,
  link: null,
  archetype: null,
  ygoprodeck_url: null,
  image_url:
    'https://orig10.deviantart.net/69f2/f/2016/289/4/1/ygo_card_backing__final__by_icycatelf-dal6wsb.png',
  image_url_small: null,
  image_url_cropped: null,
};
const GalleryView = () => {
  const cardData = useCallAPI().listYugiCard;
  const [cardDetail, setCardDetail] = useState<IData>(cardDesDetail);
  const [cardViewHeight, setCardViewHeight] = useState(310);

  const renderItem = ({item}: {item: IData}) => (
    <View style={{flex: 1 / 6, paddingTop: 2}}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => {
          setCardDetail({
            ...cardDetail,
            id: item.id,
            name: item.name,
            type: item.type,
            desc: item.desc,
            atk: item.atk,
            def: item.def,
            level: item.level,
            race: item.race,
            attribute: item.attribute,
            link: item.link,
            archetype: item.archetype,
            image_url: `https://images.ygoprodeck.com/images/cards/${item.id}.jpg`,
          });
          setCardViewHeight(455);
        }}>
        <Image
          src={`https://images.ygoprodeck.com/images/cards/${item.id}.jpg`}
          style={{
            width: 66,
            height: 98,
            borderRadius: 1,
          }}
        />
      </TouchableOpacity>
    </View>
  );

  console.log(cardDetail.id);
  return (
    <View style={{flex: 1}}>
      <View style={{height: cardViewHeight, borderBottomWidth: 3}}>
        <View
          style={{
            flex: 5,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {cardDetail.desc && (
            <ScrollView
              style={{
                flex: 1,
              }}
              contentContainerStyle={{
                paddingHorizontal: 10,
                paddingVertical: 15,
              }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 500,
                  letterSpacing: 1,
                  // textAlign: 'justify',
                }}>
                {cardDetail.desc}
              </Text>
            </ScrollView>
          )}
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              src={cardDetail.image_url}
              style={{
                width: 210,
                height: 300,
                borderRadius: 3,
              }}
            />
          </View>
        </View>
        {cardDetail.id && (
          <View
            style={{
              flex: 2.5,
              justifyContent: 'center',
              alignItems: 'center',
              borderTopWidth: 3,
            }}>
            <Text
              style={{
                textTransform: 'uppercase',
                fontSize: 19,
                fontWeight: 'bold',
                marginTop: 10,
                marginBottom: 12,
              }}>
              {cardDetail.name}
            </Text>
            <View style={{flexDirection: 'row', marginBottom: 6}}>
              <Image
                style={{
                  width: 20,
                  height: 20,
                  marginRight: 10,
                }}
                source={race_image[cardDetail.race]}
              />
              <Text>{cardDetail.race}</Text>
              {cardDetail.attribute && (
                <View style={{flexDirection: 'row'}}>
                  <Image
                    style={{
                      width: 20,
                      height: 20,
                      marginLeft: 20,
                      marginRight: 10,
                    }}
                    source={race_image[cardDetail.attribute]}
                  />
                  <Text>{cardDetail.attribute}</Text>
                </View>
              )}
            </View>
            <View style={{flexDirection: 'row'}}>
              {cardDetail.type === 'Spell Card' && (
                <Image
                  style={{
                    width: 20,
                    height: 20,
                    marginRight: 10,
                  }}
                  source={require('../../images/SPELL.png')}
                />
              )}
              {cardDetail.type === 'Trap Card' && (
                <Image
                  style={{
                    width: 20,
                    height: 20,
                    marginRight: 10,
                  }}
                  source={require('../../images/TRAP.png')}
                />
              )}
              <Text style={{marginBottom: 6}}>{cardDetail.type}</Text>
            </View>
            {cardDetail.level && (
              <View style={{flexDirection: 'row', marginBottom: 6}}>
                <Text style={{marginRight: 10}}>Level: {cardDetail.level}</Text>
                {[...Array(cardDetail.level).keys()].map(() => (
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
            {cardDetail.atk && (
              <Text style={{marginBottom: 6}}>
                ATK/ {cardDetail.atk} - DEF/ {cardDetail.def}
              </Text>
            )}
          </View>
        )}
      </View>
      <FlatList
        data={cardData}
        numColumns={6}
        // style={{flex: 1}}
        renderItem={renderItem}
        contentContainerStyle={{
          paddingLeft: 4,
          paddingRight: 3,
        }}
      />
    </View>
  );
};

export default GalleryView;
