import React from "react";
import propTypes from 'prop-types';
import { DrawerItem } from "@react-navigation/drawer";
import { Avatar, useTheme } from 'react-native-paper';

export const DrawerItems = ({ label, labelStyle, onPress, icon, style, activeTintColor, activeBackgroundColor, inactiveTintColor, inactiveBackgroundColor, ...rest }) => (
    <DrawerItem
        label={label}
        labelStyle={labelStyle}
        onPress={onPress}
        style={style}
        icon={icon}
        activeTintColor='#2196f3'
        activeBackgroundColor='rgba(0, 0, 0, .04)'
        inactiveTintColor='rgba(0, 0, 0, .87)'
        inactiveBackgroundColor='transparent'
    />
);
DrawerItems.propTypes = {
    label: propTypes.string,
    labelStyle: propTypes.object,
    label: propTypes.string,
    onPress: propTypes.func,
    style: propTypes.object,
    icon: propTypes.func,
    activeTintColor: propTypes.string,
    activeBackgroundColor: propTypes.string,
    inactiveTintColor: propTypes.string,
    inactiveBackgroundColor: propTypes.string,
}

export const AvatarIcons = ({ name, size, style, ...rest }) => {
    return (
        <Avatar.Icon size={size} icon={name} style={style} color='red' />
    )
};
AvatarIcons.propTypes = {
    name: propTypes.string.isRequired,
    size: propTypes.number.isRequired,
    style: propTypes.object
}

export const AvatarIconsSecondary = ({ name, size, style, ...rest }) => {
    return (
        <Avatar.Icon size={size} icon={name} style={style} />
    )
};
AvatarIconsSecondary.propTypes = {
    name: propTypes.string.isRequired,
    size: propTypes.number.isRequired,
    style: propTypes.object

}