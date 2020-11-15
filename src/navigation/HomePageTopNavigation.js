import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PoliticsIndia from '../screens/HomeScreen/PoliticsIndia';
import PoliticsWorld from '../screens/HomeScreen/PoliticsWorld';
import Entertainment from '../screens/HomeScreen/Entertainment';
import Sports from '../screens/HomeScreen/Sports';
import Finance from '../screens/HomeScreen/Finance';
import Trending from '../screens/HomeScreen/Trending';

import LifeStyle from '../screens/HomeScreen/LifeStyle';
import Technology from '../screens/HomeScreen/Technology';


const Tab = createMaterialTopTabNavigator();
// const yourTab = createMaterialTopTabNavigator({ 
//     screen_name_element: { screen: your_screen, },{ initialRouteName: "screen_name_element", 
//     tabBarPosition: 'top', animationEnabled: false, lazy: true, swipeEnabled: false, } })

function HomePageTopNavigation() {
    return (
        <Tab.Navigator
            initialRouteName='PoliticsIndia'
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
            <Tab.Screen name="Indian Politics" component={PoliticsIndia} />
            <Tab.Screen name="World Politics" component={PoliticsWorld} />

            <Tab.Screen name="Entertainment" component={Entertainment} />
            <Tab.Screen name="Sports" component={Sports} />

            <Tab.Screen name="Finance" component={Finance} />
            <Tab.Screen name="Trending" component={Trending} />

            <Tab.Screen name="LifeStyle" component={LifeStyle} />
            <Tab.Screen name="Technology" component={Technology} />
        </Tab.Navigator>
    );
}
export default HomePageTopNavigation;