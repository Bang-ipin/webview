import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function DetilScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity onPress={() => navigation.navigate('VeryDetil')}>
        <Text>Detil Screen</Text>
      </TouchableOpacity>
    </View>
  );
}
