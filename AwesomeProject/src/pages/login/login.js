import React, { Component } from "react";
import { View, Text, SafeAreaView, Image, TextInput, TouchableOpacity } from "react-native";
import style from '../../assets/css/pages/login/login';
import { NavigationContainer } from '@react-navigation/native';

import logo from '../../assets/images/pages/login/logo-header.png';
import PanelLocator from '../../assets/images/pages/login/panelLocator.png';

import LoginButton from '../../components/button/square';

class Login extends Component{
    constructor(props){
        super(props);

        this.state = {
            userID:'',
            password:''
        };
    }

    onClickLogin = (route) => {

        const {navigation} = this.props;

        navigation.navigate(route);
        
    }

    render(){

        const {userID, password} = this.state;

        return(
            <SafeAreaView style={style.container}>
                <View style={style.subContainer}>
                    <View style={style.header}>

                        <View style={style.headerTopContainer}>
                            <View style={style.headerTopLeftContainer}>
                                <View style={style.imageLeftContainer}>
                                    <Image
                                        source={logo}
                                        style={style.image}
                                    />
                                </View>
                            </View>

                            <View style={style.headerTopMiddleContainer}/>

                            <View style={style.headerTopRightContainer}>
                                <View style={style.imageRightContainer}>
                                    <Image
                                        source={PanelLocator}
                                        style={style.image}
                                    />
                                </View>
                            </View>
                        </View>

                        <View style={style.headerBottomContainer}>
                            <View style={style.titleTextContainer}>
                                <Text 
                                    style={style.titleText} 
                                    ellipsizeMode="tail"
                                    numberOfLines={2}
                                >
                                    Welcome to Assessment App
                                </Text>
                            </View>
                        </View>

                    </View>

                    <View style={style.body}>
                        <View style={style.subBodyContainer}>
                            
                            <View style={style.inputContainer}>
                                <View style={style.inputTextContainer}>
                                    <Text style={style.inputText}>
                                        User ID
                                    </Text>
                                </View>

                                <View style={style.inputSubContainer}> 
                                    <TextInput
                                        style={style.input}
                                        placeholder={'User ID'}
                                        value={userID}
                                        onChangeText={(text)=> {
                                            this.setState({
                                                userID: text
                                            })
                                        }}
                                    />
                                </View>
                            </View>

                            <View style={style.inputContainer}>
                                <View style={style.inputTextContainer}>
                                    <Text style={style.inputText}>
                                        Password
                                    </Text>
                                </View>

                                <View style={style.inputSubContainer}> 
                                    <TextInput
                                        style={style.input}
                                        placeholder={'Password'}
                                        value={password}
                                        onChangeText={(text)=> {
                                            this.setState({
                                                password: text
                                            })
                                        }}
                                        secureTextEntry={true}
                                    />
                                </View>
                            </View>

                            <View style={style.forgetPasswordContainer}>
                                <TouchableOpacity>
                                    <View style={style.forgetPasswordTextContainer}>
                                        <Text style={style.forgetPasswordText}>
                                            Forget Password
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                            <View style={style.loginContainer}>
                                
                                <View style={style.loginSubContainer}>
                                    <LoginButton
                                        text={'LOGIN'}
                                        customizeTextContainer={style.loginButton}
                                        customizeTextStyle={style.loginButtonText}
                                        onClickHandle={()=>this.onClickLogin('Dashboard')}
                                    />
                                </View>
                                
                            </View>

                            <View style={style.signUpContainer}>
                                
                                <View style={style.signUpSubContainer}>
                                    <Text style={style.signUpLeftText}>
                                        New User? 
                                    </Text>
                                    
                                    <TouchableOpacity>
                                        <Text style={style.signUpRightText}>
                                            Sign up here
                                        </Text>
                                    </TouchableOpacity>
                                </View>    
                                
                            </View>

                        </View>
                    </View> 

                    <View style={style.footer}>
                        <View style={style.copyRightContainer}>
                            <Text style={style.copyRightText}>
                                Copyright @ 2020 All rights reserved.
                            </Text>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
            
        )
    }
}

export default Login;