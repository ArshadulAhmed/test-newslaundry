import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Paragraph } from 'react-native-paper';

function NewsCard(props) {
    return (
        <Card>
            <Card.Cover source={{ uri: props.item.urlToImage }} />
            <Card.Title title={props.item.title} subtitle={props.item.author} titleStyle={styles.title} subtitleStyle={styles.subTitle} />
            <Card.Content>
                <Paragraph style={styles.paragraph} >{props.item.description}</Paragraph>
                <TouchableOpacity onPress={() => props.navi.navigate('NewsDetailScreen', { items: props.item })}><Text style={styles.readMore}>Read More...</Text></TouchableOpacity>
            </Card.Content>
        </Card>
    )
}

export default NewsCard;

const styles = StyleSheet.create({
    title: {
        fontFamily: 'montserrat-semiBold',
        fontSize: 12
    },
    subTitle: {
        fontFamily: 'montserrat-regular',
        fontSize: 11
    },
    paragraph: {
        fontFamily: 'montserrat-regular',
        fontSize: 12
    },
    readMore: {
        fontFamily: 'montserrat-regular',
    }

})
