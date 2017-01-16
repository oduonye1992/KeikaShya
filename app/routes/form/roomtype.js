import React, {Component, PropTypes} from 'react';
import {Actions} from 'react-native-router-flux';
import {View, StyleSheet, Text, TouchableHighlight, TextInput, ListView, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/EvilIcons';
import FullWidthComponent from '../../components/fullwidth';
export default class RoomTypeComponent extends Component{
    ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    constructor (props){
        super(props);
        this.state = {
            dataSource: this.ds.cloneWithRows(
                [
                    {title : 'Classic Double or Twin Room', image:'https://exp.cdn-hotels.com/hotels/1000000/50000/45800/45775/45775_150_z.jpg'},
                    {title : 'Two Connecting Rooms', image:'https://exp.cdn-hotels.com/hotels/1000000/50000/45800/45775/45775_161_z.jpg'},
                    {title : 'Classic Rooms', image:'https://exp.cdn-hotels.com/hotels/1000000/50000/45800/45775/45775_147_z.jpg'},
                    {title : 'Double Delux', image:'https://exp.cdn-hotels.com/hotels/1000000/50000/45800/45775/45775_74_z.jpg'},
                    {title : 'Guest Room', image:'https://exp.cdn-hotels.com/hotels/1000000/50000/45800/45775/df89869a_z.jpg'},
                    {title : 'Tomato Paste', image:'https://media-cdn.tripadvisor.com/media/photo-s/0a/3d/86/1e/the-spectator-hotel.jpg'}
                ]
            )
        }
    }
    openLoginPage(){
        Actions.login();
    }
    render (){
        return(
            <LinearGradient colors={[]} style={styles.container}>
                <TouchableHighlight
                    underlayColor = "#ecf0f1"
                    onPress={Actions.pop}
                >
                    <Text style={styles.buttonText}>
                        <Icon name="close" size={40} color="#2c3e50" />
                    </Text>
                </TouchableHighlight>
                <ScrollView>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={
                            (rowData) => {
                                return <FullWidthComponent
                                    onItemClicked = {() => {
                                        Actions.form();
                                    }
                                    }
                                    color = "#34495e"
                                    text = {rowData}
                                    name = {rowData}
                                    items = {rowData}
                                />
                            }
                        }
                    />
                </ScrollView>
            </LinearGradient>
        );
    }
}
const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : 'flex-start',
        padding: 20
    },
    btnPublic : {
        backgroundColor: 'white',
        padding : 10,
        borderRadius : 400,
        width : 330,
        marginTop : 35,
    },
    btnPrivate : {
        backgroundColor: 'white',
        borderColor: 'white',
        padding : 10,
        borderWidth : 1,
        borderRadius : 400,
        width : 100,
        marginTop : 15,
    },
    buttonText: {
        fontSize: 33,
        color: '#34495e',
        marginTop : 30,
        marginBottom : 30,
        fontFamily: 'AvenirNext-Medium',
        backgroundColor: 'transparent',
    },
    infoTitle : {
        fontFamily: 'AvenirNext-Medium',
        color : 'white',
        backgroundColor: 'transparent',
        fontSize : 15,
        marginTop : 80
    },
    infoDescription: {
        fontFamily: 'AvenirNext-Medium',
        color : 'white',
        backgroundColor: 'transparent',
        fontSize : 12,
        marginTop : 14
    }
});