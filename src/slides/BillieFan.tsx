import { Image, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { importImages } from '../assets/ImagesExport'

const BillieFan = () => {
  return (
    <View style={styles.screen}>
      <StatusBar
        animated={true}
        backgroundColor="#1B1B1C"
      />
    <Text style={styles.by}>billie eilish</Text>
    <Text style={styles.hi}>by a BIG fan</Text>
      <View style={styles.billy}>
        <Image source={importImages().billieFan} style={styles.image}/>
        <Text style={styles.Text}>Fav songs list :</Text>
        <Text style={styles.Text}>idontwannabeyoursanymore</Text>
        <Text style={styles.Text}>bury a friend</Text>
        <Text style={styles.Text}>I didn't change my number</Text>
        <Text style={styles.Text}>watch</Text>
        <Text style={styles.Text}>TV </Text>
        <Text style={styles.Text}>bad guy</Text>
        <Text style={styles.Text}>when the party's over </Text>
        <Text style={styles.Text}>everything I wanted </Text>
        <Text style={styles.Text}>Happier than ever </Text>
        <Text style={styles.Text}>lovely </Text>
        <Text style={styles.Text}>what was I made for</Text>
        <Text style={styles.Text}>ocean eyes</Text>
        <Text style={styles.Text}>all the good girls go to hell</Text>
        <Text style={styles.Text}>listen before I go </Text>
        <Text style={styles.Text}>lost cause </Text>
        <Text style={styles.Text}>Bellyache </Text>
        <Text style={styles.Text}>bad guy </Text>
        <Text style={styles.Text}>COPYCAT </Text>
        <Text style={styles.Text}>NDA</Text>
        <Text style={styles.Text}> no tome to die</Text>
        <Text style={styles.Text}>i didn't change my number </Text>
      </View>
    </View>
  )
}

export default BillieFan

const styles = StyleSheet.create({
  screen:{
    flex:1,
    backgroundColor:"#2A4066",
  },
  by:{
    color:"white",
    fontSize:50,
    fontWeight:"600",
    fontStyle:"italic",
    marginTop:40,
    textAlign:'center'
  },
  billy:{
    flex:1,
    backgroundColor:"#2A4066",
    justifyContent:"center",
    alignItems:"center",
    marginBottom:50,
    marginTop:135,
  },
  image: {
    width:360,
    height:280,
    borderRadius:10,
  },
  Text: {
    color:"#C9CED6",
    fontSize:20,
    fontWeight:"200",
    fontStyle:"italic",
  },
  hi:{
    color:"white",
    fontSize:10,
    fontWeight:"900",
    fontStyle:"italic",
    textAlign:'center'
  }
})
