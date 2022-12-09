import {Text, StyleSheet, View, ScrollView} from 'react-native';
import React, {Component} from 'react';
import {
  BannerSlider,
  HeaderComponent,
  Jarak,
  ListJersey,
  ListLiga,
  Tombol,
} from '../../components';
import {colors, fonts} from '../../utils';
import {dummyJersey, dummyLiga} from '../../data';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ligas: dummyLiga,
      jerseys: dummyJersey,
    };
  }
  render() {
    const {ligas, jerseys} = this.state;
    const {navigation} = this.props;
    return (
      <View style={styles.page}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <HeaderComponent navigation={navigation} />
          <BannerSlider />
          <View style={styles.pilihLiga}>
            <Text style={styles.label}>Pilih Liga</Text>
            <ListLiga ligas={ligas} />
          </View>

          <View style={styles.pilihLiga}>
            <Text style={styles.label}>List Jersey</Text>
            <ListJersey jerseys={jerseys} navigation={navigation} />
            <Tombol title="Lihat Semua" type="text" padding={7} />
          </View>
          <Jarak height={100} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: colors.white},
  pilihLiga: {
    marginHorizontal: 30,
    marginTop: 10,
  },
  label: {
    fontSize: 18,
    fontFamily: fonts.primary.regular,
  },
});
