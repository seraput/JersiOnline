import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import {colors} from '../../utils';

export default class Catalog extends Component {
  render() {
    return <View style={styles.page}></View>;
  }
}

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: colors.white},
});
