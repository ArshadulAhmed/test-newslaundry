
import { StyleSheet } from 'react-native';

const drawerContentStyle = StyleSheet.create({

    drawerContent: {
        flex: 1,
        //minHeight: '100%'
    },
    drawerTopSection: {
        flex: 1,
        marginTop: -10
    },
    drawerMenuContent: {
        flex: 1,
        backgroundColor: '#ccc',
    },

    goBackButton: {
        position: 'absolute',
        top: 0,
        right: 0,
    },
    drawerHead: {
        backgroundColor: 'red',
        paddingTop: 10,
        paddingLeft: 10,
        alignContent: 'center',


    },
    innerBottom: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    avatarStyle: {
        backgroundColor: 'transparent'
    },
    labelStyle: {
        fontFamily: 'montserrat-semiBold',
        color: 'red',
        letterSpacing: 0.5
    },
    userNameOnDrawer: {
        fontFamily: 'montserrat-regular',
        fontSize: 12,

    },
    userName: {
        fontFamily: 'montserrat-semiBold',
        fontSize: 13,

    },
    avatarStyleTop: {
        backgroundColor: 'pink',
    },
    drawerInner: {

        flex: 1,
    }


})
export { drawerContentStyle }


