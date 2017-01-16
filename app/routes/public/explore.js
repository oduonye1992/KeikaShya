import React, {Component, PropTypes} from 'react';
import {View, Text, Button, Image, StyleSheet, ScrollView, ListView, StatusBar} from 'react-native';
import SearchBar from 'react-native-search-bar';
import BoxContainer from '../../components/box_container';
import AppSettings from '../../config/settings';
import { Pulse } from 'react-native-loader';
export default class ExploreComponent extends Component{
    fetchCategories (){
        return fetch(AppSettings.publicUrl)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                this.setState({
                    viewState : 'loaded',
                    items : responseJson.applet_groups,
                    dataSource: this.ds.cloneWithRows(responseJson.applet_groups)
                });
            })
            .catch((error) => {
                console.error(error);
                this.setState({
                    viewState : 'error'
                });
            });
    }
    componentDidMount (){
        this.fetchCategories();
    }
    ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    constructor (props){
        super(props);
        this.state = {
            viewState : "loading",
            items : [],
            dataSource: this.ds.cloneWithRows([])
        };
    }
    getMode (){
        return 'box_horizontal';
    }
    render (){
        if (this.state.viewState == 'loading') {
            return (
                <View style={{alignItems:'center', justifyContent:'center', flex:1}}>
                    <Pulse size={30} color="#3498db" />
                </View>
            );
        } else if (this.state.viewState =='error'){
            return (
                <View style={{alignItems:'center', justifyContent:'center', flex:1}}>
                    <Text>An Error has occured</Text>
                </View>
            );
        } else if (this.state.viewState =='error'){
            return (
                <View style={{alignItems:'center', justifyContent:'center', flex:1}}>
                    <Text>Nothing Here</Text>
                </View>
            );
        } else if (this.state.viewState =='loaded'){
            return(
                    <ScrollView>
                        <StatusBar
                            backgroundColor="blue"
                            barStyle="dark-content"
                            setHidden = {true}
                        />
                        <ListView
                            dataSource={this.state.dataSource}
                            renderRow={
                                (rowData) => {
                                    return <BoxContainer
                                        items = {rowData}
                                        mode = {this.getMode()}
                                    />
                                }
                            }
                        />
                    </ScrollView>
            );
        }
    }
}
const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : 'flex-start',
        padding: 20
    },
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