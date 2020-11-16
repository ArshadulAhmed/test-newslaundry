import React from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native-paper';
import { SafeAreaView, FlatList, View } from 'react-native';
import { loadTechnologyNews } from '../../redux/actions/loadTechnologyNews'
import NewsCard from '../../components/NewsCard';





function Technology(props) {

    React.useEffect(() => {
        props.loadTechnologyNews();
    }, [])
    const { isLoading, articles } = props.technology_india_info;
    if (isLoading) {
        return (
            <Text>Loading...</Text>
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
        </SafeAreaView>

    )
}
function mapStateToProps(state) {
    return {
        technology_india_info: state.technology_india
    }
}

const mapDispatchToProps = {
    loadTechnologyNews
}
export default connect(mapStateToProps, mapDispatchToProps)(Technology);