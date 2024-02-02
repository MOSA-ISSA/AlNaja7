import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { importImages } from '../assets/ImagesExport';

const SuperMarket = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>SuperMarket</Text>
      <View>

        <View style={styles.card1}>
          <Image style={styles.img} source={importImages("bag")} />
          <View><Text style={styles.text}>حقيبة</Text>
            <Text style={styles.text}>120₪</Text>
          </View>
        </View>


        <View style={styles.card1}>
          <Image style={styles.img} source={importImages("hat")}/>
          <View><Text style={styles.text}>قبعة</Text>
            <Text style={styles.text}>20₪</Text>
          </View>
        </View>


        <View style={styles.card1}>
          <Image style={styles.img} source={importImages("Headphones")} />
          <View><Text style={styles.text}>سماعة</Text>
            <Text style={styles.text}>35₪</Text>
          </View>
        </View>
        <View style={styles.card1}>
          <Image style={styles.img} source={importImages("TV")} />
          <View><Text style={styles.text}>تلفاز</Text>
            <Text style={styles.text}>1000₪</Text>
            
            
          </View>
        </View>
        <View style={styles.card1}>
          <Image style={styles.img} source={importImages("phone")} />
          <View><Text style={styles.text}>هاتف</Text>
            <Text style={styles.text}>600₪</Text>
          </View>
        </View>
        <View style={styles.card1}>
          <Image style={styles.img} source={importImages("Book")} />
          <View><Text style={styles.text}>كتاب</Text>
            <Text style={styles.text}>50₪</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
  export default SuperMarket

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'lightgray',
      alignItems: 'center'
    },
    img: {
      width: 100,
      height: 100,
      resizeMode: 'contain'
    },
    text: {
      color: 'gray',
      fontSize: 25
    },
    card1: {
      width: "90%",
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      margin: 10,
      backgroundColor: 'white',
      elevation: 5,
      paddingVertical: 10,
      borderRadius: 10
    }


  })


