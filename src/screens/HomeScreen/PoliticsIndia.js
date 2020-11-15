import React from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native-paper';
import { loadIndianPoliticsNews } from '../../redux/actions/loadIndianPoliticsNews'

function PoliticsIndia(props) {

    React.useEffect(() => {
        props.loadIndianPoliticsNews();
    }, [])

    console.log('isLoadingNews', props.isLoadingNews)

    if (props.isLoadingNews) {
        return (
            <Text>Loading...</Text>
        )
    }
    return (
        <Text>PoliticsIndia</Text>
    )
}
function mapStateToProps(state) {
    return {
        isLoadingNews: state.politics_india.isLoading,
    }
}

const mapDispatchToProps = {
    loadIndianPoliticsNews
}
export default connect(mapStateToProps, mapDispatchToProps)(PoliticsIndia);