import React from 'react';
import { Image, View } from 'react-native';
import { icons } from '../constants/icons';

const SearchBar = () => {
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
        style={{ width: 20, height: 20, marginRight: 8 }}
      />
    </View>
  );
};

export default SearchBar;
