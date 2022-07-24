import React, { Component }from 'react';
import { Text, View } from 'react-native';

import {StackActions} from '@react-navigation/native'

export default class Splash extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.dispatch(StackActions.replace("Home"))
        }, 3000)
    }

    render () {
        return (
            <View style={{ flex: 1, backgroundColor: "blue", justifyContent: "center"}}>
                <Text style={{alignSelf: "center", color:"white", fontSize: 20}}>Splash Screen</Text>
            </View>
        )
    }
}
