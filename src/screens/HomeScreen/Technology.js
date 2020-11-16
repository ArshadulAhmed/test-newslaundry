import React from 'react';
import { connect } from 'react-redux';
import { Text, Snackbar } from 'react-native-paper';
import { SafeAreaView, FlatList, View } from 'react-native';
import { loadTechnologyNews } from '../../redux/actions/loadTechnologyNews'
import { clearError } from '../../redux/utils/messages';
import NewsCard from '../../components/NewsCard';
import DefaultLoading from '../../components/DefaultLoading';




function Technology(props) {

    React.useEffect(() => {
        props.loadTechnologyNews();
    }, [])

    const onDismissSnackBar = async () => {
        await props.clearError();
    };

    const { isLoading, articles } = props.technology_india_info;
    const { status } = props.errorCode;

    if (isLoading) {
        return (
            <DefaultLoading />
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
                keyExtractor={(item, index) => item.title}
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
        technology_india_info: state.technology_india,
        errorCode: state.errors
    }
}

const mapDispatchToProps = {
    loadTechnologyNews, clearError
}
export default connect(mapStateToProps, mapDispatchToProps)(Technology);