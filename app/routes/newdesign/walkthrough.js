import React, { Component } from 'react';
import { Text, StyleSheet, ListView, View, Image, ScrollView, TouchableHighlight, AsyncStorage } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import {Actions} from 'react-native-router-flux';
import AppIntro from 'react-native-app-intro';
import { Pulse } from 'react-native-loader';
import QueryBuilder from '../../config/settings';


export default class WalkthroughComponent extends Component {
    ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    constructor (props){
        super(props);
        this.state = {
            isLoading : true,
            pageArray : []
        };
        this.checkFirstTImer();
    }
    nextBtnHandle(){}
    doneBtnHandle(){
        Actions.choosehotel();
    }
    async checkFirstTImer(){
        const isFirstTIme = await AsyncStorage.getItem('firstTimeMarker');
        if(!isFirstTIme){
            this.fetchImages();
            await AsyncStorage.setItem('firstTimeMarker', 'true');
        } else {
            Actions.choosehotel();
        }
    }

    fetchImages(){
        var endpoint = QueryBuilder.endpoint+'splash_screen';
        fetch(endpoint)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading : false,
                    pageArray: responseJson
                });
            })
            .catch((error) => {
                alert(error);
            });
    }
    onSkipBtnHandle(){}
    onSlideChangeHandle(){}
    render(){
        if (this.state.isLoading){
            return (
                <View style={{alignItems:'center', justifyContent:'center', flex:1}}>
                    <Pulse size={30} color="#3498db" />
                </View>
            );
        } else {
            return (
                <Container style={styles.container}>
                    <Header style={styles.header}>
                        <Button transparent>
                            <Icon name='md-menu' style={styles.colorWhite}/>
                        </Button>
                        <Title style={[styles.colorWhite, styles.fontAvenir]}>TRAVEL SURFER</Title>
                        <Button transparent >
                            <Icon name='md-add' style={styles.colorWhite}/>
                        </Button>
                    </Header>
                    <Content style={styles.content}>
                        <View style={{marginTop:-180}}>
                            <AppIntro
                                dotColor = "#bdc3c7"
                                activeDotColor = "#00638c"
                                onNextBtnClick={this.nextBtnHandle}
                                onDoneBtnClick={this.doneBtnHandle}
                                onSkipBtnClick={this.onSkipBtnHandle}
                                onSlideChange={this.onSlideChangeHandle}
                                rightTextColor = "#2c3e50"
                                leftTextColor = "#2c3e50"
                                pageArray={this.state.pageArray}
                            />
                        </View>
                    </Content>

                    <Footer style={styles.footer}>
                        <TouchableHighlight
                            onPress={this.doneBtnHandle}
                        >
                            <Text style={{fontWeight : 'bold', fontSize:22}}>ADD A JOURNEY</Text>
                        </TouchableHighlight>
                    </Footer>

                </Container>
            );
        }
    }
}
const styles = StyleSheet.create({
    container:{

    },
    colorWhite : {
      color: 'white',
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },
    fontAvenir : {
        fontFamily: 'AvenirNext-Medium'
    },
    header : {
        backgroundColor : '#00638c'
    },
    footer : {
        backgroundColor:'#f39c12'
    },
    content : {
        backgroundColor:'#EBF4FA',
        flex : 1
    },
    wrapper:{
        height:400
    }
});