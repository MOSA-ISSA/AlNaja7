import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { importImages } from '../assets/ImagesExport'

const YOUTUBE = () => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.head}>
        <Text style={styles.txt}>YOUTUBE</Text>
        </View>
        <View style={styles.card}>
          <Image style={styles.img} source={importImages('A')} />
          <Text style={styles.txt}>مسلسل الحجاج بن يوسف الثقافي</Text>
          <View style={styles.child}>
            <Text >مشاركة</Text>
            <Text >ضع لايك للفيديو</Text>
          </View>

        </View>
        <View style={styles.card}>
          <Image style={styles.img} source={importImages('B')} />
          <Text style={styles.txt}> انا لجوج حقود حسود يا امير المؤمنين ان الشيطان اذا راني سالمني  </Text>
          <View style={styles.child}>
            <Text>مشاركة</Text>
            <Text >ضع لايك للفيديو </Text>
          </View>
        </View>
      </View>

    </View>

  )
}

export default YOUTUBE

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  img: {
    width: '100%',
    height: 300,
    marginBottom: 20,
    borderRadius: 20
  },
  txt: {
    fontSize: 30,
    color: "black",

  },
  card: {
    width: '90%',
    height: 500,
    // borderWidth:1,
    margin: 20,
    borderRadius: 20,
    backgroundColor: 'white',
    elevation: 5
  },
  child: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 10,
    width: '100%'
  },
  head:{
    width: '100%',
    height: 50,
    // borderWidth:1,
    alignItems: 'center',
    backgroundColor:'red'
  }
})


















































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































