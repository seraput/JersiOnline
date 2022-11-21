import {StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';
import {
  colors,
  fonts,
  numberWithCommas,
  responsiveHeight,
  responsiveWidth,
} from '../../utils';
import {
  CardLiga,
  Inputan,
  JerseySlider,
  Pilihan,
  Tombol,
} from '../../components';

export default class JerseyDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jersey: this.props.route.params.jersey,
      images: this.props.route.params.jersey.gambar,
    };
  }

  render() {
    const {navigation} = this.props;
    const {jersey, images} = this.state;
    return (
      <View style={styles.page}>
        <JerseySlider images={images} />
        <View style={styles.button}>
          <Tombol
            icon="arrow-left"
            padding={7}
            onPress={() => navigation.goBack()}
          />
        </View>
        <View style={styles.container}>
          <View style={styles.divisi}>
            <CardLiga liga={jersey.liga} />
          </View>
          <View style={styles.detail}>
            <Text style={styles.nama}>{jersey.nama}</Text>
            <Text style={styles.harga}>
              Harga : Rp. {numberWithCommas(jersey.harga)}
            </Text>

            <View style={styles.garis} />

            <View style={styles.desc}>
              <Text style={styles.jenis}>Jenis : {jersey.jenis}</Text>
              <Text style={styles.berat}>Berat : {jersey.berat}</Text>
            </View>

            <View style={styles.form}>
              <Inputan
                label="Jumlah"
                width={responsiveWidth(160)}
                height={responsiveHeight(33)}
                fontSize={10}
              />
              <Pilihan
                label="Pilih"
                width={responsiveWidth(160)}
                height={responsiveHeight(33)}
                fontSize={10}
              />
            </View>
            <Inputan label="Keterangan" textarea fontSize={10} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  container: {
    backgroundColor: colors.white,
    position: 'absolute',
    bottom: 0,
    height: responsiveHeight(500),
    width: '100%',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  button: {
    position: 'absolute',
    marginLeft: 30,
    marginTop: 30,
  },
  detail: {
    marginHorizontal: 30,
    marginTop: 30,
  },
  nama: {
    fontFamily: fonts.primary.bold,
    color: 'black',
    fontSize: 18,
    textTransform: 'capitalize',
  },
  harga: {
    fontFamily: fonts.primary.regular,
    color: 'black',
    fontSize: 16,
  },
  desc: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 25,
    marginTop: 10,
  },
  divisi: {
    alignItems: 'flex-end',
    marginRight: 30,
    marginTop: -50,
  },
  garis: {
    borderWidth: 0.2,
    marginTop: 10,
  },
  jenis: {
    fontFamily: fonts.primary.regular,
    fontSize: 12,
    color: 'black',
  },
  berat: {
    fontFamily: fonts.primary.regular,
    fontSize: 12,
    color: 'black',
  },
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
