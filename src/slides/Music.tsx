import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {getImages} from '../assets/ImagesExport'

const sizes = Dimensions.get('window');

const Music = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.ttt}>Music</Text>
      <Text style={styles.title}>listen</Text>
      <Image source={getImages("spotify")}style={styles.image1}/>
      <Image source={getImages("eminem")} style={styles.image}/>
      <Text style={styles.title}>eminem</Text>
      <Image source={getImages("theweeknd")} style={styles.image}/> 
      <Text style={styles.title}>theweeknd</Text>
      <Image source={getImages("olivia")} style={styles.image}/>
      <Text style={styles.title}>olivia</Text>
      <Image source={getImages("billie")} style={styles.image}/>
      <Text style={styles.title}>billie</Text>
      {/* <Image source={getImages("Music")} style={styles.image}/>  */}
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
  fontSize:50,
  fontWeight:"bold",
  textAlign:'center'
  },
  title:{
    color:"black",
    textAlign:'center',
    fontSize:18*sizes.fontScale
  },
  image: {
    height:sizes.height/8,
    width:sizes.width/3,
    margin:15,
    alignSelf:'center',
    resizeMode:"cover",
  },
  image1:{
    height:sizes.height*0.05,
    width:"100%",
    alignSelf:'center',
    resizeMode:"contain",
  }
})