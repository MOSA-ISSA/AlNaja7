import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { importImages } from '../assets/ImagesExport';

const HealthyLifestyle = () => {
  return (
    <View style={styles.fff}>
      <Text style={styles.title}>Healthy Lifestyle </Text>
      <Image source={importImages().www} style={styles.img} />

      <View style={styles.screen}>
        <Text style={styles.Text1}>Brunch</Text>
        <Text style={styles.Text2}>Lunch</Text>
        <Text style={styles.Text3}>Dinner</Text>
      </View>


      <Text style={styles.ww}>When we strive to become better than we are, everything around us becomes better too.</Text>
    </View>

  );
}
export default HealthyLifestyle

const get = StyleSheet.create
const styles = StyleSheet.create({
  ww: {
    fontWeight: "bold",
    fontSize: 22,
    margin: 2,
    color:'black'

  },
  fff: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "#e0ffff",
   
  },
  screen: {
  
    backgroundColor: "#f0f8ff",
    alignItems: 'center',
    justifyContent: "center",
    flexDirection: "row",
    borderColor: "#696969",
    borderRadius: 3,
    borderWidth: 2,
    marginBottom: 10
  },
  Text1: {
    color: "#696969",
    fontSize: 30,
    fontWeight: "bold",
    borderColor: "#696969",
    borderRadius: 3,
    borderWidth: 2,
    padding: 10,
    margin: 5,
    flex: 3,

  },
  Text2: {

    color: "#696969",
    fontSize: 30,
    fontWeight: "bold",
    alignItems: "flex-start",
    borderColor: "#696969",
    borderRadius: 3,
    borderWidth: 2,
    padding: 10,
    margin: 5,
    flex: 3,

  },
  Text3: {

    color: "#696969",
    fontSize: 30,
    fontWeight: "bold",
    alignItems: "flex-start",
    borderColor: "#696969",
    borderRadius: 3,
    borderWidth: 2,
    padding: 10,
    margin: 5,
    flex: 3,


  }, 
  title:{
    color: "#696969",
    fontSize: 35,
    fontWeight: "bold", 
    marginBottom : 19
  }, 
  img:{
    height :300,
    width : 300 ,
    marginBottom :25
  }
})
