import React from 'react';
import { connect } from 'react-redux';
import { SafeAreaView, FlatList, Text, View } from 'react-native';
import { Snackbar } from 'react-native-paper';
import { clearError } from '../../redux/utils/messages';
import DefaultLoading from '../../components/DefaultLoading';
import NewsCard from '../../components/NewsCard';


function NewsSearchScreen(props) {

    const onDismissSnackBar = async () => {
        await props.clearError();
    };
    const { status } = props.errorCode;
    const { isLoading, articles } = props.searchResult;

    if (isLoading) {
        return (
            <DefaultLoading />
        )
    }
    if (articles && articles.length === 0) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>No Result Found!!!</Text>
            </View>

        )
    }
    const renderItem = ({ item }) => {
        return (
            <NewsCard
                item={item}
                navi={props.navigation}
            />
        );
    }
    return (
        <SafeAreaView style={{ flex: 1, flexDirection: 'column' }}>
            <FlatList
                data={articles}
                ItemSeparatorComponent={false}
                horizontal={false}
                numColumns={1}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                removeClippedSubviews={true}
                initialNumToRender={3}
                maxToRenderPerBatch={1}
                maxToRenderPerBatch={100}
                getItemLayout={(data, index) => {
                    return { length: 40, offset: 40 * index, index }
                }}
            />

            <Snackbar
                visible={status ? status : false}
                onDismiss={onDismissSnackBar}
                action={{
                    label: 'Undo',
                    onPress: () => {
                        // Do something
                    },
                }}>
                {status ? status.data.message : ''}
            </Snackbar>

        </SafeAreaView>
    )
}
function mapStateToProps(state) {
    return {
        searchResult: state.search_result,
        errorCode: state.errors
    }
}

const mapDispatchToProps = {
    clearError
}
export default connect(mapStateToProps, mapDispatchToProps)(NewsSearchScreen);