import React,{Component} from 'react'
import {View,Text,StyleSheet} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import TabNavigator from './navigation/TabNavigator'

import DrawerNavigator from './navigation/DrawerNavigator'

export default class App extends Component{


render(){
  return(
    <NavigationContainer>
<TabNavigator/>
    </NavigationContainer>
  
  )
}
}