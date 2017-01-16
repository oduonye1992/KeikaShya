import React, {Component, PropTypes} from 'react';
import {View, StyleSheet, Text, TouchableHighlight, TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Actions} from 'react-native-router-flux';
import PasswordGesture from 'react-native-gesture-password';
export default class LoginComponent extends Component{
    constructor (props){
        super(props);
        this.state = {
            status : 'normal'
        }
    }
    openMainPrivate(){}
    onStart(){}
    onEnd(password){
        if (password == '123'){
            this.state.status = 'right';
            this.setState({
                status: 'right',
                message: 'Logging you in'
            });
            Actions.private_explore();
        } else {
            this.state.status = 'wrong';
            this.setState({
                status: 'wrong',
                message: 'Try again'
            });
        }
    }
    render (){
        return(
            <PasswordGesture
                ref='pg'
                status= {this.state.status}
                rightColor = "#1abc9c"
                wrongColor = "#e74c3c"
                style = {styles.container}
                textStyle = {styles.infoTitle}
                message="Please input your password."
                onStart={() => this.onStart()}
                onEnd={(password) => this.onEnd(password)}
            />
        );
    }
}
const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : 'flex-start',
        padding: 20,
        backgroundColor: '#2c3e50'
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
        color : '#ecf0f1',
        backgroundColor: 'transparent',
        fontSize : 20
    },
    infoDescription: {
        fontFamily: 'AvenirNext-Medium',
        color : '#ecf0f1',
        backgroundColor: 'transparent',
        fontSize : 12,
        marginTop : 14
    }
});