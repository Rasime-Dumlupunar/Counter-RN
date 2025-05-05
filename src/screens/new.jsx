import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

import Counterx from '../components/counterx';

const New = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <View style={styles.container}>
      <View>
        <Button
          onPress={() => setIsVisible(!isVisible)}
          title="Gizle / Göster"></Button>
      </View>
      {isVisible ? <Counterx /> : <Text>boş</Text>}
    </View>
  );
};

export default New;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 60,
  },
});
