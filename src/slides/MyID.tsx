import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const MyID = () => {
  return (
    <View style={styles.container}>
      <View style={styles.idCard}>
        <Text style={styles.logoText}>                     My ID</Text>
        <Text style={styles.logoText}>                   </Text>
        <Text style={styles.logoText}>Name: Ahmad</Text>
        <Text style={styles.logoText}>Age: 14</Text>
        <Text style={styles.logoText}>Gender: Male</Text>
        <Text style={styles.logoText}>School: Alnajah</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  idCard: {
    backgroundColor: '#008000',
    padding: 20,
    borderRadius: 10,
    width: 300,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  logoText: {
    color: 'white',
    fontSize: 18,
    marginVertical: 5,
  },
});

export default MyID;
