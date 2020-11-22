import { StyleSheet, Platform } from 'react-native';
import FontStyle from '../../../../utilities/fonts/general';
import colors from '../../../colors/pages/home/home';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const login = StyleSheet.create({
    container:{
        height:'100%',
        width:'100%'
    },
    header:{
        height:'30%',
        width:'100%',
    },
    headerTopContainer:{
        height:'60%',
        width:'120%',
        alignSelf:'center',
        borderBottomLeftRadius:hp(20),
        borderBottomRightRadius:hp(20),
        backgroundColor: colors.headerTop,
        paddingHorizontal:'10%',
    },
    headerTopSubTopContainer:{
        height:'40%',
        width:'100%',
        flexDirection:'row',
    },
    headerTopLeftImageContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    menuImageContainer:{
        height:'50%',
        width:'50%',
    },
    headerImage:{
        height:'100%',
        width:'100%',
        resizeMode:'contain'
    },
    headerTopMiddleImageContainer:{
        flex:5,
        justifyContent:'center',
        alignItems:'center',
    },
    logoImageContainer:{
        height:'100%',
        width:'70%',
    },
    headerTopRightImageContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    notificationImageContainer:{
        height:'50%',
        width:'50%',
    },
    headerTopSubBottomContainer:{
        height:'60%',
        width:'100%',
    },
    headerTextContainer:{
        height:'100%',
        width:'100%',
        paddingTop:'2%',
        flexDirection:'row',
        justifyContent:'center',
    },
    headerLeftText:{
        fontFamily: FontStyle.regular,
        fontSize:hp(2),
        color:colors.headerLeftText,
        paddingRight:'1%'
    },
    headerRightText:{
        fontFamily: FontStyle.bold,
        fontSize:hp(2),
        color:colors.headerRightText
    },
    headerBottomContainer:{
        height:'40%',
        width:'100%',
        bottom:'15%',
        paddingHorizontal:'4%',
    },
    linkContainer:{
        height:'100%',
        width:'100%',
        flexDirection:'row',
        borderRadius:hp(2),
        backgroundColor:colors.linkContainer,

        ...Platform.select({
            ios:{
                shadowOffset:{
                    width:0,
                    height:8
                },
                shadowOpacity:0.1,
            },
            android:{
                elevation: 2
            }
        })
    },
    linkItemContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    linkItemSubContainer:{
        height:'70%',
        width:'70%',
    },
    linkItemImageContainer:{
        height:'70%',
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
    },
    linkItemTextContainer:{
        height:'30%',
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
    },
    linkText:{
        fontFamily:FontStyle.bold,
        fontSize:hp(1.5),
        color:colors.linkText
    },
    body:{
        height:'70%',
        width:'100%',
        paddingLeft:'4%',
        borderWidth:1
    },
    bodySection1:{
        height:'45%',
        width:'100%',
        paddingBottom:'5%',
    },
    bodySection1TextContainer:{
        height:'12%',
        width:'100%',
    },
    bodySection1Text:{
        fontFamily:FontStyle.bold,
        fontSize:hp(2),
        color:colors.bodySection1Text
    },
    bodySection1CardContainer:{
        height:'88%',
        width:'100%',
        borderColor:'blue',
        borderWidth:1
    },
    section1CardContainer:{
        height:'80%',
        width:'100%',
        paddingRight:'5%'
    },
    bodySection2:{
        height:'55%',
        width:'100%',
        // borderWidth:1,
        // borderColor:'blue'
    }
})

export default login;