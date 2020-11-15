import React from 'react';
import { View } from 'react-native';
import { Text, IconButton } from 'react-native-paper';
import { DrawerItems, AvatarIcons, AvatarIconsSecondary } from '../components/common/DrawerReusableComponents';
import { drawerContentStyle } from '../assets/componentStyles/drawerContentStyle';

function ProfileSettingItems({ props }) {
    return (
        <View style={drawerContentStyle.drawerMenuContent}>
            <DrawerItems
                label='Your Profile'
                labelStyle={drawerContentStyle.labelStyle}
                onPress={() => props.navigate('UserProfile')}
                icon={() => { return <AvatarIcons size={30} name='settings' style={drawerContentStyle.avatarStyle} /> }}
                style={drawerContentStyle.drawerItems}

            />
        </View>
    )
}
export default ProfileSettingItems;