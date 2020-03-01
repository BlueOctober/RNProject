import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; //JH : added.
import { createStackNavigator } from '@react-navigation/stack'; //JH : added.
import Home from './containers/Home';

interface Props {};

const Stack = createStackNavigator();

const App = ({}:Props) => {
    return (        
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default App;