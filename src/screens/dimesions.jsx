import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {screenHeight, screenWidth} from '../utils/constans';

const Dimesions = () => {
  return (
    <View style={styles.container}>
      <Text>Dimesions</Text>
    </View>
  );
};

export default Dimesions;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    width: screenWidth * 0.8,
    height: screenHeight * 0.4,
  },
});
