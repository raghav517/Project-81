import React,{Component} from 'react'
import {View,Text,StyleSheet} from 'react-native'
import {createDrawerNavigator} from '@react-navigation/drawer'

import TabNavigator from './TabNavigator'
import Profile from '../screens/Profile'

const Drawer = createDrawerNavigator()

export default class DrawerNavigator extends Component{
  render(){
    return(
      <Drawer.Navigator> 
      <Drawer.Screen name = "Home" component = {TabNavigator}/>
      <Drawer.Screen name = "Profile" component = {Profile}/>
      </Drawer.Navigator>
    )
  }
}