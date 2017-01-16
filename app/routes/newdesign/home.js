import React, { Component } from 'react';
import { Text, StyleSheet, ListView, View, Image, ScrollView, TouchableHighlight } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import SearchBar from 'react-native-material-design-searchbar';
import ListItemPlain from '../../components/list_item_plain';
import {Actions} from 'react-native-router-flux';
import MapView from 'react-native-maps';
import QueryBuilder from '../../config/settings';
import { Pulse } from 'react-native-loader';
import store from '../../store/store';

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
            selectedHotel : null
        }
    }
    itemClicked(data) {
        this.setState({
            isSearching : false,
            selectedHotel : data
        });
    }
    detailView(){
        return <ScrollView style={{padding:6}}>
            <Image source={{uri: this.state.selectedHotel.image}}
                   style={{width: 320, height: 180}} />
            <View style={{marginTop:10}}>
                <Text style={{color:'#2c3e50', fontFamily: 'AvenirNext-Medium'}}>{this.state.selectedHotel.name}</Text>
                <Text style={{color:'grey', fontFamily: 'AvenirNext-Medium'}}>{this.state.selectedHotel.description}</Text>
            </View>
            <View style={{marginTop:10}}>
                <MapView
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                />
            </View>
        </ScrollView>
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
    openOrderPage(){
        if (this.state.selectedHotel){
            store.dispatch({
                type: 'HOTEL_SELECTED',
                data: {
                    value : this.state.selectedHotel
                }
            });
            Actions.openform();
        }
    }
    renderMode(){
        return this.state.isSearching ? this.listView() : this.detailView();
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
    searchHotels(text){
        //alert(JSON.stringify(text));
        if(text.length < 3){
            return;
        }
        this.setState({
            isSearching : true,
            isFetching : true
        });
        var endpoint = QueryBuilder.endpoint+'hotels/suggest?q='+text;
        fetch(endpoint)
            .then((response) => response.json())
            .then((responseJson) => {
                //alert(JSON.stringify(responseJson));
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
                    <Button
                        onPress={() =>{
                            Actions.internetorderlist();
                        }}
                        transparent>
                            <Icon name='md-menu' style={styles.colorWhite}/>
                    </Button>
                    <Title style={[styles.colorWhite, styles.fontAvenir]}>TRAVEL SURFER</Title>
                    <Button transparent>
                        <Icon name='md-add' style={styles.colorWhite}/>
                    </Button>
                </Header>

                <Content style={styles.content}>
                    <SearchBar
                        onSearchChange={this.searchHotels.bind(this)}
                        height={40}
                        onFocus={this.setSearching.bind(this)}
                        onBlur={() => console.log('On Blur')}
                        inputStyle = {{fontFamily: 'AvenirNext-Medium', color:'#2c3e50', backgroundColor:'white', borderColor:'white'}}
                        placeholder={'Search Hotels'}
                        iconColor = "#2c3e50"
                        placeholderColor = "#2c3e50"
                        padding={5}
                        returnKeyType={'search'}
                    />
                    {this.renderView()}

                </Content>

                <Footer style={styles.footer}>
                    <TouchableHighlight onPress={this.openOrderPage.bind(this)}>
                        <Text style={{fontWeight : 'bold', fontSize:22}}>CONTINUE</Text>
                    </TouchableHighlight>
                </Footer>
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