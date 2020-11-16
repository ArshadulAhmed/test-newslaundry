import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Card, Text } from 'react-native-paper';


function NewsDetailScreen(props) {

    const displayItem = props.route.params.items;

    return (
        <SafeAreaView style={styles.mainHe}>
            <Card style={{ flex: 1 }}>
                <Card.Cover source={{ uri: displayItem.urlToImage }} />
                <View style={styles.inner}>
                    <Text style={styles.header1}>Author: {displayItem.author ? displayItem.author : 'No Data'}</Text>
                    <Text style={styles.header2}>Published on: {displayItem.publishedAt ? displayItem.publishedAt : 'No Data'}</Text>
                    <Text style={styles.header3}> {displayItem.content ? displayItem.content : 'No Data'}</Text>
                    <Text style={styles.header4}> {displayItem.description ? displayItem.description : 'No Data'}</Text>
                </View>
            </Card>
        </SafeAreaView>
    )
}
export default NewsDetailScreen;

const styles = StyleSheet.create({
    mainHe: {
        flex: 1,

    },
    inner: {
        padding: 10
    },
    header1: {
        fontFamily: 'montserrat-semiBold',
        marginVertical: 10,
    },

    header2: {
        fontFamily: 'montserrat-regular',
        marginBottom: 10,
    },
    header3: {
        fontFamily: 'montserrat-regular',
        marginBottom: 10
    },
    header4: {
        fontFamily: 'montserrat-regular',
    },
})