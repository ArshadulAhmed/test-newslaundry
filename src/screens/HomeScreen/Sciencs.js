import React from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native-paper';
import { SafeAreaView, FlatList, View } from 'react-native';
import { loadScienceNews } from '../../redux/actions/loadScienceNews'
import NewsCard from '../../components/NewsCard';
import DefaultLoading from '../../components/DefaultLoading';





function Sciencs(props) {

    React.useEffect(() => {
        props.loadScienceNews();
    }, [])
    const { isLoading, articles } = props.science_india_info;
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
        science_india_info: state.science_india
    }
}

const mapDispatchToProps = {
    loadScienceNews
}
export default connect(mapStateToProps, mapDispatchToProps)(Sciencs);