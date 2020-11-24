import React, { Component } from "react";
import { SafeAreaView,View, Text, Image, Alert, TouchableOpacity } from "react-native";
import style from '../../assets/css/pages/profile/profile';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import axios from 'axios';

import notification from '../../assets/images/pages/profile/notification.png';
import userImage from '../../assets/images/pages/profile/user.png';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import LogoutButton from '../../components/button/square';

class Profile extends Component{
    constructor(props){
        super(props);

        this.state = {
            data:{}
        };
    }

    onClickGoBack = () => {
        const {navigation} = this.props;
        navigation.goBack();
    }

    onClickHandle = () => {
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

    renderProfileData = async() => {
        let res;

        try{

            res = await axios.get(`https://stub.od-tech.my/tech-assess/profile`);
            const {data} = res;
            this.setState({
                data:data
            });
        } catch(err){

            console.log(err);

        }
    }

    componentDidMount = () => {
        this.renderProfileData();
    }

    render(){

        const arrowIcon = <FontAwesomeIcon icon={ faArrowLeft } color={'white'} size={hp(2)}/>

        const {data} = this.state;

        let contactNumber = data.mobileNo;
        let email = data.email;
        let userName = data.name;

        return(
            <SafeAreaView style={style.safeArea}>
                <View style={style.container}>

                    <View style={style.header}>
                        <View style={style.headerTopContainer}>
                            <View style={style.headerTopSubTopContainer}>

                                <View style={style.headerTopLeftContainer}>
                                    <TouchableOpacity onPress={()=>this.onClickGoBack()}>
                                        <View style={style.arrowContainer}>
                                            {arrowIcon}
                                        </View>
                                    </TouchableOpacity>
                                    
                                </View>

                                <View style={style.headerTopMiddleContainer}>
                                    <View style={style.headerTitleTextContainer}>
                                        <Text style={style.headerTitleText} numberOfLines={1} ellipsizeMode="tail">
                                            My Profile
                                        </Text>
                                    </View>
                                </View>

                                <View style={style.headerTopRightContainer}>
                                    <View style={style.notificationImageContainer}>
                                        <TouchableOpacity onPress={()=>this.onClickHandle()}>
                                            <Image
                                                style={style.headerImage}
                                                source={notification}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                </View>

                            </View>

                            <View  style={style.headerTopSubBottomContainer}/>
                        </View>

                        <View style={style.headerBottomContainer}>
                            <View style={style.headerRoundImageContainer}>
                                <View style={style.roundImageContainer}>
                                    <Image
                                        source={userImage}
                                        style={style.roundImage}
                                    />
                                </View>
                            </View>

                            <View style={style.userNameContainer}>
                                <Text style={style.userNameText} numberOfLines={1} ellipsizeMode="tail">
                                    {userName}
                                </Text>
                            </View>
                        </View>
                    </View>

                    <View style={style.body}>
                        <View style={style.bodyContentContainer}>

                            <View style={style.detailInfoContainer}>
                                <View style={style.detailInfoSubContainer}>

                                    <View style={style.categoryTextContainer}>
                                        <Text style={style.categoryText} numberOfLines={1} ellipsizeMode="tail">
                                            Contact Number
                                        </Text>
                                    </View>

                                    <View style={style.categoryDetailTextContainer}>
                                        <Text style={style.categoryDetailText} numberOfLines={1} ellipsizeMode="tail">
                                            {contactNumber}
                                        </Text>
                                    </View>

                                </View>
                            </View>

                            <View style={style.detailInfoContainer}>
                                <View style={style.detailInfoSubContainer}>

                                    <View style={style.categoryTextContainer}>
                                        <Text style={style.categoryText} numberOfLines={1} ellipsizeMode="tail">
                                            Email Address
                                        </Text>
                                    </View>

                                    <View style={style.categoryDetailTextContainer}>
                                        <Text style={style.categoryDetailText} numberOfLines={1} ellipsizeMode="tail">
                                            {email}
                                        </Text>
                                    </View>

                                </View>
                            </View>

                            <View style={style.detailInfoContainer}>
                                <View style={style.detailInfoSubContainer}>

                                    <View style={style.categoryTextContainer}>
                                        <Text style={style.categoryText} numberOfLines={1} ellipsizeMode="tail">
                                            Username
                                        </Text>
                                    </View>

                                    <View style={style.categoryDetailTextContainer}>
                                        <Text style={style.categoryDetailText} numberOfLines={1} ellipsizeMode="tail">
                                            {userName}
                                        </Text>
                                    </View>

                                </View>
                            </View>

                            <View style={style.detailInfoContainer}>
                                <View style={style.detailInfoSubContainer}>

                                    <View style={style.categoryTextContainer}>
                                        <Text style={style.categoryText} numberOfLines={1} ellipsizeMode="tail">
                                            Password
                                        </Text>
                                    </View>

                                    <View style={style.categoryDetailTextContainer}>
                                        <Text style={style.categoryDetailText} numberOfLines={1} ellipsizeMode="tail">
                                            ***********
                                        </Text>
                                    </View>

                                </View>
                            </View>

                        </View>
                    </View>
                    
                </View>
            </SafeAreaView>
                
            
        )
    }
}

export default Profile;