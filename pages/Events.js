import React from 'react';

import {
    Text,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

import moment from 'moment'

export default ({redirect, events}) => (<ScrollView>
    {
        events.map(event => <TouchableOpacity
                key={event.id}
                onPress={() => redirect({route: 'Reader', params: {event}})}
                style={styles.box}>
                <Text style={styles.whiteText}>{event.name}</Text>
                <Text style={{color:'#e3e3e3'}}>{event.organization.name}</Text>
                <Text style={{color:'#797979',fontSize: 12}}>Starts { moment(event.starts_at).fromNow() }, Ends { moment(event.ends_at).fromNow() }</Text>
            </TouchableOpacity>
        )
    }
</ScrollView>)

const styles = StyleSheet.create({
    box: {
        flex: 1,
        paddingLeft: 15,
        paddingTop: 30,
        paddingBottom: 30,
        backgroundColor: '#8eb4cb',
        borderTopColor: '#fff',
        borderTopWidth: 1,
    },
    whiteText: {
        color: '#fff',
        fontSize: 16
    }
});