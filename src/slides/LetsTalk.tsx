import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { importImages } from '../assets/ImagesExport'

const LetsTalk = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.Text}>let's talk</Text>
      <Image
        source={importImages("LetsTalk")}
        style={styles.image}
        />
        
        <Text style={styles.text}>shhhh it's a secret</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  screen:{
    flex:1,
    backgroundColor:"#fffafa" ,
    justifyContent:'center',
    alignItems:'center'
  },
  Text:{
    color:"black",
    fontSize:70,
    alignItems:'center',
  
  },
  image:{
    height:200,
    width:300,
    marginBottom:230
  },
   text:{
   fontSize:25,
  color:"skyblue",
  marginBottom:40
   }
  })
export default LetsTalk

