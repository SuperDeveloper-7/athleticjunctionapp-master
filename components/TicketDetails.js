import React from "react";
import Text from "./Text";
import {View} from "react-native";

import moment from 'moment'

export default ({voucher}) => (<View style={{margin:10,padding:10}}>
    <Text size={24} style={{color:'rgba(255,255,255,1)',fontWeight:'800',textAlign:'center',marginBottom:20}}>Details</Text>
    <View>
        <Text size={16} style={{color:'rgba(255,255,255,.8)',fontWeight:'800',textAlign:'left'}}>Ticket:</Text>
        <Text size={16} style={{color:'rgba(255,255,255,1)',textAlign:'right'}}>{voucher.ticket.name} ({voucher.ticket.price})</Text>
    </View>
    <View>
        <Text size={16} style={{color:'rgba(255,255,255,.8)',fontWeight:'800',textAlign:'left'}}>Name:</Text>
        <Text size={16} style={{color:'rgba(255,255,255,1)',textAlign:'right'}}>{voucher.user.name}</Text>
    </View>
    <View>
        <Text size={16} style={{color:'rgba(255,255,255,.8)',fontWeight:'800',textAlign:'left'}}>Email:</Text>
        <Text size={16} style={{color:'rgba(255,255,255,1)',textAlign:'right'}}>{voucher.user.email}</Text>
    </View>
    <View>
        <Text size={16} style={{color:'rgba(255,255,255,.8)',fontWeight:'800',textAlign:'left'}}>Phone:</Text>
        <Text size={16} style={{color:'rgba(255,255,255,1)',textAlign:'right'}}>{voucher.user.phone_number}</Text>
    </View>
    <View>
        <Text size={16} style={{color:'rgba(255,255,255,.8)',fontWeight:'800',textAlign:'left'}}>Used:</Text>
        <Text size={16} style={{color:'rgba(255,255,255,1)',textAlign:'right'}}>{moment(voucher.used_at).fromNow()}</Text>
    </View>
    <Text size={16} style={{color:'rgba(255,255,255,.8)',textAlign:'right'}}>{moment(voucher.used_at).format('MMM Do YYYY h:mm a')}</Text>
</View>)