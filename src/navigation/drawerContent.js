import React from "react";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { View } from "react-native";
import Animated from 'react-native-reanimated';
import { Text, IconButton } from 'react-native-paper';
import { drawerContentStyle } from '../assets/componentStyles/drawerContentStyle';
import { DrawerItems, AvatarIcons, AvatarIconsSecondary } from '../components/common/DrawerReusableComponents';
import ProfileSettingItems from '../components/ProfileSettingItems';
import MenuItems from '../components/MenuItems';
import Footer from '../components/Footer';

function DrawerContent({ navigation, ...props }) {
    const [showProfile, setShowProfile] = React.useState(false);

    const handleProfileManage = () => {
        setShowProfile(!showProfile)
    }
    const translateX = Animated.interpolate(props.progress, {
        inputRange: [0, 0.5, 0.7, 0.8, 1],
        outputRange: [-100, -85, -70, -45, 0],
    });
    return (
        <DrawerContentScrollView {...props}>
            <Animated.View
                style={[
                    drawerContentStyle.drawerContent,
                    {
                        backgroundColor: 'pink',
                        transform: [{ translateX }],
                    },
                ]}
            >




                <View style={drawerContentStyle.drawerTopSection}>
                    <View style={{ ...drawerContentStyle.drawerHead }}>
                        <View>
                            <AvatarIconsSecondary
                                size={70}
                                name='account-circle-outline'
                                style={drawerContentStyle.avatarStyle, { ...drawerContentStyle.avatarStyleTop }}
                            />
                        </View>
                        <View style={drawerContentStyle.innerBottom}>
                            <View>
                                <Text style={drawerContentStyle.userName}>Arshadul Ahmed</Text>
                                <Text style={drawerContentStyle.userNameOnDrawer}>ahmed.arshadul@gmail.com</Text>
                            </View>
                            <View>
                                <IconButton
                                    //icon="chevron-down"
                                    icon={showProfile ? 'chevron-up' : 'chevron-down'}
                                    size={30}
                                    color='white'
                                    onPress={handleProfileManage}
                                />
                            </View>
                        </View>
                    </View>

                    {
                        showProfile ?

                            <ProfileSettingItems props={navigation} /> :
                            <MenuItems props={navigation} />

                    }
                    <Footer />

                </View>




                <View style={drawerContentStyle.goBackButton}>
                    <IconButton
                        icon='arrow-right'
                        size={25}
                        color='#ffffff'
                        onPress={() => navigation.closeDrawer()}
                    />
                </View>
            </Animated.View>
        </DrawerContentScrollView>
    );
}

export default DrawerContent;
