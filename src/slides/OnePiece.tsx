import { StyleSheet, Text, View, Image, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import { importImages } from '../assets/ImagesExport'

const OnePiece = () => {
  return (
    <ImageBackground style={styles.container} source={importImages("onepiec")}>


      <Text style={styles.title}>One piece</Text>

      <Text style={styles.text}>
        هذا "الانمي" هي تجربة عن الابحار مع طاقم مكون من 10 شخصيات
يوضح ويخبرك عن هولاء الاصدقاء عن طريق مخاطر وصعوبات يواجهها هذا الطاقم
    .
    
        "الانمي" بمعنى صور متحركة يابانيه
      </Text>


      

    </ImageBackground>
  )
}

export default OnePiece

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'space-between'
  },
  text: {
    fontSize: 20,
    color: "black",
    width: '80%',
    backgroundColor: 'rgba(255,255,255,0.7)',
    marginBottom:10
  },
  title: {
    fontSize: 50,
    color: "black",
    width: '60%',
  },
  child: {

  }


})