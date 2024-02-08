import { Dimensions, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { getImages,} from '../assets/ImagesExport';

const sizes = Dimensions.get('window');

const Shopping = () => {
  return (
  <View>
    <Text style={styles.txt}> REACH ME </Text>
    <Text style={styles.mot}>- FOR QUICK SHOPPING USE ME - </Text>

    <View style={styles.imagesContainer}>
      <Image
        source={getImages("fox")}///image
        style={styles.image}
      />

      <View style={styles.darag}>
        
        
          <Image
          source={getImages('handm')}
          style={styles.image}
          />
        

        <View style={styles.darag}>
          <Image
          source={getImages('nike')}
          style={styles.image}
          />
        </View>

      </View>
      
        <Text style={styles.lung}> ع  </Text>
        <Text style={styles.lung}> ENG </Text>
        <Text style={styles.lung}>ע  </Text>

    </View>
      <Text style={styles.WEL}> WELCOME! </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  txt:{
    color:"darkred",
    fontSize:sizes.fontScale*50,
    alignItems:"center",
    alignSelf:"center",
  },
  image:{
    height:sizes.height/5,
    width:sizes.height/5,
    marginVertical:5,
  },
  darag:{
    marginLeft: sizes.height/5/1.5,
  },
  mot:{ 
    color:"midnightblue",
    fontSize:sizes.fontScale*25,
    alignItems:"center",
    alignSelf:"center", 
    marginBottom:5,
  },
  imagesContainer:{
    paddingLeft:(sizes.width-(sizes.height/5+sizes.height/5/1.5*2))/2
  },
  lung: {
    color:"black",
    fontSize:sizes.height*0.03,
    alignSelf:'flex-start'
  },
  WEL: { 
    color:"darkgoldenrod",
    fontSize:sizes.fontScale*50,
    alignItems:"center",
    alignSelf:"center",
  } 
})
export default Shopping;