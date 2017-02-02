import React, { Component } from 'react';
import { Text, StyleSheet, TextInput, ListView, Dimensions,View, Image, ScrollView, TouchableHighlight, AsyncStorage } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import {Actions} from 'react-native-router-flux';
import store from '../../store/store';
import Hr from '../../lib/hr';

export default class FirstScreenComponent extends Component {
    ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    constructor (props){
        super(props);
        this.state = {
            isLoading : true,
            pageArray : []
        };
    }
    renderFirstPage(){
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
                        <Icon name='md-menu' style={{color:'white'}}/>
                    </Button>
                    <Title style={[styles.colorWhite, styles.fontAvenir]}></Title>
                </Header>
                <Content style={{backgroundColor:'#30c7d9'}}>
                    <View style={{height:height*0.84, alignItems:'center', justifyContent:'center'}}>
                        <TouchableHighlight
                            style={{borderWidth:1.5,alignItems:'center', justifyContent:'center', borderColor:'white',borderRadius:5,  width:width*0.8, height:height*0.22}}
                        >
                            <View style={{alignItems:'center'}}>
                                <Icon name='ios-folder-open' style={{color:'white', fontSize:80, fontWeight:'bold'}}/>
                                <Text style={{fontFamily: 'Avenir Next', color:'white', fontSize:13, fontWeight:'500'}}>ROTEIRO SALVO</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                </Content>
            </Container>
        );
    }
    renderSecondPage(){
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
                    <Title style={[styles.colorWhite, styles.fontAvenir]}>MINHA VIAGEM</Title>
                </Header>
                <Content>
                    <View style={{width:width, height:height*0.3}}>
                        <Image source={require('../../images/map.png')}
                               style={{width:width, height:height*0.3}}
                        />
                    </View>
                    <View style={{padding:25}}>
                        <View>
                            <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:10}}>
                                <Text style={{fontFamily: 'Avenir Next', color:'#16c1d5', fontSize:28, fontWeight:'bold'}}>Adicionar local</Text>
                                <TouchableHighlight
                                    style={{padding:2,paddingRight:7,paddingLeft:7, borderWidth:1, borderColor:'grey', borderRadius:100}}
                                >
                                    <View>
                                        <Icon name='ios-menu-outline' style={{color:'grey'}}/>
                                    </View>
                                </TouchableHighlight>
                            </View>
                            <Hr lineColor='#ecf0f1' width="100"/>
                            <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:10,marginTop:10}}>
                                <Text style={{fontFamily: 'Avenir Next', color:'#16c1d5', fontSize:23, marginTop:8}}>Mulu Marriot Resort</Text>
                                <TouchableHighlight
                                    style={{padding:2,paddingRight:7,paddingLeft:7, borderWidth:1, borderColor:'#16c1d5', borderRadius:100}}
                                >
                                    <View>
                                        <Icon name='ios-menu-outline' style={{color:'#16c1d5'}}/>
                                    </View>
                                </TouchableHighlight>
                            </View>
                            <Hr lineColor='#ecf0f1' width="100"/>
                            <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:10,marginTop:10}}>
                                <Text style={{fontFamily: 'Avenir Next', color:'grey', fontSize:23, marginTop:8}}>Mulu Marriot Resort</Text>
                                <TouchableHighlight
                                    style={{padding:2,paddingRight:7,paddingLeft:7, borderWidth:1, borderColor:'grey', borderRadius:100}}
                                >
                                    <View>
                                        <Icon name='ios-menu-outline' style={{color:'grey'}}/>
                                    </View>
                                </TouchableHighlight>
                            </View>
                            <Hr lineColor='#ecf0f1' width="100"/>
                            <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:10,marginTop:10}}>
                                <Text style={{fontFamily: 'Avenir Next', color:'grey', fontSize:23, marginTop:8}}>Sungai River</Text>
                                <TouchableHighlight
                                    style={{padding:2,paddingRight:7,paddingLeft:7, borderWidth:1, borderColor:'grey', borderRadius:100}}
                                >
                                    <View>
                                        <Icon name='ios-menu-outline' style={{color:'grey'}}/>
                                    </View>
                                </TouchableHighlight>
                            </View>
                            <Hr lineColor='#ecf0f1' width="100"/>
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
    renderThirdPage(){
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
                    <Title style={[styles.colorWhite, styles.fontAvenir]}>MINHA VIAGEM</Title>
                </Header>
                <Content>
                    <View>
                        <View style={{height:height*0.3, width:width}}>
                            <Image
                                style={{height:height*0.3, width:width}}
                                source={require('../../images/placeholder.png')}>
                                <View style={{alignItems:'flex-start', justifyContent:'center', padding:20, marginTop:20}}>
                                    <Image
                                        style={{height:70, width:70, borderWidth:3, borderColor:'white', marginTop:12, borderRadius:5}}
                                        source={require('../../images/map.png')} />
                                    <Text style={{fontFamily: 'Avenir Next', color:'white', fontSize:22, fontWeight:'bold', marginTop:5}}>GUNUNG MULU</Text>
                                    <Text style={{fontFamily: 'Avenir Next', color:'white', fontSize:16, fontWeight:'300'}}>TREKKING</Text>
                                </View>
                            </Image>
                        </View>
                        <View style={{height:height*0.3, width:width}}>
                            <Image
                                style={{height:height*0.3, width:width}}
                                source={require('../../images/placeholder.png')}>
                                <View style={{alignItems:'flex-start', justifyContent:'center', padding:20, marginTop:20}}>
                                    <Image
                                        style={{height:70, width:70, borderWidth:3, borderColor:'white', marginTop:12, borderRadius:5}}
                                        source={require('../../images/map.png')} />
                                    <Text style={{fontFamily: 'Avenir Next', color:'white', fontSize:22, fontWeight:'bold', marginTop:5}}>GUNUNG MULU</Text>
                                    <Text style={{fontFamily: 'Avenir Next', color:'white', fontSize:16, fontWeight:'300'}}>TREKKING</Text>
                                </View>
                            </Image>
                        </View>
                        <View style={{height:height*0.3, width:width}}>
                            <Image
                                style={{height:height*0.3, width:width}}
                                source={require('../../images/placeholder.png')}>
                            </Image>
                        </View>
                    </View>
                </Content>
            </Container>
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
                        <Icon name='ios-menu-outline' style={{color:'white'}}/>
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
        return this.renderFirstPage();
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