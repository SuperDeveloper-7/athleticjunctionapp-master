import React, {Component} from 'react';
import {View, WebView,BackHandler} from 'react-native'
import Link from "react-router-native/Link";
import Text from "../components/Text";

export default class extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }
    
    componentWillUnmount() {
        this.backHandler.remove()
    }
    
    handleBackPress = () => {
        this.props.history.goBack();
        return true;
    }
    render() {
        return <View style={{flex:1}}>
            <WebView style={{flex:1}}
                source={{uri: 'https://www.athleticjunctionevents.com/recover/org-password'}}
            />
            <Link to='/' style={{backgroundColor: 'rgba(255,255,255,.02)', padding: 10, borderWidth: 1, borderColor: 'white',margin:30}}>
                <View>
                    <Text style={{color: 'white', textAlign: 'center', fontWeight: '800'}}>Done</Text>
                </View>
            </Link>
        </View>
    }
}