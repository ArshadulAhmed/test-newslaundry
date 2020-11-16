import React from "react";
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { Text, IconButton } from 'react-native-paper';


function HeaderComponent(props) {

    return (

        <View style={{ ...styles.topMenuBar, }} elevation={5}>
            <View style={[styles.topMenuBarInner, styles.topMenuBarInnerLeft]}>
                <View style={styles.topMenuLeftNav}>
                    {
                        props.previous ?
                            <IconButton
                                icon="arrow-left"
                                size={25}
                                onPress={props.navigation.goBack}
                            />
                            :
                            <IconButton
                                icon="menu"
                                size={25}
                                onPress={() => props.navigation.openDrawer()}
                            />
                    }
                </View>
                <Text style={styles.logoText}>NewsLaundry</Text>
            </View>

            <View style={[styles.topMenuBarInner, styles.topMenuBarInnerRight]}>
                <IconButton
                    size={22}
                    icon="magnify"
                    onPress={() => props.navigation.navigate('NewsSearchScreen')}
                />
            </View>
        </View>


    );
}

export default HeaderComponent;

const styles = StyleSheet.create({
    topMenuBar: {
        flexDirection: 'row',
        paddingTop: 0,
        justifyContent: 'space-around',
        backgroundColor: 'red',
    },
    topMenuBarInner: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    topMenuBarInnerLeft: {
        justifyContent: 'flex-start'
    },
    topMenuBarInnerRight: {
        justifyContent: 'flex-end',
        paddingRight: 18
    },
    logoText: {
        fontFamily: 'montserrat-semiBold',
        fontSize: 18,
        letterSpacing: 1,
        color: '#fff',
        paddingLeft: 15
    },
    iconMainMenu: {
        color: '#fff'
    },
});