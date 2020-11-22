import React, { Component } from "react";
import { View, Text, Image, Alert, TouchableOpacity, FlatList } from "react-native";
import style from '../../assets/css/pages/home/home';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import hamburgerImage from '../../assets/images/pages/home/menu.png';
import logo from '../../assets/images/pages/home/logo-header.png';
import notification from '../../assets/images/pages/home/notification.png';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import ShopCard from '../../components/card/shop';

class Home extends Component{
    constructor(props){
        super(props);

        let dataList1 = [
            {
                contentText:'dummy 1',
                text:'Card 1'
            },
            {
                contentText:'dummy 1 dummy 2',
                text:'Card 2'
            },
            {
                text:'Card 3'
            },
            {
                text:'Card 4'
            },
            {
                text:'Card 5'
            }
        ]

        this.state = {
            dataList1: dataList1
        };
    }

    renderSection1Card = (data) => {
    
        return(
            <View style={style.section1CardContainer}>
                <ShopCard data={data}/>
            </View>
        )
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

    render(){
        
        const {dataList1} = this.state;

        const dummyIcon = <FontAwesomeIcon icon={ faCoffee } color={'#D31145'} size={hp(3)}/>

        return(
            
                <View style={style.container}>

                    <View style={style.header}>
                        <View style={style.headerTopContainer}>

                            <View style={style.headerTopSubTopContainer}>
                            
                                <View style={style.headerTopLeftImageContainer}>
                                    
                                    <View style={style.menuImageContainer}>
                                        <TouchableOpacity>
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
                                <View style={{flex:1}}>
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

                        </View>
                    </View>

                </View>
            
        )
    }
}

export default Home;