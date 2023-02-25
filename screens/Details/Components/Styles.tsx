import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  episodeContiner: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 0,
  },
  EpisodeDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 10,
  },
  left: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '55%',
    position: 'relative',
  },

  image: {
    width: '70%',
    aspectRatio: 16 / 9,
    resizeMode: 'cover',
    borderRadius: 10,
    marginRight: 10,
  },
  episodeDetails: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '90%',
  },
  episodeName: {
    color: 'white',
    fontSize: 16,
    marginLeft: 5,
  },
  duration: {
    color: 'lightgrey',
    fontSize: 12,
    marginLeft: 5,
  },
  right: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%',
    marginRight: 5,
  },
  playBtn: {
    position: 'absolute',
    borderColor: 'white',
    top: '30%',
    left: '25%',
    width: 40,
    height: 40,
    padding: 8,
    backgroundColor: 'rgba(0,0,0,0.8)',
    borderRadius: 60,
    color: 'white',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  desciption: {
    width: '100%',
    alignSelf: 'flex-start',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  desciptionText: {
    color: 'lightgrey',
    fontSize: 14,
    width: '95%',
  },
});

export default styles;
