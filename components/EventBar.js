import React from 'react';
import {View} from 'react-native';
import Text from "./Text";
import moment from 'moment'

export default ({event,lastUpdate}) => (<View>
    <Text size={24} style={{fontWeight:'900'}}>{event.name}</Text>
    <Text size={16} style={{fontWeight:'900',paddingBottom:5}} color={'#dedede'}>
        {event.checkedIn} / {event.checkedAvailable} Attendees Checked In
    </Text>
    <Text size={10} color={"#dedede"}>
        Last Updated: {moment(lastUpdate).format('MMM Do h:mm a')}
    </Text>
</View>)