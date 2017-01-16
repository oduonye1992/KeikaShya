import React, {Component, PropTypes} from 'react';
import {Actions} from 'react-native-router-flux';
import {View, StyleSheet, Text, TouchableHighlight, TextInput, ListView, Image, ScrollView} from 'react-native';
import { Footer } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import ListItemNormalComponent from '../../components/list_item_normal';
export default class ProfileComponent extends Component{
    constructor (props){
        super(props);
        this.state = {}
    }
    openLoginPage(){
        Actions.login();
    }
    render (){
        return(
            <View style={{flex: 1}}>
                <ScrollView contentContainerStyle={styles.container}>
                    <Image source={{uri: 'https://lh3.ggpht.com/0Gp9St5vOEYPpiHVYmDaRe44gBDLkaGkEIq4AsAVirpD9svm-HdaBTXgh8lJNxPCbQE=h900'}}
                           style={{width: 380, height: 280}} />
                    <View style={{padding : 10}}>
                        <View >
                            <Text style={styles.buttonText}>Age of Horres</Text>
                        </View>
                    </View>
                    <View style={{flexDirection  : 'row', justifyContent : 'space-between'}}>
                        <Text style={styles.appAuthor}>
                            Gamified Inc
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.infoTitle}>
                            About this Applet
                        </Text>
                        <Text style={styles.infoDescription}>
                            Create and run all the apps you will ever need. Formelo now in a shiny new pack. You dont need all those apps on your phone when we've got you covered.
                            Create and run all the apps you will ever need. Formelo now in a shiny new pack. You dont need all those apps on your phone when we've got you covered.
                            Create and run all the apps you will ever need. Formelo now in a shiny new pack. You dont need all those apps on your phone when we've got you covered.
                            Create and run all the apps you will ever need. Formelo now in a shiny new pack. You dont need all those apps on your phone when we've got you covered.
                        </Text>
                    </View>
                </ScrollView>
                <View style={{flexDirection : 'row', justifyContent : 'space-between', height : 60, alignItems : 'center', padding : 15, borderWidth : 1, borderColor : '#ecf0f1'}}>
                    <Text  style={{
                        fontFamily: 'AvenirNext-Regular',
                        textAlign : 'center',
                        fontSize : 15,
                        color : '#34495e'
                    }}>
                        25k Likes
                    </Text>
                    <TouchableHighlight
                        style={styles.btnPrivate}
                        underlayColor = "#ecf0f1"
                    >
                        <Text  style={{
                            fontFamily: 'AvenirNext-Medium',
                            textAlign : 'center',
                            fontSize : 20,
                            color : 'white',
                            marginTop : -14
                        }}>
                            Launch
                        </Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : 'flex-start'
    },
    btnPublic : {
        backgroundColor: 'white',
        padding : 10,
        borderRadius : 400,
        width : 330,
        marginTop : 35,
    },
    btnPrivate : {
        backgroundColor: '#3498db',
        width : 150,
        padding : 20
    },
    appAuthor : {
        fontFamily: 'AvenirNext-Medium',
        color : '#34495e',
        backgroundColor: 'transparent',
        fontSize : 15,
        padding : 15,
        marginTop : -30,
        marginBottom : 25
    },
    buttonText: {
        fontSize: 40,
        fontWeight : '600',
        color: '#34495e',
        marginTop : 10,
        marginBottom : 30,
        fontFamily: 'AvenirNext-Medium',
        backgroundColor: 'transparent',
    },
    infoTitle : {
        fontFamily: 'AvenirNext-Medium',
        color : '#34495e',
        backgroundColor: 'transparent',
        fontSize : 20,
        padding : 15,
        marginTop : -30
    },
    infoDescription: {
        fontFamily: 'AvenirNext-Regular',
        color : '#34495e',
        backgroundColor: 'transparent',
        fontSize : 18,
        padding : 15,
        marginTop : -4
    }
});