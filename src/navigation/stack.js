import React from "react";
import { Animated } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HeaderComponent from './header';
import HeaderComponent2 from './header2';
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import NewsDetails from '../screens/NewsDetails/NewsDetails';
import UserProfile from '../screens/UserProfile/UserProfile';
import NewsDetailScreen from '../screens/NewsDetailScreen/NewsDetailScreen';
import NewsSearchScreen from '../screens/NewsSearchScreen/NewsSearchScreen';

const forFade = ({ current, next }) => {
    const opacity = Animated.add(
        current.progress,
        next ? next.progress : 0
    ).interpolate({
        inputRange: [0, 1, 2],
        outputRange: [0, 1, 0],
    });

    return {
        leftButtonStyle: { opacity },
        rightButtonStyle: { opacity },
        titleStyle: { opacity },
        backgroundStyle: { opacity },
    };
};

const Stack = createStackNavigator();

function StackNavigatorCom(props) {
    return (
        <Stack.Navigator
            screenOptions={{
                header: ({ scene, previous, navigation }) => {
                    return (
                        <HeaderComponent navigation={navigation} previous={previous} />
                    );
                },
            }}
        >
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerStyleInterpolator: forFade }}
            />
            <Stack.Screen
                name="NewsDetails"
                component={NewsDetails}
                options={{ headerStyleInterpolator: forFade }}
            />
            <Stack.Screen
                name='UserProfile'
                component={UserProfile}
                options={{ headerStyleInterpolator: false }}
            />
            <Stack.Screen
                name='NewsDetailScreen'
                component={NewsDetailScreen}
                options={{ headerStyleInterpolator: false }}
            />
            <Stack.Screen
                name="NewsSearchScreen"
                component={NewsSearchScreen}
                //options={{ headerStyleInterpolator: forFade }}
                options={{
                    headerStyleInterpolator: forFade,
                    header: ({ scene, previous, navigation }) => {
                        return (
                            <HeaderComponent2 navigation={navigation} previous={previous} />
                        );
                    },

                }}
            />
        </Stack.Navigator>
    );
}
export function StackNavigator() {
    return (
        <StackNavigatorCom />
    );
}
