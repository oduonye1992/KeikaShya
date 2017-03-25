import React, { Component } from 'react';
import { Text, StyleSheet, TextInput, ListView, Dimensions,View, Image, ScrollView, TouchableHighlight, AsyncStorage } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import {Actions} from 'react-native-router-flux';
import store from '../../store/store';
import Hr from '../../lib/hr';
import AppSettings from '../../config/settings';

export default class SettingsComponent extends Component {
    ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    constructor (props){
        super(props);
        this.state = {
            isLoading : true,
            pageArray : []
        };
    }
    renderFirstPage(){
        return (
            <Container>
                <Content style={{backgroundColor:'#3a3c65'}}>
                    <Image
                        source={require('../../images/home_background.png')}
                        style = {{resizeMode:'repeat',
                            width: AppSettings.formatWidth(100),
                            height:AppSettings.formatHeight(100), }}
                    >
                    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                        <Text style={{color:'white', fontFamily:'Avenir Next', fontSize:35}}>DCC MOBILE</Text>
                        <Text style={{color:'#5b648a', fontFamily:'AvenirNext-Medium', fontSize:20}}>David's Christian Center App</Text>
                    </View>
                    </Image>
                </Content>
            </Container>
        );
    }
    renderSecondPage(){
        return (
            <Container >
                <Header style={{backgroundColor:'#232642'}}>
                    <Button
                        onPress = {() => {
                            requestAnimationFrame(() => {
                                store.dispatch({
                                    type : 'OPEN_DRAWER'
                                })
                            });
                        }}
                        transparent>
                        <Icon name='ios-arrow-round-back' style={{color:'#4cb2cb'}}/>
                    </Button>
                    <Title style={{color:'white', fontFamily:'Avenir Next'}}>EVENTS</Title>
                    <Button
                        onPress = {() => {
                            requestAnimationFrame(() => {
                                store.dispatch({
                                    type : 'OPEN_DRAWER'
                                })
                            });
                        }}
                        transparent>
                        <Icon name='ios-search-outline' style={{color:'#4cb2cb'}}/>
                    </Button>
                </Header>
                <Content style={{backgroundColor:'white'}}>
                    <View style={{padding:15, flexDirection:'row', alignItems:'flex-start', marginTop:10, borderBottomWidth:.5, borderColor:'#bdc3c7'}}>
                        <View style={{alignItems:'center'}}>
                            <Image
                                style={{width:115, height:80, resizeMode:'cover'}}
                                source={require('../../images/sisthscreen.png')} />
                        </View>
                        <View style={{marginLeft:12, width:AppSettings.formatWidth(60), justifyContent:'center'}}>
                            <Text style={{color:'#c6729e', fontFamily:'AvenirNext-Medium'}}>Community Mentoring</Text>
                            <Text style={{color:'#34495e', fontFamily:'AvenirNext-Medium', fontSize:11}}>
                                Awana is a high energy club that meets most Wednesdays night from 6:30pm
                                - 8.10pm beginning September 14, 2016 through April 26, 2017
                            </Text>
                        </View>
                    </View>
                </Content>
            </Container>
        );
    }
    renderThirdPage(){
        return (
            <Container >
                <Header style={{backgroundColor:'#232642'}}>
                    <Button
                        onPress = {() => {
                            requestAnimationFrame(() => {
                                store.dispatch({
                                    type : 'OPEN_DRAWER'
                                })
                            });
                        }}
                        transparent>
                        <Icon name='ios-arrow-round-back' style={{color:'#4cb2cb'}}/>
                    </Button>
                    <Title style={{color:'white', fontFamily:'Avenir Next'}}>EVENTS</Title>
                    <Button
                        onPress = {() => {
                            requestAnimationFrame(() => {
                                store.dispatch({
                                    type : 'OPEN_DRAWER'
                                })
                            });
                        }}
                        transparent>
                        <Icon name='ios-search-outline' style={{color:'#4cb2cb'}}/>
                    </Button>
                </Header>
                <Content style={{backgroundColor:'white'}}>
                    <Image
                        style={{width:AppSettings.formatWidth(100), height:AppSettings.formatWidth(45), resizeMode:'cover'}}
                        source={require('../../images/sisthscreen.png')}>
                        <View style={{
                            width:AppSettings.formatWidth(100),
                            alignItems:'center',
                            justifyContent:'center',
                            height:AppSettings.formatWidth(45)}}>
                            <Text style={{color:'white', backgroundColor:'transparent', fontFamily:'AvenirNext-Medium', fontWeight:'bold', fontSize:16}}>COMMUNITY MENTORING</Text>
                            <Text style={{color:'white', backgroundColor:'transparent', fontFamily:'AvenirNext-Medium'}}>OCTOBER 24, 2016</Text>
                        </View>
                    </Image>
                    <View
                        style={{padding:26}}
                    >
                        <View style = {{borderBottomWidth:.5, borderColor:'#bdc3c7', paddingBottom:15}}>
                            <View
                                style={{flexDirection:'row', justifyContent:'space-between'}}
                            >
                                <View style={{width:AppSettings.formatWidth(80)}}>
                                    <Text style={{color:'#d36799', backgroundColor:'transparent', fontFamily:'AvenirNext-Medium', fontWeight:"600"}}>
                                        Commumity Mentoring Outreact Program. Don't miss it, bring friends
                                    </Text>
                                </View>
                                <Icon name="ios-calendar-outline" style={{color:'#3498db', fontSize:30}}/>
                            </View>
                            <View style={{marginTop:10}}>
                                <Text style={{color:'#7f8c8d', backgroundColor:'transparent', fontFamily:'AvenirNext-Medium'}}>
                                    3:30 PM - 5:30 PM
                                </Text>
                            </View>
                        </View>
                        <View style = {{paddingTop:15}}>
                            <Text style={{color:'#34495e', backgroundColor:'transparent', fontFamily:'AvenirNext-Medium', fontSize:14}}>
                                Join us this Sunday as we encounter Christ in a fresh way!. For us, church
                                is like home - filled  with laughter, fun and the  family of God.
                                We love meting new people and in a church  like ours, there are many
                                wonderful people to get to know!. We would like to extend our invitation to you
                                to join us  at out of our services!.
                            </Text>
                        </View>
                    </View>
                    <View>
                        <Image source={require('../../images/map.png')} />
                    </View>
                </Content>
            </Container>
        );
    }
    renderFourthPage(){
        return (
            <Container >
                <Header style={{backgroundColor:'#232642'}}>
                    <Button
                        onPress = {() => {
                            requestAnimationFrame(() => {
                                store.dispatch({
                                    type : 'OPEN_DRAWER'
                                })
                            });
                        }}
                        transparent>
                        <Icon name='ios-menu' style={{color:'#4cb2cb'}}/>
                    </Button>
                    <Title style={{color:'white', fontFamily:'Avenir Next'}}>SETTINGS .</Title>
                </Header>
                <Content style={{backgroundColor:'#292f4f'}}>
                    <View style={{padding:30}}>
                        <View style={{borderBottomWidth:.5, borderColor:'#67698b', paddingTop:AppSettings.formatHeight(2),  paddingBottom:AppSettings.formatHeight(5)}}>
                            <Text style={{fontFamily:'Avenir Next', color:'#67698b', fontSize:14}}>N O T I F I C A T I O N</Text>
                            <View style={{flexDirection:'row', paddingTop:AppSettings.formatHeight(4)}}>
                                <Text style={{fontFamily:'AvenirNext-Medium', color:'#d3d4da', fontSize:16}}>All Primary Email</Text>
                            </View>
                            <View style={{flexDirection:'row', paddingTop:AppSettings.formatHeight(4)}}>
                                <Text style={{fontFamily:'AvenirNext-Medium', color:'#d3d4da', fontSize:16}}>Primary Only</Text>
                            </View>
                            <View style={{flexDirection:'row', paddingTop:AppSettings.formatHeight(4)}}>
                                <Text style={{fontFamily:'AvenirNext-Medium', color:'#d3d4da', fontSize:16}}>None</Text>
                            </View>
                        </View>
                        <View style={{borderBottomWidth:.5, borderColor:'#67698b', paddingTop:AppSettings.formatHeight(4),  paddingBottom:AppSettings.formatHeight(5)}}>
                            <Text style={{fontFamily:'Avenir Next', color:'#67698b', fontSize:14}}>S I G N A T U R E</Text>
                            <View style={{flexDirection:'row', paddingTop:AppSettings.formatHeight(4)}}>
                                <Text style={{fontFamily:'AvenirNext-Medium', color:'#d3d4da', fontSize:16}}>Mobile Signature</Text>
                            </View>
                        </View>
                        <View style={{borderBottomWidth:.5, borderColor:'#67698b', paddingTop:AppSettings.formatHeight(4),  paddingBottom:AppSettings.formatHeight(5)}}>
                            <Text style={{fontFamily:'Avenir Next', color:'#67698b', fontSize:14}}>L A B E L S</Text>
                            <View style={{flexDirection:'row', justifyContent:'space-between', paddingTop:AppSettings.formatHeight(4)}}>
                                <Text style={{fontFamily:'AvenirNext-Medium', color:'#d3d4da', fontSize:16}}>Label Settings and notifications</Text>
                                <View style={{justifyContent:'center', marginTop:-AppSettings.formatHeight(1)}}>
                                    <Icon name="ios-arrow-forward-outline" style={{color:'white'}} />
                                </View>
                            </View>
                        </View>
                    </View>
                </Content>
            </Container>
        );
    }
    render() {
        return this.renderFourthPage();
    }
}
const styles = StyleSheet.create({

});