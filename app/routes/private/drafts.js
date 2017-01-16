import React, {Component, PropTypes} from 'react';
import {Actions} from 'react-native-router-flux';
import {View, StyleSheet, Text, TouchableHighlight, TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
export default class DraftComponent extends Component{
    constructor (props){
        super(props);
    }
    openLoginPage(){
        Actions.login();
    }
    render (){
        return(
            <LinearGradient colors={['#1abc9c', '#16a085']} style={styles.container}>
                <Text style={styles.buttonText}>
                    What's your realm?
                </Text>
                <TextInput
                    autoFocus = {true}
                    placeholder = "Team ID"
                    style={{height: 70, fontSize : 30,  borderColor: 'white', color : 'white'}}
                />

                <TouchableHighlight
                    style={styles.btnPrivate}
                    onPress={this.openLoginPage}>
                    <Text  style={{
                        fontFamily: 'AvenirNext-Medium',
                        textAlign : 'center',
                        fontSize : 20,
                        color : '#27ae60'
                    }}>
                        Search
                    </Text>
                </TouchableHighlight>
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
        color: 'white',
        marginTop : 120,
        fontFamily: 'AvenirNext-Medium',
        backgroundColor: 'transparent',
    },
    infoTitle : {
        fontFamily: 'AvenirNext-Medium',
        color : 'white',
        backgroundColor: 'transparent',
        fontSize : 15,
        marginTop : 80
    },
    infoDescription: {
        fontFamily: 'AvenirNext-Medium',
        color : 'white',
        backgroundColor: 'transparent',
        fontSize : 12,
        marginTop : 14
    }
});