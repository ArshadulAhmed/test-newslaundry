import React from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native-paper';
import { SafeAreaView, FlatList, View } from 'react-native';
import { loadEntertainmentNews } from '../../redux/actions/loadEntairtaimentNews'
import NewsCard from '../../components/NewsCard';
import DefaultLoading from '../../components/DefaultLoading';




function Entertainment(props) {

    React.useEffect(() => {
        props.loadEntertainmentNews();
    }, [])
    const { isLoading, articles } = props.entertainment_india_info;
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
        entertainment_india_info: state.entertainment_india
    }
}

const mapDispatchToProps = {
    loadEntertainmentNews
}
export default connect(mapStateToProps, mapDispatchToProps)(Entertainment);