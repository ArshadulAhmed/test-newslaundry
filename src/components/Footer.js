import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';

function Footer({ props }) {
    return (
        <View style={{ padding: 10, flex: 1, alignItems: 'center' }}>
            <Text style={{
                fontFamily: 'montserrat-semiBold',
                fontSize: 13,
            }}>{'\u00A9'} NewsLaundry</Text>
        </View>
    )
}
export default Footer;