import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

import Timestamp from './time'

export default function Dataitems({ data,modshow }) {

    console.log('datadata', data,modshow)

    const onpress=()=>{
        let {title,url} = data;
        modshow({title,url})
    }
    return (
        <View style={{
            backgroundColor: '#fff',
            marginTop: 0,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
            paddingVertical: 5,
            alignItems: 'center',

        }}>
            <View style={{
                width: 70,
                height: 70,
                backgroundColor: '#ddd',
                borderRadius: 5,

            }}>
                <Image
                    source={{ uri: data.urlToImage != null ? data.urlToImage : null }}
                    style={{
                        width: 70,
                        height: 70,
                        resizeMode: 'cover'
                    }}
                />
            </View>
            <View style={{
                backgroundColor: '#fff',
                flex: 1,
                width: '100%', height: '100%',
                paddingHorizontal: 15,

            }}>
                <View style={{
                    flex: 1,
                    width: '100%', height: '100%',
                    // marginLeft: 10,
                    borderBottomColor: '#ddd',
                    borderBottomWidth: 0.7,
                    paddingVertical: 14,
                    flexDirection: 'row',

                }}>
                    <View style={{ flex: 2, paddingRight: 20 }}>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: '600',
                            color: '#333',
                            marginBottom: 3
                        }}
                            numberOfLines={2}
                        >{data.title}</Text>
                        <Text numberOfLines={2}>
                            {data.description}
                        </Text>
                        <View style={{flexDirection:'row',  marginTop:10}}>
                            <Text numberOfLines={2}>
                                {data.source.name}
                            </Text>
                            <Timestamp 
                            times={data.publishedAt}
                            />
                            {/* <Text style={{marginHorizontal:10}}>
                                
                                {moment(data.publishedAt || moment()).fromNow()}
                            </Text> */}
                        </View>
                    </View>
                    <TouchableOpacity style={{
                        justifyContent: 'center'
                    }}
                    onPress={onpress}
                    >
                        <Text style={{ color: '#009387', fontWeight: '600' }}>View</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}