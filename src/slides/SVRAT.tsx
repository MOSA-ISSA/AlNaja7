import {ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { getImages } from '../assets/ImagesExport'

const SVRAT = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={getImages("seventeeny")} style={styles.img} />

      <Text style={styles.text}>welcom to our website SVRAT</Text>

      <Text style={styles.text}>that can give carat the best news</Text>

      <Text style={styles.text}>about svt hope to have fun</Text>


      <View style={styles.child2}>

        <Text style={styles.text1}>letter for carat</Text>
        <Text style={styles.text1}>&</Text>
        <Text style={styles.text1}>letter from carat</Text>

        <Text style={styles.text1}></Text>


      </View>

      <View style={styles.child3}>
        <Text style={styles.text3}>about the app </Text>
        <Text style={styles.text2}>from this app you can see letters from seventeen and some motivation and also you can sent for them letters congratulations and share your
      feeling with them as a conversation to be feel better we hope this website what you need and spreat the happiens in all Seventeen 세븐틴or SVT is a South Korean boy band formed by Pledis Entertainment. The group consists of thirteen members: S.Coups, Jeonghan, Joshua, Jun, Hoshi, Wonwoo, Woozi, DK, Mingyu, The8, Seungkwan, Vernon, and Dino.</Text>
      </View>
    </View >

  )
}

export default SVRAT


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  text: {
    color: "black",
    fontSize: 20,
    textAlign: 'center',
    // textAlign: 'left',
    marginLeft: 20,
    marginBottom: 10
  },
  text1: {
    color: "black",
    fontSize: 20,
    justifyContent: "center",
  },
  text2: {
    color: "black",
    fontSize: 20,
    textAlign: 'left',
    justifyContent: "center",
  },
  text3: {
    color: "#42d4f5",
    fontSize: 25,
    textAlign: 'left',
    justifyContent: "center",
    marginBottom: 5 , 
    marginTop: 10 
  },
  child: {
    flex: 0.2,
    backgroundColor: "white",
    borderWidth: 1
  },
  child1: {
    flex: 0.8,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#42d4f5",
    borderWidth: 1
  },
  child2: {
    width: "100%",
    height: 50,
    backgroundColor: "white",
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginLeft: 20
  },
  child3: {
    flex: 1,
    backgroundColor: "white",
    borderWidth: 1 , 
    paddingLeft: 20 
  },
  img: {
    height: 200,
    width: '100%',
    resizeMode: 'stretch' , 
    marginBottom: 20 ,
  }

})

