import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { importImages } from '../assets/ImagesExport'

const Instagram = () => {
  return (
    <View style={styles.sema}>
      <Text style={styles.tala}>tala7ajyahya</Text>

      <View style={styles.header}>
        <View>
          <View style={{flexDirection:'row'}}>
          <Image
            source={importImages('tala')}
            style={styles.profile}
            />
            <Text style={styles.headerItem}>{'33 \nposts'}</Text>
            <Text style={styles.headerItem}>{'1260 \nfollowers'}</Text>
            <Text style={styles.headerItem}>{'420 \nfollowing'}</Text>
        </View>
        <View>
        <Text style={styles.name}>Tala Haj Yahya </Text>
        <Text style={styles.name}>a collection of memories</Text>
        <View style={{marginLeft:50}}>
        <Text style={styles.ayla}>👼🦢✨🤍</Text>
        </View>
        </View>
        </View>
        
      </View>

      <View style={styles.nana}>
        <Image
          source={importImages('tala2')}
          style={styles.profile2}
        />
        <Text>Followed by t__lifestyle</Text>
      </View>
      <View style={styles.followContiner}>
      <TouchableOpacity style={styles.follow}>
        <Text style={styles.textfollow}>Follow</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.add}>
       < Text style={styles.addIcon}>👤</Text>
      </TouchableOpacity>
      </View>

      <View style ={styles.lockC}>
      <View style ={styles.lockCo}>
      <Image
          source={importImages('lock')}
          style={styles.lock}
        />
      </View>
    </View>
    </View>
  )

}
const styles = StyleSheet.create({
  sema: {
    flex: 1,
    
  },
  profile: {
    height: 110,
    width: 110,
    borderRadius: 110,
    margin: 10,

  },
  profile2: {
    height: 30,
    width: 30,
    borderRadius: 30,
    margin: 10,

  },
  tala: {
    textAlign: "center",
  },
  header:{
    flexDirection:'row',
    //borderWidth:1,
    alignItems:'flex-start',
    justifyContent:'space-around',
    marginBottom:20
  },
  headerItem:{
    textAlign:'center' , 
    marginTop: 30 ,
    marginLeft:24 
  },
  name:{
    marginLeft:24 
  },
  ayla:{
    marginLeft:24 ,
    // textAlign:'center'
  },
  nana:{
    marginLeft:15,
    flexDirection:'row',
    alignItems:'center',
  },
  alignHeaders:{
    justifyContent: 'space-around'
  },
  followContiner:{
    paddingHorizontal:40,
    height:100,
    flexDirection:'row'
    // padding:40,
  },
  follow:{
    backgroundColor:"#1A7BDC",
    height:30,
    flex:1,
    marginRight:5,
  },
  add:{
    backgroundColor:"#C3D1DB",
    height:30,
    flex:0.1
  },
  textfollow:{
    textAlign:'center',
    fontSize:20,
    color:"white"
  },
  addIcon:{
    textAlign:'center',
    alignSelf:'center',
    justifyContent:'center'
  },
  lockC:{
    flex:1,
    paddingBottom:5
    // backgroundColor:'red'
  },
  lockCo:{
    borderRadius: 100,
    alignSelf:'center',
    borderWidth:1,
  },
  lock:{
    height: 100,
    width: 100,
    alignSelf:'center',
    borderColor:'black',
    margin: 10,
  }

})

export default Instagram
