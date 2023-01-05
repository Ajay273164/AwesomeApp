import { Text, View, Alert, ActivityIndicator, ScrollView } from 'react-native'
import React, { Component } from 'react'
import { getnews } from '../../service/news'
import Dataitems from '../../component/dataitems';
import ModalsNews from '../../component/modal';

export default class Tab1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: null,
      ismodalvisible: false,
      modalnewscontant: {}
    }
  }
  componentDidMount() {
    getnews("general").then((data) => {
      this.setState({
        isLoading: false,
        data: data,

      })
    }, error => {
      Alert.alert('Error', 'something went wrong!')
    })

  }
  handlemodalshow = (articalmodal) => {
    this.setState({
      ismodalvisible: true,
      modalnewscontant: articalmodal
    })
  }

  handlemodalclose = () => {
    this.setState({
      ismodalvisible: false,
      modalnewscontant: {}
    })
  }


  render() {

    let views = this.state.isLoading ?
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor: '#ddd' }}>
        <ActivityIndicator
          animating={this.state.isLoading}
          size="large"
          color={"#009387"}
        />
        <Text>Please Wait..</Text>
      </View>
      :
      <ScrollView>
        {
          this.state.data != null && this.state.data.map((e, i) => {
            return <Dataitems
              key={i}
              data={e}
              modshow={this.handlemodalshow}
            />
          })
        }

      </ScrollView>

    return (
      <View style={{ flex: 1 }}>
        {views}
        <ModalsNews
          ismodalshow={this.state.ismodalvisible}
          modalcont={this.state.modalnewscontant}
          modalclose={this.handlemodalclose}
        />
      </View>
    )
  }
}