import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { importImages } from '../assets/ImagesExport'

const Old = () => {
  return (
    <View style={styles.container}>


      <Text style={styles.title}>وسائل نقل قديما</Text>
      <ScrollView>
        <View style={styles.alignTxt}>
          <Image style={styles.img} source={importImages("horse") } />
          <Text style={styles.textFont}>لخيول، حيث اعتبرت وسيلة نقل خاصة، وكانت مرغوبة لأن لها عدة مميزات، منها: السرعة، والنوم القليل، والحدس القوي، وقد كانت شائعة الاستخدام خلال 600 عام ماضية،</Text>
          <Text style={styles.textFont}>السرعة، والنوم القليل، والحدس القوي، وقد كانت شائعة الاستخدام خلال 600 عام ماضية،</Text>
        </View>

        <View style={styles.alignTxt}>
          <Image style={styles.img} source={importImages("bull")} />
          <Text style={styles.textFont}>يعتبر تاكسى الثور من ابرز وسائل المواصلات المستخدمة فى جزر سيشيل، وعلى الرغم من أن الثور من الحيوانات المهيبة إلا أنها تستخدم كوسيلة للمواصلات للتنقل عبر الضفاف الرملية والغابات الاستوائية.</Text>
        </View>

        <View style={styles.alignTxt}>
          <Image style={styles.img} source={importImages("ca")} />
          <Text style={styles.textFont}>لجمال فكان الناس يركبونها حين يسافرون إلى المناطق البعيدة أو يخرجون للتجارة وكانت الجمال تستمر في سيرها أياماً أو شهوراً ،والجمل حيوان قوي جداً ؛ فهو يمشي طويلاً في الصحراء ويعيش أياماً دون أن يأكل أو يشرب ؛ولهذا السبب يسمى سفينة الصحراء ،وسكان الصحراء مازالوا يحتاجون إليه حتى الآن</Text>
        </View>
        <View style={styles.child}>
          <Image style={styles.img} source={importImages("horsee")} />
        <Image style={styles.img} source={importImages("cameldrive")} />
        <Image style={styles.img} source={importImages("bulldrive")} />
        </View>
        
      </ScrollView>
    </View>

  )
}

export default Old

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"white",
    padding:5
  },
  title: {
    fontSize: 40,
    color: 'red'
  },
  img: {
    width: 130,
    height: 140,
    marginTop:10,
    marginRight:10
  },
  textFont: {
    color: "black",
    flexWrap: 'wrap',
  },
  alignTxt: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  child:{
    flexDirection: 'row',
  
  }
}
)
