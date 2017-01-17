import React, {Component, PropTypes} from 'react';
import {View, StyleSheet, Text, TouchableHighlight, TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Actions} from 'react-native-router-flux';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon } from 'native-base';
export default class LoginComponent extends Component{
    constructor (props){
        super(props);
    }
    openPinPage(){
        Actions.private_pin();
    }
    render (){
        return(
                <Container style={styles.container}>
                    <Header style={{backgroundColor:'#2c3e50'}}>
                        <Button transparent>
                            <Icon name='ios-arrow-round-back-outline' style={{color:'white'}}/>
                        </Button>
                        <Title style={[styles.headerButton, styles.fontAvenir, {color:'white'}]}>People</Title>
                    </Header>
                    <Content style={{backgroundColor:'#2c3e50', padding:10}}>
                        <LinearGradient colors={['#2c3e50', '#2c3e50']} style={styles.container}>
                            <Text style={styles.buttonText}>
                                Join Travel Surfer
                            </Text>
                            <TextInput
                                autoFocus = {true}
                                placeholder = "Name"
                                placeholderTextColor = 'grey'
                                style={{height: 70, fontSize : 30,  borderColor: 'white', color : 'white'}}
                            />
                            <TextInput
                                autoFocus = {true}
                                placeholder = "Email"
                                placeholderTextColor = 'grey'
                                style={{height: 70, fontSize : 30,  borderColor: 'white', color : 'white'}}
                            />
                            <TextInput
                                autoFocus = {true}
                                placeholder = "Password"
                                placeholderTextColor = 'grey'
                                style={{height: 70, fontSize : 30,  borderColor: 'white', color : 'white'}}
                            />

                            <TouchableHighlight
                                style={styles.btnPrivate}
                                onPress={this.openPinPage}>
                                <Text  style={{
                                    fontFamily: 'AvenirNext-Medium',
                                    textAlign : 'center',
                                    fontSize : 20,
                                    color : 'white'
                                }}>
                                    Register
                                </Text>
                            </TouchableHighlight>
                            <View style={{width : 350,  marginTop : 150,  flexDirection : 'row', justifyContent : 'space-between', height : 60, alignItems : 'center', padding : 15}}>
                                <Text  style={{
                        fontFamily: 'AvenirNext-Regular',
                        textAlign : 'center',
                        fontSize : 15,
                        backgroundColor : 'transparent',
                        color : 'white'
                    }}>
                                    Already a user?
                                </Text>
                                <TouchableHighlight
                                    style={styles.btnFooter}
                                    underlayColor = "#ecf0f1"
                                    onPress={Actions.private_previous_realm}
                                >
                                    <Text  style={{
                            fontFamily: 'AvenirNext-Medium',
                            textAlign : 'center',
                            fontSize : 20,
                            color : 'white',
                            marginTop : -14
                        }}>
                                        Login
                                    </Text>
                                </TouchableHighlight>
                            </View>
                        </LinearGradient>
                    </Content>
                </Container>
        );
    }
}
const styles = StyleSheet.create({
    container : {
        flex : 1
    },
    btnPublic : {
        backgroundColor: 'white',
        padding : 10,
        borderRadius : 400,
        width : 330,
        marginTop : 35,
    },
    btnPrivate : {
        borderWidth:1,
        borderColor:'white',
        padding : 10,
        borderRadius : 5,
        width : 150,
        marginTop : 15,
    },
    btnFooter : {
        backgroundColor: 'transparent',
        width : 180,
        padding : 20,
        borderColor: 'white',
        borderWidth: 1
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
        fontSize : 15
    },
    infoDescription: {
        fontFamily: 'AvenirNext-Medium',
        color : 'white',
        backgroundColor: 'transparent',
        fontSize : 12,
        marginTop : 14
    }
});