import React, { Component } from 'react';
import { Text, StyleSheet, TextInput, ListView, Dimensions,View, Image, ScrollView, TouchableHighlight, AsyncStorage } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import {Actions} from 'react-native-router-flux';
import store from '../../store/store';
import Hr from '../../lib/hr';
import LinearGradient from 'react-native-linear-gradient';

export default class EightScreenComponent extends Component {
    ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    constructor (props){
        super(props);
        this.state = {
            isLoading : true,
            pageArray : []
        };
    }
    renderThirdPage(){
        let {height, width} = Dimensions.get('window');
        return (
            <View style={{flex:1, backgroundColor:'#006376'}}>
                <Image source={require('../../images/texture.png')} style={{flex:1, width:width}}>
                    <TouchableHighlight
                        style={{flex:1}}
                    >
                        <LinearGradient colors={['#7cffe0', '#004558']}>
                            <View style={{height:height*0.5, padding:10, alignItems:'center' , justifyContent:'center', marginTop:height*0.015}}>
                                <Image source={require('../../images/birdicon.png')} style={{height:100, width:100, borderWidth:4, borderRadius:4, borderWidthColor:'black'}} />
                                <Image source={require('../../images/birdicon_other.png')} resizeMode='contain' style={{marginTop:30,height:100, width:width*0.9}} />
                            </View>
                            <View style={{height:height*0.45, padding:20, justifyContent:'center', alignItems:'center', marginTop:-height*0.03}}>
                                <TouchableHighlight
                                    style={{borderWidth:1, borderColor:'white', height:150, width:150, justifyContent:'center', alignItems:'center', borderRadius:100}}
                                >
                                    <TouchableHighlight
                                        underlayColor="white"
                                        onPress = {() => {
                                            requestAnimationFrame(() => {
                                                Actions.first_screen();
                                            });
                                        }}
                                        style={{ backgroundColor:'#16c0d4', height:130, width:130, justifyContent:'center', alignItems:'center', borderRadius:100}}
                                    >
                                        <Text style={{fontFamily: 'Avenir Next', color:'white', fontSize:20, fontWeight:'bold'}}>INICIAR</Text>
                                    </TouchableHighlight>
                                </TouchableHighlight>
                            </View>
                            <View style={{alignItems:'center', flexDirection:'row', padding:14}}>
                                <Text style={{fontFamily: 'Avenir Next', color:'white', fontSize:10, fontWeight:'bold', backgroundColor:'transparent'}}>BIRDY APP @ 2014 </Text>
                                <Text style={{fontFamily: 'Avenir Next', color:'white',fontSize:10 }}> TODDS OD DIREITOS RESERERVADOS DSLDASLKM</Text>
                            </View>
                        </LinearGradient>
                    </TouchableHighlight>
                </Image>
            </View>
        );
    }
    renderFourthScreen(){
        let {height, width} = Dimensions.get('window');
        return (
            <Container style={styles.container}>
                <Header style={{backgroundColor:'#1dc1d5'}}>
                    <Button
                        onPress = {() => {
                            store.dispatch({
                                type : 'OPEN_DRAWER'
                            })
                        }}
                        transparent>
                        <Text style={{fontFamily: 'Avenir Next', color:'white'}}> MULU MARRIOT RESORT & SPA</Text>
                        <TouchableHighlight>
                            <Text style={{fontFamily: 'Avenir Next', color:'grey'}}> EXTIVE AQUI </Text>
                        </TouchableHighlight>
                    </Button>
                    <Title style={[styles.colorWhite, styles.fontAvenir]}>MINHA VIAGEM</Title>
                </Header>
                <Content>
                    <View style={{padding:20, marginTop:20}}>
                        <View style={{backgroundColor:'#f5f5f5', height:50, borderRadius:10}}>
                            <View style={{ alignItems:'flex-start', padding:10, flexDirection:'row', justifyContent:'space-around'}}>
                                <View style={{flexDirection:'row'}}>
                                    <Text style={{fontFamily: 'Avenir Next', color:'#16c1d5', fontSize:25, fontWeight:'bold', marginRight:10,marginTop:-5}}>|</Text>
                                    <TextInput placeholder="Nome de Roterio" style={{height:30, width:width*0.8}}/>
                                </View>
                            </View>
                        </View>
                        <View style={{flexDirection:'row',marginTop:10}}>
                            <View style={{backgroundColor:'#f5f5f5', height:50, borderRadius:10, marginTop:10}}>
                                <View style={{ alignItems:'flex-start', padding:10, flexDirection:'row', justifyContent:'space-around'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{fontFamily: 'Avenir Next', color:'#16c1d5', fontSize:25, fontWeight:'bold', marginRight:10,marginTop:-5}}>|</Text>
                                        <TextInput placeholder="Data partida" style={{height:30, width:width*0.33}}/>
                                    </View>
                                </View>
                            </View>
                            <View style={{backgroundColor:'#f5f5f5', height:50, borderRadius:10, marginTop:10, marginLeft:10}}>
                                <View style={{ alignItems:'flex-start', padding:10, flexDirection:'row', justifyContent:'space-around'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{fontFamily: 'Avenir Next', color:'#16c1d5', fontSize:25, fontWeight:'bold', marginRight:10,marginTop:-5}}>|</Text>
                                        <TextInput placeholder="Data Roterio" style={{height:30, width:width*0.33}}/>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{backgroundColor:'#f5f5f5', height:50, borderRadius:10, marginTop:15}}>
                            <View style={{ alignItems:'flex-start', padding:10, flexDirection:'row', justifyContent:'space-around'}}>
                                <View style={{flexDirection:'row'}}>
                                    <Text style={{fontFamily: 'Avenir Next', color:'#16c1d5', fontSize:25, fontWeight:'bold', marginRight:10,marginTop:-5}}>|</Text>
                                    <TextInput placeholder="Nome de Roterio" style={{height:30, width:width*0.8}}/>
                                </View>
                                <Icon name='ios-menu-outline' style={{color:'grey'}}/>
                            </View>
                        </View>
                        <View style={{backgroundColor:'#f5f5f5', height:50, borderRadius:10, marginTop:15}}>
                            <View style={{ alignItems:'flex-start', padding:10, flexDirection:'row', justifyContent:'space-around'}}>
                                <View style={{flexDirection:'row'}}>
                                    <Text style={{fontFamily: 'Avenir Next', color:'#16c1d5', fontSize:25, fontWeight:'bold', marginRight:10,marginTop:-5}}>|</Text>
                                    <TextInput placeholder="Tipo de Roterio" style={{height:30, width:width*0.4}}/>
                                </View>
                                <View style={{flexDirection:'row', padding:8}}>
                                    <Icon name='ios-menu-outline' style={{color:'#16c1d5', fontSize:16}}/>
                                    <Text style={{fontFamily: 'Avenir Next', color:'grey'}}> Publico</Text>
                                </View>
                                <View style={{flexDirection:'row', marginLeft:10, padding:8}}>
                                    <Icon name='ios-menu-outline' style={{color:'grey', fontSize:16}}/>
                                    <Text style={{fontFamily: 'Avenir Next', color:'grey'}}> Privado</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{marginTop:15}}>
                            <TouchableHighlight
                                style={{height:height*0.25, borderRadius:10, backgroundColor : '#16c1d5', justifyContent:'center', alignItems:'center'}}
                            >
                                <View style={{alignItems:'center'}}>
                                    <Icon name='ios-menu-outline' style={{color:'white', fontSize:60}}/>
                                    <View style={{alignItems:'center', width:width*0.5}}>
                                        <Text style={{fontFamily: 'Avenir Next', color:'white', fontSize:14, fontWeight:'500'}}>Adicione uma imagem para o seu roterio</Text>
                                    </View>
                                </View>
                            </TouchableHighlight>
                        </View>

                        <View style={{marginTop:25}}>
                            <TouchableHighlight
                                style={{backgroundColor:'#16c1d5', borderRadius:10, padding:15, alignItems:'center'}}
                            >
                                <Text style={{fontFamily: 'Avenir Next', color:'white', fontSize:16, fontWeight:'500'}}>Adicionar local</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Content>
            </Container>
        );
    }
    renderFifthScreen(){
        let {height, width} = Dimensions.get('window');
        return (
            <Container style={styles.container}>
                <Header style={{backgroundColor:'#1dc1d5'}}>
                    <Button
                        onPress = {() => {
                            store.dispatch({
                                type : 'OPEN_DRAWER'
                            })
                        }}
                        transparent>
                        <Icon name='ios-menu-outline' style={{color:'white'}}/>
                    </Button>
                    <Title style={[styles.colorWhite, styles.fontAvenir]}>PROCURA ROTEIRO</Title>
                </Header>
                <Content>
                    <View style={{padding:20, marginTop:10}}>
                        <View style={{backgroundColor:'#f5f5f5', height:50, borderRadius:10, marginTop:15}}>
                            <View style={{ alignItems:'flex-start', padding:10, paddingLeft:20, paddingRight:20, flexDirection:'row', justifyContent:'space-around'}}>
                                <View style={{flexDirection:'row'}}>
                                    <Text style={{fontFamily: 'Avenir Next', color:'#16c1d5', fontSize:25, fontWeight:'bold', marginRight:10,marginTop:-5}}>|</Text>
                                    <TextInput placeholder="Nome de Roterio" style={{height:30, width:width*0.8}}/>
                                </View>
                                <Icon name='ios-menu-outline' style={{color:'grey'}}/>
                            </View>
                        </View>
                        <View style={{backgroundColor:'#f5f5f5', height:50, borderRadius:10, marginTop:15, marginBottom:10}}>
                            <View style={{ alignItems:'flex-start', padding:10, paddingLeft:20, paddingRight:20, flexDirection:'row', justifyContent:'space-around'}}>
                                <View style={{flexDirection:'row'}}>
                                    <Text style={{fontFamily: 'Avenir Next', color:'#16c1d5', fontSize:25, fontWeight:'bold', marginRight:10,marginTop:-5}}>|</Text>
                                    <TextInput placeholder="Nome de Roterio" style={{height:30, width:width*0.8}}/>
                                </View>
                                <Icon name='ios-menu-outline' style={{color:'grey'}}/>
                            </View>
                        </View>
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
        return this.renderThirdPage();
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