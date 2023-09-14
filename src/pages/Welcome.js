import { View, Text, ImageBackground ,Image,TouchableOpacity} from 'react-native'
import React from 'react'

const Welcome = props => {

  return (
    <View style={{flex:1,}}>
        <ImageBackground style={{height:'100%',width:'100%', justifyContent:'center',alignItems:'center'
    }} source={require('../Images/welcomeImage.png')}>
       
            <Image source={require('../Images/welcomeText.png')} style={{}} />
            <TouchableOpacity onPress={()=>props.navigation.navigate('LogIn')}>
            <Text style={{color:'white',marginTop:50,fontSize:17}}>Login</Text>
            </TouchableOpacity>

            <Text style={{color:'white',fontSize:17,marginTop:10}}>or</Text>
            <TouchableOpacity onPress={()=>props.navigation.navigate('SignUp')}>

            <Text style={{color:'white',fontSize:17,marginTop:10}}>Create Account</Text>
            </TouchableOpacity>

     
      </ImageBackground>
    </View>
  )
}

export default Welcome