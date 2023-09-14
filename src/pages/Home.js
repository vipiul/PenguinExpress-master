import { View, Text, SafeAreaView, TouchableOpacity, Image, ImageBackground, ScrollView, Alert, StatusBar, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Swiper from 'react-native-swiper'
import axios from 'axios'


const Home = (props) => {

    const [data, setdata] = useState([])



    useEffect(() => {

        let config = {
            method: 'get',
            url: 'https://jsonplaceholder.typicode.com/users/10',
        };

        axios.request(config)
            .then((response) => {
                setdata(JSON.stringify(response.data))
               
            })
            .catch((error) => {
                console.log(error);
            });

    }, [])






    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar
                animated={true}
                backgroundColor="#FFF"
                barStyle="dark-content"

            />

            <View style={{ padding: 15, flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity  onPress={() => props.navigation.toggleDrawer()}>
                    <Image source={require('../Images/Icons/hambuger.png')} style={{ height: 25, width: 25, resizeMode: 'contain' }} />
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'row' }}>
                    <Image source={require('../Images/Icons/Location.png')} style={{ height: 25, width: 20, resizeMode: 'contain', alignSelf: 'center', margin: 5 }} />

                    <View>
                        <Text style={{ color: '#000', fontWeight: '700' }}>Home   <Image source={require('../Images/Icons/Downarrow.png')} style={{ height: 15, width: 15, resizeMode: 'contain', }} /></Text>
                        <Text style={{ color: '#000', fontWeight: '300', fontSize: 13 }}>247, Park Street, NY, 110048</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../Images/avtar.png')} style={{ height: 35, width: 35, resizeMode: 'contain' }} />
                </TouchableOpacity>
            </View>

            <ScrollView>
                <View style={{ margin: 15 }}>

                    <View style={{ height: 150, width: '100%', marginBottom:15 }}>
                        <Swiper
                            dot={<View style={{ backgroundColor: 'gray', width: 8, height: 8, borderRadius: 4, margin: 3 }} />}
                            paginationStyle={{ bottom: -18, }}
                            activeDotStyle={{ backgroundColor: '#57AA11' }}
                            showsPagination={true}
                            loop={true}
                            autoplay={true} >

                            <View style={{}}>
                                <Image style={{ height: 150, width: '100%', resizeMode: 'stretch', borderRadius: 10, }} source={require('../Images/Icons/image1.png')} />
                            </View>
                            <View style={{}}>
                                <Image style={{ height: 150, width: '100%', resizeMode: 'stretch', borderRadius: 10, }} source={require('../Images/Icons/image1.png')} />
                            </View>
                            <View style={{}}>
                                <Image style={{ height: 150, width: '100%', resizeMode: 'stretch', borderRadius: 10, }} source={require('../Images/Icons/image1.png')} />
                            </View>
                            <View style={{}}>
                                <Image style={{ height: 150, width: '100%', resizeMode: 'stretch', borderRadius: 10, }} source={require('../Images/Icons/image1.png')} />
                            </View>
                            <View style={{}}>
                                <Image style={{ height: 150, width: '100%', resizeMode: 'stretch', borderRadius: 10, }} source={require('../Images/Icons/image1.png')} />
                            </View>

                        </Swiper>
                    </View>

                    <View style={{height:150,width:'100%',alignSelf:'center',elevation:10,backgroundColor:'#FFF',padding:10,marginTop:20,borderRadius:10}}>
                        <Text style={{fontSize:15,color:'#000'}}>What are you craving for?</Text>
                        <View style={{justifyContent:'space-between',flexDirection:'row',marginTop:6}}>
                            <View style={{}}>
                                <Image  source={require('../Images/item1.png')} style={{height:78,width:72,borderRadius:10}} />
                                <Text style={{textAlign:'center',fontSize:13,color:'#000'}}>Veg</Text>

                            </View>
                            <View style={{}}>
                                <Image  source={require('../Images/Item2.png')} style={{height:78,width:72,borderRadius:10}} />
                                <Text style={{textAlign:'center',fontSize:13,color:'#000'}}>Mania’s</Text>

                            </View>
                            <View style={{}}>
                                <Image  source={require('../Images/Item3.png')} style={{height:78,width:72,borderRadius:10}} />
                                <Text style={{textAlign:'center',fontSize:13,color:'#000'}}>Non-Veg</Text>

                            </View>
                            <View style={{}}>
                                <Image  source={require('../Images/Item4.png')} style={{height:78,width:72,borderRadius:10,resizeMode:'cover'}} />
                                <Text style={{textAlign:'center',fontSize:13,color:'#000'}}>Combo’s</Text>

                            </View>

                        </View>


                    </View>

                    <View style={{padding:1,backgroundColor:'lightgrey',marginVertical:10}} />
                    <View style={{flexDirection:'row',justifyContent:'space-around',marginBottom:10}}>
                        <TouchableOpacity style={{padding:10,borderRadius:25,borderColor:'#C32015',borderWidth:1}}>
                            <Text>2 Restaurant</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{padding:10,borderRadius:25,backgroundColor:'#C32015',}}>
                            <Text style={{color:'#FFF'}}>Non-Veg</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{padding:10,borderRadius:25,backgroundColor:'#C32015',}}>
                        <Text style={{color:'#FFF'}}>Top Rated</Text>
                        </TouchableOpacity>

                    </View>

                    

                    <FlatList
                        data={data}
                        renderItem={({ item }) => 
                        <TouchableOpacity style={{ marginTop: 10, flexDirection: 'row', backgroundColor: 'white', borderRadius: 10, height: 130, elevation: 10,alignSelf:'center',width:'98%' }} >
                            <View style={{ width: '35%', }}>
                                <Image source={require('../Images/item1.png')} style={{ height: 110, width: 90, margin: 10, resizeMode: 'stretch' }} />
                            </View>

                            <View style={{ width: '60%', justifyContent: 'center' }}>
                                <Text style={{ color: '#000', fontSize: 18, fontWeight: '400' }}><Image source={require('../Images/nonveg.png')} style={{ height: 15, width: 15 }} /> Crispy Falafel Wrap</Text>
                                <Text style={{ color: '#000', fontSize: 14, fontWeight: '500' }}>⭐⭐⭐⭐ <Text style={{ fontWeight: '300', fontSize: 13 }}>480 Votes </Text></Text>
                                <Text style={{ color: '#000', fontSize: 12, fontWeight: '300' }}>A true legend! Creamy hummus topped with crispy falafel, pickled slaw, cucumber...more</Text>


                                <View style={{ flexDirection: 'row-reverse' }}>
                                    <Image source={require('../Images/Icons/plus.png',)} style={{ height: 20, width: 20, marginTop: 5 }} />
                                    <Text style={{ fontSize: 20, color: '#000', textAlign: 'center',marginHorizontal:5 }}>0</Text>
                                    <Image source={require('../Images/Icons/minus.png')} style={{ height: 20, width: 20, marginTop: 5 }} />
                                </View>

                            </View>
                        </TouchableOpacity>}
                        keyExtractor={item => item.id}
                    />









                </View>
            </ScrollView>
        </SafeAreaView>
    )
}




export default Home