import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, TouchableHighlight } from 'react-native';
import Hr from '../lib/hr';
export default class ListItemNormalComponent extends Component{
    constructor (props) {
        super(props);
    }
    render(){
        return (
            <View>
                <TouchableHighlight>
                    <Text
                        style={{
                            fontFamily: 'AvenirNext-Medium',
                            paddingTop : 25,
                            paddingBottom : 25,
                            fontSize : 20,
                            width:400,
                            color : this.props.color
                        }}
                    >{this.props.text}
                    </Text>
                </TouchableHighlight>
                <Hr lineColor='#ecf0f1' width="100"/>
                </View>

        );
    }
}
const styles = StyleSheet.create({
    supportText4 : {
        fontFamily: 'AvenirNext-Medium',
        color : 'white',
        backgroundColor: 'transparent',
        fontSize : 12,
        fontWeight : '900'
    },
    supportText4Place : {
        fontFamily: 'AvenirNext-Medium',
        color : 'black',
        backgroundColor : 'white',
        borderRadius : 4,
        width : 60,
        textAlign : 'center',
        fontSize : 12,
        fontWeight : '900',
        alignItems: 'center'
    },
    supportText3 : {
        fontFamily: 'AvenirNext-Medium',
        color : 'black',
        backgroundColor: 'transparent',
        fontSize : 15,
        fontWeight : 'bold',
        marginTop : 8
    },
    supportText2 : {
        fontFamily: 'AvenirNext-Medium',
        color : 'grey',
        backgroundColor: 'transparent',
        fontSize : 15,
        marginTop : 8
    },
    supportText1 : {
        fontFamily: 'AvenirNext-Medium',
        color : 'grey',
        backgroundColor: 'transparent',
        fontSize : 15,
        marginTop : 8
    },
    infoDescription: {
        fontFamily: 'AvenirNext-Medium',
        color : 'white',
        backgroundColor: 'transparent',
        fontSize : 12,
        marginTop : 14
    }
});