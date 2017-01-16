import React, { Component } from 'react';
import { Text, StyleSheet, ListView, View,
    Image, ScrollView, TouchableHighlight,
    DatePickerIOS, DatePickerAndroid
} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import SearchBar from 'react-native-material-design-searchbar';
import ListItemPlain from '../../components/list_item_plain';
import {Actions} from 'react-native-router-flux';
import MapView from 'react-native-maps';
import QueryBuilder from '../../config/settings';
import { Pulse } from 'react-native-loader';
import store from '../../store/store';

export default class AirportComponent extends Component {
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
    listView(){
        return         <ListView
            dataSource={this.state.dataSource}
            renderRow={
                (rowData) => {
                    return <ListItemPlain
                        onClicked = {this.itemClicked.bind(this)}
                        color = "#34495e"
                        text = {rowData}
                    />
                }
            }
        />
    }
    renderMode(){
        return this.listView();
    }
    setSearching(){
        this.setState({
            isSearching : true
        });
    }
    renderSpinner(){
        return (
            <View style={{alignItems:'center', justifyContent:'center', flex:1}}>
                <Pulse size={30} color="#3498db" />
            </View>
        );
    }
    searchAirport(text){
        if(text.length < 3){
            return;
        }
        this.setState({
            isSearching : true,
            isFetching : true
        });
        var endpoint = QueryBuilder.endpoint+'airports/suggest?q='+text;
        fetch(endpoint)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    pageArray: responseJson,
                    isFetching : false,
                    isisSearching : false,
                    dataSource: this.ds.cloneWithRows(responseJson)
                });
            })
            .catch((error) => {
                alert(error);
            });
    }
    renderView(){
        if (this.state.isFetching){
            return this.renderSpinner();
        } else {
            return (
                <View style={{backgroundColor:'white'}}>
                    {this.renderMode()}
                </View>
            );
        }
    }
    render(){
        return (
            <Container style={styles.container}>
                <Header style={styles.header}>
                    <Button transparent>
                        <Icon name='md-arrow-back' style={styles.colorWhite}/>
                    </Button>

                    <Title style={[styles.colorWhite, styles.fontAvenir]}>CHOOSE AIRPORTS</Title>
                </Header>

                <Content style={styles.content}>
                    <SearchBar
                        onSearchChange={this.searchAirport.bind(this)}
                        height={40}
                        inputStyle = {{fontFamily: 'AvenirNext-Medium', color:'#2c3e50', backgroundColor:'white', borderColor:'white'}}
                        placeholder={'Search Airport'}
                        iconColor = "#2c3e50"
                        placeholderColor = "#2c3e50"
                        padding={5}
                        returnKeyType={'search'}
                    />

                    {this.renderView()}

                </Content>

            </Container>
        );
    }
}
const styles = StyleSheet.create({
    container:{

    },
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
    fontAvenir : {
        fontFamily: 'AvenirNext-Medium'
    },
    header : {
        backgroundColor : '#00638c'
    },
    footer : {
        backgroundColor:'#f39c12'
    },
    content : {
        padding : 20,
        backgroundColor:'#EBF4FA'
    }
});