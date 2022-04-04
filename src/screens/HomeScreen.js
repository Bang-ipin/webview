import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity onPress={() => navigation.navigate('Detil')}>
        <Text>Home Screen</Text>
      </TouchableOpacity>
    </View>
  );
}
