import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TopHeadlines from '../screens/HomeScreen/TopHeadlines';
import PoliticsWorld from '../screens/HomeScreen/PoliticsWorld';
import Entertainment from '../screens/HomeScreen/Entertainment';
import Sports from '../screens/HomeScreen/Sports';
import Finance from '../screens/HomeScreen/Finance';
import Sciencs from '../screens/HomeScreen/Sciencs';

import Health from '../screens/HomeScreen/Health';
import Technology from '../screens/HomeScreen/Technology';


const Tab = createMaterialTopTabNavigator();
// const yourTab = createMaterialTopTabNavigator({ 
//     screen_name_element: { screen: your_screen, },{ initialRouteName: "screen_name_element", 
//     tabBarPosition: 'top', animationEnabled: false, lazy: true, swipeEnabled: false, } })

function HomePageTopNavigation() {
    return (
        <Tab.Navigator
            initialRouteName='Technology'
            tabBarOptions={{
                labelStyle: { fontSize: 12 },
                style: { backgroundColor: 'powderblue' },
                scrollEnabled: true
            }}
        // tabBarPosition='top'
        // animationEnabled={false}
        // lazy={true}
        // swipeEnabled={false}

        >
            <Tab.Screen name="Technology" component={Technology} />
            <Tab.Screen name="Politics" component={PoliticsWorld} />

            <Tab.Screen name="Entertainment" component={Entertainment} />
            <Tab.Screen name="Sports" component={Sports} />

            <Tab.Screen name="Finance" component={Finance} />
            <Tab.Screen name="Sciencs" component={Sciencs} />

            <Tab.Screen name="Health" component={Health} />
        </Tab.Navigator>
    );
}
export default HomePageTopNavigation;