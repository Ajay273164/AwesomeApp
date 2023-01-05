import { View, Text } from 'react-native'
import React from 'react'

export default function Header({hding, props}) {
  return (
    <View style={{ 
        backgroundColor: '#009387',
        flex:0.13, 
        justifyContent:'center', alignItems:'center', ...props }}>
                <Text
                numberOfLines={1}
                style={{
                    color:'#fff',
                    fontWeight:'600',
                    fontSize:20
                }}>{hding}</Text>
            </View>
  )
}