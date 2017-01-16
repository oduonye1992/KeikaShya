import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, TouchableHighlight } from 'react-native'
import {Actions} from 'react-native-router-flux';
export default class BoxVerticalComponent extends Component{
    getRandomImage (){
        const images = [
            'https://lh3.ggpht.com/0Gp9St5vOEYPpiHVYmDaRe44gBDLkaGkEIq4AsAVirpD9svm-HdaBTXgh8lJNxPCbQE=h900',
            'http://www.latesthdwallpapers.in/images/Very-romantic-Evening-hq-wallpaper.jpg',
            'https://lh6.ggpht.com/IH2JLiHjVB9eoUpB6GSKthjox1kfnBicInttPpFNVlAYpOp7dXMFvWAfkxcwln02MAOv=h900',
            'http://imageshd.in/var/albums/HD-Images/Zareen%20khan%20Latest%20HD%20Image.jpg?m=1445374637',
            'http://www.ultrahdfreewallpapers.com/uploads/large/3d-and-abstract/3d-hd-wallpaper-0727.png'
        ];
        return images[Math.floor(Math.random()*images.length)];
    }
    capitalize (string){
        return string.charAt(0).toUpperCase() + string.toLowerCase().slice(1);
    }
    gotoDetailsView(){
        Actions.details();
    }
    constructor (props) {
        super(props);
    }
    render(){
        return (
            <TouchableHighlight
                onPress={this.props.onItemClicked}
                underlayColor = "#ecf0f1"
            >
                <View style={{padding : 10}}>
                    <Image source={{uri: this.props.items.image}}
                           style={{width: 150, height: 250}} />
                    <Text style={styles.supportText1}>{this.capitalize(this.props.items.title)}</Text>
                </View>
            </TouchableHighlight>
        );
    }
}
const styles = StyleSheet.create({
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