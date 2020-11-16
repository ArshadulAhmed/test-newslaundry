import React from "react";
import { connect } from 'react-redux';
import { View, StyleSheet, Keyboard, TextInput } from 'react-native';
import { Text, IconButton, Snackbar, useTheme } from 'react-native-paper';
import { getNewsSearchResult } from '../redux/actions/getNewsSearchResult';
import { clearSearchHistory } from '../redux/actions/getNewsSearchResult';

function HeaderComponent2(props) {

    const [searchQuery, setSearchQuery] = React.useState('');
    const [invalidSearch, setInvalidSearch] = React.useState(false);
    const onChangeSearch = query => setSearchQuery(query);


    const sendSearchQuery = async () => {
        if (searchQuery !== '') {
            props.getNewsSearchResult(searchQuery);
            Keyboard.dismiss();
        } else {
            setInvalidSearch(true)
        }
    }
    const onDismissSnackBar = () => setInvalidSearch(false);

    const cancellSearchQuery = async () => {
        await props.clearSearchHistory()
        setSearchQuery('');
    }

    return (
        <View style={{ ...styles.mainSearch, ...{ backgroundColor: 'red' } }}>
            <View style={styles.mainSearchLeft}>
                <IconButton
                    icon='home'
                    onPress={() => { props.navigation.navigate('Home') }}
                    color='white'
                    style={styles.iconBtn}
                />
                <TextInput
                    placeholder='Search'
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
                            color='white'
                            style={styles.iconBtn}
                        /> : null
                }
                <IconButton
                    icon='magnify'
                    onPress={sendSearchQuery}
                    color='white'
                    style={styles.iconBtn}
                />
            </View>
            <Snackbar
                visible={invalidSearch}
                onDismiss={onDismissSnackBar}
                duration={2000}
                style={styles.snackbarMain}
            >
                <Text style={styles.snackbarMessage}>Please enter search query</Text>
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
    { getNewsSearchResult, clearSearchHistory }
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