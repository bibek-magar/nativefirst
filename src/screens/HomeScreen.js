import React from 'react';
import {Text, View, Button} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Go to Components DEMO"
        onPress={() => navigation.navigate('Components')}
      />
      <Button
        title="Go to Lists demo"
        onPress={() => navigation.navigate('List')}
      />
      <Button
        title="Go to Image demo"
        onPress={() => navigation.navigate('Images')}
      />
      <Button
        title="Go to the Counter demo"
        onPress={() => navigation.navigate('Counter')}
      />
    </View>
  );
};

export default HomeScreen;
