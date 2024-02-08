import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { getImages } from '../assets/ImagesExport'

const Celebrities = () => {

  return (
    <View style={styles.screen}>

      <Image
        source={getImages('search')}
        style={styles.icon} />
      <Text style={{textAlign:'center',alignItems:"center"}}>هاندا ارتشيل</Text>
        <View style={styles.Content}>
          <Image
            source={getImages('rrr')}
            style={styles.img} />
          

          <Image
            source={getImages('honda')}
            style={styles.img} />
            
        <Image
          source={getImages('sss')}
          style={styles.img} />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',

  },
  img: {
    height: 140,
    width: "30%",
    marginHorizontal:"10%",
    marginVertical:'5%',
    borderRadius: 30
  },
  icon: {
    height: 35,
    width: 29,
    marginLeft: 40,
    marginTop: 25,
  },
  rrr: {
    height: "40%",
    width: "30%",
  },
  Content:{
    flexDirection: "row" ,
    flexWrap:'wrap',
    justifyContent:'space-between',
  }
})
export default Celebrities