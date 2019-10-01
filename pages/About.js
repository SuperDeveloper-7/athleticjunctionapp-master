import React, {Component} from 'react';
import {View, Image,BackHandler} from 'react-native'
import Gradient from "../components/Gradient";
import Text from "../components/Text";
import Animate from "../components/Animate";
import Link from "react-router-native/Link";

export default class extends Component {

    goToRegister = () => {
        this.props.history.push('/register');
    };
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
        return <Gradient>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', paddingTop: 90}}>
                <Image source={require('../logo.png')}/>
            </View>
            <View style={{flex: 4}}>
                <Text size={24}>Athletic Junction Events is...</Text>

                <Animate animation={'fadeIn'} style={{alignSelf:'center',marginTop:30}}>
                    <Image source={require('../scan.png')}/>
                </Animate>

                <Animate animation={'fadeInUpBig'} style={{marginTop:10,padding:30}}>
                    <Text>An event ticketing system</Text>
                    <Text style={{margin:20}}>List your tickets on our website</Text>
                    <Text>Then use this ticketing app to scan tickets at the door</Text>
                </Animate>

                <Animate animation={'fadeIn'} style={{alignSelf:'center',marginTop:30}}>
                    <Text>Sign up at <Text color="rgba(255,255,255,.7)" onPress={this.goToRegister}>AthleticJunctionEvents.com</Text></Text>
                </Animate>

                <Link to='/' style={{backgroundColor: 'rgba(255,255,255,.02)', padding: 10, borderWidth: 1, borderColor: 'white',margin:30}}>
                    <View>
                        <Text style={{color: 'white', textAlign: 'center', fontWeight: '800'}}>Login</Text>
                    </View>
                </Link>

            </View>
        </Gradient>
    }
}