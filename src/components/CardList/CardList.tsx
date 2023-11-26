import { useState, useCallback, useEffect } from 'react';
import { FlatList } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

import CardItem, { CardItemProps } from '../CardItem';

import { Root } from './CardList.styles';

const REFRESH_DELAY = 2000;
const NEWS_URL =
  'https://65636b22ee04015769a72e9b.mockapi.io/api/reactnative/news';

const CardList = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<CardItemProps[]>([]);

  const getNews = async () => {
    try {
      const response = await fetch(NEWS_URL);
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

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, REFRESH_DELAY);
  }, []);

  return (
    <Root>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          renderItem={({ item }) => <CardItem {...item} />}
          keyExtractor={(item) => item.id}
          scrollEnabled={true}
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      )}
    </Root>
  );
};

export default CardList;
