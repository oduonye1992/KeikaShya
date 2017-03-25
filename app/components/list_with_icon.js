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
                underlayColor="black"
                onPress={() => {
                    requestAnimationFrame(() => {
                        this.onClick()
                    });
                }}
            >
                <View style={{padding : 10, paddingTop:10}}>
                    <View style={{flexDirection:'row', justifyContent:'flex-start', paddingBottom:10}}>
                        <View style={{width:30, justifyContent:'center'}}>
                            <Icon name={this.props.icon} style={[{color:'#4bb1ca', fontSize:23}]}/>
                        </View>
                        <View style={{justifyContent:'center'}}>
                            <Text style={{marginLeft : 10, fontSize:16, fontFamily: 'AvenirNext-Medium', color : '#d7d7dc'}}>{this.props.title}</Text>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({

});