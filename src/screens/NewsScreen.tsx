import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import CardList from '../components/CardList';

type Props = {};

const NewsScreen = (props: Props) => {
  return (
    <SafeAreaView>
      <CardList />
    </SafeAreaView>
  );
};

export default NewsScreen;
