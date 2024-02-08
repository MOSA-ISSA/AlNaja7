import { Text, View, StyleSheet, Image, ImageBackground, ScrollView } from 'react-native'
import { getImages } from '../assets/ImagesExport'

const Nserat = () => {

  return (
    <View style={styles.veiw1}>
      <View style={styles.veiw2}>
        <Text style={styles.txt}>biotechnology</Text>
        <Text>Adan Nserat</Text>
        <Image
          source={getImages('College')}
          style={styles.img} />
      </View>
      <View style={styles.veiw3}>

        <View style={styles.veiw4}>
          <Image
            source={getImages('DNA')}
            style={styles.img2} />
          <Text style={styles.txt2}>Biotechnology is the use of biology to develop new products, methods and organisms intended to improve human health and society.</Text>
        </View>

        <View style={styles.veiw4}>
          <Image
            source={getImages('bed')}
            style={styles.img2} />
          <Text style={styles.txt2}>Operating rooms are spacious, in a cleanroom, and well-lit, typically with overhead surgical lights, and may have viewing screens and monitors</Text>
        </View>

      </View>
      <View style={styles.veiw3}> 
        <Image
              source={getImages('cell')}
              style={styles.img} />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  veiw1: {
    flex: 1,
  },
  veiw2: {
    justifyContent: "center",
    alignItems: "center",
  },
  txt: {
    fontSize: 30,
    color: "black",
    alignContent: "center",
    paddingTop: 10,
    paddingBottom: 15,


  },
  img: {
    height: 140,
    width: 300,
    marginRight: 15,
    marginBottom: 15,
    alignSelf:"center"
  },
  veiw3: {
    paddingLeft: 20,
    width:'100%'
    
  },
  img2: {
    height: 110,
    width: 110,
  },
  txt2: {
    textAlign: "right",
    alignSelf: 'center',
    color:"black"

  },
  veiw4: {
    flexDirection: "row",
    paddingLeft: 20,
    padding: 10,
    justifyContent:"space-between"
  },
})
export default Nserat