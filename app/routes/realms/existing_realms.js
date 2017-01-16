import React, {Component, PropTypes} from 'react';
import {Actions} from 'react-native-router-flux';
import {View, StyleSheet, Text, TouchableHighlight, TextInput, ListView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ListItemNormalComponent from '../../components/list_item_normal';
export default class ExistingRealmComponent extends Component{
    ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    constructor (props){
        super(props);
        this.state = {
            dataSource: this.ds.cloneWithRows(
                [
                    'Stanbic IBTC Pensions',
                    'United Bank of Africa',
                    'Department Of Petroleum Resources',
                    'PAL Pensions',
                    'Formelo Demo',
                    'Chevron Limited'
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
                <Text style={styles.buttonText}>
                    My Teams
                </Text>
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
        marginTop : 80,
        marginBottom : 10,
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