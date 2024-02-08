import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { getImages } from '../assets/ImagesExport'

const Podcasts = () => {

  return (
    <View style={styles.Screen}>
      <Text style={styles.txt}>Audio Books And Podcasts</Text>

      <View style={styles.cover}>
        <Image
          source={getImages('book')}
          style={styles.photo}
        />
      </View>

      <View style={styles.cover}>
        <Image
          source={getImages('bc')}
          style={styles.photo}
          />
      </View>
      
    </View>
  )
}
export default Podcasts

const styles = StyleSheet.create({
  Screen: {
    flex: 1,
    backgroundColor: 'pink',
    padding: 70,
    alignItems: 'center',
    justifyContent: 'flex-start',

  },
  txt: {
    fontSize: 16,
    color: '#BC5A85',
    fontWeight: '900'
  },
  photo: {
    height: 150,
    width: 105,
  },
  cover:{
    marginTop:10,
    padding:1,
    borderWidth:2,
    borderColor:'#fff',
  }



})