import React from 'react';

import {
    View,
    Image,
} from 'react-native';

import Text from "../components/Text";
import {Link} from "react-router-native";

export default (props) => (
    <View style={{flex:1}}>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', paddingTop: 0}}>
            <View style={{flex: 2, flexDirection: 'row', justifyContent: 'center', paddingTop: 10}}>
                <Image source={require('../logo.png')} style={{width: 48, height: 60}}/>
                <Text size={16} style={{paddingTop: 5, paddingLeft: 10}}>ATHLETIC {'\n'} JUNCTION EVENTS</Text>
            </View>
            <View style={{flex: 1}}>
                <Link to={'/'} style={{
                    backgroundColor: 'rgba(255,255,255,.02)',
                    padding: 5,
                    borderWidth: 1,
                    borderColor: 'white',
                    marginRight: 30,
                    marginLeft: 30,
                    marginTop: 20
                }}>
                    <View>
                        <Text style={{color: 'white', textAlign: 'center', fontSize: 12}}>LOGOUT</Text>
                    </View>
                </Link>
            </View>
        </View>

        {props.children}

    </View>
);