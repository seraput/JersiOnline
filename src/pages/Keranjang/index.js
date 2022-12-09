import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import {dummyPesanans} from '../../data/dummyPesanan';
import {ListKeranjang} from '../../components';
import {
  colors,
  fonts,
  numberWithCommas,
  responsiveHeight,
  responsiveWidth,
} from '../../utils';
import {Tombol} from '../../components';

export default class Keranjang extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pesanan: dummyPesanans[0],
    };
  }

  render() {
    const {pesanan} = this.state;
    return (
      <View style={styles.page}>
        <ListKeranjang keranjangx={pesanan.pesanans} />
        <View style={styles.footer}>
          <View style={styles.harga}>
            <Text style={styles.textBold}>Total Harga :</Text>
            <Text style={styles.textBold}>
              Rp. {numberWithCommas(pesanan.totalHarga)}
            </Text>
          </View>

          <Tombol
            title="Checkout"
            type="textIcon"
            fontSize={18}
            padding={responsiveHeight(15)}
            icon="checkout"
            onPress={() => this.props.navigation.navigate('Checkout')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
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
  textBold: {
    fontFamily: fonts.primary.bold,
    color: 'black',
    fontSize: 16,
  },
});
