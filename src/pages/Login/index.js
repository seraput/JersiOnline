import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import {Ilustrasi, Logo} from '../../assets';
import {colors, fonts, responsiveHeight} from '../../utils';
import {Inputan, Jarak, Tombol} from '../../components';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.pages}>
        <View style={styles.logo}>
          <Logo />
        </View>
        <View style={styles.cardLogin}>
          <Inputan label="Email" fontSize={14} height={40} />
          <Inputan label="Password" secureTextEntry fontSize={14} height={40} />
          <Jarak height={responsiveHeight(50)} />
          <Tombol
            title="Login"
            type="text"
            padding={10}
            fontSize={16}
            onPress={() => this.props.navigation.navigate('MainApp')}
          />
        </View>

        <View style={styles.daftar}>
          <Text style={styles.text1}>Belum memiliki Akun ?</Text>
          <Text
            style={styles.text2}
            onPress={() => this.props.navigation.navigate('registrasi')}>
            Daftar Sekarang !
          </Text>
        </View>

        <View style={styles.ilustrasi}>
          <Ilustrasi />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 30,
  },
  ilustrasi: {
    position: 'absolute',
    bottom: 0,
    right: -100,
  },
  logo: {
    alignItems: 'center',
    marginTop: responsiveHeight(100),
  },
  cardLogin: {
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
    marginTop: 30,
  },
  daftar: {
    justifyContent: 'center',
    marginTop: 20,
  },
  text1: {
    fontFamily: fonts.primary.regular,
    fontSize: 14,
    color: colors.primary,
    textAlign: 'center',
  },
  text2: {
    fontFamily: fonts.primary.regular,
    fontSize: 14,
    color: colors.primary,
    marginTop: 5,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});
