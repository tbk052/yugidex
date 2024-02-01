import axios from 'axios';
import {useEffect, useState} from 'react';

let cardOffset = 0;
const useCallAPI = () => {
  const [listYugiCard, setListYugiCard] = useState([]);
  // const cardData = [
  //   {
  //     name: '"A" Cell Breeding Device',
  //     number: '4567890123456789',
  //     image: 'https://images.ygoprodeck.com/images/cards/34541863.jpg',
  //     type: 'Spell Card',
  //   },
  //   {
  //     name: 'card2',
  //     number: '4567890123456789',
  //     image: 'https://images.ygoprodeck.com/images/cards/64163367.jpg',
  //     type: 'Spell Card',
  //   },
  //   {
  //     name: 'card3',
  //     number: '4567890123456789',
  //     image: 'https://images.ygoprodeck.com/images/cards/91231901.jpg',
  //     type: 'Spell Card',
  //   },
  //   {
  //     name: 'card1',
  //     number: '4567890123456789',
  //     image: 'https://images.ygoprodeck.com/images/cards/34541863.jpg',
  //     type: 'Spell Card',
  //   },
  //   {
  //     name: 'card1',
  //     number: '4567890123456789',
  //     image: 'https://images.ygoprodeck.com/images/cards/34541863.jpg',
  //     type: 'Spell Card',
  //   },
  //   {
  //     name: 'card1',
  //     number: '4567890123456789',
  //     image: 'https://images.ygoprodeck.com/images/cards/34541863.jpg',
  //     type: 'Spell Card',
  //   },
  // ];
  useEffect(() => {
    handleGetCardAPI();
  }, []);
  const handleGetCardAPI = async () => {
    try {
      const {data: responseData} = await axios.get(
        `https://db.ygoprodeck.com/api/v7/cardinfo.php?num=12&offset=${cardOffset}`,
      );
      setListYugiCard(responseData.data);
      // cardOffset += 20;
    } catch (e) {
      console.log(e);
    }
  };
  return {listYugiCard};
};

export default useCallAPI;
