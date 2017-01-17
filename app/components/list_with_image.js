import React, { Component } from 'react';
import { Text, StyleSheet, ListView, View ,Image, ScrollView, TouchableHighlight} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon } from 'native-base';

export default class ListWithImageComponent extends Component{
    constructor (props) {
        super(props);
    }
    render(){
        return (
            <View style={{flexDirection:'row', marginTop:10, justifyContent:'space-between'}}>
                <View style={{flexDirection:'row'}}>
                    <View>
                        <Image style={{height:50, width:50, borderRadius:5}} source={{uri: this.props.image}}/>
                    </View>
                    <View style={{padding : 5, marginLeft:10}}>
                        <Text style={{fontFamily: 'Avenir Next', color:'#34495e', fontSize:14, fontWeight:'600'}}>{this.props.title}</Text>
                        <Text style={{fontFamily: 'Avenir Next', color:'#7f8c8d', fontSize:13}}>{this.props.description}</Text>
                    </View>
                </View>
                <View style={{justifyContent : 'center'}}>
                    <Icon name={this.props.icon} style={{color:this.props.iconColor, fontSize:40}}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

});