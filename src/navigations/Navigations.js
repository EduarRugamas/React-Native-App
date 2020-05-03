import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from '../View/HomeScreen'
import MovieScreen from '../View/MoviesScreen'
import StoreScreen from '../View/StoreScreen'
import SitesScreen from '../View/SitesScreen'


const NavOptionHandler = () => ({
    headerShown: false
})

const TabNavigation = createBottomTabNavigator();
const StackNavigation = createStackNavigator();

function homeScreen() {

    <StackNavigation.Navigator initialRouteName="Home">

        <StackNavigation.Screen
            name="home"
            component={HomeScreen}
            options={NavOptionHandler}
        />

    </StackNavigation.Navigator>
    
}

function MenuTabs() {

    <TabNavigation.Navigator initialRouteName="Menu">

        <TabNavigation.Screen
        name="movie"
        componen={MovieScreen}
        options={NavOptionHandler}
        />
        <TabNavigation.Screen
            name="store"
            component={StoreScreen}
            options={NavOptionHandler}
        />
        <TabNavigation.Screen
            name="sites"
            component={SitesScreen}
            options={NavOptionHandler}
        />

    </TabNavigation.Navigator>
    
}

export {

    homeScreen,
    MenuTabs
};