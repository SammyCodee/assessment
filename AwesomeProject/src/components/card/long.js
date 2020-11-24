import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import style from '../../assets/css/components/card/long';

const Long = (props) => {
    
    const {data, handleOnPress} = props;

    let title = data.item.title;
    let detail = data.item.detail;
    let imgSource = data.item.img;
    let buttonText = data.item.buttonText;

    return(
        <View style={style.container}>
            <View style={style.titleTextContainer}>
                <Text style={style.titleText} numberOfLines={2} ellipsizeMode="tail">
                    {title}
                </Text>
            </View>

            <View style={style.detailTextContainer}>
                <Text style={style.detailText} numberOfLines={2} ellipsizeMode="tail">
                    {detail}
                </Text>
            </View>

            <View style={style.imageContainer}>
                <Image
                    source={imgSource}
                    style={style.image}
                />
            </View>

            <View style={style.buttonContainer}>
                <TouchableOpacity onPress={()=>handleOnPress()}>
                    <View style={style.buttonSubContainer}>
                        <Text style={style.buttonText}>
                            {buttonText}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
        
    );
    
}

export default Long;