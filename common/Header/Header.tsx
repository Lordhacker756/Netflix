import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.navbarContainer}>
      <Image style={styles.logo} source={require('../../assets/Logo.png')} />
      <View style={styles.navLinks}>
        <Text style={styles.link}>TV Shows</Text>
        <Text style={styles.link}>Movies</Text>
        <Text style={styles.link}>My List</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  navbarContainer: {
    height: 70,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#000',
  },
  logo: {
    height: 30,
    width: '10%',
    resizeMode: 'contain',
  },
  navLinks: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  link: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 20,
  },
});
