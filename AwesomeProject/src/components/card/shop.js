import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import style from '../../assets/css/components/card/shop';

const Shop = (props) => {
    
    const {data} = props;

    return(
        <View style={style.container}>
            <View style={style.imageContainer}> 
                <Text style={style.text}>
                    {data.item.contentText}
                </Text>
            </View>

            <View style={style.textContainer}>
                <TouchableOpacity>
                    <Text style={style.text} numberOfLines={1} ellipsizeMode="tail">
                        {data.item.text}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
        
    );
    
}

export default Shop;