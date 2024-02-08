import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { getImages } from '../assets/ImagesExport'

const Chemistry = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>
        Basic chemistry
      </Text>
      <Text style={styles.text}>
        Since I was a young boy,I thought that why does we learned chemistry in the school?What will I benefit from this complicated sience?
        Until I started to notice that the phenomena aroun us has a Specifically rules.
        For example , when we have to make a cup of coffee we need to bring coffe powder and a hot water
        , here we have a question to ask . 
        why we should bring hot water instead cold water?
        and the aswer is that with the high tempurature the atoms of the elemenet get away one from other then the powder will get between the atoms easyly that make it make queqly 

        is it superb? now lets get in and dive in sience ocean!
      </Text>
      <Image style={styles.img} source={getImages('baker')} />
      
      <View style={styles.container}>
      <Text style={styles.text}>Basic chemistry:
      </Text>
      </View>

    </View>
  )
}

export default Chemistry

const styles = StyleSheet.create({
container:{
  flex:1,
  backgroundColor:"white",
},
title:{
  fontSize:30,
  color:"black",
  borderWidth: 1,
  padding: 30
},
text:{
  color:"black",
  fontSize:17,
  width:'75%' , 
  marginTop: 15
},
  img:{
  marginTop:40,
  width:'90%',
  height:200
},
card:{
  alignItems: 'center',
  margin :10,
}
})
