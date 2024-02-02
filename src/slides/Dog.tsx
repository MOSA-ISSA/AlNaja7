import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { importImages } from '../assets/ImagesExport'

const Dog = () => {
  return (

    <View style={styles.veiw}>
      <Text style={styles.txt}>dog</Text>
      <Image source={importImages("dog")} style={styles.img}/>
      <Text style={styles.txt}>missing dog</Text>
      <Text style={styles.txt}>rudy</Text>
        </View>
  ) 
}


    
  


export default Dog

const styles = StyleSheet.create({
  veiw:{
    backgroundColor:"black",
    flex:2,
  },
  txt:{
    color:"red", 
     alignItems:"center",
    alignSelf:"center",
   fontSize:35,
  },
  img:{
    height:300,
    width:"100%",
    marginTop:50,
  
  },
  
})

