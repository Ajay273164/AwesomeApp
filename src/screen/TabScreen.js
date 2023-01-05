import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { View } from 'react-native';
import Header from '../component/header';
import Tab1 from './tabs/Tab1';
import Tab2 from './tabs/Tab2';
import Tab3 from './tabs/Tab3';

const Tab = createMaterialTopTabNavigator();


export default function TabScreen() {
    return (
        <View style={{ flex: 1 }}>
            <Header 
            hding={"News App"}
            />
         
        
            <Tab.Navigator initialRouteName='Tab1'
            screenOptions={{
                tabBarStyle:{
                    backgroundColor: '#009387'
                },
                tabBarLabelStyle:{
                   // color:'#fff',
                   fontWeight:'600',
                    fontSize:14,
                   
                },
                tabBarInactiveTintColor:'#ccc',
                tabBarActiveTintColor:'#fff',
                tabBarIndicatorStyle:{
                    borderColor:'#fff',
                    borderWidth:1
                },
              
            }}
            >
                <Tab.Screen name="General" component={Tab1} />
                <Tab.Screen name="Bussiness" component={Tab2} />
                <Tab.Screen name="Technology" component={Tab3} />
            </Tab.Navigator>

        </View>
    )
}