import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { importImages } from '../assets/ImagesExport'

const Psy = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.txt}>Psy.Le</Text>
      <View style={styles.imgContainer}>
        <Image
          source={importImages().ccc} style={styles.Image1} />
        <Image
          source={importImages().shugairi} style={styles.Image1} />
          <Image
          source={importImages().tre} style={styles.Image1} />
      </View>
    </View>

  )
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#e7d6c2",
  },
  txt: {
    color: "black",
    fontSize: 30,
    fontWeight: 'bold',
    padding: 10,
  },
  Image1: {
    height: 100,
    width: 100,
    borderRadius: 70,
    marginLeft: 10,
    marginBottom: 10
  },
  imgContainer: {
    flexDirection:'row'
  }
},
)
export default Psy
