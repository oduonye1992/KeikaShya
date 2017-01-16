import React, {Component, PropTypes} from 'react';
import {Actions} from 'react-native-router-flux';
import {View, StyleSheet, Text, TouchableHighlight, TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CompletedComponent from './completed';
import ErrorComponent from './errors';
import SentComponent from './sent';
import StatComponent from './stats';
import DraftComponent from './drafts';
import ScrollableTabView from 'react-native-scrollable-tab-view';
export default class ActivityComponent extends Component{
    constructor (props){
        super(props);
    }
    openLoginPage(){
        Actions.login();
    }
    render (){
        return(
            <ScrollableTabView style={{marginTop : 60}}>
                <CompletedComponent tabLabel="Completed" />
                <ErrorComponent tabLabel="Errors" />
                <SentComponent tabLabel="Sent" />
                <StatComponent tabLabel="Stats" />
            </ScrollableTabView>
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