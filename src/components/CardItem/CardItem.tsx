import React from 'react';
import { Card } from 'react-native-paper';

import { Item } from '../CardList/CardList';

import { RootRenderItemCard } from './CardItem.styles';

type Props = {
  item: Item;
};

const CardItem = ({ item }: Props) => {
  return (
    <RootRenderItemCard>
      <Card>
        <Card.Cover source={{ uri: item.url }} />
        <Card.Title title={item.title} subtitle={item.text} />
      </Card>
    </RootRenderItemCard>
  );
};

export default CardItem;
