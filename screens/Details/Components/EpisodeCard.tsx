import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import styles from './Styles';
import Octicons from 'react-native-vector-icons/Octicons/';
import Fontawesome from 'react-native-vector-icons/FontAwesome5/';

const EpisodeCard = () => {
  return (
    <View style={styles.episodeContiner}>
      <View style={styles.EpisodeDetails}>
        <View style={styles.left}>
          <Image
            source={{
              uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/netflix/ep0.jpg',
            }}
            style={styles.image}
          />
          <Pressable style={styles.playBtn}>
            <Fontawesome name="play" size={20} color="white" />
          </Pressable>
          <View style={styles.episodeDetails}>
            <Text style={styles.episodeName}>1. Pilot Part 1 & 2</Text>
            <Text style={styles.duration}>1h 21m</Text>
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          condimentum, nunc ut ultricies ultricies, nunc nisl aliquam nisl, ut
          aliquet nisl nisl sit amet nisl. Sed condimentum, nunc ut ultricies
          ultricies, nunc nisl aliquam nisl, ut aliquet nisl nisl sit amet nisl.
        </Text>
      </View>
    </View>
  );
};

export default EpisodeCard;
