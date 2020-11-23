// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../pages/login/login';
import DashboardScreen from '../pages/dashboard/dashboard';
import HomeScreen from '../pages/home/home';
import MenuScreen from '../pages/menu/menu';

const Stack = createStackNavigator();

function Index() {
    return (
        
        <Stack.Navigator>
            <Stack.Screen 
                name="Login" 
                component={LoginScreen}
                options={{headerShown: false}}
            />

            <Stack.Screen 
                name="Dashboard" 
                component={DashboardScreen}
                options={{headerShown: false}}
            />
            
            <Stack.Screen 
                name="Home" 
                component={HomeScreen}
                options={{headerShown: false}}
            />

            <Stack.Screen 
                name="Menu" 
                component={MenuScreen}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
        
    );
}

export default Index;