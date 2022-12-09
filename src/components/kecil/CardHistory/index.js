import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {
  fonts,
  colors,
  responsiveWidth,
  responsiveHeight,
  numberWithCommas,
} from '../../../utils';
import Jarak from '../Jarak';

const CardHistory = ({pesanan}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textBold1}>{pesanan.tanggalPemesanan}</Text>
      {pesanan.pesanans.map((history, index) => {
        return (
          <View key={index} style={styles.wrapper}>
            <Text style={styles.textBold2}>{index + 1}.</Text>
            <Image source={history.product.gambar[0]} style={styles.gambar} />
            <View>
              <Text style={styles.textBold2}>{history.product.nama}</Text>
              <Text style={styles.text}>
                Harga : Rp. {numberWithCommas(history.product.harga)}
              </Text>
              <Jarak height={10} />
              <Text style={styles.text}>Qty : {history.jumlahPesan}</Text>
              <Text style={styles.textBold3}>
                Total Harga : Rp.{numberWithCommas(history.totalHarga)}
              </Text>
            </View>
          </View>
        );
      })}

      <View style={styles.footer}>
        <View style={styles.label}>
          <Text style={styles.textdetail1}>Status :</Text>
          <Text style={styles.textdetail1}>Ongkir (2-3 Hari) :</Text>
          <Text style={styles.textdetail1}>Total Harga :</Text>
        </View>
        <View style={styles.value}>
          <Text style={styles.textdetail1}>Lunas</Text>
          <Text style={styles.textdetail1}>Rp. {numberWithCommas(15000)}</Text>
          <Text style={styles.textdetail1}>
            Rp. {numberWithCommas(390000 + 15000)}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CardHistory;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  textBold1: {
    fontFamily: fonts.primary.bold,
    fontSize: 16,
    color: 'black',
    marginBottom: 10,
  },
  textBold2: {
    fontFamily: fonts.primary.bold,
    fontSize: 12,
    color: 'black',
  },
  textBold3: {
    fontFamily: fonts.primary.bold,
    fontSize: 12,
    color: 'black',
  },
  text: {
    fontFamily: fonts.primary.regular,
    fontSize: 12,
    color: 'black',
  },
  wrapper: {
    flexDirection: 'row',
    marginTop: 10,
  },
  gambar: {
    width: responsiveWidth(90),
    height: responsiveHeight(90),
    resizeMode: 'contain',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  textdetail1: {
    fontFamily: fonts.primary.bold,
    fontSize: 14,
    color: colors.primary,
    textAlign: 'right',
  },
});
