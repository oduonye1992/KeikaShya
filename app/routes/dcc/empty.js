import React, { Component } from 'react';
import {View, StyleSheet, TextInput,
    TouchableHighlight,
    ScrollView, ListView,Text, Image, AsyncStorage, Dimensions} from 'react-native';
import { Container, Header, Title, Content,Button, Footer, FooterTab, Icon } from 'native-base';
export default class EmptyStateComponent extends Component{
    constructor (props) {
        super(props);
    }
    renderButton(){
        if (!this.props.showButton){
            return null;
        }
        return (
            <TouchableHighlight
                underlayColor="#ecf0f1"
                style={{borderWidth:1, borderColor:'#2980b9', padding:15, paddingLeft:40, paddingRight:40, borderRadius: 5, marginTop:30}}
                onPress = {() => {
                    requestAnimationFrame(() => {
                            this.props.onClick()
                        }
                    )
                }}
            >
                <Text style={{fontFamily: 'AvenirNext-Medium', color:'#2980b9'}}>{this.props.btnText}</Text>
            </TouchableHighlight>
        );
    }
    render(){
        return (
            <View style={{flex:1, padding:20,
                height:Dimensions.get('window').height - 100,
                alignItems:'center', justifyContent:'center'}}>
                <View style={{alignItems:'center'}}>
                    <Icon name = {this.props.icon} style={{fontSize: 100, color:'#bdc3c7'}}/>
                    <Text style={{marginTop:20, fontFamily: 'AvenirNext-Medium', color:'#bdc3c7', fontSize:20, fontWeight:'bold'}}>{this.props.title}</Text>
                    <Text style={{marginTop:10, fontFamily: 'AvenirNext-Medium', color:'#bdc3c7'}}>{this.props.description}</Text>
                    {this.renderButton()}
                </View>
            </View>
        );
    }
}
