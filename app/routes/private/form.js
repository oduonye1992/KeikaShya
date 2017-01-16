import React,  { Component } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, ListView, TouchableHighlight } from 'react-native';
import MockData from '../../mocks/mocks';
import SignatureCapture from 'react-native-signature-capture';
import Camera from 'react-native-camera';
import { RadioButtons } from 'react-native-radio-buttons';
import ModalPicker from 'react-native-modal-picker';
import MapView from 'react-native-maps';

export default class FormComponent extends Component {
    //ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    constructor (props){
        super(props);
        /*var obj = {};
        for (var q = 0; q < MockData.applets.d9c0d1a0.pages.length; q++){
            let fieldsets = MockData.applets.d9c0d1a0.pages[q].fieldsets;
            for (var i = 0; i < fieldsets.length; i++){
                let fields = fieldsets[i].fields;
                for (let c = 0; c < fields.length; c++){
                    let field = fields[c];
                    field['value'] = "a";
                    obj[field.key] = field;
                }
            }
        }*/
        this.state = {
            numberOfPages : MockData.applets.dad0d1ec.pages.length,
            currentPage : 0,
            store : {},
            //dataSource: this.ds.cloneWithRows(MockData.applets.d9c0d1a0.pages[0].fieldsets)
        };
    }
    buildPages(index){
        let pageDS = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        let pageSource = pageDS.cloneWithRows(MockData.applets.dad0d1ec.pages[index].fieldsets);
        //return (<Text style={{height:200, fontSize : 200}}>{index}</Text>);
        return (
            <ListView
                dataSource={pageSource}
                renderRow={
                    (rowData) => {
                        return this.renderFieldSet(rowData)
                    }
                }
            />
        );
    }
    store = {};
    // Manage the
    renderPicker(){
        let index = 0;
        const data = [
            { key: index++, section: true, label: 'Fruits' },
            { key: index++, label: 'Red Apples' },
            { key: index++, label: 'Cherries' },
            { key: index++, label: 'Cranberries' },
            { key: index++, label: 'Pink Grapefruit' },
            { key: index++, label: 'Raspberries' },
            { key: index++, section: true, label: 'Vegetables' },
            { key: index++, label: 'Beets' },
            { key: index++, label: 'Red Peppers' },
            { key: index++, label: 'Radishes' },
            { key: index++, label: 'Radicchio' },
            { key: index++, label: 'Red Onions' },
            { key: index++, label: 'Red Potatoes' },
            { key: index++, label: 'Rhubarb' },
            { key: index++, label: 'Tomatoes' }
        ];

        return (
            <View style={{flex:1, justifyContent:'space-around', padding:50}}>

                <ModalPicker
                    data={data}
                    initValue="Select something yummy!"
                    onChange={(option)=>{ alert(`${option.label} (${option.key}) nom nom nom`) }} />

                <ModalPicker
                    data={data}
                    initValue="Select something yummy!"
                    onChange={(option)=>{ this.setState({textInputValue:option.label})}}>

                    <TextInput
                        style={{borderWidth:1, borderColor:'#ccc', padding:10, height:30}}
                        editable={false}
                        placeholder="Select something yummy!"
                        value={this.state.textInputValue} />

                </ModalPicker>
            </View>
        );
    }
    renderRadioButtons(){
        return (
            <RadioButtons
                options={['aaa', 'bbb', 'ccc']}
                onSelection={
                    () => {

                    }
                }
                renderContainer={RadioButtons.getViewContainerRenderer({
                    backgroundColor: '#f80046',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                })}
            />
        );
    }
    // Render Camers
    renderCamera(){
        return (
            <View style={styles.container}>
                <Camera
                    ref={(cam) => {
                        this.camera = cam;
                    }}
                    aspect={Camera.constants.Aspect.fill}>
                    <Text>[CAPTURE]</Text>
                </Camera>
            </View>
        );
    }
    // Handle Signature
    renderMap(){
        return <MapView
            initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
        />
    }
    test(){
        let a  = this.state.currentPage + 1;
        this.setState({
            currentPage : a
        });
    }
    updateState(key, parameter, newValue){
        // Get store
        let store = this.state.store;
        //store[key][parameter] = newValue;
        this.setState({
            store : {
                'reconciliation.date' : {
                    name : 'sdsddsd',
                    key : 'reconciliation.date'
                }
            }
        });
    }
    get(key){
        return this.state.store[key];
    }
    renderSignature (data){
        return (
            <View style={{flex:1}}>
                <Text style={styles.buttonText}>
                    {data.name}
                </Text>
                <SignatureCapture
                    style={{flex:1, height:400}}
                    ref="sign"
                    onSaveEvent={this._onSaveEvent}
                    onDragEvent={this._onDragEvent}
                    saveImageFileInExtStorage={false}
                    showNativeButtons={true}
                    viewMode={"portrait"}/>
            </View>
        )
    }
    /*
        Handle Creation of Text, Number
    */
    renderText (data){
        // Initialize the state for this key
        return (
            <View>
                <Text style={styles.buttonText}>
                    {data.name}
                </Text>
                <TextInput
                    //autoFocus = {true}
                    placeholder = ""
                    onChangeText={(text) => {
                            // Validate data and show err or if any
                            this.updateState(data.key, 'name', text);
                        }
                    }
                    //value={this.state.store[data.key].value}
                    style={{height: 70, borderWidth:1, borderColor:'#bdc3c7',  fontSize : 30, color : '#34495e'}}
                />
            </View>
        )
    }
    renderFieldSet(data){
        if (!data.fields){

        }
        let source = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        let dat = source.cloneWithRows(data.fields);
        return (
            <View>
                <Text style={styles.fieldSet}>{data.name}</Text>
                <ListView
                    dataSource={dat}
                    renderRow={
                        (rowData) => {
                            return this.renderText(rowData)
                        }
                    }
                />
            </View>
        );
    }
    render (){
        return (
            <View style={{flex: 1}}>
                <ScrollView contentContainerStyle={{flex:1, justifyContent:'flex-start', padding : 8}}>
                    {this.buildPages(this.state.currentPage)}
                </ScrollView>
                <View style={{flexDirection : 'row', justifyContent : 'space-between', height : 60, alignItems : 'center', padding : 15, borderWidth : 1, borderColor : '#ecf0f1'}}>
                    <Text  style={{
                        fontFamily: 'AvenirNext-Regular',
                        textAlign : 'center',
                        fontSize : 20,
                        color : '#34495e'
                    }}>
                        {this.state.currentPage == 0 ? '' : 'Back'}
                    </Text>
                    <TouchableHighlight
                        style={styles.btnPrivate}
                        onPress={this.test.bind(this)}
                        underlayColor = "#ecf0f1"
                    >
                        <Text  style={{
                            fontFamily: 'AvenirNext-Medium',
                            textAlign : 'center',
                            fontSize : 20,
                            color : 'white',
                            marginTop : -14
                        }}>
                            {this.state.currentPage == this.state.numberOfPages ? 'Submit' : 'Next'}
                        </Text>
                    </TouchableHighlight>
                </View>
            </View>
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
        backgroundColor: '#3498db',
        width : 150,
        padding : 20
    },
    btnFooter : {
        backgroundColor: 'transparent',
        width : 180,
        padding : 20,
        borderColor: 'white',
        borderWidth: 1
    },
    buttonText: {
        fontSize: 20,
        color: '#34495e',
        marginTop : 40,
        fontFamily: 'AvenirNext-Medium',
        backgroundColor: 'transparent',
    },
    fieldSet : {
        fontFamily: 'AvenirNext-Bold',
        color : '#3498db',
        backgroundColor: 'transparent',
        fontSize : 30,
        marginTop : 40
    },
    infoTitle : {
        fontFamily: 'AvenirNext-Medium',
        color : 'white',
        backgroundColor: 'transparent',
        fontSize : 15,
        marginTop : 40
    },
    infoDescription: {
        fontFamily: 'AvenirNext-Medium',
        color : 'white',
        backgroundColor: 'transparent',
        fontSize : 12,
        marginTop : 14
    }
});