import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {View, Text} from 'react-native';
import MainScreen from './src/navigations/index';
import FontStyle from './src/utilities/fonts/general';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

Text.defaultProps = Text.defaultProps || {};

Text.defaultProps.style = { 
  fontFamily: FontStyle.regular, 
  fontSize: hp(2),
  color:'white'
}

class App extends Component{

  render(){
    return(
      <NavigationContainer>
        <MainScreen />
      </NavigationContainer>
    )
  }
}

export default App;
