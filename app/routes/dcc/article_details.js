import React, { Component } from 'react';
import { Text, StyleSheet, TextInput, ListView, Dimensions,View, Image, ScrollView, TouchableHighlight, AsyncStorage } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import {Actions} from 'react-native-router-flux';
import store from '../../store/store';
const moment = require('moment');
import AppSettings from '../../config/settings';

export default class ArticleDetailsComponent extends Component {
    ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    constructor (props){
        super(props);
        this.state = {
            isLoading : true,
            pageArray : []
        };
    }
    convert_html_to_string(html){
        let a = html;
        let b = a.replace('<p>', '').replace('&#8220;', '');
        let c = b.replace(/<\s*br[^>]?>/,'\n')
            .replace(/(<([^>]+)>)/g, "");
        return _.escape(c);
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
    render() {
        return <Container >
            <Header style={{backgroundColor:'#232642'}}>
                <Button
                    onPress = {() => {
                        requestAnimationFrame(() => {
                            Actions.pop();
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
                    <Icon name='ios-star' style={{color:'#f5a623'}}/>
                </Button>
            </Header>
            <Content style={{backgroundColor:'white'}}>
                <Image
                    style={{width:AppSettings.formatWidth(100), height:AppSettings.formatWidth(40), resizeMode:'cover'}}
                    source={{uri : this.props.article.thumbnail}}>
                </Image>
                <View
                    style={{padding:26}}
                >
                    <View style = {{borderBottomWidth:.5, borderColor:'#bdc3c7', paddingBottom:15}}>
                        <View
                            style={{justifyContent:'space-between'}}
                        >
                            <Text style={{color:'#d36799', backgroundColor:'transparent', fontFamily:'AvenirNext-Medium', fontWeight:"600", fontSize:20}}>
                                {this.props.article.title}
                            </Text>
                            <Text style={{color:'#34495e', marginTop:7, backgroundColor:'transparent', fontFamily:'AvenirNext-Medium', fontWeight:"600"}}>
                                {this.props.article.author.name}
                            </Text>
                            <Text style={{color:'#bdc3c7', marginTop:7, backgroundColor:'transparent', fontFamily:'AvenirNext-Medium', fontWeight:"600"}}>
                                {moment.unix(this.props.article.date).format("MM/DD/YYYY")}
                            </Text>
                        </View>
                    </View>
                    <View style = {{paddingTop:15}}>
                        <Text style={{color:'#34495e', backgroundColor:'transparent', fontFamily:'AvenirNext-Medium', fontSize:14}}>
                            {this.convert_html_to_string(this.props.article.content)}
                        </Text>
                    </View>
                </View>
            </Content>
        </Container>
    }
}
const styles = StyleSheet.create({

});