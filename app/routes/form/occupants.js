import React, {Component, PropTypes} from 'react';
import {View, StyleSheet, Text, TouchableHighlight, TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/EvilIcons';
import globals from '../../mocks/state';
export default class OccupantsComponent extends Component{
    constructor (props){
        super(props);
    }
    openPinPage(){
        Actions.private_pin();
    }
    save (){
        Actions.save();
    }
    render (){
        return(
            <LinearGradient colors={['#2980b9', '#3498db']} style={styles.container}>
                <TouchableHighlight
                    underlayColor = "#ecf0f1"
                    onPress={Actions.pop}
                >
                    <Text style={styles.buttonText}>
                        <Icon name="close" size={40} color="white" />
                    </Text>
                </TouchableHighlight>

                <View>
                    <View style={{marginTop : -40, flexDirection:'row', justifyContent:'space-between'}}>
                        <View>
                            <Text style={{backgroundColor:'transparent', color: 'white', fontFamily: 'AvenirNext-Medium', fontSize:40}}>Adults</Text>
                        </View>
                        <View style={{flexDirection:'row', justifyContent : 'space-between'}}>
                            <TouchableHighlight style={{width:40, height:40, alignItems:'center'}}>
                                <Text style={{color: 'white', backgroundColor : 'transparent', fontFamily: 'AvenirNext-Medium', fontSize:40}}>-</Text>
                            </TouchableHighlight>
                            <TouchableHighlight style={{padding:2, backgroundColor:'white', borderRadius:600, width:60, height:60, alignItems:'center'}}>
                                <Text style={{color: '#2980b9', backgroundColor : 'transparent', fontFamily: 'AvenirNext-Medium', fontSize:40}}>+</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                    <View style={{marginTop : 40, flexDirection:'row', justifyContent:'space-between'}}>
                        <View>
                            <Text style={{backgroundColor:'transparent', color: 'white', fontFamily: 'AvenirNext-Medium', fontSize:40}}>Children</Text>
                            <Text style={{backgroundColor:'transparent', color: 'white', fontFamily: 'AvenirNext-Medium', fontSize:20}}>2 - 12 Years Old</Text>
                        </View>
                        <View style={{flexDirection:'row', justifyContent : 'space-between'}}>
                            <TouchableHighlight style={{width:40, height:40, alignItems:'center'}}>
                                <Text style={{color: 'white', backgroundColor : 'transparent', fontFamily: 'AvenirNext-Medium', fontSize:40}}>-</Text>
                            </TouchableHighlight>
                            <TouchableHighlight style={{padding:2, backgroundColor:'white', borderRadius:600, width:60, height:60, alignItems:'center'}}>
                                <Text style={{color: '#2980b9', backgroundColor : 'transparent', fontFamily: 'AvenirNext-Medium', fontSize:40}}>+</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                    <View style={{marginTop : 40, flexDirection:'row', justifyContent:'space-between'}}>
                        <View>
                            <Text style={{backgroundColor:'transparent', color: 'white', fontFamily: 'AvenirNext-Medium', fontSize:40}}>Infants</Text>
                            <Text style={{backgroundColor:'transparent', color: 'white', fontFamily: 'AvenirNext-Medium', fontSize:20}}>Under 2 Years Old</Text>
                        </View>
                        <View style={{flexDirection:'row', justifyContent : 'space-between'}}>
                            <TouchableHighlight style={{width:40, height:40, alignItems:'center'}}>
                                <Text style={{color: 'white', backgroundColor : 'transparent', fontFamily: 'AvenirNext-Medium', fontSize:40}}>-</Text>
                            </TouchableHighlight>

                            <TouchableHighlight style={{padding:2, backgroundColor:'white', borderRadius:600, width:60, height:60, alignItems:'center'}}>
                                <Text style={{color: '#2980b9', backgroundColor : 'transparent', fontFamily: 'AvenirNext-Medium', fontSize:40}}>+</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
                <View style={{flexDirection : 'row', justifyContent : 'space-between', height : 60, alignItems : 'center'}}>
                    <TouchableHighlight
                        style={styles.btnPrivate}
                        underlayColor = "#ecf0f1"
                        onPress = {this.save}
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
        padding: 20,
        justifyContent : 'space-between'
    },
    btnPublic : {
        backgroundColor: 'white',
        padding : 10,
        borderRadius : 400,
        width : 330,
        marginTop : 35,
    },
    btnPrivate : {
        backgroundColor: '#2980b9',
        width : 330,
        padding : 20
    },
    btnFooter : {
        backgroundColor: 'transparent',
        width : 300,
        padding : 20,
        borderColor: 'white',
        borderWidth: 1
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