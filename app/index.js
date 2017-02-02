/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry, Text, StyleSheet} from 'react-native';
import { Scene, Router, TabBar, Modal, Schema, Actions, Reducer, ActionConst } from 'react-native-router-flux'

import Drawer from 'react-native-drawer';
import store from './store/store';
import HeaderComponent from './components/header';
import PlaygroundComponent from './routes/newdesign/playground';

import FirstScreenComponent from './routes/dummy/first_screen';
import SecondScreenComponent from './routes/dummy/second_screen';
import ThirdScreenComponent from './routes/dummy/third_screen';
import FourthScreenComponent from './routes/dummy/fourth_screen';
import FifthScreenComponent from './routes/dummy/fifth_screen';
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
                    <Scene key="first_screen" component={FirstScreenComponent} hideNavBar={true} />
                    <Scene key="second_screen" component={SecondScreenComponent} hideNavBar={true} />
                    <Scene key="third_screen" component={ThirdScreenComponent} hideNavBar={true} />
                    <Scene key="fourth_screen" component={FourthScreenComponent} hideNavBar={true} />
                    <Scene key="fifth_screen" component={FifthScreenComponent} hideNavBar={true} />
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
