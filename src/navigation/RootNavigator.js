import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from './drawerContent';
import { StackNavigator } from './stack';


const Drawer = createDrawerNavigator();

function RootNavigator() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerType='front'

                drawerStyle={{
                    width: Dimensions.get('window').width - 50,
                    flex: 1,
                }}
                drawerContent={props => <DrawerContent {...props} />

                }>
                <Drawer.Screen name="MainDrawer" component={StackNavigator} />
            </Drawer.Navigator>
        </NavigationContainer>

    );
};

export default RootNavigator;

