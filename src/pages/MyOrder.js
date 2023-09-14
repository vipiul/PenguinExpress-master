import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../pages/Home';
import Search from '../pages/Search';
import Cart from '../pages/Cart';
// import MyOrder from '../pages/MyOrder';
const Tab = createBottomTabNavigator();

const MyOrder = (props) => {
    return (
        <>
            <View style={{ padding: 15, flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
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

            <View>
                <Text style={{ color: '#000', fontWeight: '400', alignSelf: 'center', margin: 10, }}> Order History </Text>
            </View>

            <View />
            <View style={{ flexDirection: 'row', marginLeft: 25, marginBottom: 10 }}>
                <TouchableOpacity style={{ padding: 10, borderRadius: 25, borderColor: '#C32015', borderWidth: 1 }}>
                    <Text>30 Days</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ padding: 10, marginLeft: 15, borderRadius: 25, borderColor: '#C32015', borderWidth: 1 }}>
                    <Text>90 Days</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ padding: 10, marginLeft: 15, borderRadius: 25, borderColor: '#C32015', borderWidth: 1 }}>
                    <Text>1 Years</Text>
                </TouchableOpacity>

            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <View><Text style={{ fontSize: 15, color: "#000" }}>Orders</Text></View>
                <View><Text style={{ fontSize: 15, color: "#000" }}>Bill Amount</Text></View>
            </View>
            {/* <Text style={{ color: '#000', fontSize: 18, fontWeight: '400' }}><Image source={require('../Images/nonveg.png')} style={{ height: 15, width: 15 }} /> Crispy Falafel Wrap</Text> */}

            <TouchableOpacity style={{ marginTop: 10, flexDirection: 'row', backgroundColor: 'white', borderRadius: 10, height: 80, elevation: 10, alignSelf: 'center', width: '92%' }} >
                <View style={{ width: '35%', }}>
                    <Image source={require('../Images/item1.png')} style={{ height: 60, width: 65, margin: 10, resizeMode: 'stretch' }} />
                </View>
                <View>
                    <View><Text style={{ marginTop: 23, color: "#000", fontSize: 18, marginLeft: -30 }} >Burger</Text></View>
                    <View><Text style={{ marginTop: -23, color: "#000", fontSize: 18, marginLeft: 120 }}>$ 150.00</Text></View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginTop: 10, flexDirection: 'row', backgroundColor: 'white', borderRadius: 10, height: 80, elevation: 10, alignSelf: 'center', width: '92%' }} >
                <View style={{ width: '35%', }}>
                    <Image source={require('../Images/item1.png')} style={{ height: 60, width: 65, margin: 10, resizeMode: 'stretch' }} />
                </View>
                <View>
                    <View><Text style={{ marginTop: 23, color: "#000", fontSize: 18, marginLeft: -30 }} >Pizza</Text></View>
                    <View><Text style={{ marginTop: -23, color: "#000", fontSize: 18, marginLeft: 120 }}>$ 48.45</Text></View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginTop: 10, flexDirection: 'row', backgroundColor: 'white', borderRadius: 10, height: 80, elevation: 10, alignSelf: 'center', width: '92%' }} >
                <View style={{ width: '35%', }}>
                    <Image source={require('../Images/item1.png')} style={{ height: 60, width: 65, margin: 10, resizeMode: 'stretch' }} />
                </View>
                <View>
                    <View><Text style={{ marginTop: 23, color: "#000", fontSize: 18, marginLeft: -30 }} > Pizza + More </Text></View>
                    <View><Text style={{ marginTop: -23, color: "#000", fontSize: 18, marginLeft: 120 }}>$ 120.32</Text></View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={{ marginTop: 10, flexDirection: 'row', backgroundColor: 'white', borderRadius: 10, height: 80, elevation: 10, alignSelf: 'center', width: '92%' }} >
                <View style={{ width: '35%', }}>
                    <Image source={require('../Images/item1.png')} style={{ height: 60, width: 65, margin: 10, resizeMode: 'stretch' }} />
                </View>
                <View>
                    <View><Text style={{ marginTop: 23, color: "#000", fontSize: 18, marginLeft: -30 }} >Combo</Text></View>
                    <View><Text style={{ marginTop: -23, color: "#000", fontSize: 18, marginLeft: 120 }}>$ 480.33</Text></View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginTop: 10, flexDirection: 'row', backgroundColor: 'white', borderRadius: 10, height: 80, elevation: 10, alignSelf: 'center', width: '92%' }} >
                <View style={{ width: '35%', }}>
                    <Image source={require('../Images/item1.png')} style={{ height: 60, width: 65, margin: 10, resizeMode: 'stretch' }} />
                </View>
                <View>
                    <View><Text style={{ marginTop: 23, color: "#000", fontSize: 18, marginLeft: -30 }} >Burger</Text></View>
                    <View><Text style={{ marginTop: -23, color: "#000", fontSize: 18, marginLeft: 120 }}>$ 230.46</Text></View>
                </View>
            </TouchableOpacity>


            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarActiveTintColor: '#C32015',
                    tabBarInactiveTintColor: 'grey',
                    tabBarStyle: [{ backgroundColor: '#FFF' }],

                    tabBarIcon: ({ focused }) => {
                        if (route.name === 'Home') {
                            return <Image source={require('../Images/Icons/Home.png')} style={{ tintColor: focused ? '#C32015' : 'gray', height: 25, width: 25 }} />;

                        } else if (route.name === 'Cart') {
                            return <Image source={require('../Images/Icons/cart2.png')} style={{ tintColor: focused ? '#C32015' : 'gray', height: 25, width: 25 }} />;

                        } else if (route.name === 'Search') {
                            return <Image source={require('../Images/Icons/Search.png')} style={{ tintColor: focused ? '#C32015' : 'gray', height: 25, width: 25 }} />;
                        
                        }else if(route.name === 'MyOrder'){
                            return <Image source={require('../Images/Icons/Order.png')} style={{ tintColor: focused ? '#C32015' : 'gray', height:25,width:27,resizeMode:'contain'}} />;

                        }
                    },
                })}

            >

                <Tab.Screen name="Home" component={Home} options={{ headerShown: false, backgroundColor: '#FFF' }} />
                <Tab.Screen name="Search" component={Search} options={{ headerShown: false }} />
                <Tab.Screen name="MyOrder" component={MyOrder} options={{ headerShown: false }} />
                <Tab.Screen name="Cart" component={Cart} options={{ headerShown: false }} />

            </Tab.Navigator>
        </>
    )
}

export default MyOrder