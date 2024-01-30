/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';

interface IData {
  name: string;
  number: number;
  image: string;
}
const cardData = [
  {
    name: 'card1',
    number: '4567890123456789',
    image: 'https://images.ygoprodeck.com/images/cards/34541863.jpg',
  },
  {
    name: 'card2',
    number: '4567890123456789',
    image: 'https://images.ygoprodeck.com/images/cards/64163367.jpg',
  },
  {
    name: 'card3',
    number: '4567890123456789',
    image: 'https://images.ygoprodeck.com/images/cards/91231901.jpg',
  },
  {
    name: 'card1',
    number: '4567890123456789',
    image: 'https://images.ygoprodeck.com/images/cards/34541863.jpg',
  },
  {
    name: 'card1',
    number: '4567890123456789',
    image: 'https://images.ygoprodeck.com/images/cards/34541863.jpg',
  },
  {
    name: 'card1',
    number: '4567890123456789',
    image: 'https://images.ygoprodeck.com/images/cards/34541863.jpg',
  },
  {
    name: 'card1',
    number: '4567890123456789',
    image: 'https://images.ygoprodeck.com/images/cards/34541863.jpg',
  },
  {
    name: 'card1',
    number: '4567890123456789',
    image: 'https://images.ygoprodeck.com/images/cards/34541863.jpg',
  },
  {
    name: 'card1',
    number: '4567890123456789',
    image: 'https://images.ygoprodeck.com/images/cards/34541863.jpg',
  },
  {
    name: 'card1',
    number: '4567890123456789',
    image: 'https://images.ygoprodeck.com/images/cards/34541863.jpg',
  },
  {
    name: 'card1',
    number: '4567890123456789',
    image: 'https://images.ygoprodeck.com/images/cards/34541863.jpg',
  },
  {
    name: 'card1',
    number: '4567890123456789',
    image: 'https://images.ygoprodeck.com/images/cards/34541863.jpg',
  },
  {
    name: 'card1',
    number: '4567890123456789',
    image: 'https://images.ygoprodeck.com/images/cards/34541863.jpg',
  },
  {
    name: 'card1',
    number: '4567890123456789',
    image: 'https://images.ygoprodeck.com/images/cards/34541863.jpg',
  },
  {
    name: 'card1',
    number: '4567890123456789',
    image: 'https://images.ygoprodeck.com/images/cards/34541863.jpg',
  },
  {
    name: 'card1',
    number: '4567890123456789',
    image: 'https://images.ygoprodeck.com/images/cards/34541863.jpg',
  },
  {
    name: 'card1',
    number: '4567890123456789',
    image: 'https://images.ygoprodeck.com/images/cards/34541863.jpg',
  },
  {
    name: 'card1',
    number: '4567890123456789',
    image: 'https://images.ygoprodeck.com/images/cards/34541863.jpg',
  },
  {
    name: 'card1',
    number: '4567890123456789',
    image: 'https://images.ygoprodeck.com/images/cards/34541863.jpg',
  },
  {
    name: 'card1',
    number: '4567890123456789',
    image: 'https://images.ygoprodeck.com/images/cards/34541863.jpg',
  },
  {
    name: 'card1',
    number: '4567890123456789',
    image: 'https://images.ygoprodeck.com/images/cards/34541863.jpg',
  },
  {
    name: 'card1',
    number: '4567890123456789',
    image: 'https://images.ygoprodeck.com/images/cards/34541863.jpg',
  },
  {
    name: 'card1',
    number: '4567890123456789',
    image: 'https://images.ygoprodeck.com/images/cards/34541863.jpg',
  },
  {
    name: 'card1',
    number: '4567890123456789',
    image: 'https://images.ygoprodeck.com/images/cards/34541863.jpg',
  },
];
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
  archetype: null,
  ygoprodeck_url: null,
  image_url:
    'https://orig10.deviantart.net/69f2/f/2016/289/4/1/ygo_card_backing__final__by_icycatelf-dal6wsb.png',
  image_url_small: null,
  image_url_cropped: null,
};
const ListView = () => {
  const [cardDetail, setCardDetail] = useState(cardDesDetail);

  const renderItem = ({item}: {item: IData}) => (
    <View style={{flex: 1 / 6, paddingTop: 2}}>
      <TouchableOpacity
        onPress={() => {
          // setCardDetail;
          console.log(item.name);
          setCardDetail({
            ...cardDetail,
            name: item.name,
            image_url: item.image,
          });
        }}>
        <Image
          src={item.image}
          style={{
            width: 66,
            height: 98,
            borderRadius: 1,
          }}
        />
      </TouchableOpacity>
    </View>
  );
  console.log(cardDetail.name);
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'red',
        }}>
        <View style={{flex: 5, flexDirection: 'row'}}>
          <View style={{flex: 4, backgroundColor: 'yellow'}}>
            <Text>Name: {cardDetail.name}</Text>
          </View>
          <View
            style={{
              flex: 5,
              backgroundColor: 'red',
              alignItems: 'center',
              justifyContent: 'center',
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
        <View style={{flex: 1, backgroundColor: 'white'}}>
          <Text> {cardDetail.desc}</Text>
        </View>
      </View>
      <FlatList
        data={cardData}
        numColumns={6}
        renderItem={renderItem}
        style={{backgroundColor: 'yellow', flex: 1}}
        contentContainerStyle={{
          backgroundColor: 'red',
          // flexDirection: 'row',

          paddingLeft: 4,
          paddingRight: 3,
        }}
      />
    </View>
  );
};

export default ListView;
