import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {
  colors,
  fonts,
  numberWithCommas,
  responsiveHeight,
  responsiveWidth,
} from '../../../utils';
import {IconDelete} from '../../../assets';
import Jarak from '../Jarak';

const CardKeranjang = ({keranjang}) => {
  return (
    <View style={styles.container}>
      <Image source={keranjang.product.gambar[0]} style={styles.gambar} />
      <View style={styles.description}>
        <Text style={styles.title}>{keranjang.product.nama}</Text>
        <Text style={styles.textReg}>
          Harga : {numberWithCommas(keranjang.product.harga)}
        </Text>

        <Jarak height={responsiveHeight(14)} />

        <Text style={styles.textBold}>
          Pesan : <Text style={styles.textReg}>{keranjang.jumlahPesan}</Text>
        </Text>
        <Text style={styles.textBold}>
          Total Harga : Rp.
          <Text style={styles.textReg}>
            {numberWithCommas(keranjang.totalHarga)}
          </Text>
        </Text>
        <Text style={styles.textBold}>
          Keterangan :<Text style={styles.textReg}>{keranjang.keterangan}</Text>
        </Text>
      </View>
      <View style={styles.action}>
        <IconDelete />
      </View>
    </View>
  );
};

export default CardKeranjang;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 15,
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 5,
  },
  gambar: {
    width: responsiveWidth(88),
    height: responsiveHeight(88),
    resizeMode: 'contain',
  },
  action: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: 10,
  },
  title: {
    fontSize: 14,
    fontFamily: fonts.primary.bold,
    color: 'black',
  },
  textBold: {
    fontFamily: fonts.primary.bold,
    color: 'black',
    fontSize: 12,
  },
  textReg: {
    fontFamily: fonts.primary.regular,
    fontSize: 12,
  },
});
