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
import FormsComponent from './routes/newdesign/form';
import OrdersComponent from './routes/newdesign/orders';
import OrderDetailComponent from './routes/newdesign/order_detail';
import AirportComponent from './routes/newdesign/airports';
import ConfirmationComponent from './routes/newdesign/confirmation';
import OptionalEmailComponent from './routes/newdesign/optionalemail';
// New imports
import ProfileComponent from './routes/demo/profile';
import ParentComponent from './routes/demo/parents';
import FeeComponent from './routes/demo/fees';
import PendingFeeComponent from './routes/demo/pending_fees';
import GroupsComponent from './routes/demo/groups';
import GroupPeopleComponent from './routes/demo/group_people';
import GroupMembersComponent from './routes/demo/group_members';
import GroupEventsComponent from './routes/demo/group_events';
import GroupMessageComponent from './routes/demo/group_messages';
import ChatComponent from './routes/demo/chat';
import MainHomeComponent from './routes/demo/home';
import WalkthroughComponent from './routes/demo/walkthrough';
import AccountsComponent from './routes/demo/accounts';
import Drawer from 'react-native-drawer';
import store from './store/store';
import HeaderComponent from './components/header';
import PlaygroundComponent from './routes/newdesign/playground';
class TabIcon extends Component {
    render(){
        return (
            <Text style={{fontFamily: 'AvenirNext-Medium', color: this.props.selected ? 'red' :'grey'}}>{this.props.title}</Text>
        );
    }
}
export default class Keisha extends Component {
    constructor(props){
        super(props);
        this.state = {
            parent : store.getState()
        }
    }
    componentDidMount(){
        this.subscribe();
    }
    subscribe(){
        let that = this;
        store.subscribe(function() {
            // Update your views here
            that.setState({
                parent : store.getState()
            });
        })
    }
    render() {
        const drawerStyles = {
            drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
            main: {paddingLeft: 3}
        };
        return (
            <Drawer
                ref={(ref) => this._drawer = ref}
                openDrawerOffset={100}
                type="static"
                tapToClose={true}
                open = {this.state.parent.drawerOpen}
                content={<HeaderComponent />}
            >
                <Router>
                    <Scene key="playground" component={PlaygroundComponent} hideNavBar={true} />
                    <Scene key="main_walkthrough" component={WalkthroughComponent} hideNavBar={true} />
                    <Scene key="accounts" component={AccountsComponent} hideNavBar={true} />
                    <Scene key="login" component={LoginComponent} hideNavBar={true} />
                    <Scene key="main_walkthrough" component={WalkthroughComponent} hideNavBar={true} />
                    <Scene key="main_home" component={MainHomeComponent} hideNavBar={true} />
                    <Scene key="activate" component={RegisterComponent} hideNavBar={true} />
                    <Scene key="accounts" component={AccountsComponent} hideNavBar={true} />
                    <Scene key="reset_password" component={ForgotComponent} hideNavBar={true} />
                    <Scene key="groups" component={GroupsComponent} hideNavBar={true} />
                    <Scene key="group_details">
                        <Scene key="dsdssd" tabs={true} tabBarStyle={styles.tabBarStyle}>
                            <Scene key="group_members" component={GroupPeopleComponent} hideNavBar={true} title="Members" icon={TabIcon} navigationBarStyle={{backgroundColor:'red'}} titleStyle={{color:'white'}}/>
                            <Scene key="group_students" component={GroupMembersComponent} hideNavBar={true} title="Students" icon={TabIcon} navigationBarStyle={{backgroundColor:'red'}} titleStyle={{color:'white'}}/>
                            <Scene key="group_events" component={GroupEventsComponent} hideNavBar={true} title="Events" icon={TabIcon} navigationBarStyle={{backgroundColor:'red'}} titleStyle={{color:'white'}}/>
                            <Scene key="group_messages" component={GroupMessageComponent} hideNavBar={true} title="Messages" icon={TabIcon} navigationBarStyle={{backgroundColor:'red'}} titleStyle={{color:'white'}}/>
                        </Scene>
                        <Scene key="chat" component={ChatComponent} hideNavBar={true} />
                        <Scene key="profile" component={ProfileComponent} hideNavBar={true} title="Form"/>
                    </Scene>
                    <Scene key="pending_fees" component={PendingFeeComponent} hideNavBar={true} />
                    <Scene key="fees" component={FeeComponent} hideNavBar={true} title="Form"/>
                    <Scene key="parents" component={ParentComponent} hideNavBar={true} title="Form"/>
                    <Scene key="login" component={LoginComponent} hideNavBar={true} title="Form"/>
                </Router>
            </Drawer>
        )
    }
}

let styles = StyleSheet.create({
    tabBarStyle: {
        backgroundColor: 'white',
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
