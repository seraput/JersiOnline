import {Text, StyleSheet, View, Image} from 'react-native';
import React, {Component} from 'react';
import {colors, fonts, responsiveHeight, responsiveWidth} from '../../utils';
import {dummyMenu, dummyProfile} from '../../data';
import {RFValue} from 'react-native-responsive-fontsize';
import {ListMenu} from '../../components';

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: dummyProfile,
      menus: dummyMenu,
    };
  }

  render() {
    const {profile, menus} = this.state;
    const {navigation} = this.props;
    return (
      <View style={styles.page}>
        <View style={styles.container}>
          <Image source={profile.avatar} style={styles.foto} />
          <View style={styles.textBio}>
            <Text style={styles.textNama}>{profile.nama}</Text>
            <Text style={styles.textDesc}>{profile.nomerHp}</Text>
            <Text style={styles.textDesc}>
              {profile.alamat} {profile.kota}
            </Text>
          </View>
          <ListMenu menus={menus} navigation={navigation} />
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
    height: responsiveHeight(650),
    width: '100%',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  foto: {
    width: responsiveWidth(150),
    height: responsiveWidth(150),
    borderRadius: 90,
    alignSelf: 'center',
    marginTop: -responsiveWidth(90),
  },
  textBio: {
    alignItems: 'center',
    marginTop: 10,
  },
  textNama: {
    fontFamily: fonts.primary.bold,
    color: 'black',
    fontSize: RFValue(18),
  },
  textDesc: {
    fontFamily: fonts.primary.regular,
    fontSize: RFValue(14),
  },
});
