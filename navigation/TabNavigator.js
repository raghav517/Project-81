import React,{Component} from 'react'
import {View,Text,StyleSheet} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'

import Feed from '../screens/Feed'
import CreateStory from '../screens/CreateStory'
const Tab =createBottomTabNavigator()
export default class TabNavigator extends Component{


render(){
  return(
   <Tab.Navigator 
   screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size, color }) => {
          let iconName;
          if (route.name === 'Feed') {
            iconName = focused ? 'book' : 'book-outline';
          } else if (route.name === 'CreateStory') {
            iconName = focused ? 'create' : 'create-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{ activeTintColor: 'tomato', inactiveTintColor: 'grey' }}>
   <Tab.Screen name="Feed" component={Feed}/>
    <Tab.Screen name="CreateStory" component={CreateStory}/>
   </Tab.Navigator>
  )
}
}