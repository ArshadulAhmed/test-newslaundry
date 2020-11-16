import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

class StatusBarBackground extends Component {
    render() {
        return (
            <View style={[styles.statusBarBackground, this.props.style || {}]}>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    statusBarBackground: {
        height: (Platform.OS === 'ios') ? 18 : 10,

    }

})

export default StatusBarBackground;