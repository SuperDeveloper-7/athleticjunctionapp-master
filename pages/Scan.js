import React , {Component} from 'react';
import {
    View,
    Image, ScrollView, BackHandler,
} from 'react-native';
import {Link} from "react-router-native";

import Text from "../components/Text";
import Animate from "../components/Animate";
import Layout from "./Layout";
import Button from "../components/Button";
import moment from "moment";

export default class extends Component {
    
    constructor(props) {
        super(props)
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
        console.log("scan props",this.props);
    }
    
    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    }
    
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    }
    
    handleBackButtonClick() {
        console.log("press back button");
        this.props.history.goBack();
        return true;
    }

    render() {
        const companyName = this.props.organization.name;
        if(this.props.events.length===0){
            return <Layout>
                <Animate animation={'slideInUp'} style={{flex:4}}>
                    <Text>Hello {companyName}</Text>
                    <Animate animation={'fadeIn'} delay={800}>
                        <Text size={22} style={{marginTop:40}}>Sorry, no upcoming events.</Text>
                        <Text size={22} style={{marginTop:40,color:'rgba(255,255,255,.15)'}}>Yet...</Text>
                    </Animate>
                </Animate>
            </Layout>
        }
    
        if(this.props.events.length>1){
            return <Layout>
                <Animate animation={'slideInUp'} style={{flex:4}}>
                    <Text>Hello {companyName}</Text>
    
                    <Text size={28}>Please select an Event</Text>
                    <ScrollView>
                        <Animate delay={800} animation={'fadeIn'}>
                            {this.props.events.map(event=>
                                <Button key={event.id} onPress={()=>this.props.changeEvent(event,this.props.history)}>
                                    {event.name} {'\n'}
                                    <Text size={14}>[starts {moment(event.starts_at).fromNow()}]</Text>
                                </Button>)
                            }
                        </Animate>
                    </ScrollView>
                </Animate>
            </Layout>
        }
    
        return <Layout>
            <View style={{flex: 1}}>
                <Text>Hello {companyName}</Text>
            </View>
    
            <Animate animation={'zoomIn'} style={{flex: 4, padding: 50}}>
    
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
                    <Image source={require('../scan.png')}/>
                </View>
    
                <View>
                    <Button link={'/reader'}>Start Scan</Button>
                </View>
    
                <View style={{flex: 3}}/>
    
            </Animate>
        </Layout>
    }   
}
