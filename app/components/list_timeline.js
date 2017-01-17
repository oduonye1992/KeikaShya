import React, { Component } from 'react';
import { Text, StyleSheet, ListView, View ,Image, ScrollView, TouchableHighlight} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon } from 'native-base';

export default class ListTimelineComponent extends Component{
    constructor (props) {
        super(props);
    }
    render(){
        return (
            <View style={{flexDirection:'row', marginTop:14}}>
                <View style={{justifyContent:'center', borderRightWidth:1, borderRightColor:'#95a5a6'}}>
                    <Text style={{fontFamily: 'Avenir Next', color:'#95a5a6', fontSize:14, fontWeight:'600', marginRight:10}}>{this.props.time}</Text>
                </View>
                <View style={{marginLeft:10}}>
                    <Text style={{fontFamily: 'Avenir Next', color:'#95a5a6', fontSize:14, fontWeight:'600'}}>{this.props.title}</Text>
                    <Text style={{fontFamily: 'Avenir Next', color:'#95a5a6', fontSize:14, fontWeight:'600'}}>{this.props.description} </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

});