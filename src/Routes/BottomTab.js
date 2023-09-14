import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../pages/Home';
import Search from '../pages/Search';
import Cart from '../pages/Cart';
import MyOrder from '../pages/MyOrder';
const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: '#C32015',
                tabBarInactiveTintColor: 'grey',
                tabBarStyle: [{ backgroundColor: '#FFF' }],

                tabBarIcon: ({ focused }) => {
                    if (route.name === 'Home') {
                        return <Image source={require('../Images/Icons/Home.png')} style={{ tintColor: focused ? '#C32015' : 'gray',height:25,width:25 }} />;

                    } else if (route.name === 'Cart') {
                        return <Image source={require('../Images/Icons/cart2.png')} style={{ tintColor: focused ? '#C32015' : 'gray', height:25,width:25}} />;

                    } else if(route.name === 'Search'){
                        return <Image source={require('../Images/Icons/Search.png')} style={{ tintColor: focused ? '#C32015' : 'gray', height:25,width:25}} />;

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
    );
};

export default BottomTab;