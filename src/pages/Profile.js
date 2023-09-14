import { View, Text , Image,SafeAreaView, StyleSheet, TextInput , Button ,TouchableOpacity} from 'react-native'
import React from 'react'

const Profile = (props) => { 
  const [text, onChangeText] = React.useState('');
  const [texta, onChangeTexta] = React.useState('');
  const [textb, onChangeTextb] = React.useState('');
  const [number, onChangeNumber] = React.useState('');
  return (
   <>
   <View>
   <Image source={require('../Images/Profile.png')} style={{ height: 200, width: 200, resizeMode: 'contain' , alignSelf:"center", marginVertical:70}} />
  </View>
   <View style={{marginLeft:10, marginRight:10 , marginTop: -70}}>
   <SafeAreaView>
    <View></View>
    <Text style={{marginLeft:10 , marginBottom: -10, color:"#AEAEAE", fontFamily:"Poppins", fontSize:16, fontWeight:"400",}}>Name</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholderTextColor={"#56423D"}
        placeholder="Mr. Tony Stark"
        keyboardType="name-phone-pad"
       
      />
          <Text style={{marginLeft:10, marginBottom: -6, marginTop: -6,color:"#AEAEAE", fontFamily:"Poppins", fontSize:16, fontWeight:"500",}}>Mobile</Text>

      <TextInput
        style={styles.inputa}
        onChangeText={onChangeNumber}
        value={number}
        placeholderTextColor={"#56423D"}
        placeholder="(+91) 123 456 7890"
        keyboardType="numeric"
      />
          <Text style={{marginLeft:10 , marginBottom: -6, marginTop: -6,color:"#AEAEAE", fontFamily:"Poppins", fontSize:16, fontWeight:"500",}}>Email</Text>

      <TextInput
        style={styles.inputb}
        onChangeText={onChangeTexta}
        value={texta}
        placeholderTextColor={"#56423D"}
        placeholder="TonyStark@mail.com"
        keyboardType="email-address"
      />
          <Text style={{marginLeft:10, marginBottom: -6, marginTop: -6,color:"#AEAEAE", fontFamily:"Poppins", fontSize:16, fontWeight:"500",}}>Address</Text>

      <TextInput
        style={styles.inputc}
        onChangeText={onChangeTextb}
        value={textb}
        placeholderTextColor={"#56423D"}
        placeholder="247, Park Street, NY, 110048"
        keyboardType="name-phone-pad"
      />
    </SafeAreaView>
    <Text style={{marginLeft:10, marginBottom: -6, marginTop: -6,color:"#AEAEAE", fontFamily:"Poppins", fontSize:16, fontWeight:"500",}}>Language</Text>
    <View style={{ flexDirection: 'row',  }}>
    <TouchableOpacity style={styles.button} >
        <Text style={{ color:"#56423D"}}>English</Text>
      </TouchableOpacity>
    <TouchableOpacity style={styles.button} >
        <Text  style={{ color:"#56423D"}}>Spanish’s</Text>
      </TouchableOpacity>
    <TouchableOpacity style={styles.button} >
        <Text style={{ color:"#56423D" , }}>Chinese</Text>
      </TouchableOpacity>
               
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' , marginVertical:50 }}>
    <TouchableOpacity style={styles.edit} >
        <Text style={{ color:"#56423D" , fontSize:18, fontWeight:"700", }}>Edit</Text>
      </TouchableOpacity>
      <View style={{ }}>
    <TouchableOpacity style={styles.save} >
        <Text  style={{ color:"#FFF",textAlign:'center'}}>Save</Text>
      </TouchableOpacity>
   </View>
               
            </View>
   </View>

   </>
  )
}

export default Profile

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    // borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor:"rgba(217, 217, 217, 0.4)",
  },
  inputa: {
    height: 40,
    margin: 12,
    // borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor:"rgba(217, 217, 217, 0.4)",
  },
  inputb: {
    height: 40,
    margin: 12,
    // borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor:"rgba(217, 217, 217, 0.4)",
  },
  inputc: {
    height: 40,
    margin: 12,
    // borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor:"rgba(217, 217, 217, 0.4)",
  },
  button: {
    weight: 70,
    height: 40,
    margin: 10,
    // borderWidth: 1,
    padding: 10,
    backgroundColor:"rgba(217, 217, 217, 0.4)",
    borderRadius: 10,
  },
  edit: {
   
      height: 40,
      margin: 12,
      // borderWidth: 1,
      padding: 10,
    },
  save:{
    // marginLeft:-50,
    fontSize:14,
    height: 40,width:100,
    margin: 10,
    // borderWidth: 1,
    padding: 10,
    backgroundColor:"rgba(195, 32, 21, 1)",
    borderRadius: 100,
  },
});