import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

const Counter = () => {
  const [count, setCount] = useState(2);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setCount(count + 1)}
        style={[
          styles.button,
          {backgroundColor: count < 1 ? 'gray' : 'purple'},
        ]}>
        <Text style={styles.buttonText}>ARTIR</Text>
      </TouchableOpacity>
      <Text style={styles.textNumber}>{count}</Text>
      <TouchableOpacity
        onPress={() => setCount(count - 1)}
        style={[styles.button, {backgroundColor: 'orange'}]}>
        <Text style={styles.buttonText}>AZALT</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setCount(0)}
        style={[styles.button, {backgroundColor: 'green'}]}>
        <Text style={styles.buttonText}>SIFIRLA</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'red',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 20,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
  },
  textNumber: {
    fontSize: 60,
    fontWeight: '700',
  },
});
