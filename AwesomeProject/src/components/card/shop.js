import React, { useState } from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import style from '../../assets/css/components/card/shop';

const Shop = (props) => {
    
    const {data, handleOnPress} = props;

    let imageSource= { uri: data.item.imageURL };
    let actionName = data.item.actionName;
    let imageTitleText = data.item.title;
    let imageDetailText = data.item.detail;
    let actionURL = data.item.actionURL;

    const handleCardOnPress = (url) => {
        handleOnPress(url);
    }

    return(
        <View style={style.container}>
            <View style={style.imageContainer}> 
                <ImageBackground
                    source={imageSource}
                    style={style.imageBackground}
                    imageStyle={style.imageStyle}
                >
                    <View style={style.imageContentContainer}>
                        <View style={style.imageTitleContainer}>
                            <Text style={style.imageTitleText} numberOfLines={1} ellipsizeMode="tail">
                                {imageTitleText}
                            </Text>
                        </View>

                        <View style={style.imageDetailContainer}>
                            <Text style={style.imageDetailText} numberOfLines={4} ellipsizeMode="tail">
                                {imageDetailText}
                            </Text>
                        </View>
                    </View>
                </ImageBackground>
            </View>

            <View style={style.textContainer}>
                <TouchableOpacity onPress={()=>handleCardOnPress(actionURL)}>
                    <View style={style.textSubContainer}>
                        <Text style={style.text} numberOfLines={1} ellipsizeMode="tail">
                            {actionName}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
        
    );
    
}

export default Shop;