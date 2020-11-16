import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Card, Title, Paragraph, Button, Avatar } from 'react-native-paper';

function NewsCard(props) {
    return (
        <Card>
            <Card.Cover source={{ uri: props.item.urlToImage }} />
            <Card.Title title={props.item.title} subtitle={props.item.author} titleStyle={styles.title} subtitleStyle={styles.subTitle} />
            <Card.Content>
                <Paragraph style={styles.paragraph} >{props.item.description}</Paragraph>
                <TouchableOpacity onPress={() => props.navi.navigate('NewsDetailScreen')}><Text style={styles.readMore}>Read More...</Text></TouchableOpacity>
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