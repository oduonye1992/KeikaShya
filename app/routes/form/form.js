import React, {Component, PropTypes} from 'react';
import {Actions} from 'react-native-router-flux';
import {View, StyleSheet, Text, TouchableHighlight, TextInput, ListView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/EvilIcons';
import ListItemSelectionComponent from '../../components/list_item_selection';
export default class FormComponent extends Component{
    ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    constructor (props){
        super(props);
        this.state = {
            dataSource: this.ds.cloneWithRows(
                [
                    {title:'Dec 15 - 21', mode:'date'},
                    {title:'1 Adult, 2 Children', mode:'occupants'},
                    {title:'Jamal Airport, UAE', mode:'airport'},
                    {title:'Transport from Airport: Yes', mode:'airportTransport'},
                    {title:'Room Type: Standard', mode:'roomtype'},
                    {title:'Boarding: Yes', mode:'boarding'}
                ]
            )
        }
    }
    send(){
        Actions.optional_email();
    }
    openLoginPage(){
        Actions.login();
    }
    onItemClicked(mode){
        if (mode == 'date'){
            Actions.calender();
        } else if (mode == 'occupants'){
            Actions.occupants();
        } else if (mode == 'airport'){
            Actions.airports();
        } else if (mode == 'airportTransport'){

        } else if (mode == 'roomtype'){
            Actions.roomtype();
        } else if (mode == 'boarding'){

        }
    }
    render (){
        return(
            <LinearGradient colors={['#34495e', '#34495e', '#34495e']} style={styles.container}>
                <TouchableHighlight
                    onPress ={Actions.pop}
                >
                    <Text style={styles.buttonText}>
                        <Icon name="close" size={40} color="white" />
                    </Text>
                </TouchableHighlight>

                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={
                        (rowData) => {
                            return <ListItemSelectionComponent
                                color = "#34495e"
                                text = {rowData}
                                onItemClicked = {this.onItemClicked}
                            />
                        }
                    }
                />
                <View style={{flexDirection : 'row', justifyContent : 'space-between', height : 60, alignItems : 'center'}}>
                    <TouchableHighlight
                        style={styles.btnPrivate}
                        underlayColor = "#ecf0f1"
                        onPress = {this.send}
                    >
                        <Text  style={{
                            fontFamily: 'AvenirNext-Medium',
                            textAlign : 'center',
                            fontSize : 20,
                            color : 'white',
                            marginTop : -2
                        }}>
                            Continue
                        </Text>
                    </TouchableHighlight>
                </View>
            </LinearGradient>
        );
    }
}
const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : 'flex-start',
        padding : 10
    },
    btnPublic : {
        backgroundColor: 'white',
        padding : 10,
        borderRadius : 400,
        width : 330,
        marginTop : 35,
    },
    btnPrivate : {
        backgroundColor: '#6C7A89',
        width : 353,
        padding : 20
    },
    appAuthor : {
        fontFamily: 'AvenirNext-Medium',
        color : '#34495e',
        backgroundColor: 'transparent',
        fontSize : 15,
        padding : 15,
        marginTop : -30,
        marginBottom : 25
    },
    buttonText: {
        fontSize: 40,
        fontWeight : '600',
        color: '#34495e',
        marginTop : 10,
        marginBottom : 20,
        fontFamily: 'AvenirNext-Medium',
        backgroundColor: 'transparent',
    },
    infoTitle : {
        fontFamily: 'AvenirNext-Medium',
        color : '#34495e',
        backgroundColor: 'transparent',
        fontSize : 20,
        padding : 15,
        marginTop : -30
    },
    infoDescription: {
        fontFamily: 'AvenirNext-Regular',
        color : '#34495e',
        backgroundColor: 'transparent',
        fontSize : 18,
        padding : 15,
        marginTop : -4
    }
});