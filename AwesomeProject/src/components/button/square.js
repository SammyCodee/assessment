// In App.js in a new project

import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import style from '../../assets/css/components/button/square';

const Square = (props) =>{

    const {text, customizeTextContainer, customizeTextStyle} = props;

    return(
        <View style={style.container}>
            <TouchableOpacity>
                <View style={style.button}>
                    
                    <View style={customizeTextContainer? customizeTextContainer : style.textContainer}>
                        <Text 
                            style={ customizeTextStyle ? customizeTextStyle : style.text}
                            numberOfLines={1}
                            ellipsizeMode="tail"
                        >
                            {text}
                        </Text>
                    </View>
                    
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Square;