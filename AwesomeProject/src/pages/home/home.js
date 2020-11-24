import React, { Component } from "react";
import { View, Text, Image, Alert, TouchableOpacity, FlatList, Linking } from "react-native";
import style from '../../assets/css/pages/home/home';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import test_api from '../../api/test_api';

import hamburgerImage from '../../assets/images/pages/home/menu.png';
import logo from '../../assets/images/pages/home/logo-header.png';
import notification from '../../assets/images/pages/home/notification.png';
import MissionImage from '../../assets/images/pages/home/mission.png';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import ShopCard from '../../components/card/shop';
import LongCard from '../../components/card/long';

class Home extends Component{
    constructor(props){
        super(props);

        const dataList2 = [
            {
                img: MissionImage,
                title: 'Keep Up With Your Weekly Mission',
                detail: 'Check out the progress of your mission.',
                buttonText:'View Progress'
            },
            {
                img: MissionImage,
                title: 'Keep Up With Your Weekly Mission',
                detail: 'Check out the progress of your mission.',
                buttonText:'View Progress'
            }
        ]

        this.state = {
            dataList1: [],
            dataList2: dataList2
        };
    }

    onClickHandleCardAction = (url) => {
        Linking.openURL(url)
        .catch(err => console.error("Couldn't load page", err));
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

    renderSection1Card = (data) => {
    
        return(
            <View style={style.section1CardContainer}>
                <ShopCard data={data} handleOnPress={this.onClickHandleCardAction}/>
            </View>
        )
    }
        
    renderSection2Card = (data) => {
        return(
            <View style={style.section2CardContainer}>
                <LongCard data={data} handleOnPress={this.onClickHandle}/>
            </View>
        )
    }

    onClickNavigate = (route) => {
        const { navigation } = this.props;
        navigation.navigate(route);

    }

    renderTheCard = async() => {

        let res;
        try{
            
            res = await test_api.getAPI();

            const {data} = res;
            const {highlights} = data;

            this.setState({
                dataList1: highlights
            });
        } catch(err){

            console.log(err);

        }
        
    }

    componentDidMount = () => {
        this.renderTheCard();
    }

    render(){
        
        const {dataList1, dataList2} = this.state;

        const dummyIcon = <FontAwesomeIcon icon={ faCoffee } color={'#D31145'} size={hp(3)}/>

        return(
            
                <View style={style.container}>

                    <View style={style.header}>
                        <View style={style.headerTopContainer}>

                            <View style={style.headerTopSubTopContainer}>
                            
                                <View style={style.headerTopLeftImageContainer}>
                                    
                                    <View style={style.menuImageContainer}>
                                        <TouchableOpacity onPress={()=>this.onClickNavigate('Menu')}>
                                            <Image
                                                style={style.headerImage}
                                                source={hamburgerImage}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                    
                                </View>

                                <View style={style.headerTopMiddleImageContainer}>
                                    <View style={style.logoImageContainer}>
                                        <Image
                                            style={style.headerImage}
                                            source={logo}
                                        />
                                    </View>
                                </View>

                                <View style={style.headerTopRightImageContainer}>
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

                            <View style={style.headerTopSubBottomContainer}>
                                <View style={style.headerTextContainer}>
                                    <Text style={style.headerLeftText}>
                                        Welcome Back,
                                    </Text>

                                    <Text style={style.headerRightText}>
                                        Bruce Wayne
                                    </Text>
                                </View>
                            </View>
                        </View>

                        <View style={style.headerBottomContainer}>
                            <View style={style.linkContainer}>
                                <View style={style.linkItemContainer}>
                                    
                                    <View style={style.linkItemSubContainer}>
                                        <TouchableOpacity onPress={()=>this.onClickHandle()}>
                                            <View style={style.linkItemImageContainer}>
                                                {dummyIcon}
                                            </View>

                                            <View style={style.linkItemTextContainer}>
                                                <Text style={style.linkText} numberOfLines={1} ellipsizeMode="tail">
                                                    Link 1
                                                </Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>

                                </View>

                                <View style={style.linkItemContainer}>

                                    <View style={style.linkItemSubContainer}>
                                        <TouchableOpacity onPress={()=>this.onClickHandle()}>
                                            <View style={style.linkItemImageContainer}>
                                                {dummyIcon}
                                            </View>

                                            <View style={style.linkItemTextContainer}>
                                                <Text style={style.linkText} numberOfLines={1} ellipsizeMode="tail">
                                                    Link 2
                                                </Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>

                                </View>

                                <View style={style.linkItemContainer}>

                                    <View style={style.linkItemSubContainer}>
                                        <TouchableOpacity onPress={()=>this.onClickHandle()}>
                                            <View style={style.linkItemImageContainer}>
                                                {dummyIcon}
                                            </View>

                                            <View style={style.linkItemTextContainer}>
                                                <Text style={style.linkText} numberOfLines={1} ellipsizeMode="tail">
                                                    Link 3
                                                </Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>

                                </View>

                                <View style={style.linkItemContainer}>

                                    <View style={style.linkItemSubContainer}>
                                        <TouchableOpacity onPress={()=>this.onClickHandle()}>
                                            <View style={style.linkItemImageContainer}>
                                                {dummyIcon}
                                            </View>

                                            <View style={style.linkItemTextContainer}>
                                                <Text style={style.linkText} numberOfLines={1} ellipsizeMode="tail">
                                                    Link 4
                                                </Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>

                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={style.body}>
                        <View style={style.bodySection1}>

                            <View style={style.bodySection1TextContainer}>
                                <Text style={style.bodySection1Text} numberOfLines={1} ellipsizeMode="tail">
                                    Lorem Ipsum
                                </Text>
                            </View>

                            <View style={style.bodySection1CardContainer}>
                                <View style={style.bodySection1CardSubContainer}>
                                    <FlatList
                                        data={dataList1}
                                        horizontal={true}
                                        renderItem={this.renderSection1Card}
                                        keyExtractor={(item, index) => index.toString()}
                                    />
                                </View>
                            </View>

                        </View>

                        <View style={style.bodySection2}>

                            <View style={style.bodySection2TextContainer}>
                                <Text style={style.bodySection2Text} numberOfLines={1} ellipsizeMode="tail">
                                    Lorem Ipsum
                                </Text>
                            </View>

                            <View style={style.bodySection2CardContainer}>
                                <View style={style.bodySection2CardSubContainer}>
                                    <FlatList
                                        data={dataList2}
                                        horizontal={true}
                                        renderItem={this.renderSection2Card}
                                        keyExtractor={(item, index) => index.toString()}
                                    />
                                </View>
                            </View>

                        </View>
                    </View>

                </View>
            
        )
    }
}

export default function(props){
    const navigation = useNavigation();

    return <Home {...props} navigation={navigation} />;
};