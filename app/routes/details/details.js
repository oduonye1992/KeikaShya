import React, {Component, PropTypes} from 'react';
import {Actions} from 'react-native-router-flux';
import {View, StyleSheet, Text, TouchableHighlight, TextInput, ListView, Image, ScrollView} from 'react-native';
export default class DetailsComponent extends Component{
    constructor (props){
        super(props);
        this.state = {}
    }
    openLoginPage(){
        Actions.login();
    }
    onPress(){
        Actions.form();
    }
    render (){
        return(
            <View style={{flex: 1, justifyContents : 'space-between'}}>
                <ScrollView contentContainerStyle={styles.container}>
                    <Image source={{uri: 'https://exp.cdn-hotels.com/hotels/1000000/50000/45800/45775/45775_148_z.jpg'}}
                           style={{width: 380, height: 280}} />
                    <View style={{padding : 10}}>
                        <View >
                            <Text style={styles.buttonText}>ADI Hotel Poliziano Fiera</Text>
                        </View>
                    </View>
                    <View style={{flexDirection  : 'row', justifyContent : 'space-between'}}>
                        <Text style={styles.appAuthor}>
                            4-star hotel with restaurant, near Fiera Milano City
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.infoTitle}>
                            About this Hotel
                        </Text>
                        <Text style={styles.infoDescription}>
                            Mere words can't really express the majesty of Milan's Duomo. One of the world's largest cathedrals, it's a lavish palace of worship bedecked with hundreds of spires and statues – a Gothic glory which took six centuries to complete. It sits in the Piazza del Duomo, a short walk from the legendary Quadrilatero shopping district, where the most exclusive fashion houses have boutiques lining streets like Via Sant'Andrea and Via Verri.
                        </Text>
                    </View>
                </ScrollView>
                <View style={{flexDirection : 'row', justifyContent : 'space-between', height : 60, alignItems : 'center', padding : 15, borderWidth : 1, borderColor : '#ecf0f1'}}>
                    <Text  style={{
                        fontFamily: 'AvenirNext-Regular',
                        textAlign : 'center',
                        fontSize : 15,
                        color : '#34495e'
                    }}>
                        25k Likes
                    </Text>
                    <TouchableHighlight
                        style={styles.btnPrivate}
                        underlayColor = "#ecf0f1"
                        onPress={this.onPress}
                    >
                        <Text  style={{
                            fontFamily: 'AvenirNext-Medium',
                            textAlign : 'center',
                            fontSize : 20,
                            color : 'white',
                            marginTop : -14
                        }}>
                            Visit
                        </Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container : {
        alignItems : 'flex-start'
    },
    btnPublic : {
        backgroundColor: 'white',
        padding : 10,
        borderRadius : 400,
        width : 330,
        marginTop : 35,
    },
    btnPrivate : {
        backgroundColor: '#3498db',
        width : 150,
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
        marginBottom : 30,
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