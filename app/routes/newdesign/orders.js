import React, { Component } from 'react';
import { Text, StyleSheet, ListView, View, Image, ScrollView, TouchableHighlight } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import ListItemCard from '../../components/list_item_card';
import MapView from 'react-native-maps';
import Hr from '../../lib/hr';
import {Actions} from 'react-native-router-flux';
import store from "../../store/store";
import QueryBuilder from '../../config/settings';
import { Pulse } from 'react-native-loader';


export default class OrdersComponent extends Component {
    ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    constructor (props){
        super(props);
        this.state = {
            isLoading : true,
            dataSource: this.ds.cloneWithRows(
                []
            )
        }
    }
    componentDidMount(){
        this.fetchOrders();
    }
    fetchOrders(){
        fetch(QueryBuilder.endpoint+'internet_price_order')
            .then((response) => response.json())
            .then((responseJson) => {
                alert(JSON.stringify(responseJson[0]));
                this.setState({
                    //isLoading : false,
                    dataSource: this.ds.cloneWithRows(responseJson)
                });
            })
    }
    onClick(item){
        Actions.internetorderdetail(item);
    }
    listView(){
        return         <ListView
            dataSource={this.state.dataSource}
            renderRow={
                (rowData) => {
                    return <ListItemCard
                        color = "#34495e"
                        text = {rowData}
                        onClick={this.onClick.bind(this)}
                    />
                }
            }
        />
    }
    render(){
        if (this.state.isLoading){
            return (
                <View style={{alignItems:'center', justifyContent:'center', flex:1}}>
                    <Pulse size={30} color="#3498db" />
                </View>
            );
        } else {
            return (
                <Container style={styles.container}>
                    <Header style={styles.header}>
                        <Button transparent>
                            <Icon name='md-menu' style={styles.colorWhite}/>
                        </Button>
                        <Title style={[styles.colorWhite, styles.fontAvenir]}>INTERNET PRICE</Title>
                        <Button transparent>
                            <Icon name='md-add' style={styles.colorWhite}/>
                        </Button>
                    </Header>

                    <Content style={styles.content}>
                        {this.listView()}
                    </Content>

                    <Footer style={styles.footer}>
                        <TouchableHighlight onPress={Actions.internetorderdetail}>
                            <Text style={{fontWeight : 'bold', fontSize:22}}>CONTINUE</Text>
                        </TouchableHighlight>
                    </Footer>
                </Container>
            );
        }
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
        padding : 20
    }
});