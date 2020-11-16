import React from 'react';
import { View } from 'react-native';
import { Text, IconButton } from 'react-native-paper';
import { DrawerItems, AvatarIcons, AvatarIconsSecondary } from '../components/common/DrawerReusableComponents';
import { drawerContentStyle } from '../assets/componentStyles/drawerContentStyle';

function MenuItems({ props }) {
    return (
        <View style={drawerContentStyle.drawerMenuContent}>
            <DrawerItems
                label='Home'
                labelStyle={drawerContentStyle.labelStyle}
                onPress={() => props.navigate('Home')}
                icon={() => { return <AvatarIcons size={30} name='home-outline' style={drawerContentStyle.avatarStyle} /> }}
                style={drawerContentStyle.drawerItems}

            />
            <DrawerItems
                label='Top Headlines'
                labelStyle={drawerContentStyle.labelStyle}
                onPress={() => props.navigate('Top Headlines')}
                icon={() => { return <AvatarIcons size={30} name='cart-outline' style={drawerContentStyle.avatarStyle} /> }}
                style={drawerContentStyle.drawerItems}
            />
            <DrawerItems
                label='Politics'
                labelStyle={drawerContentStyle.labelStyle}
                onPress={() => props.navigate('Politics')}
                icon={() => { return <AvatarIcons size={30} name='cart-outline' style={drawerContentStyle.avatarStyle} /> }}
                style={drawerContentStyle.drawerItems}
            />
            <DrawerItems
                label='Entertainment'
                labelStyle={drawerContentStyle.labelStyle}
                onPress={() => props.navigate('Entertainment')}
                icon={() => { return <AvatarIcons size={30} name='cart-outline' style={drawerContentStyle.avatarStyle} /> }}
                style={drawerContentStyle.drawerItems}
            />
            <DrawerItems
                label='Sports'
                labelStyle={drawerContentStyle.labelStyle}
                onPress={() => props.navigate('Sports')}
                icon={() => { return <AvatarIcons size={30} name='cart-outline' style={drawerContentStyle.avatarStyle} /> }}
                style={drawerContentStyle.drawerItems}
            />
            <DrawerItems
                label='Finance'
                labelStyle={drawerContentStyle.labelStyle}
                onPress={() => props.navigate('Finance')}
                icon={() => { return <AvatarIcons size={30} name='cart-outline' style={drawerContentStyle.avatarStyle} /> }}
                style={drawerContentStyle.drawerItems}
            />
            <DrawerItems
                label='Trending'
                labelStyle={drawerContentStyle.labelStyle}
                onPress={() => props.navigate('Trending')}
                icon={() => { return <AvatarIcons size={30} name='cart-outline' style={drawerContentStyle.avatarStyle} /> }}
                style={drawerContentStyle.drawerItems}
            />
            <DrawerItems
                label='LifeStyle'
                labelStyle={drawerContentStyle.labelStyle}
                onPress={() => props.navigate('LifeStyle')}
                icon={() => { return <AvatarIcons size={30} name='cart-outline' style={drawerContentStyle.avatarStyle} /> }}
                style={drawerContentStyle.drawerItems}
            />
            <DrawerItems
                label='Technology'
                labelStyle={drawerContentStyle.labelStyle}
                onPress={() => props.navigate('Technology')}
                icon={() => { return <AvatarIcons size={30} name='cart-outline' style={drawerContentStyle.avatarStyle} /> }}
                style={drawerContentStyle.drawerItems}
            />
        </View>
    )
}
export default MenuItems;