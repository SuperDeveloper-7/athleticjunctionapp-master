import React, {Component} from 'react';
import {View, Alert, Image, TouchableOpacity} from 'react-native'
import {NativeRouter, Route, Link} from 'react-router-native'


import Gradient from "./components/Gradient";
import Loading from "./pages/Loading";
import Login from "./pages/Login";
import Scan from "./pages/Scan";
import Reader from "./pages/Reader";
import Checking from "./pages/Checking";
import Forgot from "./pages/Forgot";
import Recover from "./pages/Recover";
import Register from "./pages/Register";
import About from "./pages/About";
import {post} from "./Request";
import Text from "./components/Text";
import Animate from "./components/Animate";
import UserWebView from "./pages/UserWebView";



const LogoutOnExpiration = (props) => {
    if (!props.organization) {
        clearInterval(props.interval);
        props.history.push('/');
        return null;
    }
    return props.children;
};

export default class extends Component {

    state = {
        promoter: null,
        organization: null,
        events: [],
        event: null,
        lastUpdate: null,
        password: null,
        expired: false,
        selectEvent: false,
        noEvents: false,
    };

    refreshInterval = null;

    fetchData = () => {
        const password = this.state.password;

        return new Promise(cb => {
            post('/api/login', {password})
                .then(({data}) => {
                    if (data.success) {

                        data.lastUpdate = Date.now();

                        if(data.events.length==1){
                            data.event = data.events[0];
                        }
                       
                        this.setState(data);

                        cb(data);
                    } else if (data.msg) {
                        Alert.alert(
                            'Uh oh!',
                            data.msg
                        );
                    }
                })
                .catch((e) => {

                    console.warn(e)

                    if (this.state.expired) return;

                    this.setState({
                        organization: null,
                        events: [],
                        event: null,
                        lastUpdate: null,
                        password: null,
                        expired: true,
                    });

                });
        })
    };

    login = ({history, password}) => {
        this.setState({password, expired: false}, () => {
            this.fetchData({password})
                .then((data) => {
                    this.refreshInterval = setInterval(this.fetchData, 5000);
                    history.push('/scan');
                })
        })
    };

    changeEvent = (event,history) => {
        this.setState({
            event
        });
        history.push('/reader')
    };

    render() {
        if(this.state.promoter === null){
            return <Gradient style={{flex: 1}}>

                <Animate style={{flexDirection:'row',justifyContent:'center',paddingTop:80}}>
                    <Image source={require('./logo.png')} style={{width:48,height:60}}/>
                    <Text size={18} style={{paddingTop:15,paddingLeft:20}}>ATHLETIC JUNCTION EVENTS</Text>
                </Animate>

                <TouchableOpacity onPress={()=>this.setState({promoter:true})} style={{backgroundColor: 'rgba(255,255,255,.02)', padding: 10, borderWidth: 1, borderColor: 'white',margin:30}}>
                    <View>
                        <Text style={{color: 'white', textAlign: 'center', fontWeight: '800'}}>Are you scanning tickets?</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.setState({promoter:false})} style={{backgroundColor: 'rgba(255,255,255,.02)', padding: 10, borderWidth: 1, borderColor: 'white',margin:30}}>
                    <View>
                        <Text style={{color: 'white', textAlign: 'center', fontWeight: '800'}}>Looking to buy tickets?</Text>
                    </View>
                </TouchableOpacity>
            </Gradient>
        }

        if(this.state.promoter === false){
            return <UserWebView goBack={()=>this.setState({promoter:null})}/>;
        }

        return <NativeRouter >
            <Gradient style={{flex: 1}}>
                {this.state.expired ? <View style={{backgroundColor: 'black', padding: 20}}>
                    <Text size={16}>You were logged out, please log back in.</Text>
                </View> : null}

                <Route exact path="/"
                       render={(props) => <Login goBack={()=>this.setState({promoter:null})}  {...this.state} {...props} login={this.login} />}/>
                <Route exact path="/about" render={(props) => <About {...this.state} {...props}/>}/>
                <Route exact path="/forgot" render={(props) => <Forgot {...this.state} {...props}/>}/>
                <Route exact path="/recover" render={(props) => <Recover {...this.state} {...props}/>}/>
                <Route exact path="/register" render={(props) => <Register {...this.state} {...props}/>}/>
                <Route exact path="/scan" render={(props) =>
                    <LogoutOnExpiration {...this.state} interval={this.refreshInterval} {...props}>
                        <Scan  {...this.state} {...props} changeEvent={this.changeEvent}/>
                    </LogoutOnExpiration>}/>
                <Route exact path="/reader" render={(props) => 
                    <LogoutOnExpiration {...this.state} interval={this.refreshInterval} {...props}>
                        <Reader {...this.state} {...props}/>
                    </LogoutOnExpiration>}/>
                <Route exact path="/checking" render={(props) =>
                    <LogoutOnExpiration {...this.state} interval={this.refreshInterval} {...props}>
                        <Checking {...this.state} {...props}/>
                    </LogoutOnExpiration>}/>
            </Gradient>
        </NativeRouter>
    }
}