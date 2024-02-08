import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { getImages} from '../assets/ImagesExport'

const sizes = Dimensions.get('window');

const PERFECTO = () => {
  return (
    <View style={styles.container}>
      
      <Text style={styles.text}>PERFECTO</Text>
      
      <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator>
      <View style={styles.tab}>
        <View style={styles.child1}>
          <View>
            <Text style={styles.txt}>Pizza</Text>
            <Text style={styles.txt}>80</Text>
          </View>
          <Image style={styles.img} source={getImages("pizza")} />
        </View>

        <View style={styles.child1}>
          <View>
            <Text style={styles.txt}>fettuccine</Text>
            <Text style={styles.txt}>120</Text>
          </View>
          <Image style={styles.img} source={getImages("pasta")}/>
        </View>

        <View style={styles.child1}>
          <View>
            <Text style={styles.txt}>spaghetti</Text>
            <Text style={styles.txt}>80</Text>
          </View>
          <Image style={styles.img} source={getImages("pasta2")}/>
        </View>

        <View style={styles.child1}>
          <View>
            <Text style={styles.txt}>ravioli</Text>
            <Text style={styles.txt}>150</Text>
          </View>
          <Image style={styles.img} source={getImages("oo")} />
        </View>
        <Text style={styles.slideNext}> {"slide next->  "}</Text>
      </View>

      <View style={styles.tab}>
        <View style={styles.child1}>
          <View>
            <Text style={styles.txt}>pasta</Text>
            <Text style={styles.txt}>90</Text>
          </View>
          <Image style={styles.img} source={getImages("pasta3")}/>
        </View>

        <View style={styles.child1}>
          <View>
            <Text style={styles.txt}>risotto</Text>
            <Text style={styles.txt}>120</Text>
          </View>
          <Image style={styles.img} source={getImages("rr")} />
        </View>

        <View style={styles.child1}>
          <View>
            <Text style={styles.txt}>polanta</Text>
            <Text style={styles.txt}>100</Text>
          </View>
          <Image style={styles.img} source={getImages("pp")} />
        </View>
      </View>

      </ScrollView>   
    </View>
  )
}

export default PERFECTO

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgray",
    alignItems: 'center',

  },
  text: {
    color: "black",
    fontSize: 40,
    fontWeight: 'bold',
    // marginBottom:sizes.width*0.2,
  },
  child1: {
    //borderWidth: 1,
    width: '90%',
    margin: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderRadius: 20,
    backgroundColor: "white",
    elevation: 5 , 
    paddingHorizontal:20
  },
  img: {
    width: 75,
    height: 75,
    borderRadius: 20,
  },
  txt: {
    color: "black",
    fontSize: 25,
    //fontWeight: 'bold'
  },
  tab:{
    flexDirection:'column',
    width:sizes.width,
  },
  slideNext:{
    fontSize:10,
    textAlign:'right',
  }
  })