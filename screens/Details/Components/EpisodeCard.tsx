import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import styles from './Styles';
import Octicons from 'react-native-vector-icons/Octicons/';
import Fontawesome from 'react-native-vector-icons/FontAwesome5/';

const EpisodeCard = ({title, poster, duration, plot}) => {
  return (
    <View style={styles.episodeContiner}>
      <View style={styles.EpisodeDetails}>
        <View style={styles.left}>
          <Image source={{uri: poster}} style={styles.image} />
          <Pressable style={styles.playBtn}>
            <Fontawesome name="play" size={20} color="white" />
          </Pressable>
          <View style={styles.episodeDetails}>
            <Text style={styles.episodeName}>{title}</Text>
            <Text style={styles.duration}>{duration}</Text>
          </View>
        </View>
        <View style={styles.right}>
          <Octicons name="download" size={30} color="white" />
        </View>
      </View>
      <View style={styles.desciption}>
        <Text
          style={styles.desciptionText}
          ellipsizeMode="tail"
          numberOfLines={3}>
          {plot}
        </Text>
      </View>
    </View>
  );
};

export default EpisodeCard;
