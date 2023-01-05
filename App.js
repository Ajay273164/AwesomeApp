import 'react-native-gesture-handler';
import { View, Text } from 'react-native'
import React from 'react'
import TabScreen from './src/screen/TabScreen'
import { NavigationContainer } from '@react-navigation/native'


export default function App() {
  return (
    <NavigationContainer>
     
      <TabScreen />
    </NavigationContainer>
  )
}