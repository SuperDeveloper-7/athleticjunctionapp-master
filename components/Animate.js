import React from 'react';
import * as Animatable from 'react-native-animatable';
export default (props) => (<Animatable.View animation="fadeIn" {...props}>{props.children}</Animatable.View>);