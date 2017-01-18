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
import Swiper from 'react-native-swiper';

export default class WalkthroughComponent extends Component {
    ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    constructor(props) {
        super(props);
        this.state = {
            dataSource: this.ds.cloneWithRows(
                []
            )
        }
    }
    onClick(){

    }
    render () {
        return (
            <Container style={styles.container}>
                <Content style={[styles.content]}>
                    <Swiper style={styles.wrapper}
                            showsButtons={false}>
                        <View style={[styles.slide1, {backgroundColor:'#f1c40f'}]}>
                            <View style={{alignItems:'flex-start', flexDirection : 'row', justifyContent : 'space-between', width:320}}>
                                <Text style={{fontFamily: 'Avenir Next', color : '#34495e', fontWeight:'bold', fontSize:20}}>Learn </Text>
                                <Icon name = "ios-arrow-forward-outline" style={{color:'#34495e'}} />
                            </View>
                            <View style={{marginTop:30}}>
                                <Image style={{height:400, width:270, borderRadius:5}} source={{uri : 'https://s-media-cache-ak0.pinimg.com/564x/a6/95/41/a6954179a48dcf18e9e98355b700fef8.jpg'}} />
                            </View>
                            <View style={{marginTop:70}}>
                                <Text style={{fontFamily: 'Avenir Next', color : '#34495e', fontWeight:'bold'}}>Tap empty Cell to add images, website and text. </Text>
                            </View>
                        </View>
                        <View style={[styles.slide1, {backgroundColor:'#3498db'}]}>
                            <View style={{alignItems:'flex-start', flexDirection : 'row', justifyContent : 'space-between', width:320}}>
                                <Text style={{fontFamily: 'Avenir Next', color : 'white', fontWeight:'bold', fontSize:20}}>Enjoy </Text>
                                <Icon name = "ios-arrow-forward-outline" style={{color:'white'}} />
                            </View>
                            <View style={{marginTop:30}}>
                                <Image style={{height:400, width:270, borderRadius:5}} source={{uri : 'https://img04.alkislarlayasiyorum.com/images/members/50_50/315/315282_1.jpg'}} />
                            </View>
                            <View style={{marginTop:70}}>
                                <Text style={{fontFamily: 'Avenir Next', color : 'white', fontWeight:'bold'}}>Tap empty Cell to add images, website and text. </Text>
                            </View>
                        </View>
                        <View style={[styles.slide1, {backgroundColor:'white'}]}>
                            <TouchableHighlight
                                onPress={Actions.main_home}
                            >
                                <View style={{alignItems:'flex-start', flexDirection : 'row', justifyContent : 'space-between', width:320}}>
                                    <Text style={{fontFamily: 'Avenir Next', color : '#2c3e50', fontWeight:'bold', fontSize:20}}>Share </Text>
                                    <Icon name = "ios-log-in-outline" style={{color:'#2c3e50'}} />
                                </View>
                            </TouchableHighlight>
                            <View style={{marginTop:30}}>
                                <Image style={{height:400, width:270, borderRadius:5}} source={{uri : 'https://img1.etsystatic.com/060/0/10776027/il_570xN.739747103_gjsq.jpg'}} />
                            </View>
                            <View style={{marginTop:70}}>
                                <Text style={{fontFamily: 'Avenir Next', color : '#2c3e50', fontWeight:'bold'}}>Tap empty Cell to add images, website and text. </Text>
                            </View>
                        </View>
                    </Swiper>
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
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    }
});