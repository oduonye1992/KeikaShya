import React, { Component } from 'react';
import { Text, StyleSheet, ListView, View,
    Image, ScrollView, TouchableHighlight,
    DatePickerIOS, DatePickerAndroid
} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import HeaderComponent from '../../components/header';
import {Actions} from 'react-native-router-flux';
import ListWithImageComponent from '../../components/list_with_image';

export default class GroupMessageComponent extends Component {
    ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    constructor(props) {
        super(props);
        this.state = {
            dataSource: this.ds.cloneWithRows(
                [{
                    title : 'Rohit Junoir',
                    description : 'Hello pal, how is it going?',
                    image : 'https://source.unsplash.com/random/100x100',
                    icon : 'ios-game-controller-b-outline',
                    iconColor : '#1abc9c'
                },
                    {
                        title : 'Rohit Junoir',
                        description : 'Hello pal, how is it going?',
                        image : 'https://source.unsplash.com/random/100x100',
                        icon : 'ios-game-controller-b-outline',
                        iconColor : '#1abc9c'
                    },
                    {
                        title : 'Rohit Junoir',
                        description : 'Hello pal, how is it going?',
                        image : 'https://source.unsplash.com/random/100x100',
                        icon : 'ios-game-controller-b-outline',
                        iconColor : '#1abc9c'
                    },
                    {
                        title : 'Rohit Junoir',
                        description : 'Hello pal, how is it going?',
                        image : 'https://source.unsplash.com/random/100x100',
                        icon : 'ios-game-controller-b-outline',
                        iconColor : '#1abc9c'
                    },
                    {
                        title : 'Rohit Junoir',
                        description : 'Hello pal, how is it going?',
                        image : 'https://source.unsplash.com/random/100x100',
                        icon : 'ios-game-controller-b-outline',
                        iconColor : '#1abc9c'
                    },
                    {
                        title : 'Rohit Junoir',
                        description : 'Hello pal, how is it going?',
                        image : 'https://source.unsplash.com/random/100x100',
                        icon : 'ios-game-controller-b-outline',
                        iconColor : '#1abc9c'
                    },
                    {
                        title : 'Rohit Junoir',
                        description : 'Hello pal, how is it going?',
                        image : 'https://source.unsplash.com/random/100x100',
                        icon : 'ios-game-controller-b-outline',
                        iconColor : '#1abc9c'
                    },
                    {
                        title : 'Rohit Junoir',
                        description : 'Hello pal, how is it going?',
                        image : 'https://source.unsplash.com/random/100x100',
                        icon : 'ios-game-controller-b-outline',
                        iconColor : '#1abc9c'
                    }

                ]
            )
        }
    }
    onClick(){

    }
    render () {
        return (
            <Container style={styles.container}>
                <Header style={styles.header}>
                    <Button
                        onPress = {() => {
                            Actions.pop()
                        }}
                        transparent>
                        <Icon name='ios-arrow-round-back-outline' style={styles.headerButton}/>
                    </Button>
                    <Title style={[styles.headerButton, styles.fontAvenir]}>Messages</Title>
                </Header>
                <Content style={[styles.content]}>
                    <View>
                        <View style={{padding:20}}>
                            <ListView
                                dataSource={this.state.dataSource}
                                renderRow={
                                    (rowData) => {
                                        return <ListWithImageComponent
                                            onClick = {this.onClick.bind(this)}
                                            title = {rowData.title}
                                            description = {rowData.description}
                                            image = {rowData.image}
                                            icon = {rowData.icon}
                                        />
                                    }
                                }
                            />
                        </View>
                    </View>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    colorWhite : {
        color: 'white',
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },
    footer : {
        backgroundColor : 'white',
        borderColor:'white'
    },
    footerText : {
        fontWeight : 'bold',
        fontSize : 15,
        color:'#2c3e50',
        fontFamily: 'Avenir Next'
    },
    fontAvenir : {
        fontFamily: 'Avenir Next'
    },
    header : {
        backgroundColor : 'white'
    },
    headerButton : {
        color : '#e74c3c'
    },
    content : {
        backgroundColor:'white'
    },
    image: {
        height: 100,
        borderRadius: 50,
        width: 100
    }
});