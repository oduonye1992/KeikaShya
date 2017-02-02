import React, { Component } from 'react';
import { Text, StyleSheet, TextInput, ListView, Dimensions,View, Image, ScrollView, TouchableHighlight, AsyncStorage } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import {Actions} from 'react-native-router-flux';
import store from '../../store/store';
import Hr from '../../lib/hr';

export default class FourthScreenComponent extends Component {
    ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    constructor (props){
        super(props);
        this.state = {
            isLoading : true,
            pageArray : []
        };
    }

    renderFifthScreen(){
        let {height, width} = Dimensions.get('window');
        return (
            <Container style={styles.container}>
                <Header style={{backgroundColor:'#1dc1d5'}}>
                    <Button
                        onPress = {() => {
                            requestAnimationFrame(() => {
                                store.dispatch({
                                type : 'OPEN_DRAWER'
                                })
                            });
                        }}
                        transparent>
                        <Icon name='md-menu' style={{color:'white'}}/>
                    </Button>
                    <Title style={[styles.colorWhite, styles.fontAvenir]}>PROCURA ROTEIRO</Title>
                </Header>
                <Content>
                    <View style={{padding:10, marginTop:10}}>
                        <View style={{backgroundColor:'#f5f5f5', height:50, borderRadius:10, marginTop:15}}>
                            <View style={{ alignItems:'flex-start', padding:10, flexDirection:'row', justifyContent:'space-around'}}>
                                <View style={{flexDirection:'row'}}>
                                    <Text style={{fontFamily: 'Avenir Next', color:'#16c1d5', fontSize:25, fontWeight:'bold', marginRight:10,marginTop:-5}}>|</Text>
                                    <TextInput placeholder="Nome de Roterio" style={{height:30, width:width*0.7}}/>
                                </View>
                                <Icon name='ios-arrow-down-outline' style={{color:'grey'}}/>
                            </View>
                        </View>
                        <View style={{backgroundColor:'#f5f5f5', height:50, borderRadius:10, marginTop:15}}>
                            <View style={{ alignItems:'flex-start', padding:10, flexDirection:'row', justifyContent:'space-around'}}>
                                <View style={{flexDirection:'row'}}>
                                    <Text style={{fontFamily: 'Avenir Next', color:'#16c1d5', fontSize:25, fontWeight:'bold', marginRight:10,marginTop:-5}}>|</Text>
                                    <TextInput placeholder="Nome de Roterio" style={{height:30, width:width*0.7}}/>
                                </View>
                                <Icon name='ios-arrow-down-outline' style={{color:'grey'}}/>
                            </View>
                        </View>
                    </View>
                    <View style={{padding:20,  marginTop:-20}}>
                        <TouchableHighlight
                            underlayColor="#f5f5f5"
                            onPress = {()=>{}}
                        >
                            <View style={{paddingTop:10, paddingBottom:10}}>
                                <View style={{marginBottom:10, padding:5}}>
                                    <Text style={{fontFamily: 'Avenir Next', color:'#c1c1c1', fontSize:20}}>Praia Castelhanos - iiha Bel</Text>
                                </View>
                                <Hr lineColor='#ecf0f5' width="100"/>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            underlayColor="#f5f5f5"
                            onPress = {()=>{}}
                        >
                            <View style={{paddingTop:10, paddingBottom:10}}>
                                <View style={{marginBottom:10, padding:5}}>
                                    <Text style={{fontFamily: 'Avenir Next', color:'#c1c1c1', fontSize:20}}>Praia Castelhanos - iiha Bel</Text>
                                </View>
                                <Hr lineColor='#ecf0f5' width="100"/>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            underlayColor="#f5f5f5"
                            onPress = {()=>{}}
                        >
                            <View style={{paddingTop:10, paddingBottom:10}}>
                                <View style={{marginBottom:10, padding:5}}>
                                    <Text style={{fontFamily: 'Avenir Next', color:'#c1c1c1', fontSize:20}}>Praia Castelhanos - iiha Bel</Text>
                                </View>
                                <Hr lineColor='#ecf0f5' width="100"/>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            underlayColor="#f5f5f5"
                            onPress = {()=>{}}
                        >
                            <View style={{paddingTop:10, paddingBottom:10}}>
                                <View style={{marginBottom:10, padding:5}}>
                                    <Text style={{fontFamily: 'Avenir Next', color:'#c1c1c1', fontSize:20}}>Praia Castelhanos - iiha Bel</Text>
                                </View>
                                <Hr lineColor='#ecf0f5' width="100"/>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            underlayColor="#f5f5f5"
                            onPress = {()=>{}}
                        >
                            <View style={{paddingTop:10, paddingBottom:10}}>
                                <View style={{marginBottom:10, padding:5}}>
                                    <Text style={{fontFamily: 'Avenir Next', color:'#c1c1c1', fontSize:20}}>Praia Castelhanos - iiha Bel</Text>
                                </View>
                                <Hr lineColor='#ecf0f5' width="100"/>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            underlayColor="#f5f5f5"
                            onPress = {()=>{}}
                        >
                            <View style={{paddingTop:10, paddingBottom:10}}>
                                <View style={{marginBottom:10, padding:5}}>
                                    <Text style={{fontFamily: 'Avenir Next', color:'#c1c1c1', fontSize:20}}>Praia Castelhanos - iiha Bel</Text>
                                </View>
                                <Hr lineColor='#ecf0f5' width="100"/>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            underlayColor="#f5f5f5"
                            onPress = {()=>{}}
                        >
                            <View style={{paddingTop:10, paddingBottom:10}}>
                                <View style={{marginBottom:10, padding:5}}>
                                    <Text style={{fontFamily: 'Avenir Next', color:'#c1c1c1', fontSize:20}}>Praia Castelhanos - iiha Bel</Text>
                                </View>
                                <Hr lineColor='#ecf0f5' width="100"/>
                            </View>
                        </TouchableHighlight>
                    </View>
                </Content>
            </Container>
        );
    }
    render() {
        return this.renderFifthScreen();
    }
}
const styles = StyleSheet.create({
    container:{

    },
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
    fontAvenir : {
        fontFamily: 'AvenirNext-Medium'
    },
    header : {
        backgroundColor : '#00638c'
    },
    footer : {
        backgroundColor:'#f39c12'
    },
    content : {
        backgroundColor:'#EBF4FA',
        flex : 1
    },
    wrapper:{
        height:400
    }
});