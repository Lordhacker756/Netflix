import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import React from 'react';

interface CategorySliderProps {
  category: {
    id: string;
    title: string;
    movies: {
      id: string;
      poster: string;
    }[];
  }[];
}

const CategorySlider = (props: CategorySliderProps) => {
  const {title, movies} = props.category;
  console.log(movies);
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <FlatList
        data={movies}
        renderItem={({item}) => (
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{uri: item.poster}} />
          </View>
        )}
        horizontal
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default CategorySlider;

const styles = StyleSheet.create({
  container: {
    height: 300,
    width: '100%',
    marginBottom: 30,
  },

  imageContainer: {
    height: 250,
    justifyContent: 'flex-start',
  },
  image: {
    height: 250,
    width: 150,
    resizeMode: 'cover',
    borderRadius: 10,
    marginRight: 15,
  },
  title: {
    height: 50,
    width: '100%',
    backgroundColor: '#000',
    justifyContent: 'flex-start',
  },
  titleText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
