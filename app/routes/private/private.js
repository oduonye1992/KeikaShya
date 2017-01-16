import React, {Component, PropTypes} from 'react';
import {Actions} from 'react-native-router-flux';
import {View, StyleSheet, Text, TouchableHighlight, TextInput, ScrollView, ListView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ListItemNormalComponent from '../../components/list_item_normal';
export default class PrivateComponent extends Component{
    ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    constructor (props){
        super(props);
        this.state = {
            dataSource: this.ds.cloneWithRows(
                [
                    'Routine Suervillance form',
                    'Gas Inspection Form',
                    'New Registration Form',
                    'Routine Suervillance form',
                    'Gas Inspection Form',
                    'New Registration Form',
                    'Routine Suervillance form',
                    'Gas Inspection Form',
                    'New Registration Form',
                    'Routine Suervillance form',
                    'Gas Inspection Form',
                    'New Registration Form',
                    'Routine Suervillance form',
                    'Gas Inspection Form',
                    'New Registration Form'
                ]
            )
        }
    }
    openLoginPage(){
        Actions.login();
    }
    render (){
        return(
            <LinearGradient colors={[ '#27ae60']} style={styles.container}>
                <Text style={styles.buttonText}>
                    My Applets
                </Text>
                <ScrollView>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={
                            (rowData) => {
                                return <ListItemNormalComponent
                                    color = "#34495e"
                                    text = {rowData}
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