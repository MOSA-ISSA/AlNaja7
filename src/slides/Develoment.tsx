import {ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { getImages } from '../assets/ImagesExport'

const Development = () => {
  return (
    <View style={styles.screen}>
      <ImageBackground source={getImages("Community")} style={styles.ImageBackground}>
      <Text style={styles.ttt}>Human development</Text>
      <Text style={styles.ttt}>
        Human development is defined as the process of enlarging people's
        freedoms and opportunities and improving their well-being.
        </Text>
      </ImageBackground>
      
    </View>
  )
}
const styles =StyleSheet.create({
    screen:{
      flex: 1,
      
  
    },
    ImageBackground:{
      flex:1,
      // height:"100%",
      paddingTop:100,
      alignItems:'center'
    },
    ttt:{
      color:"#800080",
      fontSize:20 ,
      marginBottom:20,
      backgroundColor: '#1999',
      borderRadius:5
    },
})
export default Development

