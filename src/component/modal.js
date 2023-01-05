import { Text, View, Modal, TouchableOpacity, Dimensions, Share } from 'react-native'
import React, { Component } from 'react'
import Header from './header'
import { WebView } from 'react-native-webview';

export default class ModalsNews extends Component {
    handleclose = () => {
        this.props.modalclose()
    }

    handleshare=()=>{
        const {title,url} = this.props.modalcont
        let masage = `${title}\n\nRead More @${url}\n\nShared via RN News App`

        console.log('masage',masage)
        return Share.share(
            {title,message:masage,url:masage},
            {dialogTitle:`Share ${title}`}
        )

    }
    render() {
        let heightscreen = Dimensions.get('screen')
        console.log('modalcont', this.props,heightscreen)
        let { ismodalshow, modalcont } = this.props
        return (
            <Modal
                animationType='slide'
                transparent={true}
                visible={ismodalshow}
                onRequestClose={this.handleclose}
            >
                <View style={{ flex: 1, backgroundColor: '#fff' }}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        backgroundColor: '#009387',
                        height: 120,
                    }}>
                        <TouchableOpacity
                        onPress={this.handleclose}
                        //style={{flex:0.3}}
                        >
                            <Text style={{
                                color: '#fff',
                                fontWeight: '600',
                                fontSize: 14,
                                top: -20
                            }}>Close</Text>
                        </TouchableOpacity>

                        <Header
                            hding={modalcont.title}
                            props={{ flex: 0.5 }}
                        />

                        <TouchableOpacity
                        onPress={this.handleshare}
                        >
                            <Text style={{
                                color: '#fff',
                                fontWeight: '600',
                                fontSize: 14,
                                top: -20
                            }}>Share</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        
                         backgroundColor:'#ddd',
                        marginHorizontal:20,
                        zIndex:2,
                        position:'relative',
                        elevation:3,
                        top:-25,
                        height:heightscreen.height,
                        width:heightscreen.width-40
                    }}>
                        <WebView 
                        style={{
                             flex:1,
                            
                        }}
                        source={{ uri: modalcont.url }}
                        onError={this.handleclose}
                        startInLoadingState
                        scalesPageToFit
                        />
                    </View>

                </View>


            </Modal>
        )
    }
}