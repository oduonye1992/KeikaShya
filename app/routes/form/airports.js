import React, {Component, PropTypes} from 'react';
import {Actions} from 'react-native-router-flux';
import {View, StyleSheet, Text, TouchableHighlight, TextInput, ListView, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/EvilIcons';
import FullWidthComponent from '../../components/fullwidth';
export default class AirportComponent extends Component{
    ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    constructor (props){
        super(props);
        this.state = {
            dataSource: this.ds.cloneWithRows(
                [
                    {title : 'Heathrow Airport', image:'http://cdn.images.express.co.uk/img/dynamic/1/590x/98587119-475537.jpg'},
                    {title : 'Barrow Island Airport', image:'https://media.licdn.com/mpr/mpr/shrinknp_800_800/AAEAAQAAAAAAAANGAAAAJDNkNDYzOWY5LTJmYWQtNGI3MS1hNmQ0LWE2ZDg4OWI2MzZkYQ.jpg'},
                    {title : 'Indira Ghandi Airport', image:'https://s-media-cache-ak0.pinimg.com/originals/d9/0e/06/d90e06b1ac3d9d10b57834908071eab7.jpg'},
                    {title : 'Heathrow Airport', image:'https://s-media-cache-ak0.pinimg.com/736x/ce/d5/71/ced57174a3c1c335c7a067c17b523bc9.jpg'},
                    {title : 'Bali Kun Airport', image:'https://i.ytimg.com/vi/8Duz23B9zVw/hqdefault.jpg'},
                    {title : 'Emirates Airport', image:'https://media-cdn.tripadvisor.com/media/photo-s/0a/3d/86/1e/the-spectator-hotel.jpg'},
                    {title : 'Emirates Airport', image:'https://media-cdn.tripadvisor.com/media/photo-s/0a/3d/86/1e/the-spectator-hotel.jpg'},
                    {title : 'Emirates Airport', image:'https://media-cdn.tripadvisor.com/media/photo-s/0a/3d/86/1e/the-spectator-hotel.jpg'},
                    {title : 'Emirates Airport', image:'https://media-cdn.tripadvisor.com/media/photo-s/0a/3d/86/1e/the-spectator-hotel.jpg'},
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