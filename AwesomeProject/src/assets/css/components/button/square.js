import { StyleSheet } from 'react-native';
import FontStyle from '../../../../utilities/fonts/general';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const square = StyleSheet.create({
    container:{
        height:'100%',
        width:'100%',
        borderRadius:hp(2)
    },
    button:{
        height:'100%',
        width:'100%',
    },
    textContainer:{
        height:'100%',
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:'4%'
    },
    text:{
        fontSize:16,
        color:'white',
        fontFamily:FontStyle.bold,
    }
    
})

export default square;