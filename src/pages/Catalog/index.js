import {Text, StyleSheet, View, ScrollView} from 'react-native';
import React, {Component} from 'react';
import {HeaderComponent, Jarak, ListJersey, ListLiga} from '../../components';
import {colors, fonts} from '../../utils';
import {dummyJersey, dummyLiga} from '../../data';

export default class Catalog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ligas: dummyLiga,
      jerseys: dummyJersey,
    };
  }
  render() {
    const {ligas, jerseys} = this.state;
    return (
      <View style={styles.page}>
        <HeaderComponent />
        <View style={styles.pilihLiga}>
          <ListLiga ligas={ligas} />
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.container}>
          <View style={styles.pilihJersey}>
            <Text style={styles.label}>List Jersey</Text>
            <ListJersey jerseys={jerseys} />
          </View>
          <Jarak height={100} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: colors.white},
  container: {},
  pilihLiga: {
    marginHorizontal: 30,
    marginTop: -30,
    marginBottom: 10,
  },
  pilihJersey: {
    marginHorizontal: 30,
    marginTop: 10,
  },
  label: {
    fontSize: 14,
    fontFamily: fonts.primary.regular,
  },
});
