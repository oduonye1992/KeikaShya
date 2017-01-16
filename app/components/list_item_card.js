import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableHighlight } from 'react-native';
import Hr from '../lib/hr';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon } from 'native-base';
import StarRating from 'react-native-star-rating';
export default class ListItemCard extends Component{
    constructor (props) {
        super(props);
    }
    render(){
        return (
            <View>
                    <Card style={{ flex: 0 }}>
                        <CardItem>
                            <View style={{flexDirection : 'row', justifyContent:'space-between'}}>
                                <View>
                                    <Text style={{fontFamily: 'AvenirNext-Medium', fontWeight:'bold', fontSize:15}}>{this.props.text}</Text>
                                    <Text style={{fontFamily: 'AvenirNext-Medium', color:'grey'}}>Hong Kong</Text>
                                    <Text style={{fontFamily: 'AvenirNext-Medium', color:'grey'}}>$199</Text>
                                    <Text style={{fontFamily: 'AvenirNext-Medium', color:'grey'}}>No Internet Order</Text>
                                </View>
                                <View>
                                    <Image source={{uri: 'https://exp.cdn-hotels.com/hotels/1000000/50000/45800/45775/45775_148_z.jpg'}}
                                           style={{width: 100, height: 80}} />
                                </View>
                            </View>
                        </CardItem>
                    </Card>
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