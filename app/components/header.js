import React, { Component } from 'react';
import { View, Image, Text,ScrollView, Dimensions, StyleSheet, TouchableHighlight , ListView} from 'react-native'
import {Actions} from 'react-native-router-flux';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import ListWithIconComponent from './list_with_icon';
import AppSetting from '../config/settings';
import store from '../store/store';
export default class HeaderComponent extends Component{
    ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    constructor (props) {
        super(props);
        this.state = {
            dataSource: this.ds.cloneWithRows(
                [
                    {
                        title: 'Articles',
                        icon: 'ios-paper-outline'
                    },
                    {
                        title: 'Events',
                        icon: 'ios-calendar-outline'
                    },
                    {
                        title: 'Audio Messages',
                        icon: 'ios-musical-notes-outline'
                    },
                    {
                        title: 'Video Messages',
                        icon: 'ios-videocam-outline'
                    }
                    ,
                    {
                        title: 'Live Stream',
                        icon: 'ios-people-outline'
                    }
                ]
            ),
            secondDataSource: this.ds.cloneWithRows(
                [
                    {
                        title: 'Dome',
                        icon: 'ios-home-outline'
                    },
                    {
                        title: 'Office',
                        icon: 'ios-albums-outline'
                    },
                    {
                        title: 'Settings',
                        icon: 'ios-settings-outline'
                    }
                ]
            )
        };
    }
    renderProfileView(){
        return  (
            <View>
                <View style={{height:200, backgroundColor : '#ecf0f1', alignItems:'center', justifyContent:'center'}}>
                    <Image style={styles.image} source={{uri: 'https://source.unsplash.com/random/100x100'}}/>
                </View>
            </View>
        );
    }
    renderSidebar(){
        let {height, width} = Dimensions.get('window');
        return (
            <View style={{flex:1, backgroundColor:'#1d203b'}}>
                <View style={{ flexDirection:'row', padding:30, paddingTop:AppSetting.formatHeight(11),  borderBottomWidth:.3, borderColor:'#676a8a'}}>
                    <Image
                        style = {{height:40, width:40, borderRadius:20}}
                        source={require('../images/icon.png')} />
                    <View style={{marginLeft:10, justifyContent:'center'}}>
                        <Text style={{color:'white', fontFamily:'AvenirNext-Medium'}}>DCC Mobile</Text>
                        <Text style={{color:'#676a8a', fontFamily:'AvenirNext-Medium', fontSize:12}}>www.davidschristiancenter.org</Text>
                    </View>
                </View>
                <ScrollView>
                    <View style={{padding:30, borderBottomWidth:.3, borderColor:'#676a8a'}}>
                        <ListView
                            dataSource={this.state.dataSource}
                            renderRow= {
                                (rowData) => {
                                    return <ListWithIconComponent
                                        onClick = {this.onClick.bind(this)}
                                        title = {rowData.title}
                                        icon = {rowData.icon}
                                        data = {rowData}
                                    />
                                }
                            }
                        />
                    </View>
                    <View style={{padding:30}}>
                        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                            <Text style={{color:'#676a8a', fontFamily:'AvenirNext-Medium'}}>CONTACT</Text>
                            <Icon name="ios-map-outline" style={{color:'#38758f'}}/>
                        </View>
                        <ListView
                            dataSource={this.state.secondDataSource}
                            renderRow= {
                                (rowData) => {
                                    return <ListWithIconComponent
                                        onClick = {this.onSecondClick.bind(this)}
                                        title = {rowData.title}
                                        icon = {rowData.icon}
                                        data = {rowData}
                                    />
                                }
                            }
                        />
                    </View>
                </ScrollView>
            </View>
        );
    }
    onSecondClick(data) {
        if (data.title == 'Dome'){
            Actions.dome();
        } else if (data.title == 'Office'){
            Actions.office();
        } else if (data.title == 'Settings'){
            Actions.settings();
        }
        store.dispatch({
            type : 'CLOSE_DRAWER'
        })
    }
    onClick(data){
        if (data.title == 'Articles'){
            Actions.articles();
        } else if (data.title == 'Events'){
            Actions.events();
        } else if (data.title == 'Audio Messages'){
            Actions.audio();
        } else if (data.title == 'Video Messages'){
            Actions.video();
        } else if (data.title == 'Live Stream'){
            Actions.live_stream();
        }
        store.dispatch({
            type : 'CLOSE_DRAWER'
        })
    }
    renderUglySidebar(){
        return (
            <Container style={styles.container}>
                <Header style={{backgroundColor:'#8584d8'}}>
                    <Button
                        onPress = {() => {
                            Actions.pop()
                        }}
                        transparent>
                        <Icon name='ios-grid-outline' style={{color:'#8584d8'}}/>
                    </Button>
                    <Title style={[styles.headerButton, styles.fontAvenir]}></Title>
                    <Button transparent>
                        <Icon name='ios-grid-outline' style={{color:'white'}}/>
                    </Button>
                </Header>
                <Content style={styles.content}>
                    <View>
                        <View style={{height:200, backgroundColor : '#8584d8', alignItems:'center', justifyContent:'center'}}>
                            <Image style={styles.image} source={{uri: 'https://source.unsplash.com/random/100x100'}}/>
                            <Text style={{fontFamily: 'Avenir Next', color:'white', fontSize:30, padding:10}}>Namarata</Text>
                            <Text style={{fontFamily: 'AvenirNext-Medium', color:'white'}}>Student</Text>
                        </View>
                        <View style={{paddingTop:10}}>
                            <View style={{alignItems:'center', padding:16}}>
                                <Text style={{fontFamily: 'Avenir Next', color:'#2c3e50', fontSize:30}}>Home</Text>
                            </View>
                            <View style={{alignItems:'center', padding:16}}>
                                <Text style={{fontFamily: 'Avenir Next', color:'#2c3e50', fontSize:30}}>Profile</Text>
                            </View>
                            <View style={{alignItems:'center', padding:16}}>
                                <Text style={{fontFamily: 'Avenir Next', color:'#2c3e50', fontSize:30}}>Feed</Text>
                            </View>
                            <View style={{alignItems:'center', padding:16, flexDirection:'row', width:350}}>
                                <Text style={{marginLeft:60, fontFamily: 'Avenir Next', color:'#2c3e50', fontSize:30}}>Messages </Text>
                                <TouchableHighlight
                                    style={{backgroundColor:'#e7645a', padding:7,paddingLeft:9,paddingRight:9, borderRadius:50}}
                                >
                                    <Text style={{fontFamily: 'Avenir Next', color:'white', fontSize:10}}>1</Text>
                                </TouchableHighlight>
                            </View>
                            <View style={{alignItems:'center', padding:16}}>
                                <Text style={{fontFamily: 'Avenir Next', color:'#2c3e50', fontSize:30}}>Settings</Text>
                            </View>
                        </View>
                    </View>
                </Content>
            </Container>
        );
    }
    render(){
        return this.renderSidebar();
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
        width: 100,
        borderWidth:2,
        borderColor:'white'
    },
    headerButton : {

    }
});