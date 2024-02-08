import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { getImages,} from '../assets/ImagesExport'

const Ahmad = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>chemistry</Text>
      <Image style={styles.img} source={getImages('ahmad')} />
      <Text style={styles.text}>keep going to height with chemistry world.</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"yellow",
    // justifyContent:"center",
    // alignItems:"center"
  },
  title:{
    color:"black",
    fontSize:50,
    fontWeight:"600",
    textAlign:"center",
    borderBottomWidth:1,
    borderColor:'black',
    width: 250
  },
  img:{
   width: 400,
   height: 200,
   marginTop:50,
  
  },
  text:{
    color:"green",
    fontSize:20,
    fontWeight:"500",
    textAlign:"center"

  }
})





export default Ahmad
































