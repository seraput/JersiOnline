import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {IconCart} from '../../../assets';
import {colors} from '../../../utils';

const Tombol = ({icon, totalKeranjang, padding}) => {
  const Icon = () => {
    if (icon === 'keranjang') {
      return <IconCart />;
    }
  };

  return (
    <TouchableOpacity style={styles.container(padding)}>
      <Icon />
      {totalKeranjang && (
        <View style={styles.notif}>
          <Text style={styles.textNotif}>{totalKeranjang}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Tombol;

const styles = StyleSheet.create({
  container: padding => ({
    backgroundColor: colors.white,
    padding: padding,
    borderRadius: 5,
  }),
  notif: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'red',
    borderRadius: 3,
    padding: 3,
  },
  textNotif: {
    fontSize: 8,
    color: colors.white,
  },
});
