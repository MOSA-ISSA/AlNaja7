import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { importImages } from '../assets/ImagesExport'

const FootBall = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={importImages("Juventus")}/>
      <Text style={styles.txt} > افضل فريق عرفه التاريخ</Text>
      <Image style={styles.im} source={importImages("Juventus1")}/>
      <Text style={styles.txt} >  هؤلاء الذين جعلوا اوروبا تنام بعد العصر </Text>
      <Image style={styles.kls} source={importImages("Juventus2")}/>
      <Text style={styles.txt} >لقاء بين الاسطورتين الظاهره الحائز على الكره الذهبية والهداف التاريخي ومرعب الفرق دل بيرو</Text>
    </View>
  )
}

export default FootBall

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom:20
  },
  
  img: {
    width:350,
   height:200,
   borderRadius:20,
   alignSelf:"center"
   
  },
  txt: {
    color:"black",
    fontSize:20,
    textAlign:'center'
  },
  im: {
    width:350,
    height:200,
    borderRadius:20,
    alignSelf:"center"


  },
  tx: {
    color: "black",
    fontSize:20
    
  },
  kls: {
    width:350,
   height:200,
   borderRadius:20,
   alignSelf:"center"

  },
  tl: {
    color: "black",
    fontSize:20
  }
})