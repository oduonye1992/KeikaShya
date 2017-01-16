import React, { Component } from 'react';
import BoxHorizontalComponent from './box_horizontal';
import BoxVerticalComponent from './box_vertical';
import MoxMediumComponent from './box_medium';
import BoxSmallComponent from './box_small';
import FullWidthComponent from './fullwidth';
import {Actions} from 'react-native-router-flux';

import { View, Image, Text, StyleSheet, ListView } from 'react-native';
export default class BoxContainerComponent extends Component{
    constructor (props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            viewState : "loading",
            items : {},
            dataSource: ds.cloneWithRows(this.props.items.data ? this.props.items.data : [])
        };
    }
    onItemClicked(){
        Actions.details();
    }
    render(){
        return (
            <View style={{padding : 10}}>
                <View style={{ padding : 10, flexDirection : 'row', justifyContent : 'space-between' }}>
                    <Text style={{fontFamily:'AvenirNext-Medium', fontSize : 16, color : '#34495e'}}>{this.props.items.title}</Text>
                    <Text style={{fontFamily:'AvenirNext-Medium'}}>See All</Text>
                </View>
                <ListView
                    horizontal = {true}
                    dataSource={this.state.dataSource}
                    renderRow={
                        (rowData) => {
                            if (this.props.mode == 'box_horizontal') {
                                return <BoxHorizontalComponent onItemClicked={this.onItemClicked} items  = {rowData} />
                            } else if (this.props.mode == 'box_vertical') {
                                return <BoxVerticalComponent onItemClicked={this.onItemClicked} items  = {rowData} />
                            } else if (this.props.mode == 'box_medium') {
                                return <MoxMediumComponent onItemClicked={this.onItemClicked} items  = {rowData} />
                            } else if (this.props.mode == 'box_small') {
                                return <BoxSmallComponent onItemClicked={this.onItemClicked} items  = {rowData} />
                            } else if (this.props.mode == 'fullwidth') {
                                return <FullWidthComponent onItemClicked={this.onItemClicked} items  = {rowData} />
                            }
                        }
                    }
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    supportText4 : {
        fontFamily: 'AvenirNext-Medium',
        color : 'white',
        backgroundColor: 'transparent',
        fontSize : 12,
        fontWeight : '900'
    },
    supportText4Place : {
        fontFamily: 'AvenirNext-Medium',
        color : 'black',
        backgroundColor : 'white',
        borderRadius : 4,
        width : 60,
        textAlign : 'center',
        fontSize : 12,
        fontWeight : '900',
        alignItems: 'center'
    },
    supportText3 : {
        fontFamily: 'AvenirNext-Medium',
        color : 'black',
        backgroundColor: 'transparent',
        fontSize : 15,
        fontWeight : 'bold',
        marginTop : 8
    },
    supportText2 : {
        fontFamily: 'AvenirNext-Medium',
        color : 'grey',
        backgroundColor: 'transparent',
        fontSize : 15,
        marginTop : 8
    },
    supportText1 : {
        fontFamily: 'AvenirNext-Medium',
        color : 'grey',
        backgroundColor: 'transparent',
        fontSize : 15,
        marginTop : 8
    },
    infoDescription: {
        fontFamily: 'AvenirNext-Medium',
        color : 'white',
        backgroundColor: 'transparent',
        fontSize : 12,
        marginTop : 14
    }
});