import React, { Component } from 'react';
import { Text, StyleSheet, ListView, View, Image, ScrollView } from 'react-native';
import { Container, Header, Title, Card, CardItem, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import SearchBar from 'react-native-material-design-searchbar';
import ListItemCard from '../../components/list_item_card';
import MapView from 'react-native-maps';
import StarRating from 'react-native-star-rating';
import Hr from '../../lib/hr';

export default class OrderDetailComponent extends Component {
    ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    constructor (props){
        super(props);
        this.state = {
            dataSource: this.ds.cloneWithRows(
                [
                    'Grand Hyatt',
                    'Grand Hya',
                    'Grand Hua',
                    'Grant huayu',
                    'Grant Huaus'
                ]
            )
        }
    }
    detailView(){
        return <View>
            <View style = {{alignItems:'center', marginTop: -10}}>
                <Text style={{color:'grey', fontFamily: 'AvenirNext-Medium'}}>Internet Order 20-14-2017</Text>
            </View>
            <Card style={{ flex: 0 }}>
                <CardItem>
                    <View>
                        <View style={{flexDirection : 'row', justifyContent:'space-between'}}>
                            <View>
                                <Text style={{fontFamily: 'AvenirNext-Medium', fontWeight:'bold'}}>Grand Hyatt</Text>
                                <Text style={{fontFamily: 'AvenirNext-Medium', color:'grey'}}>Hong Kong</Text>
                                <Text style={{height:6}}>.</Text>
                                <StarRating
                                    disabled={false}
                                    maxStars={5}
                                    rating={4}
                                    selectedStar={(rating) => {}}
                                    starSize={10}
                                />
                            </View>
                            <View>
                                <Image source={{uri: 'https://exp.cdn-hotels.com/hotels/1000000/50000/45800/45775/45775_148_z.jpg'}}
                                       style={{width: 100, height: 80}} />
                            </View>
                        </View>
                        <Text style={{marginTop:10}}></Text>
                        <Hr lineColor='#ecf0f1' width="100"/>
                        <View style={{marginTop:10}}>
                            <View>
                                <Text style={{fontFamily: 'AvenirNext-Medium', color:'#00638c'}}>Grand Hyatt</Text>
                                <Text style={{fontFamily: 'AvenirNext-Medium', color:'#00638c'}}>Internet Order</Text>
                                <Text style={{fontFamily: 'AvenirNext-Medium'}}>$1777</Text>
                            </View>
                        </View>
                        <Text style={{marginTop:10}}></Text>
                        <Hr lineColor='#ecf0f1' width="100"/>
                        <View style={{marginTop:10}}>
                            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                                <Icon name='md-plane' style={{color:'black'}}/>
                                <Icon name='md-checkmark' style={{color:'#16a085'}}/>
                            </View>
                        </View>
                        <Text style={{marginTop:3}}></Text>
                        <Hr lineColor='#ecf0f1' width="100"/>
                        <View style={{marginTop:10}}>
                            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                                <Icon name='ios-bus' style={{color:'black'}}/>
                                <Icon name='md-close' style={{color:'red'}}/>
                            </View>
                        </View>
                        <Text style={{marginTop:3}}></Text>
                        <Hr lineColor='#ecf0f1' width="100"/>
                        <View style={{marginTop:10}}>
                            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                                <Icon name='md-time' style={{color:'black'}}/>
                                <Text style={{fontFamily: 'AvenirNext-Medium', marginTop:14}}>12-12-2016</Text>
                            </View>
                        </View>
                        <Text style={{marginTop:3}}></Text>
                        <Hr lineColor='#ecf0f1' width="100"/>
                        <View style={{marginTop:10}}>
                            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                                <Icon name='md-plane' style={{color:'black'}}/>
                                <Text style={{fontFamily: 'AvenirNext-Medium', marginTop:14}}>Frankfurt Airport</Text>
                            </View>
                        </View>
                        <Text style={{marginTop:3}}></Text>
                        <Hr lineColor='#ecf0f1' width="100"/>
                        <View style={{marginTop:10}}>
                            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                                <Icon name='md-beer' style={{color:'black'}}/>
                                <Text style={{fontFamily: 'AvenirNext-Medium', marginTop:14}}>All Inclusive</Text>
                            </View>
                        </View>
                        <Text style={{marginTop:3}}></Text>
                        <Hr lineColor='#ecf0f1' width="100"/>


                    </View>
                </CardItem>
            </Card>
        </View>
    }
    listView(){
        return         <ListView
            dataSource={this.state.dataSource}
            renderRow={
                (rowData) => {
                    return <ListItemCard
                        color = "#34495e"
                        text = {rowData}
                    />
                }
            }
        />
    }
    render(){
        return (
            <Container style={styles.container}>
                <Header style={styles.header}>
                    <Button transparent>
                        <Icon name='md-menu' style={styles.colorWhite}/>
                    </Button>
                    <Title style={[styles.colorWhite, styles.fontAvenir]}>TRAVEL SURFER</Title>
                    <Button transparent >
                        <Icon name='md-add' style={styles.colorWhite}/>
                    </Button>
                </Header>

                <Content style={styles.content}>
                    {this.detailView()}
                </Content>

                <Footer style={styles.footer}>
                    <Text style={{fontWeight : 'bold', fontSize:22}}>CONTINUE</Text>
                </Footer>
            </Container>
        );
    }
}
const styles = StyleSheet.create({
    container:{

    },
    colorWhite : {
      color: 'white',
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
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