import React, { Component } from 'react';
import { Text, StyleSheet, TextInput, ListView, Dimensions,View, Image, ScrollView, TouchableHighlight, AsyncStorage } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import {Actions} from 'react-native-router-flux';
import store from '../../store/store';
import Hr from '../../lib/hr';

export default class SixthScreenComponent extends Component {
    ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    constructor (props){
        super(props);
        this.state = {
            isLoading : true,
            pageArray : [],
            active : true
        };
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
                        <Icon name='md-menu' style={{color:'white'}}/>
                    </Button>
                    <Title style={[styles.colorWhite, styles.fontAvenir]}>MINHA VIAGEM</Title>
                </Header>
                <Content>
                    <View>
                        <View style={{height:height*0.3, width:width}}>
                            <Image
                                style={{height:height*0.3, width:width}}
                                source={require('../../images/sisthscreen.png')}>
                            </Image>
                        </View>
                        <View style={{
                            height:height*0.12,
                            width : width,
                        padding:20,
                        backgroundColor:'#1dc1d5',
                         flexDirection:'row',
                         justifyContent : 'center'
                         }}>
                            <View style={{width:width*0.6, justifyContent:'center'}}>
                                <Text style={{fontFamily: 'Avenir Next', color:'white', fontWeight:'bold', fontSize:25}}> MULU MARRIOT RESORT & SPA</Text>
                            </View>
                            <TouchableHighlight
                                style={{backgroundColor:'white', padding:10, alignItems:'center', justifyContent:'center', borderRadius:5}}
                            >
                                <Text style={{fontFamily: 'Avenir Next', color:'#1dc1d5'}}> EXTIVE AQUI </Text>
                            </TouchableHighlight>
                        </View>
                        <View style={{
                            height:height*0.12,
                            width : width,
                        padding:20,
                        backgroundColor:'#d7d7d7',
                        justifyContent:'center'
                         }}>
                            <View style={{flexDirection:'row', marginTop:-5}}>
                                <Icon name='md-pin' style={{color:'#7a7a7a', fontSize:20}}/>
                                <View style={{marginLeft:5, width:width*0.7}}>
                                    <Text style={{fontFamily: 'Avenir Next', color:'#7a7a7a', fontSize:15}}> Sungai Melinau, Box 1145, Mulu, Sarawak, Malasia </Text>
                                </View>
                            </View>
                            <View style={{flexDirection:'row', justifyContent:'space-between',marginTop:5}}>
                                <View style={{flexDirection:'row'}}>
                                    <Icon name='md-call' style={{color:'#7a7a7a', fontSize:20}}/>
                                    <Text style={{fontFamily: 'Avenir Next', color:'#7a7a7a'}}> +60 85-792 388 </Text>
                                </View>
                                <TouchableHighlight
                                    style={{borderWidth:1, borderColor:'#7a7a7a', marginTop:-10, padding:5, paddingRight:25, paddingLeft:25, borderRadius:5}}
                                >
                                    <Text style={{fontFamily: 'Avenir Next', color:'#7a7a7a'}}> Website </Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                        <View style={{padding:15, alignItems:'center'}}>
                            <Text style={{padding:5, fontFamily: 'Avenir Next', color:'#7a7a7a', fontSize:17}}>
                                This is Photoshop's version of Lorem ipsusm. Ppproin gravisa ae skjedjek vel ter vertitnd. Aeienen soliiilcon, lorem  nw nesdsldkn ssjds dsdnsdi sdns jdks. Diuid dr sdoi dsd amet nigb achasiuais cuuo a sd aasn sds. Mosdsd acusdiusd
                            </Text>
                            <View style={{backgroundColor:'#f5f5f5', height:50, borderRadius:10}}>
                                <View style={{ alignItems:'flex-start', padding:10, flexDirection:'row', justifyContent:'space-around'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{fontFamily: 'Avenir Next', color:'#16c1d5', fontSize:25, fontWeight:'bold', marginRight:10,marginTop:-5}}>|</Text>
                                        <TextInput placeholder="Tipo de Roterio" style={{height:30, width:width*0.4}}/>
                                    </View>
                                    <TouchableHighlight
                                        underlayColor="#f5f5f5"
                                        onPress = {() => {
                                        requestAnimationFrame(() => {
                                            this.setState({
                                                active : true
                                            })
                                        });
                                    }}
                                    >
                                        <View style={{flexDirection:'row', padding:8}}>
                                            <Icon name='ios-radio-button-on-outline' style={{color:this.state.active ? '#16c1d5' : 'grey', fontSize:16}}/>
                                            <Text style={{fontFamily: 'Avenir Next', color:'grey'}}> Publico</Text>
                                        </View>
                                    </TouchableHighlight>
                                    <TouchableHighlight
                                        underlayColor="#f5f5f5"
                                        onPress = {() => {
                                        requestAnimationFrame(() => {
                                            this.setState({
                                                active : false
                                            })
                                        });
                                    }}
                                    >
                                        <View style={{flexDirection:'row', marginLeft:10, padding:8}}>
                                            <Icon name='ios-radio-button-on-outline' style={{color:this.state.active ? 'grey' : '#16c1d5', fontSize:16}}/>
                                            <Text style={{fontFamily: 'Avenir Next', color:'grey'}}> Privado</Text>
                                        </View>
                                    </TouchableHighlight>
                                </View>
                            </View>
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