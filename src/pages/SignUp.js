import { View, Text, ImageBackground, TouchableOpacity, Image ,TextInput} from 'react-native'
import React from 'react'

const SignUp = props => {
  return (
    <View style={{ flex: 1, }}>
    <ImageBackground style={{ height: '100%', width: '100%', }} source={require('../Images/LogInImage.png')}>
      <TouchableOpacity onPress={()=>props.navigation.pop()}>
      <Text style={{color:'white',fontSize:15,fontWeight:'600',alignSelf:'flex-end',marginTop:15,marginRight:20}}>Skip</Text>
      </TouchableOpacity>
      <View style={{ justifyContent: 'center', alignItems: 'center',flex:1}}>
        <Text style={{ color: 'white', fontSize: 18, fontWeight: '500', marginVertical: 15 }}>Create your Account </Text>
        <TextInput
          placeholder='Enter Mobile Number'
          style={{ borderWidth: 0.5, backgroundColor: 'white', borderRadius: 10, width: '80%', padding: 10 }} />
        <TextInput
          placeholder='Enter Password'
          style={{ borderWidth: 0.5, backgroundColor: 'white', borderRadius: 10, width: '80%', padding: 10, marginTop: 10 }} />
        <TextInput
          placeholder='Reenter Password'
          style={{ borderWidth: 0.5, backgroundColor: 'white', borderRadius: 10, width: '80%', padding: 10, marginTop: 10 }} />
        <TouchableOpacity style={{ height: 45, width: 150, backgroundColor: '#C32015', borderRadius: 20, marginVertical: 20, justifyContent: 'center' }}><Text style={{ color: 'white', fontSize: 16, textAlign: 'center' }}>Create Account</Text></TouchableOpacity>
        <View style={{ flexDirection: 'row', width: '75%', alignSelf: 'center', justifyContent: 'center', marginTop: 25 }}>
          <View style={{ height: 3, borderRadius: 5, backgroundColor: 'white', width: '28%' }} />
          <Text style={{ color: 'white', marginTop: -8 }}>  Or Signup With  </Text>
          <View style={{ height: 3, borderRadius: 5, backgroundColor: 'white', width: '28%' }} />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '50%', marginTop: 30 }}>
          <TouchableOpacity>
            <Image style={{ height: 35, width: 35, resizeMode: 'contain' }} source={require('../Images/googleicon.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={{ height: 35, width: 35, resizeMode: 'contain' }} source={require('../Images/twitter.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={{ height: 35, width: 35, resizeMode: 'contain' }} source={require('../Images/facebook.png')} />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  </View>
  )
}

export default SignUp