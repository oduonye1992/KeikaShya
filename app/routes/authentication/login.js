import React, {Component, PropTypes} from 'react';
import {View, StyleSheet, Text, TouchableHighlight, TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import {Actions} from 'react-native-router-flux';
export default class LoginComponent extends Component{
    constructor (props){
        super(props);
    }
    openPinPage(){
        Actions.accounts();
    }
    render (){
        return(
                <Container style={styles.container}>
                    <Header style={{backgroundColor:'#2980b9'}}>
                        <Button
                            onPress={Actions.pop}
                            transparent>
                            <Icon name='ios-arrow-round-back-outline' style={{color:'white'}}/>
                        </Button>
                        <Title style={[styles.headerButton, styles.fontAvenir, {color:'white'}]}></Title>
                    </Header>
                    <Content style={{backgroundColor:'#2980b9', padding:10}}>
                        <LinearGradient colors={['#2980b9', '#2980b9']} style={styles.container}>
                            <Text style={styles.buttonText}>
                                Login To Keisha App
                            </Text>
                            <TextInput
                                placeholder = "Mobile"
                                style={{height: 70, fontSize : 30,  borderColor: 'white', color : 'white'}}
                            />
                            <TextInput
                                secureTextEntry = {true}
                                placeholder = "Password"
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
                                    Login
                                </Text>
                            </TouchableHighlight>
                            <View style={{width : 350,  marginTop : 140,  flexDirection : 'row', justifyContent : 'space-between', height : 60, alignItems : 'center', padding : 15}}>
                                <Text  style={{
                        fontFamily: 'AvenirNext-Regular',
                        textAlign : 'center',
                        fontSize : 15,
                        backgroundColor : 'transparent',
                        color : 'white'
                    }}>
                                    Forgot Password?
                                </Text>
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