import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { getImages } from '../assets/ImagesExport'

const width= Dimensions.get('window').width

const Motorcycles = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator>
        <View style={styles.page}>
          <Text style={styles.text}>yz125 -{">"}</Text>

          <Image style={styles.image} source={getImages("yz125")} />

          <Text style={styles.teh}>It is one of the fastest motorcycles and one of my favorite types</Text>

          <Text style={styles.tex}>price:20,000₪</Text>
          <Text style={styles.next}>drag to next slide-{">"}</Text>
        </View>

        <View style={styles.page}>
          <Text style={styles.text}>{"<"}-crf250-{">"}</Text>

          <Image style={styles.land} source={getImages('crf250')} />

          <Text style={styles.teh}>It is a very fast bike, with a launch control button that makes the first burst of power flow through the drive chain and into the rear wheel.</Text>

          <Text style={styles.tex}>price:27,000₪</Text>
        </View>

        <View style={styles.page}>
          <Text style={styles.text}>{"<"}-Ktm125</Text>

          <Image style={styles.boof} source={getImages("ktm1259")}/>

          <Text style={styles.teh}>A motorcycle with distinctive and unique performance, in addition to a fully designed body design inspired by racing, which provides comfort in riding</Text>

          <Text style={styles.tex}>price:19,000₪</Text>
        </View>

      </ScrollView>

    </View>
  )
}

export default Motorcycles

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    // alignItems:"center" , 
  },
  text: {
    color: "black",
    fontSize: 50,
    textAlign: "center",
  },
  next: {
    color: "black",
    fontSize: 25,
    textAlign: "right",
  },

  image: {
    borderWidth: 1,
    width: 285,
    height: 285,
    //margin:150,
    marginTop: 60,
    alignSelf: "center",
    borderRadius: 20,
    borderColor: "blue",
    marginBottom: 60

  },
  tex: {
    color: "black",
    fontSize: 25,
    textAlign: 'left',
    marginLeft:15,
    marginBottom: 40 
  },
  teh: {
    color: "black",
    fontSize: 23,
    textAlign: 'center',
    width: width * 0.8,
    alignSelf:"center"
  },
  fool:{
    color: "black",
    fontSize: 23,
    textAlign: 'center',
    marginBottom: 100,
    // marginRight:25,
    // marginLeft:25,

    width: Dimensions.get('window').width,
  },
  land:{
    borderWidth: 1,
    width: 285,
    height: 285,
    //margin:150,
    marginTop: 60,
    alignSelf: "center",
    borderRadius: 20,
    borderColor: "red",
    marginBottom: 60
  },
  boof:{
    borderWidth: 2,
    width: 285,
    height: 285,
    marginTop: 60,
    alignSelf: "center",
    borderRadius: 20,
    borderColor: "green",
    marginBottom: 40,

  } , 
  page:{
    width:width , 
    justifyContent:'space-between'
  }
})