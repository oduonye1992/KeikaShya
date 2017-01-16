import React, {Component, PropTypes} from 'react';
import {Actions} from 'react-native-router-flux';
import {View, StyleSheet, Text, TouchableHighlight, TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
export default class OffersComponent extends Component{
    constructor (props){
        super(props);
    }
    openLoginPage(){
        Actions.login();
    }
    render (){
        return(
            <LinearGradient colors={[]} style={styles.container}>
                <Text style={styles.buttonText}>
                    Offers
                </Text>
                <Text style={styles.infoTitle}>
                    What are offers?
                </Text>
                <Text style={styles.infoDescription}>
                    When a nex offer is available for a travel request you have placed, you will get a push notification and an email regarding the details of that offer here.
                </Text>
            </LinearGradient>
        );
    }
}
const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : 'flex-start',
        padding: 20
    },
    btnPublic : {
        backgroundColor: 'white',
        padding : 10,
        borderRadius : 400,
        width : 330,
        marginTop : 35,
    },
    btnPrivate : {
        backgroundColor: 'white',
        borderColor: 'white',
        padding : 10,
        borderWidth : 1,
        borderRadius : 400,
        width : 100,
        marginTop : 15,
    },
    buttonText: {
        fontSize: 33,
        color: '#34495e',
        marginTop : 30,
        fontFamily: 'AvenirNext-Medium',
        backgroundColor: 'transparent',
    },
    infoTitle : {
        fontFamily: 'AvenirNext-Medium',
        color : '#34495e',
        backgroundColor: 'transparent',
        fontSize : 15,
        marginTop : 80
    },
    infoDescription: {
        fontFamily: 'AvenirNext-Medium',
        color : '#34495e',
        backgroundColor: 'transparent',
        fontSize : 12,
        marginTop : 14
    }
});