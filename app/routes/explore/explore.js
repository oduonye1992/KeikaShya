import React, {Component, PropTypes} from 'react';
import {View, Text, Button, Image, StyleSheet, ScrollView, ListView, StatusBar, TouchableHighlight} from 'react-native';
import BoxContainer from '../../components/box_container';
import AppSettings from '../../config/settings';
import { Pulse } from 'react-native-loader';
import SearchBar from 'react-native-material-design-searchbar';
import Drawer from 'react-native-drawer';
import LinearGradient from 'react-native-linear-gradient';

// Import Sample Data
import SampleData from '../../mocks/explore';
export default class ExploreComponent extends Component{
    fetchCategories (){
        this.setState({
            viewState : 'loaded',
            items : SampleData.data,
            dataSource: this.ds.cloneWithRows(SampleData.data)
        });
        return true;
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
            drawerOpen : false,
            dataSource: this.ds.cloneWithRows([])
        };
    }
    openNavBar(){
        this.setState({
            drawerOpen : true
        });
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
                <Drawer
                    ref="drawer"
                    open={this.state.drawerOpen}
                    tapToClose={true}
                    openDrawerOffset={0.2}
                    panCloseMask={0.2}
                    negotiatePan={true}
                    content={<View/>}
                >
                    <ScrollView>
                    <StatusBar
                        backgroundColor="blue"
                        barStyle="dark-content"
                        setHidden = {true}
                    />
                    <Text style={{height:20}} />
                    <LinearGradient colors={['#1abc9c', '#16a085']}>
                        <View>
                            <SearchBar
                                onSearchChange={() => console.log('On Focus')}
                                height={40}
                                onFocus={() => console.log('On Focus')}
                                onBlur={() => console.log('On Blur')}
                                inputStyle = {{fontFamily: 'AvenirNext-Medium', color:'white', backgroundColor:'#16a085', borderColor:'transparent'}}
                                placeholder={'Where are you going to?'}
                                autoCorrect={true}
                                iconColor = "white"
                                placeholderColor = "white"
                                padding={5}
                                returnKeyType={'search'}
                            />
                            <View style={{alignItems:'flex-end', padding : 5}}>
                                <TouchableHighlight
                                    style={styles.btnFooter}
                                    underlayColor = "#ecf0f1"
                                    onPress={this.openNavBar.bind(this)}
                                >
                                    <Text  style={{
                                        fontFamily: 'AvenirNext-Medium',
                                        textAlign : 'center',
                                        fontSize : 20,
                                        color : 'white',
                                        backgroundColor: 'transparent',
                                        marginTop:-9
                                    }}>
                                        Filter
                                    </Text>
                                </TouchableHighlight>
                            </View>
                            </View>

                    </LinearGradient>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={
                            (rowData) => {
                                return <BoxContainer
                                    items = {rowData}
                                    mode = {rowData.display_mode}
                                />
                            }
                        }
                    />
                </ScrollView>
                </Drawer>
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
    btnFooter : {
        backgroundColor: 'transparent',
        borderWidth:1,
        borderColor:'white',
        width : 180,
        height:40,
        padding :15,
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