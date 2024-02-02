import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { importImages } from '../assets/ImagesExport';

const Shopping = () => {
  return (
  <View>
    <Text style={styles.txt}> REACH ME </Text>
    <Text style={styles.mot}>- FOR QUICK SHOPPING USE ME - </Text>
    
    <Image
      source={importImages().fox}///image
      style={styles.image}
      // style=
    />
    <View style={styles.darag}>
      <Image
      source={importImages().handm}
      style={styles.image}
      />
      <View style={styles.darag}>
        <Image
        source={importImages().nike}
        style={styles.shoes}
        />
      </View>
      
    </View>
    <Text style={styles.arab}> ع  </Text>
    <Text style={styles.ing}> ENG </Text>
    <Text style={styles.heb}>ע  </Text>
    <Text style={styles.WEL}> WELCOME! </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  txt:{
    color:"darkred",
    fontSize:55,
    alignItems:"center",
    alignSelf:"center",
    marginBottom:10,
  },
  image:{
    height:150,
    width:150,
  },
  darag:{
    marginLeft: 120,
  },
  shoes: {
    height:150,
    width:150,
  },
  mot:{ 
    color:"midnightblue",
    fontSize:20,
    alignItems:"center",
    alignSelf:"center", 
    marginBottom:19,

  },
  arab: {
    color:"black",
    fontSize:30,
    marginBottom:10,
    textAlign:"left"
  },
  ing:{ 
    color:"black",
    fontSize:20,
  },
  heb:{ 
    color:"black",
    fontSize:20,
    textAlign:"left",
  },
  WEL: { 
    color:"darkgoldenrod",
    fontSize:40,
    alignItems:"center",
    alignSelf:"center",
  } 
})
export default Shopping;