import React, { Component } from "react";
import { SafeAreaView,View, Text, Image, Alert, TouchableOpacity, ScrollView } from "react-native";
import style from '../../assets/css/pages/menu/menu';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import logo from '../../assets/images/pages/menu/logo-header.png';
import FacebookImage from '../../assets/images/pages/menu/facebook.png';
import InstagramImage from '../../assets/images/pages/menu/instagram.png';
import YoutubeImage from '../../assets/images/pages/menu/youtube.png';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTimes, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import LogoutButton from '../../components/button/square';

class Menu extends Component{
    constructor(props){
        super(props);

        this.state = {
            
        };
    }

    onClickAlert = () => {
        Alert.alert(
            "Alert Title",
            "My Alert Msg",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },

                { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
        );
    }

    onClickGoBack = () => {
        const {navigation} = this.props;
        navigation.goBack();
    }

    render(){

        const closeIcon = <FontAwesomeIcon icon={ faTimes } color={'white'} size={hp(2)}/>

        const arrowIcon = <FontAwesomeIcon icon={ faChevronRight } color={'white'} size={hp(1.5)}/>

        return(
            <SafeAreaView style={style.safeArea}>
                <View style={style.container}>

                    <View style={style.header}>
                        <View style={style.headerLeft}/>

                        <View style={style.headerLogo}>
                            <View style={style.logoContainer}>
                                <Image
                                    style={style.logo}
                                    source={logo}
                                />
                            </View>
                        </View>

                        <View style={style.headerRight}>
                            <View style={style.closeContainer}>
                                <TouchableOpacity onPress={()=>this.onClickGoBack()}>
                                    {closeIcon}
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={style.body}>
                        <View style={style.bodyTopContainer}>

                            <View style={style.categoryContainer}>
                                <TouchableOpacity>
                                    <View style={style.categorySubContainer}>
                                        <View style={style.categoryLeftContainer}>
                                            <Text style={style.categoryText} numberOfLines={1} ellipsizeMode="tail">
                                                My Profile
                                            </Text>
                                        </View>

                                        <View style={style.categoryRightContainer}>
                                            <View style={style.arrowContainer}>
                                                {arrowIcon}
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>

                            <View style={style.categoryContainer}>
                                <TouchableOpacity onPress={()=>this.onClickAlert()}>
                                    <View style={style.categorySubContainer}>
                                        <View style={style.categoryLeftContainer}>
                                            <Text style={style.categoryText} numberOfLines={1} ellipsizeMode="tail">
                                                Need Help?
                                            </Text>
                                        </View>

                                        <View style={style.categoryRightContainer}>
                                            <View style={style.arrowContainer}>
                                                {arrowIcon}
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>

                        </View>

                        <View style={style.bodyBottomContainer}>
                            <View style={style.bodyBottomLeftContainer}>
                                <View style={style.bodyBottomLeftTextContainer}>

                                    <Text style={style.bodyBottomLeftText} numberOfLines={1} ellipsizeMode="tail">
                                        Join The Conversation
                                    </Text>

                                </View>
                            </View>

                            <View style={style.bodyBottomRightContainer}>

                                
                                <View style={style.socialImageContainer}>
                                    <View style={style.socialImageSubContainer}>
                                        <TouchableOpacity onPress={()=>this.onClickAlert()}>
                                            <Image
                                                source={FacebookImage}
                                                style={style.socialImage}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                
                                <View style={style.socialImageContainer}>
                                    <View style={style.socialImageSubContainer}>
                                        <TouchableOpacity onPress={()=>this.onClickAlert()}>
                                            <Image
                                                source={InstagramImage}
                                                style={style.socialImage}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                </View>

                                <View style={style.socialImageContainer}>
                                    <View style={style.socialImageSubContainer}>
                                        <TouchableOpacity onPress={()=>this.onClickAlert()}>
                                            <Image
                                                source={YoutubeImage}
                                                style={style.socialImage}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                </View>

                            </View>
                        </View>
                    </View>

                    <View style={style.footer}>
                        <View style={style.footerTopContainer}>

                        </View>

                        <View style={style.footerBottomContainer}>
                            <LogoutButton
                                text={'LOGOUT'}
                                customizeTextContainer={style.logoutButton}
                                customizeTextStyle={style.logoutButtonText}
                                // onClickHandle={()=>this.onClickLogin('Dashboard')}
                            />
                        </View>

                    </View>

                </View>
            </SafeAreaView>
                
            
        )
    }
}

export default Menu;