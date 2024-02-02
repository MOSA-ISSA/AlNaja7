import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyId2 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <View style={styles.logo}>
          <Text style={styles.logoText}>my id</Text>
          <Text style={styles.logoText}>name: ahmad</Text>
          <Text style={styles.logoText}>age: 14</Text>
          <Text style={styles.logoText}>hoppy: playing on coumputer</Text>
          <Text style={styles.logoText}>school: alnagah</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    justifyContent:'center',
    flex: 1,
    padding: 20,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    backgroundColor: '#000000',
    width: 300,
    height: 300,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding:20,
    elevation:5,
  },
  logoText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical:10,
    
  },
});

export default MyId2;
