import React from 'react';
import {Text as RNText} from 'react-native'

export default (props) => {

    let styles = {
        fontFamily: 'Lato',
        backgroundColor: 'transparent',
        color: props.color||'white',
        fontSize: props.size || 18,
        textAlign: 'center',
        ...props.style,
    };

    return <RNText {...props} style={styles}>{props.children}</RNText>
};