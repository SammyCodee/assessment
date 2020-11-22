import { StyleSheet } from 'react-native';
import FontStyle from '../../../../utilities/fonts/general';
import colors from '../../../colors/pages/dashboard/dashboard';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const login = StyleSheet.create({
    container:{
        flex:1,
    },
    subContainer:{
        flex:1,
    },
    content:{
        height:'92%',
        width:'100%',
    },
    footer:{
        height:'8%',
        width:'100%',
        flexDirection:'row',
        backgroundColor:colors.footer
    },
    navigationIconContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    imageContainer:{
        height:'50%',
        width:'50%',
    },
    tabImage:{
        height:'100%',
        width:'100%',
        resizeMode:'contain'
    }
})

export default login;