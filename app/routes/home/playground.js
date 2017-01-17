import React, { Component } from 'react';
import { Text, StyleSheet, ListView, View,
    Image, ScrollView, TouchableHighlight,
    DatePickerIOS, DatePickerAndroid
} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import HeaderComponent from '../../components/header';
import {Actions} from 'react-native-router-flux';
import store from '../../store/store';
import Drawer from 'react-native-drawer';
import Calendar from 'react-native-calendar';
import { GiftedChat } from 'react-native-gifted-chat';
import AppIntro from 'react-native-app-intro';

// Playground
import ListWithIconComponent from '../../components/list_with_icon';
import ListWithIconAndDetailsComponent from '../../components/list_with_icon_and_details';
import ListItemDeletableComponent from '../../components/list_item_deletable';
import ListItemImageComponent from '../../components/list_with_image';
import ListTimelineComponent from '../../components/list_timeline';

export default class HomeComponent extends Component {
    ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    constructor (props){
        super(props);
        this.state = {
            dataSource: this.ds.cloneWithRows(
                []
            ),
            isSearching : true,
            isFetching : false,
            selectedAirport : null
        }
    }
    itemClicked(data) {
        store.dispatch({
            type: 'FORM_UPDATE',
            data: {
                key : 'airport',
                value : data
            }
        });
        Actions.pop();
    }
    _drawer;
    openDrawer(){
        this._drawer.open();
    }
    previewProfile(){
        return (
            <View>
                <View>
                    <View style={{height:200, backgroundColor : '#ecf0f1', alignItems:'center', justifyContent:'center'}}>
                        <Image style={styles.image} source={{uri: 'https://source.unsplash.com/random/100x100'}}/>
                        <Text style={{fontFamily: 'Avenir Next', color:'#34495e', fontSize:30, padding:10}}>Hushir A Rahman</Text>
                    </View>
                </View>
                <View style={{padding:10}}>
                    <View style={{borderBottomWidth:.5, borderBottomColor:'#bdc3c7', marginTop:5}}>
                        <Text style={{fontFamily: 'Avenir Next', color:'#7f8c8d', fontSize:10, fontWeight:'bold', marginBottom:8}}>ABOUT</Text>
                    </View>
                    <View  style={{flexDirection:'row', marginTop:10}}>
                        <View>
                            <Icon name='ios-color-fill-outline' style={{fontSize:40, color:'#34495e'}}/>
                        </View>
                        <View style={{padding : 5, marginLeft:10}}>
                            <Text style={{fontFamily: 'Avenir Next', color:'#34495e', fontSize:14, fontWeight:'600'}}>School Name</Text>
                            <Text style={{fontFamily: 'Avenir Next', color:'#7f8c8d', fontSize:13}}>Adammu comprehansive High scool lagos</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
    previewList(){
        return (
            <View>
                <View style={{padding:10}}>
                    <View style={{flexDirection:'row', marginTop:10, justifyContent:'space-between'}}>
                        <View style={{flexDirection:'row'}}>
                            <View>
                                <Icon name='ios-remove-circle-outline' style={{fontSize:40, color:'#bdc3c7'}}/>
                            </View>
                            <View style={{padding : 5, marginLeft:10}}>
                                <Text style={{fontFamily: 'Avenir Next', color:'#34495e', fontSize:14, fontWeight:'600'}}>Security Fee</Text>
                                <View style={{flexDirection:'row'}}>
                                    <Text style={{fontFamily: 'Avenir Next', color:'#7f8c8d', fontSize:13}}>$500</Text>
                                    <Text style={{fontFamily: 'Avenir Next', marginLeft:5, color:'#7f8c8d', fontSize:13}}>| 10 Apr 2013</Text>
                                    <Text style={{fontFamily: 'Avenir Next', marginLeft:5, color:'#7f8c8d', fontSize:13}}></Text>
                                </View>
                            </View>
                        </View>
                        <View style={{justifyContent:'center'}}>
                            <Text style={{fontFamily: 'Avenir Next', color:'#3498db', fontSize:14, fontWeight:'600'}}>$500</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
    previewPeopleList(){
        return (
            <View style={{padding:10}}>
                <View style={{flexDirection:'row', marginTop:10, justifyContent:'space-between'}}>
                    <View style={{flexDirection:'row'}}>
                        <View>
                            <Image style={{height:50, width:50, borderRadius:5}} source={{uri: 'https://source.unsplash.com/random/100x100'}}/>
                        </View>
                        <View style={{padding : 5, marginLeft:10}}>
                            <Text style={{fontFamily: 'Avenir Next', color:'#34495e', fontSize:14, fontWeight:'600'}}>Nasir Cachachu</Text>
                            <Text style={{fontFamily: 'Avenir Next', color:'#7f8c8d', fontSize:13}}>Class Teacher</Text>
                        </View>
                    </View>
                    <View style={{justifyContent : 'center'}}>
                        <Icon name="ios-chatbubbles-outline" style={{color:'#1abc9c', fontSize:40}}/>
                    </View>
                </View>
            </View>
        );
    }
    previewCalender(){
        // For Calender
        const customStyle = {
            calendarContainer: {
                backgroundColor: 'white',
            },
            controlButtonText: {
                color: '#7f8c8d',
                fontFamily: 'Avenir Next'
            },
            day: {
                color: '#2c3e50',
                fontFamily: 'Avenir Next'
            },
            eventIndicator: {
                backgroundColor: '#e74c3c',
                width: 10,
                height: 10,
            },
            title: {
                color: '#2c3e50',
            }
        };
        return (
            <View>
                <View style={{backgroundColor:'white'}}>
                    <Calendar
                        ref="calendar"
                        customStyle={customStyle}
                        eventDates={['2015-04-03', '2016-07-05', '2016-07-28', '2016-07-30']}
                        events={[{date: '2016-07-04', hasEventCircle: {backgroundColor: 'powderblue'}}]}
                        nextButtonText={'Next'}           // Text for next button. Default: 'Next'
                        prevButtonText={'Prev'}           // Text for previous button. Default: 'Prev'
                        scrollEnabled={true}              // False disables swiping. Default: False
                        selectedDate={'2015-08-15'}       // Day to be selected
                        showControls={true}               // False hides prev/next buttons. Default: False
                        showEventIndicators={true}        // False hides event indicators. Default:False
                        startDate={'2015-08-01'}          // The first month that will display. Default: current month
                        titleFormat={'MMMM YYYY'}         // Format for displaying current month. Default: 'MMMM YYYY'
                        today={'2016-16-05'}              // Defaults to today
                        weekStart={1} // Day on which week starts 0 - Sunday, 1 - Monday, 2 - Tuesday, etc, Default: 1
                    />
                </View>
                <View style={{padding:10}}>
                    <View style={{borderBottomWidth:.5, borderBottomColor:'#bdc3c7', marginTop:5}}>
                        <Text style={{fontFamily: 'Avenir Next', color:'#e74c3c', fontSize:10, fontWeight:'bold', marginBottom:8}}>MONDAY, 10 AUGUST, 2016</Text>
                    </View>
                    <View style={{flexDirection:'row', marginTop:14}}>
                        <View style={{justifyContent:'center', borderRightWidth:1, borderRightColor:'#95a5a6'}}>
                            <Text style={{fontFamily: 'Avenir Next', color:'#95a5a6', fontSize:14, fontWeight:'600', marginRight:10}}>9am</Text>
                        </View>
                        <View style={{marginLeft:10}}>
                            <Text style={{fontFamily: 'Avenir Next', color:'#95a5a6', fontSize:14, fontWeight:'600'}}>Martin Luther King</Text>
                            <Text style={{fontFamily: 'Avenir Next', color:'#95a5a6', fontSize:14, fontWeight:'600'}}>Going from the direction of the way </Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
    previewWalkthrough(){
        const pageArray = [{
            title: 'Learn the basics',
            description: 'Keisha Helps you present your work or ideas beautifulls',
            //img: {uri: 'https://source.unsplash.com/random/100x100'},
            imgStyle: {
                height: 80 * 2.5,
                width: 109 * 2.5,
            },
            backgroundColor: '#acdce8',
            fontColor: '#2c3e50',
            fontWeight:'700',
            level: 10,
        }, {
            title: 'Organise',
            description: 'Drag and Drop to Move',
            //img: {uri: 'https://source.unsplash.com/random/100x100'},
            imgStyle: {
                height: 93 * 2.5,
                width: 103 * 2.5,
            },
            backgroundColor: '#fec89a',
            fontColor: '#2c3e50',
            level: 10,
        }];
        return (
            <AppIntro
                onNextBtnClick={this.nextBtnHandle}
                onDoneBtnClick={this.doneBtnHandle}
                rightTextColor="#2c3e50"
                onSkipBtnClick={this.onSkipBtnHandle}
                onSlideChange={this.onSlideChangeHandle}
                pageArray={pageArray}
            />
        );
    }
    render(){
        const drawerStyles = {
            drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
            main: {paddingLeft: 3}
        };
        // For Chat
        const messages = [
            {
                _id: 1,
                text: 'Hello developer',
                createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://facebook.github.io/react/img/logo_og.png',
                },
            },
            {
                _id: 2,
                text: 'Hello developer',
                createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
                user: {
                    _id: 1,
                    name: 'Simbi',
                    avatar: 'https://facebook.github.io/react/img/logo_og.png',
                },
            }
        ];
        return (
            <Drawer
                ref={(ref) => this._drawer = ref}
                openDrawerOffset={100}
                type="static"
                styles={drawerStyles}
                content={<HeaderComponent />}
                tweenHandler={Drawer.tweenPresets.parallax}
            >
                <Container style={styles.container}>
                    <Content style={[styles.content]}>
                        <ListWithIconComponent
                            icon = "ios-chatbubbles-outline"
                            title = "Analytics"
                        />
                        <ListWithIconAndDetailsComponent
                            icon = "ios-chatbubbles-outline"
                            title = "Analytics"
                            description = "For the love of analytics"
                        />
                        <ListItemDeletableComponent
                            icon = "ios-chatbubbles-outline"
                            title = "Ade Phillips"
                            description1 = "Tax"
                            description2 = "$100"
                            description3 = "School Stuff"
                            description_side = "500$"
                        />
                        <ListItemImageComponent
                            image = 'https:source.unsplash.com/random/100x100'
                            title = "Analytics"
                            description = "For the love of analytics"
                            icon  = 'ios-chatbubbles-outline'
                            iconColor = 'green'
                        />
                    </Content>
                </Container>
            </Drawer>
        );
    }
}

const styles = StyleSheet.create({
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
    footer : {
        backgroundColor : 'white',
        borderColor:'white'
    },
    footerText : {
        fontWeight : 'bold',
        fontSize : 15,
        color:'#2c3e50',
        fontFamily: 'Avenir Next'
    },
    fontAvenir : {
        fontFamily: 'Avenir Next'
    },
    header : {
        backgroundColor : 'white'
    },
    headerButton : {
        color : '#e74c3c'
    },
    content : {
        backgroundColor:'white'
    },
    image: {
        height: 100,
        borderRadius: 50,
        width: 100
    }
});