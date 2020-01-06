import React from 'react';
import {Button, Text, View} from 'react-native';

export default function CouterScreen() {
  let [counter, setCounter] = React.useState(0);
  return (
    <View>
      <Button title="+" onPress={() => setCounter(counter++)} />
      <Text>{counter}</Text>
      <Button title="-" onPress={() => setCounter(counter--)} />
    </View>
  );
}
