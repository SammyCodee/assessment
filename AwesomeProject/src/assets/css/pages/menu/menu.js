import { StyleSheet, Platform } from 'react-native';
import FontStyle from '../../../../utilities/fonts/general';
import colors from '../../../colors/pages/menu/menu';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const menu = StyleSheet.create({
    safeArea:{
        flex:1
    },
    container:{
        height:'100%',
        width:'100%',
        backgroundColor:colors.container
    },
    header:{
        height:'10%',
        width:'100%',
        padding:'4%',
        flexDirection:'row',
        borderBottomWidth:hp(0.1),
        borderBottomColor:colors.borderBottom
    },
    headerLeft:{
        flex:1,
    },
    headerLogo:{
        flex:5,
        justifyContent:'center',
        alignItems:'center',
    },
    logoContainer:{
        height:'100%',
        width:'40%'
    },
    logo:{
        height:'100%',
        width:'100%',
        resizeMode:'contain'
    },
    headerRight:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    closeContainer:{
        height:'60%',
        width:'60%',
        justifyContent:'center',
        alignItems:'center',
    },
    body:{
        height:'70%',
        width:'100%',
        padding:'4%',
    },
    bodyTopContainer:{
        height:'85%',
        width:'100%',
    },
    categoryContainer:{
        height:'10%',
        width:'100%',
    },
    categorySubContainer:{
        height:'100%',
        width:'100%',
        flexDirection:'row',
    },
    categoryLeftContainer:{
        flex:6,
        justifyContent:'center',
    },
    categoryText:{
        fontFamily:FontStyle.bold,
        fontSize:hp(2),
        color:colors.categoryText
    },
    categoryRightContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    arrowContainer:{
        height:'40%',
        width:'40%',
        justifyContent:'center',
        alignItems:'center',
    },
    bodyBottomContainer:{
        height:'15%',
        width:'100%',
        borderTopColor:colors.borderBodyBottomContainer,
        borderBottomColor:colors.borderBodyBottomContainer,
        borderTopWidth:hp(0.1),
        borderBottomWidth:hp(0.1),
        flexDirection:'row',
    },
    bodyBottomLeftContainer:{
        height:'100%',
        width:'65%',
    },
    bodyBottomLeftTextContainer:{
        height:'100%',
        width:'100%',
        paddingHorizontal:'4%',
        justifyContent:'center'
    },
    bodyBottomLeftText:{
        fontFamily:FontStyle.bold,
        fontSize:hp(2),
        color:colors.bodyBottomLeftText
    },
    bodyBottomRightContainer:{
        height:'100%',
        width:'35%',
        flexDirection:'row'
    },
    socialImageContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    socialImageSubContainer:{
        height:'50%',
        width:'60%',
    },
    socialImage:{
        height:'100%',
        width:'100%',
        resizeMode:'contain'
    },
    footer:{
        height:'20%',
        width:'100%',
        padding:'4%',
    },
    footerTopContainer:{
        height:'50%',
        width:'100%',
    },
    footerBottomContainer:{
        height:'50%',
        width:'100%',
    },
    logoutButton:{
        height:'100%',
        width:'100%',
        backgroundColor: colors.logoutButton,
        borderRadius:hp(0.5),
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:'4%'
    },
    logoutButtonText:{
        color:colors.logoutButtonText,
        fontSize:hp(1.5)
    },
})

export default menu;