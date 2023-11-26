import { SafeAreaView } from 'react-native-safe-area-context';

import CardList from '../components/CardList';

const NewsScreen = () => {
  return (
    <SafeAreaView>
      <CardList />
    </SafeAreaView>
  );
};

export default NewsScreen;
