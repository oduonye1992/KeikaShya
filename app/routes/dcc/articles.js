import React, { Component } from 'react';
import { Text, StyleSheet,RefreshControl,  TextInput, ListView, Dimensions,View, Image, ScrollView, TouchableHighlight, AsyncStorage } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import {Actions} from 'react-native-router-flux';
import store from '../../store/store';
import Hr from '../../lib/hr';
import AppSettings from '../../config/settings';
import EmptyStateComponent from './empty';
import { Bubbles} from 'react-native-loader';

export default class ArticlesComponent extends Component {
    ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    constructor (props){
        super(props);
        this.state = {
            pageState : 'loading', // loading, error, empty, data
            dataSource: this.ds.cloneWithRows([]),
            isRefreshing : false
        };
    }
    convert_html_to_string(html){
        let a = html;
        let b = a.replace('<p>', '').replace('&#8220;', '');
        let c = b.replace(/<\s*br[^>]?>/,'\n')
            .replace(/(<([^>]+)>)/g, "");
        return _.escape(c);
    }
    conf = {
        storageKey : 'DCC/Articles'
    };
    componentDidMount(){
        this.fetchLocal();
    }
    renderList(){
        return <ListView
            initialListSize = {1}
            scrollRenderAheadDistance = {1}
            removeClippedSubviews = {true}
            enableEmptySections = {true}
            dataSource={this.state.dataSource}
            renderRow={
                (rowData) => {
                    return (
                    <TouchableHighlight
                        underlayColor ="#ecf0f1"
                        onPress={() => {
                            requestAnimationFrame(() => {
                                Actions.article_details({article : rowData});
                            });
                        }}
                    >
                        <View style={{padding:15, flexDirection:'row', alignItems:'flex-start', marginTop:10, borderBottomWidth:.5, borderColor:'#bdc3c7'}}>
                            <View style={{alignItems:'center'}}>
                                <Image
                                    style={{width:115, height:80, resizeMode:'cover', borderRadius:3}}
                                    source={{uri : rowData.thumbnail}}/>
                            </View>
                            <View style={{marginLeft:12, width:AppSettings.formatWidth(60), justifyContent:'center'}}>
                                <Text style={{color:'#c6729e', fontFamily:'AvenirNext-Medium'}}>{rowData.title}</Text>
                                <Text style={{color:'#34495e', fontFamily:'AvenirNext-Medium', fontSize:11}}>
                                    {this.convert_html_to_string(rowData.excerpt).substr(0, 140)+'...'}
                                </Text>
                            </View>
                        </View>
                    </TouchableHighlight>
                    );
                }
            }
        />
    }
    async fetchLocal(){
        let value = await AsyncStorage.getItem(this.conf.storageKey);
        if (value !== null) {
            // We have data!!
            this.setState({
                dataSource: this.ds.cloneWithRows(JSON.parse(value).posts),
                pageState : 'data'
            });
            this.fetchRemote('update');
        } else {
            this.fetchRemote();
        }
    }
    async storeLocal(item){
        await AsyncStorage.setItem(this.conf.storageKey, typeof item == 'string' ? item : JSON.stringify(item));
    }
    _onRefresh(){
        this.setState({
            isRefreshing : true
        });
        this.fetchRemote('update');
    }
    fetchRemote(_mode){
        let mode = _mode || 'insert';
        const url = 'http://davidschristiancentre.org/api/?json=get_recent_posts&date_format=U&exclude=comments,categories,custom_fields/';
        fetch(url)
            .then(res => res.json())
            .then(response => {
                if (response.length < 1){
                    return this.setState({
                        pageState : 'empty'
                    });
                }
                this.setState({
                    dataSource: this.ds.cloneWithRows(response.posts),
                    pageState : 'data',
                    isRefreshing : false
                });
                this.storeLocal(response);
            })
            .catch(err => {
                alert(err);
                if (mode == 'insert'){
                    this.setState({
                        pageState : 'error',
                        isRefreshing : false
                    });
                }
                // Show alert
            })
    }
    renderMode(){
        if (this.state.pageState == 'loading'){
            return (
                <View style={{height:AppSettings.formatHeight(80),
                    alignItems:'center', justifyContent:'center'}}>
                    <Bubbles size={10} color="#232642" />
                </View>
            );
        } else if (this.state.pageState == 'error'){
            return (
                <EmptyStateComponent
                    title = "An error has occured"
                    description = "Please try again later"
                    icon  = "ios-sad-outline"
                    showButton = {false}
                />
            );
        } else if (this.state.pageState == 'empty'){
            return (
                <EmptyStateComponent
                    title = "No Articles are available now"
                    description = "You will be notified when a new article pops up"
                    icon  = "ios-book-outline"
                    showButton = {false}
                />
            );
        } else if (this.state.pageState == 'data'){
            return this.renderList();
        } else {
            return null;
        }
    }
    render() {
        return (
            <Container >
                <Header style={{backgroundColor:'#232642'}}>
                    <Button
                        onPress = {() => {
                            requestAnimationFrame(() => {
                                store.dispatch({
                                    type : 'OPEN_DRAWER'
                                })
                            });
                        }}
                        transparent>
                        <Icon name='ios-menu' style={{color:'#4cb2cb'}}/>
                    </Button>
                    <Title style={{color:'white', fontFamily:'AvenirNext-Medium'}}>ARTICLES</Title>

                </Header>
                <Content
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.isRefreshing}
                            onRefresh={this._onRefresh.bind(this)}
                        />
                    }
                    style={{backgroundColor:'white'}}>
                    {this.renderMode()}
                </Content>
            </Container>
        );
    }
}
const styles = StyleSheet.create({

});