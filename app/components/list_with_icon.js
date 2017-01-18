import React, { Component } from 'react';
import { Text, StyleSheet, ListView, View ,Image, ScrollView, TouchableHighlight} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon } from 'native-base';

export default class ListWithIconComponent extends Component{
    constructor (props) {
        super(props);
    }
    onClick(){
        this.props.onClick(this.props.data);
    }
    render(){
        return (
            <TouchableHighlight
                onPress={this.onClick.bind(this)}
            >
                <View style={{padding : 10}}>
                    <View style={{flexDirection:'row', justifyContent:'flex-start', paddingBottom:20}}>
                        <Icon name={this.props.icon} style={[{color:'#34495e'}]}/>
                        <Text style={{padding:6, marginLeft : 10, fontWeight:'bold', fontFamily: 'Avenir Next', color : '#34495e'}}>{this.props.title}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({

});