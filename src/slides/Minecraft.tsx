import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { importImages } from '../assets/ImagesExport'

const Minecraft = () => {
  return (
    <View>
      <Text style={styles.title}>       minecraft </Text>
      <Image style={styles.img} source={importImages('mine')} />
      <Text style={styles.textFont}>
        لعبه تعتمد على البقاء على قيد الحياه  survival  ولكن اللاعبين استخدموها لاخراج مواهبهم بشكل خيالي بناء مستعمرات وهذا يزيد من ابداعات البشريه    
      survival: هو عيش شخصيه اللعبه بعالم مفتوح يحاول ان يبقى على قيد الحياه بواسطه جمع الموارد
      </Text>
      

      <View style={styles.alignTxt}>
      <Image style={styles.man} source={importImages("crist")} />

      <Text style={styles.txt}>  مخترع ماين كرافت  </Text>
      </View> 
      <Text style={styles.sui}>
        اخترع ماين كرافت في 2014 وبدا التطوير في 2009 اي اخذت 5 سنين من اجلها ا المطور السويدي ماركوس بيرسون الذي أصبح يلقب باسم نوتش 
      </Text>
    </View>
  )
}

export default Minecraft

const styles = StyleSheet.create({

  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'green'
  },

  textFont: {
    marginLeft: 30,
    fontSize: 16,
    color: 'brown',
    fontWeight: 'bold'
  },
  man: {
    width: 180,
    height: 180,
  },
  img: {
    width: 400,
    height: 200,
  },

  alignTxt: {
      flexDirection: 'row',
      alignItems:'center'
  },
  txt: {
    
    fontSize: 25,
    color: 'blue',
    fontWeight: 'bold'
  },
  sui: {
    
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold'
  },
})