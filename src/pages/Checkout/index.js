import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import {
  colors,
  fonts,
  responsiveWidth,
  responsiveHeight,
  numberWithCommas,
} from '../../utils';
import {CardAlamat, Jarak, Pilihan, Tombol} from '../../components';
import {dummyPesanans, dummyProfile, dummyEkspedisi} from '../../data';

export default class Checkout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: dummyProfile,
      pesanan: dummyPesanans[0],
      kurir: [],
    };
  }

  render() {
    const {profile, pesanan, kurir} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.textBold1}>Periksa kembali alamat Anda ! </Text>
          <CardAlamat profile={profile} />
          <View style={styles.totalHarga}>
            <Text style={styles.textBold2}>Total Harga :</Text>
            <Text style={styles.textBold2}>
              Rp. {numberWithCommas(pesanan.totalHarga)}
            </Text>
          </View>
          <View style={styles.ekspedisi}>
            <Pilihan datas={kurir} label="Pilih Kurir " fontSize={14} />
          </View>

          <Jarak height={responsiveHeight(30)} />
          <Text style={styles.textBold3}>Biaya Ongkir :</Text>
          <View style={styles.ongkir}>
            <Text style={styles.textRegular}>Berat : {pesanan.berat} kg</Text>
            <Text style={styles.textBold1}>Rp. {numberWithCommas(15000)}</Text>
          </View>
          <View style={styles.ongkir}>
            <Text style={styles.textRegular}>Estimasi Pengiriman</Text>
            <Text style={styles.textBold1}>2-3 Hari</Text>
          </View>
        </View>
        <View style={styles.footer}>
          <View style={styles.harga}>
            <Text style={styles.textBold2}>Total Harga :</Text>
            <Text style={styles.textBold2}>
              Rp. {numberWithCommas(pesanan.totalHarga)}
            </Text>
          </View>

          <Tombol
            title="Bayar"
            type="textIcon"
            fontSize={18}
            padding={responsiveHeight(15)}
            icon="payment"
            onPress={() => this.props.navigation.navigate('Checkout')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    paddingTop: 30,
    justifyContent: 'space-between',
  },
  content: {
    paddingHorizontal: 30,
  },
  textBold1: {
    fontFamily: fonts.primary.bold,
    color: 'black',
    fontSize: 14,
  },
  totalHarga: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  textBold2: {
    fontFamily: fonts.primary.bold,
    color: 'black',
    fontSize: 16,
  },
  ekspedisi: {
    paddingHorizontal: 10,
    marginTop: 20,
  },
  textRegular: {
    fontFamily: fonts.primary.regular,
    color: 'black',
    fontSize: 14,
  },
  textBold3: {
    fontFamily: fonts.primary.bold,
    color: 'black',
    fontSize: 14,
    marginHorizontal: 10,
  },
  ongkir: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  footer: {
    paddingHorizontal: responsiveWidth(30),
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      heigh: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 15,
    paddingBottom: 30,
    backgroundColor: colors.white,
  },
  harga: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
});
