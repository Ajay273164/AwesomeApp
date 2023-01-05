import { Text, View } from 'react-native'
import React, { Component } from 'react'
import moment from 'moment'
export default class Timestamp extends Component {
    constructor(props) {
        super(props);
        this.tims = props.times;
    }
    render() {
        return (
            <Text style={{ marginHorizontal: 10 }}>

                {moment(this.tims || moment()).fromNow()}
            </Text>
        )
    }
}