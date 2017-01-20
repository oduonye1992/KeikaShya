import React, {Component, PropTypes} from 'react';
import {View, StyleSheet, Text, TouchableHighlight, TextInput, Image} from 'react-native';
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
    renderLoginSelection(){
        return (
            <View style={{alignItems:'center'}}>
                <View style={{paddingTop:25}}>
                    <Image
                        source={require('../../images/next_icon.png')}
                        style={{height:300, width:300}}
                    />
                </View>
                <View style={{paddingTop:80}}>
                    <TouchableHighlight
                        style={{backgroundColor : '#d06057', padding:15, width:350, alignItems:'center'}}
                    >
                        <Text style={{fontFamily: 'AvenirNext-Medium', color:'white'}}>Sign Up</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={{backgroundColor : 'white', borderWidth:1, borderColor:'#bdc3c7', padding:15, width:350, alignItems:'center', marginTop:10}}
                    >
                        <Text style={{fontFamily: 'AvenirNext-Medium', color:'#2c3e50'}}>Login</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={{backgroundColor : 'white', padding:15, width:350, alignItems:'center', marginTop:10}}
                    >
                        <Text style={{fontFamily: 'AvenirNext-Medium', color:'#2c3e50'}}>Forgot Password?</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
    renderLoginPage(){
        return (
            <View style={{alignItems:'center'}}>
                <View style={{paddingTop:25}}>
                    <Image
                        source={require('../../images/next_square.png')}
                        style={{height:300, width:300}}
                    />
                </View>
                <View style={{paddingTop:10}}>
                    <View style={{alignItems:'center'}}>
                        <View>
                            <Text style={{fontFamily: 'AvenirNext-Medium', color:'#2c3e50'}}>Mobile</Text>
                            <TextInput
                                style={{height: 40, borderBottomColor: 'gray', borderBottomWidth: 1}}
                            />
                        </View>
                        <View>
                            <Text style={{fontFamily: 'AvenirNext-Medium', color:'#2c3e50'}}>Password</Text>
                            <TextInput
                                style={{height: 40, borderBottomColor: 'gray', borderBottomWidth: 1}}
                            />
                        </View>
                    </View>
                    <TouchableHighlight
                        style={{backgroundColor : '#d06057', padding:15, marginTop:10, width:350, alignItems:'center'}}
                    >
                        <Text style={{fontFamily: 'AvenirNext-Medium', color:'white'}}>Login</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={{backgroundColor : 'white', padding:15, width:350, alignItems:'center', marginTop:10}}
                    >
                        <Text style={{fontFamily: 'AvenirNext-Medium', color:'#2c3e50'}}>Forgot Password?</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
    renderRegiterPage(){
        return (
            <View style={{alignItems:'center'}}>
                <View style={{marginTop:-30}}>
                    <Image
                        source={require('../../images/next_icon.png')}
                        style={{height:300, width:300}}
                    />
                </View>
                <View style={{paddingTop:1}}>
                    <View style={{alignItems:'center'}}>
                        <View>
                            <Text style={{fontFamily: 'AvenirNext-Medium', color:'#2c3e50'}}>Mobile</Text>
                            <TextInput
                                style={{height: 40, borderBottomColor: 'gray', borderBottomWidth: 1}}
                            />
                        </View>
                        <View>
                            <Text style={{fontFamily: 'AvenirNext-Medium', color:'#2c3e50'}}>Activation Code</Text>
                            <TextInput
                                style={{height: 40, borderBottomColor: 'gray', borderBottomWidth: 1}}
                            />
                        </View>
                        <View>
                            <Text style={{fontFamily: 'AvenirNext-Medium', color:'#2c3e50'}}>Password</Text>
                            <TextInput
                                style={{height: 40, borderBottomColor: 'gray', borderBottomWidth: 1}}
                            />
                        </View>
                    </View>
                    <TouchableHighlight
                        style={{backgroundColor : '#d06057', padding:15, marginTop:10, width:350, alignItems:'center'}}
                    >
                        <Text style={{fontFamily: 'AvenirNext-Medium', color:'white'}}>Login</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={{backgroundColor : 'white', padding:15, width:350, alignItems:'center', marginTop:10}}
                    >
                        <Text style={{fontFamily: 'AvenirNext-Medium', color:'#2c3e50'}}>Forgot Password?</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
    render (){
        return(
                <Container style={styles.container}>
                    <Header style={{backgroundColor:'white'}}>
                        <Button transparent>
                            <Icon name='ios-close-outline' style={[styles.headerButton, {}]}/>
                        </Button>
                        <Title style={[styles.headerButton, styles.fontAvenir, {color:'#2c3e50'}]}></Title>
                    </Header>
                    <Content style={{backgroundColor:'white', padding:10}}>
                        <View style={{alignItems:'center'}}>
                            <View style={{marginTop:60, height:100, alignItems:'center', justifyContent:'center'}}>
                                <Text style={{fontFamily: 'AvenirNext-Medium', color:'#2c3e50', fontSize:40}}>Verification</Text>
                                <View style={{width:280, alignItems:'center'}}>
                                    <Text style={{fontFamily: 'Avenir Next', color:'#2c3e50', fontSize:20, alignItems:'center'}}>A new password will be sen t your phone</Text>
                                </View>
                            </View>
                            <View style={{paddingTop:110}}>
                                <View style={{alignItems:'center'}}>
                                    <View>
                                        <Text style={{fontFamily: 'AvenirNext-Medium', color:'#2c3e50'}}>Activation Code</Text>
                                        <TextInput
                                            style={{height: 40, borderBottomColor: 'gray', borderBottomWidth: 1}}
                                        />
                                    </View>
                                    <View>
                                        <Text style={{fontFamily: 'AvenirNext-Medium', color:'#2c3e50'}}>Password</Text>
                                        <TextInput
                                            style={{height: 40, borderBottomColor: 'gray', borderBottomWidth: 1}}
                                        />
                                    </View>
                                </View>
                                <TouchableHighlight
                                    style={{backgroundColor : '#d06057', padding:15, marginTop:70, width:350, alignItems:'center'}}
                                >
                                    <Text style={{fontFamily: 'AvenirNext-Medium', color:'white'}}>Verify</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </Content>
                </Container>
        );
    }
}
const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor:'white'
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