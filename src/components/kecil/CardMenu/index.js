import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {IconArrowRight_} from '../../../assets';
import {clearStorage, colors, fonts, responsiveHeight} from '../../../utils';
import FIREBASE from '../../../config/Firebase';

const CardMenu = ({menu, navigation}) => {
  const onSubmit = () => {
    if (menu.halaman === 'login') {
      // console.log('berhasil check');
      FIREBASE.auth()
        .signOut()
        .then(() => {
          // Sign-out successful.
          clearStorage();
          navigation.replace('login');
          // console.log('berhasil jalan');
        })
        .catch(error => {
          // An error happened.
          alert(error);
          // console.log('gagal jalan');
        });
    } else {
      navigation.navigate(menu.halaman);
      // console.log('gagal check');
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={() => onSubmit()}>
      <View style={styles.menu}>
        {menu.gambar}
        <Text style={styles.text}>{menu.nama}</Text>
      </View>
      <IconArrowRight_ />
    </TouchableOpacity>
  );
};

export default CardMenu;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: responsiveHeight(15),
    marginHorizontal: 30,
    borderRadius: 10,
    alignItems: 'center',
  },
  text: {
    fontFamily: fonts.primary.bold,
    fontSize: 16,
    marginLeft: 20,
    color: 'black',
  },
  menu: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
