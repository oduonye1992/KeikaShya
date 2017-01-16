import React, {Component, PropTypes} from 'react';
import {Actions} from 'react-native-router-flux';
import {View, StyleSheet, Text, TouchableHighlight, TextInput, ScrollView, ListView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ListItemNormalComponent from '../../components/list_item_normal';

export default class ForgotComponent extends Component{
    ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    constructor (props){
        super(props);
    }
    openLoginPage(){
        Actions.private_login();
    }
    rightButtonConfig = {
        title: 'Next',
        handler: () => alert('hello!')
    };
    render (){
        return(
            <LinearGradient colors={['#1abc9c', '#16a085']} style={styles.container}>
                <Text style={styles.buttonText}>
                    What's your email?
                </Text>
                <TextInput
                    autoFocus = {true}
                    placeholder = "Email Address"
                    style={{height: 70, fontSize : 30,  borderColor: 'white', color : 'white'}}
                />
                <View style={{flexDirection : 'row', justifyContent : 'space-between'}}>
                    <TouchableHighlight
                        style={styles.btnPrivate}
                        onPress={this.openLoginPage}>
                        <Text  style={{
                            fontFamily: 'AvenirNext-Medium',
                            textAlign : 'center',
                            fontSize : 20,
                            color : '#27ae60'
                        }}>
                            Recover
                        </Text>
                    </TouchableHighlight>
                </View>

                <Text style={styles.infoTitle}>
                    What Next?
                </Text>
                <Text style={styles.infoDescription}>
                    An Email will be sent to you with a new password. It it ex,pected that you change it when you can.
                </Text>

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
        padding : 10,
        borderRadius : 5,
        width : 150,
        marginTop : 15,
    },
    btnFooter : {
        backgroundColor: 'transparent',
        width : 180,
        padding : 20,
        borderColor: 'white',
        borderWidth: 1
    },
    buttonText: {
        fontSize: 33,
        color: 'white',
        marginTop : 120,
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