import React, {Component, PropTypes} from 'react';
import {View, StyleSheet, Text, TouchableHighlight, TextInput} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import {Actions} from 'react-native-router-flux';
import Calendar from 'react-native-calendar';
import store from "../../store/store";

export default class CalenderComponent extends Component{
    constructor (props){
        super(props);
        this.state = {
            item : this.props.data,
            selected_date : null
        }
    }
    save (){
        store.dispatch({
            type: 'FORM_UPDATE',
            data: {
                key : this.props.data,
                value : this.state.selected_date
            }
        });
        Actions.pop();
    }
    onDateChange(date){
        alert(date);
        this.setState({
            selected_date : date
        });
    }
    render (){
        const customStyle = {
            controlButtonText: {
                color: 'blue',
                backgroundColor : 'transparent'
            },
            dayButton: {
                backgroundColor: 'transparent',
            },
            monthContainer: {
                backgroundColor: 'transparent',
            },
            yearContainer: {
                backgroundColor: 'transparent',
            },
        };
        return(
        <Container style={styles.container}>
            <Header style={styles.header}>
                <Button transparent>
                    <Icon name='md-arrow-back' style={styles.colorWhite}/>
                </Button>
                <Title style={[styles.colorWhite, styles.fontAvenir]}>CHOOSE DATE</Title>
            </Header>
            <Content style={styles.content}>
                <View>
                    <Calendar
                        showControls
                        onDateSelect={this.onDateChange.bind(this)}
                        customStyle={customStyle} />
                </View>
            </Content>
            <Footer style={styles.footer}>
                <TouchableHighlight onPress={this.save.bind(this)}>
                    <Text style={{fontWeight : 'bold', fontSize:22}}>CONTINUE</Text>
                </TouchableHighlight>
            </Footer>
        </Container>
        );
    }
}
const styles = StyleSheet.create({
    container : {

    },
    colorWhite : {
        color: 'white',
    },
    fontAvenir : {
        fontFamily: 'AvenirNext-Medium'
    },
    header : {
        backgroundColor : '#00638c'
    },
    footer : {
        backgroundColor:'#f39c12'
    },
    content : {
        padding : 20,
        backgroundColor:'#EBF4FA'
    }
});