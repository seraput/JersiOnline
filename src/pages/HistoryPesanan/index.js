import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import {dummyPesanans} from '../../data';
import {ListHistory} from '../../components';
import {
  colors,
  fonts,
  numberWithCommas,
  responsiveHeight,
  responsiveWidth,
} from '../../utils';

export default class HistoryPemesanan extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pesanans: dummyPesanans,
    };
  }

  render() {
    const {pesanans} = this.state;
    return (
      <View style={styles.page}>
        <ListHistory pesanans={pesanans} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
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
