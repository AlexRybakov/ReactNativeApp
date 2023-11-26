import { SafeAreaView } from 'react-native-safe-area-context';

import TodoList from '../components/TodoList';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <TodoList />
    </SafeAreaView>
  );
};

export default HomeScreen;
