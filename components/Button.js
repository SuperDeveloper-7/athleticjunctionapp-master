import React from "react";
import Text from "./Text";
import {TouchableOpacity, View} from "react-native";
import {Link} from "react-router-native";

export default (props) => {

    if(props.onPress){
        return <TouchableOpacity style={{
            backgroundColor: 'rgba(255,255,255,.02)',
            padding: 10,
            borderWidth: 1,
            borderColor: 'white',
            margin: 30
        }} {...props}>
            <View>
                <Text style={{color: 'white', textAlign: 'center', fontWeight: '800'}}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    }

    return <Link to={props.link} style={{
        backgroundColor: 'rgba(255,255,255,.02)',
        padding: 10,
        borderWidth: 1,
        borderColor: 'white',
        margin: 30
    }} {...props}>
        <View>
            <Text style={{color: 'white', textAlign: 'center', fontWeight: '800'}}>{props.children}</Text>
        </View>
    </Link>
}