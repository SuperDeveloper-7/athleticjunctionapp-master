import React , {Component} from 'react';

import {
    View,
    Image,
    Platform,
    TextInput,
    TouchableOpacity,
    BackHandler,
} from 'react-native';

import Animate from '../components/Animate'
import Text from "../components/Text";
import {Link} from "react-router-native";
import { NavigationActions } from 'react-navigation';

const ContainerStyle = {
    flex:1,
};

if(Platform.OS !== 'ios'){
    ContainerStyle.position = 'absolute';
}
export default class extends Component {

    constructor(props) {
        super(props) 
    }
    
    componentDidMount() {
        this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }
    
    componentWillUnmount() {
        this.backHandler.remove()
    }
    
    handleBackPress = () => {
        this.props.goBack();
        return true;
    }

    render() {
        return <View style={ContainerStyle}>

        <Animate style={{flex:1,flexDirection:'row',justifyContent:'center',paddingTop:80}}>
            <Image source={require('../logo.png')} style={{width:48,height:60}}/>
            <Text size={18} style={{paddingTop:15,paddingLeft:20}}>ATHLETIC JUNCTION EVENTS</Text>
        </Animate>

        <Animate animation={'fadeIn'} style={{flex:8, padding: 50}}>
            <View style={{marginBottom:20}}>
                <Text size={36}>Login</Text>
            </View>

            <View>
                <TextInput
                    autoFocus={true}
                    ref={ref => this.pass = ref}
                    onChangeText={text => this.password = text}
                    keyboardType={'decimal-pad'}
                    placeholder="Password"
                    placeholderTextColor="rgba(255,255,255,.8)"
                    style={{
                        color: 'rgba(255,255,255,.8)',
                        padding: 10,
                        backgroundColor: 'rgba(255,255,255,.3)'
                    }}
                />
            </View>

            <View>
                <TouchableOpacity onPress={()=>this.props.login({history:this.props.history,password:this.password})} style={{backgroundColor: 'rgba(255,255,255,.02)', padding: 10, borderWidth: 1, borderColor: 'white',margin:30}}>
                    <View>
                        <Text style={{color: 'white', textAlign: 'center', fontWeight: '800'}}>Login</Text>
                    </View>
                </TouchableOpacity>
                <Link to='/forgot'>
                    <View>
                        <Text style={{color: 'rgba(255,255,255,.5)', textAlign: 'center',marginBottom:20}}>I forgot my password</Text>
                    </View>
                </Link>
                <Link to='/about'>
                    <View>
                        <Text style={{color: 'rgba(255,255,255,.5)', textAlign: 'center'}}>What is AJE / How do I get started?</Text>
                    </View>
                </Link>
            </View>
            <View style={{flex:3}}/>
        </Animate>

    </View>
    }
}
