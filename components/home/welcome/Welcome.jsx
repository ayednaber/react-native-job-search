import React, { useState } from 'react'
import { 
  View,
  Text,
  TextInput, // which is a text input
  TouchableOpacity,
  Image,
  FlatList,
  Touchable
 } from 'react-native';
 import { useRouter } from 'expo-router';

import styles from './welcome.style';
import { icons, SIZES } from '../../../constants';

const jobTypes = ["Full-time", "Part-time", "Contractor"]

const Welcome = ({searchTerm, setSearchTerm, handleClick}) => {
  const router = useRouter();

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Ayed</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput} // Here, we are not using a regular system font, getting into CUSTOM FONTS (going into _layout.js to import)
            value = {searchTerm}
            onChangeText={(text) => {setSearchTerm(text)}} // Here, we do not need to say e.target.value like in React, we immediately get the text
            placeholder="What are you looking for?"
            placeholderTextColor="#6e6d6b"
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image 
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      
      <View style={styles.tabsContainer}>
        <FlatList 
          data={jobTypes}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.tab}
              onPress={() => {
                router.push(`/search/${item}`)
              }}
            >
              <Text style={styles.tabText}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item} // used to extract a unique key, similar to what we are doing in React maps
          contentContainerStyle={{columnGap: SIZES.small}}
          horizontal
        />
      </View>
    </View>
  )
}

export default Welcome