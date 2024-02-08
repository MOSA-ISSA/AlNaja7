import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { getImages,} from '../assets/ImagesExport'

const sizes = Dimensions.get('window');

const Shopping2 = () => {
  return (
    <View style={styles.slideContainer} >
      <Text style={styles.txt}>__ REACH ME __</Text>
      <Text style={styles.key}>FOR QUICK SHOPPING USE ME</Text>

      <Image
        source={getImages("adidas")}
        style={styles.img} />

        <View style={{alignSelf:'flex-end',}}>
          <Image
            source={getImages("HM")}
            style={styles.img} />
        </View>

        <Image
          source={getImages("nike")}
          style={styles.img} />

        <Text style={styles.fly}>WELCOME</Text>
    </View>
  )}

export default Shopping2

const styles = StyleSheet.create({
  slideContainer: {
    paddingHorizontal:'5%'
  },
  txt:{
    fontSize:sizes.fontScale*50,
    alignItems:"center",
    alignSelf:"center",
    color:"black",
    marginBottom:10,
  },
  img:{
    height:sizes.height/5,
    width:sizes.width/1.5,
    marginTop:10
  },
  key:{
    fontSize:20,
    color:"red",
    alignItems:"center",
    alignSelf:"center",
    marginBottom:20,
  },
  fly:{
    fontSize:sizes.fontScale*50,
    color:"black",
    alignItems:"center",
    alignSelf:"center",
    marginTop:30
  }
})
