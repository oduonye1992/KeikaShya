/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry, Text, StyleSheet} from 'react-native';
import { Scene, Router, TabBar, Modal, Schema, Actions, Reducer, ActionConst } from 'react-native-router-flux'

import TripsComponent from './routes/trips/trips';
import OffersComponent from './routes/offers/offers';
import ProfileComponent from './routes/profile/profile';
import ExploreComponent from './routes/explore/explore';

import ForgotComponent from './routes/authentication/forgot';
import LoginComponent from './routes/authentication/login';
import RegisterComponent from './routes/authentication/register';
import DetailsComponent from './routes/details/details';

import CalenderComponent from './routes/form/calender';
import FormComponent from './routes/form/form';
import OccupantsComponent from './routes/form/occupants';
import RoomTypeComponent from './routes/form/roomtype';
import OptionsalEmailComponent from './routes/form/optional_email';

// New Designs

import HomeComponent from './routes/home';
import PlaygroundComponent from './routes/home/playground';
import FormsComponent from './routes/newdesign/form';
import OrdersComponent from './routes/newdesign/orders';
import OrderDetailComponent from './routes/newdesign/order_detail';
import WalkthroughComponent from './routes/newdesign/walkthrough';
import AirportComponent from './routes/newdesign/airports';
import ConfirmationComponent from './routes/newdesign/confirmation';
import OptionalEmailComponent from './routes/newdesign/optionalemail';



class TabIcon extends Component {
    render(){
        return (
            <Text style={{fontFamily: 'AvenirNext-Medium', color: this.props.selected ? 'red' :'black'}}>{this.props.title}</Text>
        );
    }
}
export default class Keisha extends Component {
    render() {
        return (
            <Router>
                <Scene key="test" component={LoginComponent} hideNavBar={true} title="Form"/>
                <Scene key="playground" component={PlaygroundComponent} hideNavBar={true} title="Form"/>
                <Scene key="internetorderlist" component={OrdersComponent} hideNavBar={true} title="Form"/>
                <Scene key="walkthrough" component={WalkthroughComponent} hideNavBar={true} title="Form"/>
                <Scene key="choosehotel" component={HomeComponent} hideNavBar={true} title="Form"/>
                <Scene key="openform" component={FormsComponent} hideNavBar={true} title="Form"/>
                <Scene key="internetorderlist" component={OrdersComponent} hideNavBar={true} title="Form"/>
                <Scene key="internetorderdetail" component={OrderDetailComponent} hideNavBar={true} title="Form"/>
                <Scene key="chooseairports" component={AirportComponent} hideNavBar={true} title="Form"/>
                <Scene key="confirmation" component={ConfirmationComponent} hideNavBar={true} title="Form"/>
                <Scene key="addemail" component={OptionalEmailComponent} hideNavBar={true} title="Form"/>
                <Scene key="calender" component={CalenderComponent} hideNavBar={true} title="Form"/>
            </Router>
        )
    }
}

let style = StyleSheet.create({
    tabBarStyle: {
        borderTopWidth : .5,
        borderColor    : '#b7b7b7',
        backgroundColor: 'white',
        opacity        : 1
    },
    navigationBarStyle  : {
        backgroundColor:'transparent',
        borderColor:'transparent'
    },
    titleStyle : {
        color : 'white'
    },
    iconStyle : {
        color:'red'
    }
});
AppRegistry.registerComponent('Keisha', () => Keisha);
