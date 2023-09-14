import { View, Text,Image } from 'react-native'
import React ,{useEffect}from 'react'

const Splash = props => {

    useEffect(() => {
      setTimeout(() => {
        props.navigation.navigate('Welcome')
      }, 2000);
    }, [])
    
    
  return (
    <View style={{flex:1,backgroundColor:'#FFF',alignItems:'center',justifyContent:'center'}}>
        <Image source={require('../Images/Splashicon.png')}  style={{height:450,width:280,resizeMode:'contain'}}/>

    </View>
  )
}

export default Splash