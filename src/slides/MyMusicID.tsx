import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { importImages } from '../assets/ImagesExport';

const MyMusicID = () => {
  return (
    <ScrollView style={styles.Container}>
      <Text style={styles.txt}>MY MUSIC ID </Text>
      <Text style={styles.txt1}>FIND THE MUSIC THAT IDENTIFIES YOU !</Text>
    
      

      <View style={styles.music}>
      <Image
        source={importImages().bc}
        style={styles.img} />
        
        <Text style={styles.artist}>Tylor the creator</Text>

      </View>

      <View style={styles.music}>
      <Image
        source={importImages().fayroz}
        style={styles.img} />
        
        <Text style={styles.artist}>FAYROZ</Text>

      </View>
      <View style={styles.music}>
      <Image
        source={importImages().MMT}
        style={styles.img} />
        
        <Text style={styles.artist}>Metallica</Text>
      </View>

      <View style={styles.music}>
      <Image
        source={importImages().LL}
        style={styles.img} />
        
        <Text style={styles.artist}>LL</Text>
      </View>

      <View style={styles.music}>
      <Image
        source={importImages().BB}
        style={styles.img} />
        
        <Text style={styles.artist}>Eminem</Text>
      </View>
    </ScrollView>
  )

}

const styles = StyleSheet.create({
  Container: {
    // flex: 1,
    backgroundColor: 'yellow',
    // alignSelf:
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  txt: {
    fontSize: 50,
    fontWeight: "bold",
    color: 'black',
    alignSelf:'center'
  },
  txt1: {
    fontSize: 20,
    fontWeight: "bold",
    color: 'black',
    alignSelf:'center'
  },
  music: {
    width: "75%",
    borderWidth: 3,
    flexDirection:'row' , 
    borderRadius: 15 , 
    paddingLeft: 15 , 
    paddingVertical: 10 , 
    marginTop: 10 ,
    alignSelf:'center'
  },
  img: {
    height: 50,
    width: 60,
    borderRadius: 15 ,
    alignSelf:'center'
  },
  artist:{
    fontSize:16 , 
    marginLeft: 10,
    color:'black'
  }

})

export default MyMusicID;


