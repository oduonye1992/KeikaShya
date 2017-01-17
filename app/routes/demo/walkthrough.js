import React, { Component } from 'react';
import { Text, StyleSheet, ListView, View,
    Image, ScrollView, TouchableHighlight,
    DatePickerIOS, DatePickerAndroid
} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import HeaderComponent from '../../components/header';
import {Actions} from 'react-native-router-flux';
import ListItemDeletableComponent from '../../components/list_item_deletable';
import AppIntro from 'react-native-app-intro';

export default class WalkthroughComponent extends Component {
    ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    constructor(props) {
        super(props);
        this.state = {
            dataSource: this.ds.cloneWithRows(
                [{
                    title : 'Name',
                    description1 : 'Daniel Oduonye',
                    description2 : 'Daniel Oduonye',
                    icon : 'ios-menu-outline'
                }]
            )
        }
    }
    onClick(){

    }
    render () {
        const pageArray = [{
            title: 'Learn the basics',
            description: 'Keisha Helps you present your work or ideas beautifulls',
            //img: {uri: 'https://source.unsplash.com/random/100x100'},
            imgStyle: {
                height: 80 * 2.5,
                width: 109 * 2.5,
            },
            backgroundColor: '#acdce8',
            fontColor: '#2c3e50',
            fontWeight:'700',
            level: 10,
        }, {
            title: 'Organise',
            description: 'Drag and Drop to Move',
            //img: {uri: 'https://source.unsplash.com/random/100x100'},
            imgStyle: {
                height: 93 * 2.5,
                width: 103 * 2.5,
            },
            backgroundColor: '#fec89a',
            fontColor: '#2c3e50',
            level: 10,
        }];
        return (
            <Container style={styles.container}>
                <Content style={[styles.content]}>
                    <AppIntro
                        onNextBtnClick={this.nextBtnHandle}
                        onDoneBtnClick={this.doneBtnHandle}
                        rightTextColor="#2c3e50"
                        onSkipBtnClick={this.onSkipBtnHandle}
                        onSlideChange={this.onSlideChangeHandle}
                        pageArray={pageArray}
                    />
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