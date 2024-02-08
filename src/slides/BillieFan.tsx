import { Dimensions, Image, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { getImages} from '../assets/ImagesExport'

const sizes = Dimensions.get('window');

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
        <Image source={getImages("billieFan")} style={styles.image}/>
            <Text style={[styles.Text,{marginBottom:10}]}>Fav songs list :</Text>

        <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator>
          <View style={styles.tab}>
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
            <Text style={styles.slideNext}> {"slide next->  "}</Text>
          </View>
        
          <View style={styles.tab}>
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

        </ScrollView>
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
  },
  image: {
    width:sizes.width*0.9,
    height:sizes.height*0.25,
    borderRadius:10,
    marginBottom:10,
  },
  Text: {
    color:"#C9CED6",
    fontSize:20,
    fontWeight:"200",
    fontStyle:"italic",
    textAlign:'center',
  },
  hi:{
    color:"white",
    fontSize:10,
    fontWeight:"900",
    fontStyle:"italic",
    textAlign:'center'
  },
  tab:{
    flexDirection:'column',
    width:sizes.width,
    borderWidth:2,
    borderRadius:20,
    borderStyle:'dotted',
    marginBottom:10,
    paddingTop:10,
  },
  slideNext:{
    fontSize:10,
    textAlign:'right',
  }
})
