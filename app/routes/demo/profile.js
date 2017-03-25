import React, { Component } from 'react';
import { Text, StyleSheet, ListView, View,
    Image, ScrollView, TouchableHighlight,
    DatePickerIOS, DatePickerAndroid
} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import HeaderComponent from '../../components/header';
import {Actions} from 'react-native-router-flux';
import ListWithIconAndDetailsComponent from '../../components/list_with_icon_and_details';
import store from '../../store/store';

export default class HomeComponent extends Component {
    ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    constructor(props) {
        super(props);
        this.state = {
            dataSource: this.ds.cloneWithRows(
                [{
                    title : 'Full Name',
                    description : 'Hushir A Rahman',
                    icon : 'ios-person-outline'
                },
                    {
                        title : 'Registration Number',
                        description : '001',
                        icon : 'ios-list-box-outline'
                    },
                    {
                        title : 'Primary parent',
                        description : 'Mrs Sirigu Ohuam',
                        icon : 'ios-people-outline'
                    },
                    {
                        title : 'Date of Birth',
                        description : '10 Aug 2017',
                        icon : 'ios-calendar-outline'
                    },{
                    title : 'Full Name',
                    description : 'Daniel Oduonye',
                    icon : 'ios-person-outline'
                },
                    {
                        title : 'Registration Number',
                        description : '001',
                        icon : 'ios-list-box-outline'
                    },
                    {
                        title : 'Primary parent',
                        description : 'Mrs Sirigu Ohuam',
                        icon : 'ios-people-outline'
                    },
                    {
                        title : 'Date of Birth',
                        description : '10 Aug 2017',
                        icon : 'ios-calendar-outline'
                    },


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
                    <Title style={[styles.headerButton, styles.fontAvenir]}>Profile</Title>
                </Header>
                <Content style={[styles.content]}>
                    <View>
                        <View>
                            <View style={{height:200, backgroundColor : '#ecf0f1', alignItems:'center', justifyContent:'center'}}>
                                <Image style={styles.image} source={{uri: 'https://source.unsplash.com/random/100x100'}}/>
                                <Text style={{fontFamily: 'Avenir Next', color:'#34495e', fontSize:30, padding:10}}>Hushir A Rahman</Text>
                            </View>
                        </View>
                        <View style={{padding:10}}>
                            <ListView
                                dataSource={this.state.dataSource}
                                renderRow={
                                    (rowData) => {
                                        return <ListWithIconAndDetailsComponent
                                            onClick = {this.onClick.bind(this)}
                                            title = {rowData.title}
                                            description =  {rowData.description}
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