// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../pages/login/login';

const Stack = createStackNavigator();

function Index() {
    return (
        
        <Stack.Navigator>
            <Stack.Screen 
                name="Login" 
                component={LoginScreen}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
        
    );
}

export default Index;