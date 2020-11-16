import React from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native-paper';
import { SafeAreaView, FlatList, View } from 'react-native';
import { loadFinanceNews } from '../../redux/actions/loadFinanceNews'
import NewsCard from '../../components/NewsCard';





function Finance(props) {

    React.useEffect(() => {
        props.loadFinanceNews();
    }, [])
    const { isLoading, articles } = props.finance_india_info;
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
        finance_india_info: state.finance_india
    }
}

const mapDispatchToProps = {
    loadFinanceNews
}
export default connect(mapStateToProps, mapDispatchToProps)(Finance);