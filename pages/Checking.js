import React from 'react';
import {post} from '../Request'
import Layout from "./Layout";
import Text from "../components/Text";
import {View, Image, BackHandler} from "react-native";
import {Link} from "react-router-native";
import EventBar from "../components/EventBar";
import TicketDetails from "../components/TicketDetails";
import Animate from "../components/Animate";

export default class extends React.Component {
    state = {
        done: false,
        failed: false,
        used: false,
    };

    postPayloadToServer = (payload, event) => {
        post(`/api/event/${event.id}`, {payload})
            .then(({data}) => this.setState({
                done: data.success,
                failed: !data.success,
                used: data.used,
                voucher: data.voucher,
            }))
    };

    componentDidMount() {
        let payload = this.props.location.state.qrCodeData;
        let event = this.props.event;
        this.postPayloadToServer(payload, event)
        this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }
    constructor(props) {
        super(props);
    }
   
    componentWillUnmount() {
        this.backHandler.remove()
    }
    
    handleBackPress = () => {
        this.props.history.goBack();
        return true;
    }
    render() {
        const {done, failed, used, voucher} = this.state;

        let checking = null;

        if (!done && !failed) checking = <Text size={28}>Checking...</Text>;
        else if (!done && failed) checking = <Error/>;
        else if (done && !failed && used) checking =
            <Success check={false} message={"Ticket has already been scanned."} voucher={voucher}/>;
        else if (done && !failed && !used) checking = <Success message={"Success!"} voucher={voucher}/>;

        return <Layout>
            <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,.2)', paddingTop: 5}}>
                <EventBar {...this.props}/>
            </View>
            <View style={{flex: 6, justifyContent: 'center'}}>
                {checking}
            </View>
        </Layout>
    }
}

const Error = () => (<Animate animation={'swing'} style={{alignSelf: 'center'}}>
    <Text size={24} style={{width: 300}}>Oops... something went wrong. Please try again.</Text>
    <Link to={"/reader"}>
        <View>
            <Text style={{borderWidth: 1, borderColor: 'white', padding: 5, marginTop: 20}}>Scan Again</Text>
        </View>
    </Link>
</Animate>);

const Success = ({message, size, check, animation, voucher}) => (<View style={{alignSelf: 'center'}}>
    <Text size={size || 24} style={{width: 300}}>{message}</Text>
    <Animate animation={animation || 'bounce'}>
        {check === false ? null : <Image style={{alignSelf: 'center', margin: 10}} source={require('../check.png')}/>}
        <TicketDetails voucher={voucher}/>
        <Link to={"/reader"}>
            <View>
                <Text style={{borderWidth: 1, borderColor: 'white', padding: 5, marginTop: 10}}>Next Scan</Text>
            </View>
        </Link>
    </Animate>
</View>);