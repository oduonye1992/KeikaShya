import React, {Component, PropTypes} from 'react';
import {Actions} from 'react-native-router-flux';
import {View, StyleSheet, Text, TouchableHighlight, TextInput, ScrollView, ListView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/EvilIcons';
import ListItemNormalComponent from '../../components/list_item_normal';
import globals from '../../mocks/state';


export default class OptionalEmailComponent extends Component{
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
                <TouchableHighlight
                    onPress ={Actions.pop}
                >
                    <Text style={styles.buttonText}>
                        <Icon name="close" size={40} color="white" />
                    </Text>
                </TouchableHighlight>
                <Text style={styles.buttonText}>
                    Get offers via Email?
                </Text>
                <TextInput
                    autoFocus = {true}
                    placeholder = "Enter your Email Address"
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
                            Request Offers
                        </Text>
                    </TouchableHighlight>
                </View>

                <Text style={styles.infoTitle}>
                    Email Notifications
                </Text>
                <Text style={styles.infoDescription}>
                    In addition to recieving offers to your inbox, a user account wikl be created for you; A generated password will be sent to your phone for subsequent Signing in.
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
        width : 250,
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
        marginTop : 60,
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