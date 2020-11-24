import React, { Component } from "react";
import { KeyboardAvoidingView, Platform, View, Text, SafeAreaView, Image, TextInput, TouchableOpacity, Linking } from "react-native";
import style from '../../assets/css/pages/login/login';

import logo from '../../assets/images/pages/login/logo-header.png';
import PanelLocator from '../../assets/images/pages/login/panelLocator.png';

import LoginButton from '../../components/button/square';

import test_api from '../../api/test_api';

class Login extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            userID:'',
            password:''
        };
        
    }

    componentDidMount = () => {
    
    }

    onClickLogin = async () => {

        let res;

        try{
            let userID = this.state.userID;
            let password = this.state.password;

            res = await test_api.login(userID, password);

            const {navigation} = this.props;
            navigation.navigate('Dashboard');

        }catch(err){

            console.log(err);

        }
        
    }

    onClickSignUp = () => {
        const url = 'https://stub.od-tech.my/';
        Linking.openURL(url)
        .catch(err => console.error("Couldn't load page", err));
    }

    render(){

        const {userID, password} = this.state;

        return(
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
                style={style.keyboardAvoidingView}
                keyboardVerticalOffset={-550}
            >
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
                                        onClickHandle={()=>this.onClickLogin()}
                                    />
                                </View>
                                
                            </View>

                            <View style={style.signUpContainer}>
                                
                                <View style={style.signUpSubContainer}>
                                    <Text style={style.signUpLeftText}>
                                        New User? 
                                    </Text>
                                    
                                    <TouchableOpacity onPress={()=>this.onClickSignUp()}>
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

            </KeyboardAvoidingView>
            
        )
    }
}

export default Login;