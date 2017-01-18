import React, { Component } from 'react';
import { Text, StyleSheet, ListView, View,
    Image, ScrollView, TouchableHighlight,
    DatePickerIOS, DatePickerAndroid
} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import HeaderComponent from '../../components/header';
import {Actions} from 'react-native-router-flux';
import ListItemDeletableComponent from '../../components/list_item_deletable';
import store from '../../store/store';
import SearchBar from 'react-native-search-bar';
export default class GroupsComponent extends Component {
    ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    constructor(props) {
        super(props);
        this.state = {
            dataSource: this.ds.cloneWithRows(
                [{
                    title : 'Group 1 A',
                    description1 : 'This is a Group description',
                    description2 : '2015-12-12',
                    icon : 'ios-remove-circle-outline'
                },
                    {
                        title : 'Group 1 A',
                        description1 : 'This is a Group description',
                        description2 : '2015-12-12',
                        icon : 'ios-remove-circle-outline'
                    },
                    {
                        title : 'Group 1 A',
                        description1 : 'This is a Group description',
                        description2 : '2015-12-12',
                        icon : 'ios-remove-circle-outline'
                    },
                    {
                        title : 'Group 1 A',
                        description1 : 'This is a Group description',
                        description2 : '2015-12-12',
                        icon : 'ios-remove-circle-outline'
                    },
                    {
                        title : 'Group 1 A',
                        description1 : 'This is a Group description',
                        description2 : '2015-12-12',
                        icon : 'ios-remove-circle-outline'
                    },
                    {
                        title : 'Group 1 A',
                        description1 : 'This is a Group description',
                        description2 : '2015-12-12',
                        icon : 'ios-remove-circle-outline'
                    },
                    {
                        title : 'Group 1 A',
                        description1 : 'This is a Group description',
                        description2 : '2015-12-12',
                        icon : 'ios-remove-circle-outline'
                    },
                    {
                        title : 'Group 1 A',
                        description1 : 'This is a Group description',
                        description2 : '2015-12-12',
                        icon : 'ios-remove-circle-outline'
                    },
                    {
                        title : 'Group 1 A',
                        description1 : 'This is a Group description',
                        description2 : '2015-12-12',
                        icon : 'ios-remove-circle-outline'
                    },
                    {
                        title : 'Group 1 A',
                        description1 : 'This is a Group description',
                        description2 : '2015-12-12',
                        icon : 'ios-remove-circle-outline'
                    },
                    {
                        title : 'Group 1 A',
                        description1 : 'This is a Group description',
                        description2 : '2015-12-12',
                        icon : 'ios-remove-circle-outline'
                    }]
            )
        }
    }
    onClick(){
        Actions.group_details();
    }
    render () {
        return (
            <Container style={styles.container}>
                <Header style={styles.header}>
                    <Button
                        onPress = {() => {
                            store.dispatch({
                                type : 'OPEN_DRAWER'
                            })
                        }}
                        transparent>
                        <Icon name='ios-menu-outline' style={styles.headerButton}/>
                    </Button>
                    <Title style={[styles.headerButton, styles.fontAvenir]}>Groups</Title>
                    <Button transparent>
                        <Icon name='ios-funnel-outline' style={styles.headerButton}/>
                    </Button>
                </Header>
                <Content style={[styles.content]}>
                    <View>
                        <SearchBar
                            ref='searchBar'
                            placeholder='Search'
                        />
                        <View style={{padding:10}}>
                            <ListView
                                dataSource={this.state.dataSource}
                                renderRow={
                                    (rowData) => {
                                        return <ListItemDeletableComponent
                                            onClick = {this.onClick.bind(this)}
                                            title = {rowData.title}
                                            description1 =  {rowData.description1}
                                            description2 =  {rowData.description2}
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