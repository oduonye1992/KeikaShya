import React, { Component } from 'react';
import { Text, StyleSheet, ListView, View ,Image, ScrollView, TouchableHighlight} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon } from 'native-base';

export default class ListWithIconAndDetailsComponent extends Component{
    constructor (props) {
        super(props);
    }
    render(){
        return (
            <TouchableHighlight
                onPress = {this.props.onClick}
                underlayColor="#ffeeff"
            >
                <View style={{flexDirection:'row', marginTop:10}}>
                    <View>
                        <Icon name={this.props.icon} style={{fontSize:40, color:'#34495e'}}/>
                    </View>
                    <View style={{padding : 5, marginLeft:10}}>
                        <Text style={{fontFamily: 'Avenir Next', color:'#34495e', fontSize:14, fontWeight:'600'}}>{this.props.title}</Text>
                        <Text style={{fontFamily: 'Avenir Next', color:'#7f8c8d', fontSize:13}}>{this.props.description}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({

});