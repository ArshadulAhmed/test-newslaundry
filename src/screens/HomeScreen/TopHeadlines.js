import React from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native-paper';
import { SafeAreaView, FlatList, View } from 'react-native';
import { loadIndianTopNews } from '../../redux/actions/loadIndianTopNews'
import NewsCard from '../../components/NewsCard';

import DefaultLoading from '../../components/DefaultLoading';




function TopHeadlines(props) {

    React.useEffect(() => {
        props.loadIndianTopNews();
    }, [])
    const { isLoading, articles } = props.politics_india_info;
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
    )
}
function mapStateToProps(state) {
    return {
        politics_india_info: state.topnews_india
    }
}

const mapDispatchToProps = {
    loadIndianTopNews
}
export default connect(mapStateToProps, mapDispatchToProps)(TopHeadlines);