import { useState, useCallback, useEffect } from 'react';
import { FlatList } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

import CardItem from '../CardItem';

import { Root } from './CardList.styles';

export type Item = {
  id: string;
  title: string;
  text: string;
  url: string;
};

const CardList = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Item[]>([]);

  const getNews = async () => {
    try {
      const response = await fetch(
        'https://65636b22ee04015769a72e9b.mockapi.io/api/reactnative/news'
      );
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  const onRefreshs = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <Root>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          renderItem={({ item }) => <CardItem item={item} />}
          keyExtractor={(item) => item.id}
          scrollEnabled={true}
          refreshing={refreshing}
          onRefresh={() => onRefreshs}
        />
      )}
    </Root>
  );
};

export default CardList;
