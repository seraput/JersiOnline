import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import {Inputan, Tombol} from '../../components';
import {colors, responsiveHeight, responsiveWidth} from '../../utils';

export default class ChangePassword extends Component {
  render() {
    return (
      <View style={styles.pages}>
        <View style={styles.body}>
          <Inputan
            label="Password Lama"
            fontSize={14}
            height={40}
            secureTextEntry
          />
          <Inputan
            label="Password Baru"
            fontSize={14}
            height={40}
            secureTextEntry
          />
          <Inputan
            label="Konfirmasi Password Baru"
            fontSize={14}
            height={40}
            secureTextEntry
          />
        </View>
        <View style={styles.footer}>
          <Tombol
            title="Submit"
            type="textIcon"
            fontSize={18}
            padding={responsiveHeight(10)}
            icon="checkout"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pages: {
    paddingHorizontal: responsiveWidth(25),
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'space-between',
  },
  footer: {
    paddingBottom: 30,
  },
});
