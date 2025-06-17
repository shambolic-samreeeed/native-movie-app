import React from 'react';
import { Image, TextInput, View } from 'react-native';
import { icons } from '../constants/icons';

interface Props{
  placeholder: string;
  onPress?: ()=>void;
}
const SearchBar = ({ placeholder, onPress} : Props) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'grey',
        borderRadius: 50,
        paddingHorizontal: 5,
        paddingVertical: 6,
        marginTop:10
      }}
    >
      <Image
        source={icons.search}
        style={{ width: 20, height: 20, marginRight: 8, borderColor:'white'}}
      />
      <TextInput
      onPress={onPress}
      placeholder={placeholder}
      value=''
      onChangeText={()=>{}}
      placeholderTextColor='white'/>
    </View>
  );
};

export default SearchBar;
