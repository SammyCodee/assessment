import { StyleSheet, Platform } from 'react-native';
import FontStyle from '../../../../utilities/fonts/general';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import colors from '../../../colors/components/card/shop';

const square = StyleSheet.create({
    container:{
        height:'100%',
        width:'100%',
        borderRadius:hp(1),
        backgroundColor:colors.container,
        ...Platform.select({
            ios:{
                shadowOffset:{
                    width:0,
                    height:10
                },
                shadowOpacity:0.1,
            },
            android:{
                elevation: 8
            }
        })
    },
    imageContainer:{
        height:'80%',
        width:'100%',
    },
    imageBackground:{
        height:'100%',
        width:'100%',
    },
    imageStyle:{
        borderTopLeftRadius:hp(1),
        borderTopRightRadius:hp(1),
        resizeMode:'contain'
    },
    imageContentContainer:{
        height:'100%',
        width:'100%',
        padding:'2%'
    },
    imageTitleContainer:{
        height:'50%',
        width:'100%',
        justifyContent:'center',
    },
    imageTitleText:{
        fontFamily:FontStyle.bold,
        fontSize:hp(1.5),
        color:colors.titleText,
    },
    imageDetailContainer:{
        height:'50%',
        width:'100%',
        borderWidth:1
    },
    imageDetailText:{
        fontFamily:FontStyle.bold,
        fontSize:hp(1.2),
        color:colors.imageDetailText,
    },
    textContainer:{
        height:'20%',
        width:'100%',
        borderBottomLeftRadius:hp(1),
        borderBottomRightRadius:hp(1),
    },
    textSubContainer:{
        height:'100%',
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        fontFamily:FontStyle.bold,
        fontSize:hp(1.5),
        color:colors.text,
        paddingHorizontal:'1%'
    }
})

export default square;