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
                            dot={<View style={{backgroundColor: 'rgba(255,255,255,.3)', width: 13, height: 13, borderRadius: 7, marginTop:-280, marginLeft: 7, marginRight: 7}} />}
                            activeDot={<View style={{backgroundColor: '#fff', width: 13, height: 13, borderRadius: 7, marginLeft: 7,  marginTop:-280, marginRight: 7}} />}
                            showsButtons={false}>
                        <View style={[styles.slide1, {backgroundColor:'#9293d8'}]}>
                            <View style={{marginTop:30}}>
                                <Image style={{height:200, width:120, borderRadius:5}} source={require('../../images/walkthrough.png')} />
                            </View>
                            <View style={{marginTop:40, alignItems:'center'}}>
                                <Text style={{fontWeight:20, fontFamily: 'Avenir Next', color : 'white', fontWeight:'bold'}}>
                                    Learn More
                                </Text>
                                <Text style={{marginTop:20, width:300, alignItems:'center', fontFamily: 'Avenir Next', color : 'white', fontWeight:'bold'}}>
                                    Tap empty Cell to add images, website and text.
                                    Tap empty Cell to add images, website and text.
                                    Tap empty Cell to add images, website and text.
                                </Text>
                            </View>
                            <View>
                                <TouchableHighlight
                                    style={{
                                        marginTop:140,
                                        borderWidth:.5,
                                        borderColor:'white',
                                        padding:12,
                                        paddingLeft:60,
                                        paddingRight:60
                                    }}
                                >
                                    <Text style={{fontFamily: 'Avenir Next', color : 'white'}}>Skip</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                        <View style={[styles.slide1, {backgroundColor:'#9293d8'}]}>
                            <View style={{marginTop:30}}>
                                <Image style={{height:200, width:120, borderRadius:5}} source={require('../../images/walkthrough.png')} />
                            </View>
                            <View style={{marginTop:30, alignItems:'center'}}>
                                <Text style={{fontWeight:20, fontFamily: 'Avenir Next', color : 'white', fontWeight:'bold'}}>Learn</Text>
                                <Text style={{marginTop:20, width:300, alignItems:'center', fontFamily: 'Avenir Next', color : 'white', fontWeight:'bold'}}>
                                    Tap empty Cell to add images, website and text.
                                    Tap empty Cell to add images, website and text.
                                    Tap empty Cell to add images, website and text.
                                </Text>
                            </View>
                            <View>
                                <TouchableHighlight
                                    style={{
                                        marginTop:15,
                                        borderWidth:.5,
                                        borderColor:'white',
                                        padding:12,
                                        paddingLeft:60,
                                        paddingRight:60
                                    }}
                                >
                                    <Text style={{fontFamily: 'Avenir Next', color : 'white', fontWeight:'bold'}}>Learn</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                        <View style={[styles.slide1, {backgroundColor:'#9293d8'}]}>
                            <View style={{marginTop:30}}>
                                <Image style={{height:200, width:120, borderRadius:5}} source={require('../../images/walkthrough.png')} />
                            </View>
                            <View style={{marginTop:30, alignItems:'center'}}>
                                <Text style={{fontWeight:20, fontFamily: 'Avenir Next', color : 'white', fontWeight:'bold'}}>Learn</Text>
                                <Text style={{marginTop:20, width:300, alignItems:'center', fontFamily: 'Avenir Next', color : 'white', fontWeight:'bold'}}>
                                    Tap empty Cell to add images, website and text.
                                    Tap empty Cell to add images, website and text.
                                    Tap empty Cell to add images, website and text.
                                </Text>
                            </View>
                            <View>
                                <TouchableHighlight
                                    style={{
                                        marginTop:15,
                                        borderWidth:.5,
                                        borderColor:'white',
                                        padding:12,
                                        paddingLeft:60,
                                        paddingRight:60
                                    }}
                                >
                                    <Text style={{fontFamily: 'Avenir Next', color : 'white', fontWeight:'bold'}}>Learn</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                        <View style={[styles.slide1, {backgroundColor:'#9293d8'}]}>
                            <View style={{marginTop:30}}>
                                <Image style={{height:200, width:120, borderRadius:5}} source={require('../../images/walkthrough.png')} />
                            </View>
                            <View style={{marginTop:30, alignItems:'center'}}>
                                <Text style={{fontWeight:20, fontFamily: 'Avenir Next', color : 'white', fontWeight:'bold'}}>Learn</Text>
                                <Text style={{marginTop:20, width:300, alignItems:'center', fontFamily: 'Avenir Next', color : 'white', fontWeight:'bold'}}>
                                    Tap empty Cell to add images, website and text.
                                    Tap empty Cell to add images, website and text.
                                    Tap empty Cell to add images, website and text.
                                </Text>
                            </View>
                            <View>
                                <TouchableHighlight
                                    style={{
                                        marginTop:15,
                                        borderWidth:.5,
                                        borderColor:'white',
                                        padding:12,
                                        paddingLeft:60,
                                        paddingRight:60
                                    }}
                                >
                                    <Text style={{fontFamily: 'Avenir Next', color : 'white', fontWeight:'bold'}}>Learn</Text>
                                </TouchableHighlight>
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