import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native'

function DefaultLoading() {
    return (
        <View style={styles.loader}>
            <ActivityIndicator size="large" color="red" />
        </View>
    )
}
export default DefaultLoading;

const styles = StyleSheet.create({
    loader: {
        flex: 1,
        justifyContent: 'center'
    }
})