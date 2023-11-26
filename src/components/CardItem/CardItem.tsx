import React from 'react';
import { Card } from 'react-native-paper';

import { RootRenderItemCard } from './CardItem.styles';

export interface Props {
  id: string;
  title: string;
  text: string;
  url: string;
}

const CardItem = ({ url, text, title }: Props) => (
  <RootRenderItemCard>
    <Card>
      <Card.Cover source={{ uri: url }} />
      <Card.Title title={title} subtitle={text} />
    </Card>
  </RootRenderItemCard>
);

export default CardItem;
