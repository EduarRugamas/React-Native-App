import React, {Component} from 'react';
import 'react-native-gesture-handler';
import {homeScreen, MenuTabs} from './src/navigations/Navigations'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator();

class App extends Component{

        

    render(){

        return(

                <NavigationContainer>

                            <Stack.Navigator initialRouteName="Home" >

                                    <Stack.Screen  name="Home" component={homeScreen} />
                                    <Stack.Screen name="Menu de tabs" component={MenuTabs} />

                            </Stack.Navigator>

                </NavigationContainer>

        )

    }
}


export default App