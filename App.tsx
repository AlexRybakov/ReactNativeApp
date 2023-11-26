import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './src/screens/HomeScreen';
import NewsScreen from './src/screens/NewsScreen';

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Задачи') {
              return (
                <Ionicons
                  name={
                    focused
                      ? 'ios-information-circle'
                      : 'ios-information-circle-outline'
                  }
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === 'Новости') {
              return (
                <Ionicons
                  name={focused ? 'newspaper' : 'newspaper-outline'}
                  size={size}
                  color={color}
                />
              );
            }
          },

          tabBarInactiveTintColor: 'gray',
          tabBarActiveTintColor: '#1e90ff',
        })}
      >
        <Tab.Screen name='Задачи' component={HomeScreen} />
        <Tab.Screen name='Новости' component={NewsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
