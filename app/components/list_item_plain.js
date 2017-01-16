import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, TouchableHighlight } from 'react-native';
import Hr from '../lib/hr';

export default class ListItemPlain extends Component{
    constructor (props) {
        super(props);
    }
    render(){
        return (
            <View>
                <TouchableHighlight
                    onPress={() => {
                        this.props.onClicked(this.props.text)
                    }}
                >
                    <View style={{flexDirection : 'row', padding : 10, alignItems:'center'}}>
                        <Image source={{uri: 'https://exp.cdn-hotels.com/hotels/1000000/50000/45800/45775/45775_148_z.jpg'}}
                               style={{width: 38, height: 28}} />
                        <View style={{marginLeft:10}}>
                            <Text
                                style={{
                                    fontFamily: 'AvenirNext-Medium',
                                    fontSize : 15,
                                    width:400,
                                    color : this.props.color
                                }}
                            >{this.props.text.name}
                            </Text>
                            <Text
                                style={{
                                    fontFamily: 'AvenirNext-Medium',
                                    fontSize : 15,
                                    width:400,
                                    color : 'grey'
                                }}
                            >{this.props.text.description}
                            </Text>
                        </View>
                    </View>

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