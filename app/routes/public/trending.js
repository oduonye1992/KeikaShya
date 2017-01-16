import React, {Component, PropTypes} from 'react';
import {View, Text, Button} from 'react-native';
import {Actions} from 'react-native-router-flux';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Sae } from 'react-native-textinput-effects';
export default class TrendingComponent extends Component{
    constructor (props){
        super(props);
    }
    render (){
        return(
            <View>
                <Text style={{height:300}}>.</Text>
                <Button
                    onPress={Actions.details}
                    title="Trending Component"
                />
            </View>
        );
    }
}