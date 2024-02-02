import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { importImages } from '../assets/ImagesExport'

const ALARM = () => {
  return (
    <View style={styles.vieo}>
       <Text style={{color:"black", fontSize:40,marginRight:20}}>SAFTY ALARM</Text>
      <Image
        source={importImages("location")}
        style={styles.img} 
        />
        <Text style={styles.text}>location</Text>
          <Image
          source={importImages('sos')}
          style={styles.img2} />
        <Text style={styles.text}>calls</Text>

    </View>
  )
}

export default ALARM

const styles = StyleSheet.create({
  vieo: {
    backgroundColor: "white",
    flex: 1,
  },
  img: {
    height:100,
    width: "20%",
    marginTop: "000%",
    marginLeft:20

  },
  img2: {
    height:150,
    width: "40%",
    marginTop:"20%",
    marginLeft:20
  },
  text:{ 
    fontSize:30,
    color:"orange",
marginLeft:75 ,
marginTop:20
 },



})
