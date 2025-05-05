import {SafeAreaView, StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';

const Flex = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View
          style={{
            flex: 3,
            backgroundColor: 'green',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
            }}>
            Selam
          </Text>
        </View>
        <View
          style={{
            flex: 3,
            backgroundColor: 'orange',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
            }}>
            Merhaba
          </Text>
        </View>
        <View
          style={{
            flex: 4,
            backgroundColor: 'blue',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
            }}>
            Thank you
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Flex;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 50,
    gap: 50,
  },
});
