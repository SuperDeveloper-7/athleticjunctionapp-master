import React, {Component} from 'react';
import {View, Image,BackHandler} from 'react-native'
import Gradient from "../components/Gradient";
import Text from "../components/Text";
import Animate from "../components/Animate";
import Link from "react-router-native/Link";

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

    goToRegister = () => {
        this.props.history.push('/register');
    };

    render() {
        return <Gradient>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', paddingTop: 90}}>
                <Image source={require('../logo.png')}/>
            </View>
            <View style={{flex: 4}}>
                <Text size={24}>Forgot Your Password?</Text>

                <Animate animation={'fadeInUpBig'} style={{marginTop:10,padding:30}}>
                    <Text>Your password is given to the event organizer</Text>
                    <Text style={{margin:20}}>To recover your password you must log into your event organizer account
                    on our website, <Text color="rgba(255,255,255,.7)" onPress={this.goToRegister}>AthleticJunctionEvents.com</Text></Text>
                </Animate>

                <Link to='/recover' style={{backgroundColor: 'rgba(255,255,255,.02)', padding: 10, borderWidth: 1, borderColor: 'white',margin:30}}>
                    <View>
                        <Text style={{color: 'white', textAlign: 'center', fontWeight: '800'}}>Recover Password</Text>
                    </View>
                </Link>

                <Link to='/' style={{backgroundColor: 'rgba(255,255,255,.02)', padding: 10, borderWidth: 1, borderColor: 'white',margin:30}}>
                    <View>
                        <Text style={{color: 'white', textAlign: 'center', fontWeight: '800'}}>Login</Text>
                    </View>
                </Link>

            </View>
        </Gradient>
    }
}