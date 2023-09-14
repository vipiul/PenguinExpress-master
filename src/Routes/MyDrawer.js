import React from 'react';
import { View, Text, TouchableOpacity,Image } from 'react-native';

const MyDrawer = props => {



  return (
    <View style={{flex:1 , backgroundColor:'#FFF'}}>
      <View style={{marginTop:50,marginHorizontal:20}}>
        <TouchableOpacity onPress={()=>props.navigation.toggleDrawer()}>
        <Image  source={require('../Images/Icons/close2.png')}  style={{resizeMode:'contain',tintColor:'#000'}}/>
        </TouchableOpacity>
        <View style={{flexDirection:'row',marginTop:50,alignItems:'center'}}>
          <Image  style={{ resizeMode:'contain',height:25,width:25,tintColor:'#000'}} source={require('../Images/Icons/Profile.png')} />
        <TouchableOpacity onPress={() => props.navigation.navigate('Profile')}>
        <Text style={{marginLeft:15,fontSize:18,fontWeight:'350',color:'#000'}}>Account</Text>
      </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row',marginTop:30,alignItems:'center'}}>
          <Image  style={{ resizeMode:'contain',height:25,width:25,tintColor:'#000'}} source={require('../Images/Icons/wallet.png')} />
        <TouchableOpacity onPress={() => props.navigation.navigate('Feedback')}>
        <Text style={{marginLeft:15,fontSize:18,fontWeight:'350',color:'#000'}}>wallet</Text>
      </TouchableOpacity>
      </View>
   
      <View style={{flexDirection:'row',marginTop:30,alignItems:'center'}}>
          <Image  style={{ resizeMode:'contain',height:25,width:25,tintColor:'#000'}} source={require('../Images/Icons/MyOrder.png')} />
        <TouchableOpacity onPress={() => props.navigation.navigate('MyOrder')}>
        <Text style={{marginLeft:15,fontSize:18,fontWeight:'350',color:'#000'}}>My Orders</Text>
      </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row',marginTop:30,alignItems:'center'}}>
          <Image  style={{ resizeMode:'contain',height:25,width:25,tintColor:'#000'}} source={require('../Images/Icons/Location.png')} />
        <TouchableOpacity onPress={() => props.navigation.navigate('Feedback')}>
        <Text style={{marginLeft:15,fontSize:18,fontWeight:'350',color:'#000'}}>Saved Address</Text>
      </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row',marginTop:30,alignItems:'center'}}>
          <Image  style={{ resizeMode:'contain',height:25,width:25,tintColor:'#000'}} source={require('../Images/Icons/rewards.png')} />
        <TouchableOpacity onPress={() => props.navigation.navigate('Feedback')}>
        <Text style={{marginLeft:15,fontSize:18,fontWeight:'350',color:'#000'}}>My Rewads Points</Text>
      </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row',marginTop:30,alignItems:'center'}}>
          <Image  style={{ resizeMode:'contain',height:25,width:25,tintColor:'#000'}} source={require('../Images/Icons/Mycupon.png')} />
        <TouchableOpacity onPress={() => props.navigation.navigate('Feedback')}>
        <Text style={{marginLeft:15,fontSize:18,fontWeight:'350',color:'#000'}}>My Coupons</Text>
      </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row',marginTop:30,alignItems:'center'}}>
          <Image  style={{ resizeMode:'contain',height:25,width:25,}} source={require('../Images/Icons/Setting.png')} />
        <TouchableOpacity onPress={() => props.navigation.navigate('Feedback')}>
        <Text style={{marginLeft:15,fontSize:18,fontWeight:'350',color:'#000'}}>Settings</Text>
      </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row',marginTop:30,alignItems:'center'}}>
          <Image  style={{ resizeMode:'contain',height:25,width:25,}} source={require('../Images/Icons/Language.png')} />
        <TouchableOpacity onPress={() => props.navigation.navigate('Feedback')}>
        <Text style={{marginLeft:15,fontSize:18,fontWeight:'350',color:'#000'}}>Language</Text>
      </TouchableOpacity>
      </View>
   
        <View style={{flexDirection:'row',marginTop:30,alignItems:'center'}}>
          <Image  style={{ resizeMode:'contain',height:25,width:25,tintColor:'#000'}} source={require('../Images/Icons/feedback.png')} />
        <TouchableOpacity onPress={() => props.navigation.navigate('Feedback')}>
        <Text style={{marginLeft:15,fontSize:18,fontWeight:'350',color:'#000'}}>Feedback</Text>
      </TouchableOpacity>
      </View>
        <View style={{flexDirection:'row',marginTop:30,alignItems:'center'}}>
          <Image  style={{ resizeMode:'contain',height:25,width:25,}} source={require('../Images/Icons/about.png')} />
        <TouchableOpacity onPress={() => props.navigation.navigate('Feedback')}>
        <Text style={{marginLeft:15,fontSize:18,fontWeight:'350',color:'#000'}}>About</Text>
      </TouchableOpacity>
      </View>

        <View style={{flexDirection:'row',marginTop:30,alignItems:'center'}}>
          <Image  style={{ resizeMode:'contain',height:30,width:30,}} source={require('../Images/Icons/logout.png')} />
        <TouchableOpacity onPress={() => logout()}>
        <Text style={{marginLeft:15,fontSize:18,fontWeight:'350',color:'#000'}}>Logout</Text>
      </TouchableOpacity>
      </View>
   
      </View>
  
    </View>
  );
};

export default MyDrawer;