import {Dimensions, FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import Shopping from './src/slides/Shopping';
import Music from './src/slides/Music';
import BillieFan from './src/slides/BillieFan';
import HealthyLifestyle from './src/slides/HealthyLifestyle';
import Psy from './src/slides/Psy';
import Shopping2 from './src/slides/Shopping2';
import MyMusicID from './src/slides/MyMusicID';
import Podcasts from './src/slides/Podcasts';
import Instagram from './src/slides/Instagram';
import Celebrities from './src/slides/Celebrities';
import Nserat from './src/slides/Nserat';
import Development from './src/slides/Develoment';
import Dog from './src/slides/Dog';
import ALARM from './src/slides/ALARM';
import LetsTalk from './src/slides/LetsTalk';
import Ahmad from './src/slides/Ahmad';
import Chemistry from './src/slides/chemistry';
import FootBall from './src/slides/FootBall';
import YOUTUBE from './src/slides/YOUTUBE';
import Minecraft from './src/slides/Minecraft';
import Old from './src/slides/Old';
import SVRAT from './src/slides/SVRAT';
import PERFECTO from './src/slides/PERFECTO';
import Motorcycles from './src/slides/Motorcycles';
import OnePiece from './src/slides/OnePiece';
import MyID from './src/slides/MyID';
import MyId2 from './src/slides/MyId2';
import SuperMarket from './src/slides/SuperMarket';
import Jets from './src/slides/Jets';

const sizes = Dimensions.get('window');

const App = () => {
  const allSlides = [
    <Shopping />,
    <Shopping2 />,
    <HealthyLifestyle />,
    <Psy />,
    <MyMusicID />,
    <Podcasts />,
    <Instagram />,
    <Celebrities />,
    <Nserat />,
    <Development />,
    <Dog />,
    <ALARM />,
    <LetsTalk />,
    <Ahmad />,
    <Chemistry />,
    <FootBall />,
    <YOUTUBE />, //
    <Minecraft />,
    <Old />,
    <SVRAT />,
    <OnePiece />,
    <MyID />,
    <MyId2 />,
    <Jets />,
    <Music />, //
    <BillieFan />, //
    <PERFECTO />, //
    <SuperMarket />, //
    <Motorcycles />, // //
  ];

  const renderSlides = ({item}) => (
    <View style={styles.slideContainer}>{item}</View>
  );

  return (
    <FlatList
      data={allSlides}
      renderItem={renderSlides}
      keyExtractor={(item, index) => index.toString()}
      // horizontal
      pagingEnabled
      style={styles.app}
    />
  );
};

export default App;

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
  slideContainer: {
    width: sizes.width,
    height: sizes.height,
  },
});
