import { StyleSheet, Platform } from 'react-native';
import FontStyle from '../../../../utilities/fonts/general';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import colors from '../../../colors/components/card/shop';

const square = StyleSheet.create({
    container:{
        height:'100%',
        width:'100%',
        borderRadius:hp(5),
        ...Platform.select({
            ios:{
                shadowOffset:{
                    width:0,
                    height:10
                },
                shadowOpacity:0.1,
            },
            android:{
                elevation: 2
            }
        })
    },
    imageContainer:{
        height:'80%',
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'orange'
    },
    textContainer:{
        height:'20%',
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:colors.textContainer
    },
    text:{
        fontFamily:FontStyle.bold,
        fontSize:hp(1.5),
        color:colors.text,
        paddingHorizontal:'2%'
    }
})

export default square;