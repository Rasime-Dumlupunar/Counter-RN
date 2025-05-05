import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';

const Counterx = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  //1- Bileşenin ekrana basılma olayını izliyoruz
  useEffect(() => {
    console.log('Bileşen ekrana basıldı.');
  }, []);

  //2- Bileşenin ekrandan gitme olayını izleme
  useEffect(() => {
    return () => console.log('Bileşen ekrandan gitti');
  }, []);
  //3- Bileşenin ekrana gelme ve gitme olayını izle
  useEffect(() => {
    console.log('Bileşen ekrana basıldı');
    return () => console.log('Bileşen ekrandan gitti');
  }, []);
  // 4- Bileşenin eupdate olma  olayını izle
  useEffect(() => {
    console.log('Bileşen render oldu, state ya da props değişti');
  });
  //5-Dolu bağımlılık olayını izleme
  useEffect(() => {
    console.log('Input değeri değişti : ', input);
  }, [input]);
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setInput}
        placeholder="Değer giriniz..."
        value={input}
      />
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

export default Counterx;

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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 30,
    marginBottom: 20,
    width: '80%',
    color: 'black',
  },
});
