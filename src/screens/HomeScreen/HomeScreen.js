import React from "react";
import HomePageTopNavigation from '../../navigation/HomePageTopNavigation';
import { SafeAreaView, StatusBar } from 'react-native';


export default function HomeScreen() {
    return (
        <SafeAreaView style={{ flex: 1, flexDirection: 'column' }}>
            <StatusBar barStyle="dark-content" backgroundColor="red" />
            <HomePageTopNavigation />
        </SafeAreaView>

    )
}

