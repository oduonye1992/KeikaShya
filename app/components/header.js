import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, TouchableHighlight } from 'react-native'
import {Actions} from 'react-native-router-flux';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon } from 'native-base';
export default class HeaderComponent extends Component{

    constructor (props) {
        super(props);
    }
    render(){
        return (
            <Container style={styles.container}>
                <Content style={styles.content}>
                    <View>
                        <View style={{height:200, backgroundColor : '#ecf0f1', alignItems:'center', justifyContent:'center'}}>
                            <Image style={styles.image} source={{uri: 'https://source.unsplash.com/random/100x100'}}/>
                        </View>
                    </View>
                    <View style={{padding:10}}>
                        <View style={{flexDirection:'row', justifyContent:'flex-start', paddingBottom:20}}>
                            <Icon name='ios-chatbubbles-outline' style={[styles.headerButton, {color:'#34495e'}]}/>
                            <Text style={{padding:6, marginLeft : 10, fontWeight:'bold', fontFamily: 'Avenir Next', color : '#34495e'}}>Analytics</Text>
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'flex-start',paddingBottom:20}}>
                            <Icon name='ios-people-outline' style={[styles.headerButton, {color:'#e74c3c'}]}/>
                            <Text style={{padding:6, marginLeft : 10,fontWeight:'bold', fontFamily: 'Avenir Next', color : '#e74c3c'}}>Parents</Text>
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'flex-start',paddingBottom:20}}>
                            <Icon name='ios-cash-outline' style={[styles.headerButton, {color:'#34495e'}]}/>
                            <Text style={{padding:6, marginLeft : 10,fontWeight:'bold', fontFamily: 'Avenir Next', color : '#34495e'}}>Fees</Text>
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'flex-start',paddingBottom:20}}>
                            <Icon name='ios-card-outline' style={[styles.headerButton, {color:'#34495e'}]}/>
                            <Text style={{padding:6, marginLeft : 10,fontWeight:'bold', fontFamily: 'Avenir Next', color : '#34495e'}}>Reciepts</Text>
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'flex-start',paddingBottom:20}}>
                            <Icon name='ios-cash-outline' style={[styles.headerButton, {color:'#34495e'}]}/>
                            <Text style={{padding:6, marginLeft : 10,fontWeight:'bold', fontFamily: 'Avenir Next', color : '#34495e'}}>Pending Fee</Text>
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'flex-start',paddingBottom:20}}>
                            <Icon name='ios-aperture-outline' style={[styles.headerButton, {color:'#34495e'}]}/>
                            <Text style={{padding:6, marginLeft : 10,fontWeight:'bold', fontFamily: 'Avenir Next', color : '#34495e'}}>Accounts</Text>
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'flex-start',paddingBottom:20}}>
                            <Icon name='ios-chatbubbles-outline' style={[styles.headerButton, {color:'#34495e'}]}/>
                            <Text style={{padding:6, marginLeft : 10,fontWeight:'bold', fontFamily: 'Avenir Next', color : '#34495e'}}>Messages</Text>
                        </View>

                    </View>
                </Content>
                <Footer >
                    <Footer style={styles.footer}>
                        <TouchableHighlight>
                            <Text style={styles.footerText}>Switch to Teacher</Text>
                        </TouchableHighlight>
                    </Footer>
                </Footer>
            </Container>
        );
    }
}
const styles = StyleSheet.create({
    footer : {
        backgroundColor : '#2c3e50'
    },
    footerText : {
        fontWeight : 'bold',
        fontSize : 15,
        color:'#bdc3c7',
        fontFamily: 'Avenir Next'
    },
    image: {
        height: 100,
        borderRadius: 50,
        width: 100
    },
    headerButton : {

    }
});