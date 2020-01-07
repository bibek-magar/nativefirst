import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const BoxScreen = () => {
  return (
    <>
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>Child 1</Text>
        <Text style={styles.textStyle}>Child 2</Text>
        <Text style={styles.textStyle}>Child 3</Text>
      </View>
      <View style={styles.viewStyle}>
        <View style={styles.viewStyleOne}></View>
        <View style={styles.viewStyleTwo}></View>
        <View style={styles.viewStyleThree}></View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: 100,
    flexDirection: 'row',
  },
  textStyle: {
    borderWidth: 1,
    flex: 1,
    borderColor: 'red',
  },
  viewStyleOne: {
    height: 50,
    width: 50,
    backgroundColor: 'red',
    flex: 1,
  },
  viewStyleTwo: {
    height: 50,
    width: 50,
    backgroundColor: 'blue',
    flex: 1,
    alignSelf: 'flex-end',
  },
  viewStyleThree: {
    height: 50,
    width: 50,
    backgroundColor: 'green',
    flex: 1,
  },
});
export default BoxScreen;
