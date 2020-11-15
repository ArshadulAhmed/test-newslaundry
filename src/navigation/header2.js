import React from "react";
import { connect } from 'react-redux';
import { View, StyleSheet, Keyboard, TextInput } from 'react-native';
import { Text, IconButton, Snackbar, useTheme } from 'react-native-paper';
import { getProductSearchResult, clearSearchHistory } from '../redux/actions/getProductSearchResult/getProductSearchResult';
import { LocalizationContext } from '../utilites/LocalizationContext';




function HeaderComponent2(props) {
    const { t } = React.useContext(LocalizationContext);
    const [searchQuery, setSearchQuery] = React.useState('');
    const [invalidSearch, setInvalidSearch] = React.useState(false);
    const onChangeSearch = query => setSearchQuery(query);
    const { colors } = useTheme();

    const sendSearchQuery = async () => {
        if (searchQuery !== '') {
            //await props.clearSearchHistory();
            props.getProductSearchResult(searchQuery);
            Keyboard.dismiss();
        } else {
            setInvalidSearch(true)
        }
    }
    const onDismissSnackBar = () => setInvalidSearch(false);

    const cancellSearchQuery = async () => {
        // if (props.totalItem.results && props.totalItem.results.length > 0) {
        //     await props.clearSearchHistory()
        // }


        await props.clearSearchHistory()



        setSearchQuery('');
    }

    return (
        <View style={{ ...styles.mainSearch, ...{ backgroundColor: colors.primary } }}>
            <View style={styles.mainSearchLeft}>
                <IconButton
                    icon='home'
                    onPress={() => { props.navigation.navigate('Home') }}
                    color={colors.iconColors}
                    style={styles.iconBtn}
                />
                <TextInput
                    placeholder={t('search')}
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                    autoFocus={true}
                    onSubmitEditing={sendSearchQuery}
                    style={styles.inputSearchText}
                    returnKeyType='search'
                    selectionColor={'black'}
                />
            </View>
            <View style={styles.mainSearchRight}>
                {
                    searchQuery ?
                        <IconButton
                            icon='close'
                            onPress={cancellSearchQuery}
                            color={colors.iconColors}
                            style={styles.iconBtn}
                        /> : null
                }
                <IconButton
                    icon='magnify'
                    onPress={sendSearchQuery}
                    color={colors.iconColors}
                    style={styles.iconBtn}
                />
            </View>
            <Snackbar
                visible={invalidSearch}
                onDismiss={onDismissSnackBar}
                duration={2000}
                style={styles.snackbarMain}
            >
                <Text style={styles.snackbarMessage}>{t('peit')}</Text>
            </Snackbar>
        </View>
    );
}

const memorizedHeader = React.memo(HeaderComponent2);

const mapStateToProps = state => ({
    totalItem: state.ProductSearchResults
});
export default connect(
    mapStateToProps,
    { getProductSearchResult, clearSearchHistory }
)(memorizedHeader);

const styles = StyleSheet.create({
    mainSearch: {
        flexDirection: 'row',
        paddingTop: 20,
        backgroundColor: 'red',
    },
    inputSearchText: {
        fontSize: 10,
        height: 40,
        fontFamily: 'montserrat-bold',
        width: '100%',
        paddingLeft: 20,
    },
    mainSearchLeft: {
        height: 40,
        width: '75%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    mainSearchRight: {
        width: '25%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },

    iconBtn: {
        margin: 0,
        height: 40
    },
    snackbarMain: {
        top: 55,
    },
    snackbarMessage: {
        fontSize: 12,
        color: 'red',
        fontFamily: 'montserrat-regular',
    }
});