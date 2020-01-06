import React from 'react';
import {Text, FlatList} from 'react-native';

export default function ListScreen() {
  const friends = [{name: 'Ram'}, {name: 'Shyam'}, {name: 'Hari'}];

  return (
    <FlatList
      data={friends}
      keyExtractor={friend => friend.name}
      renderItem={({item}) => {
        return <Text>{item.name}</Text>;
      }}
    />
  );
}
