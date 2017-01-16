import React, {Component, PropTypes} from 'react';
import {View, Text, Button} from 'react-native';
import {Actions} from 'react-native-router-flux';
import AppIntro from 'react-native-app-intro';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
export default class WalkthroughComponent extends Component{
    constructor (props){
        super(props);
    }
    onSkipBtnHandle (index) {
        console.log(index);
        Actions.privatesection();
    }
    doneBtnHandle () {
        Actions.publicsection();
    }
    nextBtnHandle (index) {
        Alert.alert('Next');
        console.log(index);
    }
    onSlideChangeHandle (index, total) {
        console.log(index, total);
    }
    render (){
        const pageArray = [{
            title: 'TravelSurfer',
            description: 'Compare and see hot offers for Hotels',
            img: 'https://goo.gl/Bnc3XP',
            imgStyle: {
                height: 80 * 2.5,
                width: 109 * 2.5,
            },
            backgroundColor: '#fa931d',
            fontFamily: 'AvenirNext-Regular',
            fontColor: '#fff',
            level: 10,
        }, {
            title: 'Recieve Offers',
            description: 'Recieve the besto offers from all your favourite hotels',
            img: 'https://goo.gl/Bnc3XP',
            imgStyle: {
                height: 93 * 2.5,
                width: 103 * 2.5,
            },
            backgroundColor: '#3498db',
            fontColor: '#fff',
            level: 10,
        }, {
            title: 'Recieve Offers',
            description: 'Get',
            img: 'http://www.newdesignfile.com/postpic/2015/01/classic-muscle-car-clip-art_2357.png',
            imgStyle: {
                height: 93 * 2.5,
                width: 103 * 2.5,
            },
            backgroundColor: '#a4b602',
            fontColor: '#fff',
            level: 10,
        }];
        return (
            <AppIntro
                onNextBtnClick={this.nextBtnHandle}
                onDoneBtnClick={this.doneBtnHandle}
                onSkipBtnClick={this.onSkipBtnHandle}
                onSlideChange={this.onSlideChangeHandle}
                pageArray={pageArray}
            />
        );
    }
}