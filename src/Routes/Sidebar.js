import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../pages/Home';
import MyDrawer from './MyDrawer';
import BottomTab from './BottomTab';
import Cart from '../pages/Cart';
import MyOrder from '../pages/MyOrder';

// import Login from '../pages/Login/Login';

const Drawer = createDrawerNavigator();

const Sidebar = () => {
  return (
   
      <Drawer.Navigator
        drawerContent={(props) => <MyDrawer {...props} />}
        initialRouteName="Home"
      >
        <Drawer.Screen name="Home" component={BottomTab} options={{ headerShown: false }}/>
        <Drawer.Screen name="Cart" component={Cart} options={{ headerShown: false }} />
        <Drawer.Screen name="MyOrder" component={MyOrder} options={{ headerShown: false }} />
        <Drawer.Screen name="BottomTab" component={BottomTab} options={{ headerShown: false }} />
        {/* Add more screens as needed */}
      </Drawer.Navigator>
  );
};

export default Sidebar;
