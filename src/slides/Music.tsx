import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { importImages } from '../assets/ImagesExport'

const Music = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.ttt}>Music</Text>
      <Text style={styles.title}>listen</Text>
      <Image source={importImages().spotify}style={styles.image1}/>
      <Image source={importImages().eminem} style={styles.image}/>
      <Text style={styles.title}>eminem</Text>
      <Image source={importImages().theweeknd} style={styles.image}/> 
      <Text style={styles.title}>theweeknd</Text>
      <Image source={importImages().olivia} style={styles.image}/>
      <Text style={styles.title}>olivia</Text>
      <Image source={importImages().billie} style={styles.image}/>
      <Text style={styles.title}>billie</Text>
      <Image source={importImages().Music} style={styles.image}/> 
    </View>
  )
}

export default Music

const styles = StyleSheet.create({
  screen:{
    flex:1,
    backgroundColor: "pink",
    alignContent:"center",
  }, 
  ttt:{
  color:"white",
  fontSize:80,
  fontWeight:"bold",
  textAlign:'center'
  },
  title:{
    color:"black",
    textAlign:'center',
    fontSize:30
  },
  image: {
    height:155,
    width:280,
    margin:15,
    alignSelf:'center'
  },
  image1:{
    height:100,
    width:"100%",
    alignSelf:'center',
    resizeMode:"contain",
  }
})