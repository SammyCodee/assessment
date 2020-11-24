import { StyleSheet, Platform } from 'react-native';
import FontStyle from '../../../../utilities/fonts/general';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import colors from '../../../colors/components/card/long';

const square = StyleSheet.create({
    container:{
        height:'100%',
        width:'100%',
        borderRadius:hp(1),
        padding:'4%',
        backgroundColor:colors.container,
        ...Platform.select({
            ios:{
                shadowOffset:{
                    width:0,
                    height:18
                },
                shadowOpacity:0.1,
            },
            android:{
                elevation: 2
            }
        })
    },
    titleTextContainer:{
        height:'20%',
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        
    },
    titleText:{
        textAlign:'center',
        fontFamily:FontStyle.bold,
        fontSize: hp(1.5),
        color: colors.titleText
    },
    detailTextContainer:{
        height:'15%',
        width:'100%',
        
    },
    detailText:{
        textAlign:'center',
        fontFamily:FontStyle.bold,
        fontSize: hp(1.2),
        color: colors.detailText
    },
    imageContainer:{
        height:'50%',
        width:'100%',
    },
    image:{
        height:'100%',
        width:'100%',
        resizeMode:'contain'
    },
    buttonContainer:{
        height:'15%',
        width:'100%',
    },
    buttonSubContainer:{
        height:'100%',
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    buttonText:{
        textAlign:'center',
        fontFamily:FontStyle.bold,
        fontSize: hp(1.5),
        color: colors.buttonText
    }
    
})

export default square;