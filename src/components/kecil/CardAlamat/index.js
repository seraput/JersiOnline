import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors, fonts, responsiveWidth} from '../../../utils';

const CardAlamat = ({profile}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.cardContent}>
        <Text style={styles.title}>Alamat Saya :</Text>
        <Text style={styles.alamat}>{profile.alamat}</Text>
        <Text style={styles.alamat}>Kota/Kab. {profile.kota}</Text>
        <Text style={styles.alamat}>Provinsi {profile.provinsi}</Text>
        <Text style={styles.ubahAlamat}>Ubah Alamat</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CardAlamat;

const styles = StyleSheet.create({
  title: {
    fontFamily: fonts.primary.bold,
    fontSize: 12,
    color: 'black',
    marginBottom: 10,
  },
  alamat: {
    fontFamily: fonts.primary.regular,
    fontSize: 11,
    color: 'black',
  },
  ubahAlamat: {
    fontFamily: fonts.primary.bold,
    fontSize: 11,
    color: colors.primary,
    marginTop: 5,
    textAlign: 'right',
  },
  cardContent: {
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginVertical: 15,
  },
});
