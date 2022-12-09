import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, fonts, responsiveWidth} from '../../../utils';
import Tombol from '../Tombol';

const CardJersey = ({jersey, navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.listCard}>
        <Image source={jersey.gambar[0]} style={styles.imgList} />
        <Text style={styles.textList}>{jersey.nama}</Text>
      </TouchableOpacity>
      <Tombol
        type="text"
        title="Detail"
        style={styles.detailBtn}
        padding={7}
        onPress={() => navigation.navigate('jerseyDetail', {jersey})}
      />
    </View>
  );
};

export default CardJersey;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    marginTop: 10,
  },
  listCard: {
    backgroundColor: colors.yellow,
    width: responsiveWidth(150),
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  imgList: {
    width: 100,
    height: 100,
  },
  textList: {
    fontFamily: fonts.primary.bold,
    fontSize: 12,
    textTransform: 'capitalize',
    textAlign: 'center',
  },
});
