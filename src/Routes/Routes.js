
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { View, Text } from 'react-native'
import React from 'react'
import Home from '../pages/Home';
import Cart from '../pages/Cart';
import BottomTab from './BottomTab';
import Sidebar from './Sidebar';
import Search from '../pages/Search';
import MyOrder from '../pages/MyOrder';
import Splash from './Splash';
import Welcome from '../pages/Welcome';
import LogIn from '../pages/LogIn';
import SignUp from '../pages/SignUp';
import Profile from '../pages/Profile';
import { Feedback } from '../pages/Feedback';
const RouteStack = createStackNavigator();


const Routes = (props) => {
  return (

    <NavigationContainer>
                            
                  <RouteStack.Navigator headerMode='none' initialRouteName='Splash'>

                    <RouteStack.Screen name="Splash" component={Splash} />
                    <RouteStack.Screen name="Welcome" component={Welcome} />
                    <RouteStack.Screen name="Home" component={Sidebar} />
                    {/* <RouteStack.Screen name="Home" component={Home} /> */}
                    <RouteStack.Screen name="BottomTab" component={BottomTab} />
                    <RouteStack.Screen name="Cart" component={Cart} />
                    <RouteStack.Screen name="Search" component={Search} />
                    <RouteStack.Screen name="MyOrder" component={MyOrder} />
                    <RouteStack.Screen name="LogIn" component={LogIn} />
                    <RouteStack.Screen name="SignUp" component={SignUp} />
                    <RouteStack.Screen name="Profile" component={Profile} />
                    <RouteStack.Screen name="Feedback" component={Feedback} />
                 




                  </RouteStack.Navigator>
              
            </NavigationContainer>
 
  )
}

export default Routes;