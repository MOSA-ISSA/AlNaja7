import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { getImages,} from '../assets/ImagesExport';

const sizes = Dimensions.get('window');

const HealthyLifestyle = () => {
  return (
    <View style={styles.fff}>
      <Text style={styles.title}>Healthy Lifestyle </Text>
      <Image source={getImages("www")} style={styles.img} />

      <View style={styles.screen}>
        <Text style={styles.Text1}>Brunch</Text>
        <Text style={styles.Text1}>Lunch</Text>
        <Text style={styles.Text1}>Dinner</Text>
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
    fontSize: 22*sizes.fontScale,
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
    fontSize: 30*sizes.fontScale,
    fontWeight: "bold",
    borderColor: "#696969",
    borderRadius: 3,
    borderWidth: 2,
    padding: 10,
    margin: 5,
    flex: 3,

  },
  title:{
    color: "#696969",
    fontSize: sizes.fontScale*35,
    fontWeight: "bold",
    marginBottom: sizes.scale*20
  }, 
  img:{
    height :sizes.height*0.45,
    width : sizes.height*0.45,
    marginBottom :25
  }
})
