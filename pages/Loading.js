import React, {Component} from 'react';
import {View, Image} from 'react-native'
import Gradient from "../components/Gradient";
import Text from "../components/Text";

export default class extends Component {
    render() {
        return <Gradient>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', paddingTop: 90}}>
                <Image source={require('../logo.png')}/>
            </View>
            <View style={{flex: 2}}>
                <Text size={30}>Athletic Junction Events</Text>
            </View>
        </Gradient>
    }
}