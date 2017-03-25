/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry, Text, StyleSheet} from 'react-native';
import { Scene, Router, TabBar, Modal, Schema, Actions, Reducer, ActionConst } from 'react-native-router-flux'
import codePush from "react-native-code-push";
import Drawer from 'react-native-drawer';
import store from './store/store';
import HeaderComponent from './components/header';
import PlaygroundComponent from './routes/newdesign/playground';
import ArticlesComponent from './routes/dcc/articles';
import SettingsComponent from './routes/dcc/settings';
import ArticleDetailsCompoenent from './routes/dcc/article_details';
import VideoComponent from './routes/dcc/video';
import EventsComponent from './routes/dcc/events';
import OfficeComponent from './routes/dcc/office';
import LiveStreamComponent from './routes/dcc/livestream';
import DomeComponent from './routes/dcc/dome';
import AudioComponent from './routes/dcc/audio';



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
                    <Scene key="articles" component={ArticlesComponent} hideNavBar={true} />
                    <Scene key="audio" component={AudioComponent} hideNavBar={true} />
                    <Scene key="settings" component={SettingsComponent} hideNavBar={true} />
                    <Scene key="article_details" component={ArticleDetailsCompoenent} hideNavBar={true} />
                    <Scene key="video" component={VideoComponent} hideNavBar={true} />
                    <Scene key="events" component={EventsComponent} hideNavBar={true} />
                    <Scene key="live_stream" component={LiveStreamComponent} hideNavBar={true} />
                    <Scene key="office" component={OfficeComponent} hideNavBar={true} />
                    <Scene key="dome" component={DomeComponent} hideNavBar={true} />
                    <Scene key="playground" component={PlaygroundComponent} hideNavBar={true} />
                </Router>
            </Drawer>
        )
    }
}
Keisha = codePush({
    updateDialog: true,
    installMode: codePush.InstallMode.IMMEDIATE,
    checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
    deploymentKey : '2aH6i-5CtmxQfzkcArLU2DVrDfa-NJS-h1V4M' // Staging Key
})(Keisha);

AppRegistry.registerComponent('Keisha', () => Keisha);
