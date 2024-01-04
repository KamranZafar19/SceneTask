import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from '../../styles/index';
const Button = ({title, color, backgroundColor, onPress}) => {
    return (
        <TouchableOpacity style={[styles.loginBtn, {backgroundColor}]} onPress={onPress}>
            <Text style={[styles.loginText, {color}]}>{title}</Text>
        </TouchableOpacity>
  );
};

export default Button;
