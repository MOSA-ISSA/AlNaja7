import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { importImages } from '../assets/ImagesExport'

const Shopping2 = () => {
  return (
    <>
      <View>
        <Text style={styles.txt}>__ REACH ME __</Text>
        <Text style={styles.key}>FOR QUICK SHOPPING USE ME</Text>
        <Image
          source={importImages().adidas}
          style={styles.img} />
        <View>


          <View style={{alignSelf:'flex-end',marginRight:"5%",}}>
            <Image
              source={importImages().HM}
              style={styles.img} />
          </View>
            <Image
              source={importImages("nike")}
              style={styles.img} />
          </View>
      </View>
      <Text style={styles.fly}>WELCOME</Text>
    </>
  )}

export default Shopping2

const styles = StyleSheet.create({
  txt:{
    fontSize:50,
    alignItems:"center",
    alignSelf:"center",
    color:"black",
    marginBottom:10,
  },
  img:{
    height:150,
    width:250,
    marginLeft:"5%",
    marginTop:3
  },
  darage:{
    marginTop:15,
    marginLeft:120,
    width:150,
    marginBottom:15,
  },
  key:{
    fontSize:20,
    color:"red",
    alignItems:"center",
    alignSelf:"center",
    marginBottom:20,
  },
  fly:{
    fontSize:30,
    color:"black",
    alignItems:"center",
    alignSelf:"center",
    marginTop:35
  }
})
