import React from 'react';
import {StyleSheet} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

export default (props) => (<LinearGradient colors={props.colors||['#C206AE', '#531565', '#131D3A']} style={styles.linearGradient}>
    {props.children}
</LinearGradient>)

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
    }
});