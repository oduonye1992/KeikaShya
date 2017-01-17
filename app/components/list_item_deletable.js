import React, { Component } from 'react';
import { Text, StyleSheet, ListView, View ,Image, ScrollView, TouchableHighlight} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon } from 'native-base';

export default class hListItemDeletableComponent extends Component{
    constructor (props) {
        super(props);
    }
    render(){
        return (
            <TouchableHighlight
                onPress = {this.props.onClick}
                underlayColor="#ffeeff"
            >
                <View style={{flexDirection:'row', marginTop:10, justifyContent:'space-between'}}>
                    <View style={{flexDirection:'row'}}>
                        <View>
                            <Icon name={this.props.icon} style={{fontSize:40, color:'#bdc3c7'}}/>
                        </View>
                        <View style={{padding : 5, marginLeft:10}}>
                            <Text style={{fontFamily: 'Avenir Next', color:'#34495e', fontSize:14, fontWeight:'600'}}>{this.props.title}</Text>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{fontFamily: 'Avenir Next', color:'#7f8c8d', fontSize:13}}>{this.props.description1}</Text>
                                <Text style={{fontFamily: 'Avenir Next', marginLeft:5, color:'#7f8c8d', fontSize:13}}> | {this.props.description2}</Text>
                                <Text style={{fontFamily: 'Avenir Next', marginLeft:5, color:'#7f8c8d', fontSize:13}}>| {this.props.description3}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{justifyContent:'center'}}>
                        <Text style={{fontFamily: 'Avenir Next', color:'#3498db', fontSize:14, fontWeight:'600'}}>{this.props.description_side}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({

});