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
                            <Icon name='ios-person-outline' style={{fontSize:40, color:'#34495e'}}/>
                        </View>
                        <View style={{padding : 5, marginLeft:14}}>
                            <Text style={{fontFamily: 'Avenir Next', color:'#34495e', fontSize:14, fontWeight:'600'}}>Gender</Text>
                            <Text style={{fontFamily: 'Avenir Next', color:'#7f8c8d', fontSize:13}}>Male</Text>
                        </View>
                    </View>
                    <View  style={{flexDirection:'row', marginTop:10}}>
                        <View>
                            <Icon name='ios-calendar-outline' style={{fontSize:40, color:'#34495e'}}/>
                        </View>
                        <View style={{padding : 5, marginLeft:10}}>
                            <Text style={{fontFamily: 'Avenir Next', color:'#34495e', fontSize:14, fontWeight:'600'}}>Date of Birth</Text>
                            <Text style={{fontFamily: 'Avenir Next', color:'#7f8c8d', fontSize:13}}>13th November 1992</Text>
                        </View>
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
                    <View  style={{flexDirection:'row', marginTop:10}}>
                        <View>
                            <Icon name='ios-color-fill-outline' style={{fontSize:40, color:'#34495e'}}/>
                        </View>
                        <View style={{padding : 5, marginLeft:10}}>
                            <Text style={{fontFamily: 'Avenir Next', color:'#34495e', fontSize:14, fontWeight:'600'}}>School Name</Text>
                            <Text style={{fontFamily: 'Avenir Next', color:'#7f8c8d', fontSize:13}}>Adammu comprehansive High scool lagos</Text>
                        </View>
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
                <View style={{flexDirection:'row', marginTop:10, justifyContent:'space-between'}}>
                    <View style={{flexDirection:'row'}}>
                        <View>
                            <Image style={{height:50, width:50, borderRadius:5}} source={{uri: 'https://source.unsplash.com/random/100x100'}}/>
                        </View>
                        <View style={{padding : 5, marginLeft:10}}>
                            <Text style={{fontFamily: 'Avenir Next', color:'#34495e', fontSize:14, fontWeight:'600'}}>Chris Rock</Text>
                            <Text style={{fontFamily: 'Avenir Next', color:'#7f8c8d', fontSize:13}}>Class Teacher</Text>
                        </View>
                    </View>
                    <View style={{justifyContent : 'center'}}>
                        <Icon name="ios-chatbubbles-outline" style={{color:'red', fontSize:40}}/>
                    </View>
                </View>
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
                        <Icon name="ios-chatbubbles-outline" style={{color:'red', fontSize:40}}/>
                    </View>
                </View>
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
                        <Icon name="ios-chatbubbles-outline" style={{color:'red', fontSize:40}}/>
                    </View>
                </View>
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
            currentDayCircle: {
                backgroundColor: '#3498db',
            },
            selectedDayCircle: {
                backgroundColor: '#3498db',
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
                            <Text style={{fontFamily: 'Avenir Next', color:'#95a5a6', fontSize:14, fontWeight:'600', marginRight:10}}>09:00</Text>
                        </View>
                        <View style={{marginLeft:10}}>
                            <Text style={{fontFamily: 'Avenir Next', color:'#95a5a6', fontSize:14, fontWeight:'600'}}>Submit Assignments</Text>
                            <Text style={{fontFamily: 'Avenir Next', color:'#95a5a6', fontSize:14, fontWeight:'600'}}>Going from the direction of the way </Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row', marginTop:14}}>
                        <View style={{justifyContent:'center', borderRightWidth:1, borderRightColor:'#95a5a6'}}>
                            <Text style={{fontFamily: 'Avenir Next', color:'#95a5a6', fontSize:14, fontWeight:'600', marginRight:10}}>11:00</Text>
                        </View>
                        <View style={{marginLeft:10}}>
                            <Text style={{fontFamily: 'Avenir Next', color:'#95a5a6', fontSize:14, fontWeight:'600'}}>Send Love Letters</Text>
                            <Text style={{fontFamily: 'Avenir Next', color:'#95a5a6', fontSize:14, fontWeight:'600'}}>Going from the direction of the way </Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row', marginTop:14}}>
                        <View style={{justifyContent:'center', borderRightWidth:1, borderRightColor:'#95a5a6'}}>
                            <Text style={{fontFamily: 'Avenir Next', color:'#95a5a6', fontSize:14, fontWeight:'600', marginRight:10}}>13:00</Text>
                        </View>
                        <View style={{marginLeft:10}}>
                            <Text style={{fontFamily: 'Avenir Next', color:'#95a5a6', fontSize:14, fontWeight:'600'}}>Group Meetup</Text>
                            <Text style={{fontFamily: 'Avenir Next', color:'#95a5a6', fontSize:14, fontWeight:'600'}}>Going from the direction of the way </Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
    previewLogin(){
        return (
            <View style={{justifyContent:'center', alignItems:'center', marginTop:240}}>
                <View style={{flexDirection:'row'}}>
                    <Text style={[styles.footerText, {fontSize:30, fontWeight:'700', color:'#3498db'}]}>Keisha</Text>
                    <Text style={[styles.footerText, {fontSize:30, fontWeight:'300', color:'#3498db'}]}> School</Text>
                </View>
                <Footer style={styles.footer}>
                    <View style={{flexDirection:'row', justifyContent:'space-between', width:250}}>
                        <TouchableHighlight>
                            <Text style={[styles.footerText, {color:'#7f8c8d'}]}>Sign In</Text>
                        </TouchableHighlight>
                        <TouchableHighlight>
                            <Text style={[styles.footerText, {color:'#3498db'}]}>Register</Text>
                        </TouchableHighlight>
                    </View>
                </Footer>
            </View>
        );
    }
    previewChat(){
        // For Chat
        const messages = [
            {
                _id: 2,
                text: 'Hello Daniel',
                createdAt: new Date(Date.UTC(2016, 3, 30, 17, 20, 0)),
                user: {
                    _id: 1,
                    name: 'Simbi',
                    avatar: 'https://facebook.github.io/react/img/logo_og.png',
                },
            },
            {
                _id: 3,
                text: 'You are looking good today',
                createdAt: new Date(Date.UTC(2015, 7, 30, 17, 20, 0)),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://facebook.github.io/react/img/logo_og.png',
                },
            },
            {
                _id: 4,
                text: 'Aww Thanks',
                createdAt: new Date(Date.UTC(2015, 5, 30, 17, 20, 0)),
                user: {
                    _id: 1,
                    name: 'Simbi',
                    avatar: 'https://facebook.github.io/react/img/logo_og.png',
                },
            },
            {
                _id: 5,
                text: 'Hi Keisha',
                createdAt: new Date(Date.UTC(2016, 9, 30, 17, 20, 0)),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://facebook.github.io/react/img/logo_og.png',
                },
            },
            {
                _id: 6,
                text: 'Hello Daniel',
                createdAt: new Date(Date.UTC(2016, 9, 30, 17, 20, 0)),
                user: {
                    _id: 1,
                    name: 'Simbi',
                    avatar: 'https://facebook.github.io/react/img/logo_og.png',
                },
            },
            {
                _id: 7,
                text: 'You are looking good today',
                createdAt: new Date(Date.UTC(2017, 1, 30, 17, 20, 0)),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://facebook.github.io/react/img/logo_og.png',
                },
            },
            {
                _id: 8,
                text: 'Aww Thanks',
                createdAt: new Date(Date.UTC(2017, 1, 30, 17, 20, 0)),
                user: {
                    _id: 1,
                    name: 'Simbi',
                    avatar: 'https://facebook.github.io/react/img/logo_og.png',
                },
            },
        ];
        return(
            <GiftedChat
                messages={messages}
                onSend={this.onSend}
                user={{
                    _id: 1
                }}
            />
        );
    }
    render(){
        const drawerStyles = {
            drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
            main: {paddingLeft: 3}
        };

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
                    <Header style={styles.header}>
                        <Button transparent onPress={this.openDrawer.bind(this)}>
                            <Icon name='ios-menu-outline' style={styles.headerButton}/>
                        </Button>
                        <Title style={[styles.headerButton, styles.fontAvenir]}>Chris Tucker</Title>
                        <Button transparent>
                            <Icon name="ios-people-outline" style={styles.headerButton}/>
                        </Button>
                    </Header>

                    <Content style={[styles.content]}>
                        {this.previewChat()}
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