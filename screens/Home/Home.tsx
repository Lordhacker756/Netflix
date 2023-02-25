import {View, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import categories from '../../data/categories';
import CategorySlider from './components/CategorySlider';
import Header from '../../common/Header';

const Home = () => {
  return (
    <View style={styles.pageContainer}>
      <Header />
      <FlatList
        data={categories.items}
        renderItem={({item}) => <CategorySlider category={item} />}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#000',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
});

export default Home;
