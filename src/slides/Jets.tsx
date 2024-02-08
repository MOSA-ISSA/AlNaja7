import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { getImages } from '../assets/ImagesExport'

const Jets = () => {
  return (
    <ImageBackground  style={styles.container }  source={getImages("ship")}>
      <Text style={styles.txt}>✈fighter jets✈</Text>
      <Text style={styles.txt}>✈✈✈✈✈✈✈✈✈✈✈✈✈✈✈</Text>
      <View style={styles.card}>
        <View>
          <Text style={styles.txt1}>    name:F22</Text>
          <Text style={styles.txt1}>    Max Speed:2,414km/h</Text>
          <Text style={styles.txt1}>    Price:$138 million.</Text>
        </View>
        <Image 
          style={styles.imge}
          source={getImages("Jet")}
          progressiveRenderingEnabled
          // PlaceholderContent={<ActivityIndicator />}
          />
      </View>
    </ImageBackground>
  )
}

export default Jets

const styles = StyleSheet.create({
  container: {
    flex:1,
    resizeMode:'contain' ,
  },
  txt: {
    color: "white",
    fontWeight: 'bold',
    fontSize: 30,
    textAlign:'center'
  },
    txt1: {
      color: "black",
      fontWeight: 'bold',
      fontSize: 20,
  },
  imge: {
    width: 150,
    height: 150,
    borderRadius:100,
    margin :5,
    resizeMode:'center',
  },
  card: {
    width: '95%',
    height: 150,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: "space-around",
    backgroundColor: 'lightgray',
    alignSelf:'center',
    borderRadius:20,
    marginTop: 400,
    marginLeft:20,
  },

})