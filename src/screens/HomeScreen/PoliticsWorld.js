import React from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native-paper';
import { FlatList } from 'react-native';
import { loadIndianPoliticsNews } from '../../redux/actions/loadIndianPoliticsNews';
import { clearError } from '../../redux/utils/messages';
import NewsCard from '../../components/NewsCard';
import DefaultLoading from '../../components/DefaultLoading';





function PoliticsWorld(props) {

    React.useEffect(() => {
        props.loadIndianPoliticsNews();
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
        politics_india_info: state.politics_india,
    }
}

const mapDispatchToProps = {
    loadIndianPoliticsNews, clearError
}
export default connect(mapStateToProps, mapDispatchToProps)(PoliticsWorld);