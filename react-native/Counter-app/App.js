import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter 🔃</Text>

      <View style={styles.innerContainer}>
      
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => setCount(count > 0 ? count - 1 : 0)}      
      >
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>

      <Text style={styles.text}>{count}</Text>
      
      <TouchableOpacity
        style={styles.button} 
        onPress={() => setCount(count < 50 ? count + 1 : 50)} 
      >
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>

    <TouchableOpacity
        style={styles.button} 
        onPress={() => setCount(0)} 
      >
        <Text style={styles.buttonText}>Reset</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0e6e4',
  },

  title:{
    fontSize: 27,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },

  innerContainer:{
    height: '20%',
    width: '60%',
    maxWidth: '60%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#d7998e',
    padding: 10,
    borderRadius: 10,
  },

  text: {
    fontSize: 24,
    color: '#333',
  },

  button: {
    backgroundColor: '#4c061d',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    margin: 10,
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});