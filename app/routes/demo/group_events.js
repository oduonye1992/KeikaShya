import React, { Component } from 'react';
import { Text, StyleSheet, ListView, View,
    Image, ScrollView, TouchableHighlight,
    DatePickerIOS, DatePickerAndroid
} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import HeaderComponent from '../../components/header';
import {Actions} from 'react-native-router-flux';
import Calendar from 'react-native-calendar';
import ListTimelineComponent from '../../components/list_timeline';

export default class GroupEventsComponent extends Component {
    ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    constructor(props) {
        super(props);
        this.state = {
            dataSource: this.ds.cloneWithRows(
                [{
                    title : 'Name',
                    description : 'Daniel Oduonye',
                    image : 'https://source.unsplash.com/random/100x100',
                    time : '9:00'
                },{
                    title : 'Name',
                    description : 'Daniel Oduonye',
                    image : 'https://source.unsplash.com/random/100x100',
                    time : '9:00'
                },
                    {
                        title : 'Name',
                        description : 'Daniel Oduonye',
                        image : 'https://source.unsplash.com/random/100x100',
                        time : '9:00'
                    },
                    {
                        title : 'Name',
                        description : 'Daniel Oduonye',
                        image : 'https://source.unsplash.com/random/100x100',
                        time : '9:00'
                    },
                    {
                        title : 'Name',
                        description : 'Daniel Oduonye',
                        image : 'https://source.unsplash.com/random/100x100',
                        time : '9:00'
                    },
                    {
                        title : 'Name',
                        description : 'Daniel Oduonye',
                        image : 'https://source.unsplash.com/random/100x100',
                        time : '9:00'
                    },]
            )
        }
    }
    onClick(){

    }
    render () {
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
            <Container style={styles.container}>
                <Header style={styles.header}>
                    <Button
                        onPress = {() => {
                            Actions.pop()
                        }}
                        transparent>
                        <Icon name='ios-arrow-round-back-outline' style={styles.headerButton}/>
                    </Button>
                    <Title style={[styles.headerButton, styles.fontAvenir]}>Events</Title>
                </Header>
                <Content style={[styles.content]}>
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
                        <View style={{padding:20}}>
                            <View style={{borderBottomWidth:.5, borderBottomColor:'#bdc3c7', marginTop:5}}>
                                <Text style={{fontFamily: 'Avenir Next', color:'#e74c3c', fontSize:10, fontWeight:'bold', marginBottom:8}}>MONDAY, 10 AUGUST, 2016</Text>
                            </View>
                            <ListView
                                dataSource={this.state.dataSource}
                                renderRow={
                                    (rowData) => {
                                        return <ListTimelineComponent
                                            onClick = {this.onClick.bind(this)}
                                            title = {rowData.title}
                                            description = {rowData.description}
                                            time = {rowData.time}
                                        />
                                    }
                                }
                            />
                        </View>
                    </View>
                </Content>
            </Container>
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