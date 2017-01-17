import React, { Component } from 'react';
import { Text, StyleSheet, ListView, View,
    Image, ScrollView, TouchableHighlight,
    DatePickerIOS, DatePickerAndroid
} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import HeaderComponent from '../../components/header';
import {Actions} from 'react-native-router-flux';
import ListItemDeletableComponent from '../../components/list_item_deletable';

export default class MainHomeComponent extends Component {
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
        return (
            <Container style={styles.container}>
                <Header style={styles.header}>

                </Header>
                <Content style={[styles.content]}>
                    <View>
                        <View style={{padding:10, flexDirection:'row', justifyContent : 'center', alignItems:'center'}}>
                            <Text style={{fontFamily: 'Avenir Next', color : '#3498db', fontWeight:'700', fontSize:30}}>Keisha </Text>
                            <Text style={{fontFamily: 'Avenir Next', color : '#34495e', fontWeight:'300', fontSize:30}}>School </Text>
                        </View>
                    </View>
                </Content>
                <Footer style={{backgroundColor:'white'}}>
                    <View style={{flexDirection : 'row', width:250, justifyContent:'space-between'}}>
                        <Text style={{fontFamily: 'Avenir Next', color : '#3498db', fontWeight:'bold'}}>Login </Text>
                        <Text style={{fontFamily: 'Avenir Next', color : '#34495e', fontWeight:'bold'}}>Register </Text>
                    </View>
                </Footer>
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
    }, header : {
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