// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import DetilScreen from '../screens/DetilScreen';
import VeryDetilScreen from '../screens/VeryDetilScreen';
import HomeScreen from '../screens/HomeScreen';
import SettingScreen from '../screens/SettingScreen';
import NotificationScreen from '../screens/NotificationScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Tab1}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Detil" component={DetilScreen} />
        <Stack.Screen name="VeryDetil" component={VeryDetilScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;

export function Tab1() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          } else if(route.name === 'Notification') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor:'tomato',
        tabBarInactiveTintColor: 'grey',
      })}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="Notification" component={NotificationScreen} options={{ tabBarBadge: 3 }}/>
      <Tab.Screen name="Settings" component={SettingScreen} />
    </Tab.Navigator>
  );
}
