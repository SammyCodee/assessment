import { StyleSheet } from 'react-native';
import FontStyle from '../../../../utilities/fonts/general';
import colors from '../../../colors/pages/login/login';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import resFont from '../../../../utilities/fonts/responsive';

const login = StyleSheet.create({
    container:{
        flex:1,
    },
    subContainer:{
        flex:1,
    },
    header:{
        height:'15%',
        width:'100%',
        paddingVertical:'2%',
        paddingHorizontal:'4%',
        backgroundColor:colors.header
    },
    headerTopContainer:{
        height:'40%',
        width:'100%',
        flexDirection:'row',
    },
    headerTopLeftContainer:{
        flex:1,
        justifyContent:'center',
    },
    imageLeftContainer:{
        height:'90%',
        width:'100%',
    },
    imageRightContainer:{
        height:'50%',
        width:'100%',
    },
    image:{
        height:'100%',
        width:'100%',
        resizeMode:'contain'
    },
    headerTopMiddleContainer:{
        flex:5,
    },
    headerTopRightContainer:{
        flex:1,
        justifyContent:'center',
    },
    headerBottomContainer:{
        height:'60%',
        width:'100%',
        paddingTop:'2%',
    },
    titleTextContainer:{
        height:'100%',
        width:'100%',
    },
    titleText:{
        fontFamily: FontStyle.bold,
        fontSize:hp(2),
        color:'white'
    },
    body:{
        height:'75%',
        width:'100%',
        paddingTop:'10%',
        paddingHorizontal:'4%',
        backgroundColor:colors.body,
    },
    subBodyContainer:{
        height:'70%',
        width:'100%',
    },
    inputContainer:{
        height:'25%',
        width:'100%',
    },
    inputTextContainer:{
        height:'35%',
        width:'100%',
        justifyContent:'center',
    },
    inputText:{
        fontFamily: FontStyle.regular,
        fontSize: hp(2),
        color:'black'
    },
    inputSubContainer:{
        height:'65%',
        width:'100%',
        paddingBottom:'6%',
    },
    input:{
        flex:1,
        backgroundColor:colors.inputBackground,
        borderRadius:hp(1),
        borderColor:'grey',
        borderWidth:hp(0.1),
        paddingHorizontal:'2%'
    },
    forgetPasswordContainer:{
        height:'10%',
        width:'100%',
    },
    forgetPasswordTextContainer:{
        height:'100%',
        width:'100%'
    },
    forgetPasswordText:{
        fontFamily: FontStyle.regular,
        fontSize: hp(2),
        color:colors.forgetPasswordText,
        textDecorationLine: 'underline'
    },
    loginContainer:{
        height:'20%',
        width:'100%',
        paddingVertical:'3%',
    },
    loginSubContainer:{
        height:'100%',
        width:'100%',
    },
    loginButton:{
        height:'100%',
        width:'100%',
        backgroundColor: colors.loginButton,
        borderRadius:hp(0.5),
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:'4%'
    },
    loginButtonText:{
        color:colors.loginButtonText,
        fontSize:hp(2)
    },
    signUpContainer:{
        height:'20%',
        width:'100%',
    },
    signUpSubContainer:{
        height:'100%',
        width:'100%',
        justifyContent:'center',
        flexDirection:'row',
    },
    signUpLeftText:{
        color:colors.signUpLeftText,
        fontFamily: FontStyle.regular,
        fontSize:hp(1.5),
        paddingRight:'1%',
    },
    signUpRightText:{
        color:colors.signUpRightText,
        fontFamily: FontStyle.regular,
        fontSize:hp(1.5),
        textDecorationLine: 'underline'
    },
    footer:{
        height:'10%',
        width:'100%',
        backgroundColor:colors.footer
    },
    copyRightContainer:{
        height:'100%',
        width:'100%',
        alignItems:'center',
    },
    copyRightText:{
        color:colors.copyRightText,
        fontFamily: FontStyle.regular,
        fontSize:hp(1),
    }

})

export default login;