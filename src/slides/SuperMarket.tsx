import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { getImages} from '../assets/ImagesExport';

const sizes = Dimensions.get('window');

const SuperMarket = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SuperMarket</Text>

      <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator>
      <View style={styles.tab}>
        <View style={styles.card1}>
          <Image style={styles.img} source={getImages("bag")} />
          <View><Text style={styles.text}>حقيبة</Text>
            <Text style={styles.text}>120₪</Text>
          </View>
        </View>


        <View style={styles.card1}>
          <Image style={styles.img} source={getImages("hat")}/>
          <View><Text style={styles.text}>قبعة</Text>
            <Text style={styles.text}>20₪</Text>
          </View>
        </View>


        <View style={styles.card1}>
          <Image style={styles.img} source={getImages("Headphones")} />
          <View><Text style={styles.text}>سماعة</Text>
            <Text style={styles.text}>35₪</Text>
          </View>
        </View>
        <Text style={styles.slideNext}> {"slide next->  "}</Text>
      </View>

      <View style={styles.tab}>
        <View style={styles.card1}>
          <Image style={styles.img} source={getImages("TV")} />
          <View><Text style={styles.text}>تلفاز</Text>
            <Text style={styles.text}>1000₪</Text>
            
            
          </View>
        </View>
        <View style={styles.card1}>
          <Image style={styles.img} source={getImages("phone")} />
          <View><Text style={styles.text}>هاتف</Text>
            <Text style={styles.text}>600₪</Text>
          </View>
        </View>
        <View style={styles.card1}>
          <Image style={styles.img} source={getImages("Book")} />
          <View><Text style={styles.text}>كتاب</Text>
            <Text style={styles.text}>50₪</Text>
          </View>
        </View>
        
      </View>
      </ScrollView>
    </View>
  );
}
  export default SuperMarket

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'lightgray',
      alignItems: 'center',
    },
    img: {
      width: 100,
      height: 100,
      resizeMode: 'contain'
    },
    text: {
      color: 'gray',
      fontSize: 25*sizes.fontScale
    },
    title: {
      color: 'gray',
      fontSize: 50*sizes.fontScale
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
    },
    tab:{
      flexDirection:'column',
      width:sizes.width,
      // marginTop:sizes.width*0.5
    },
    slideNext:{
      fontSize:10,
      textAlign:'right',
    }
  })


