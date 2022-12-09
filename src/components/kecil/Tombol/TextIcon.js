import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  IconArrowLeft,
  IconArrowRightPutih,
  IconCart,
  IconCartPutih,
  IconPayment,
} from '../../../assets';
import {colors, fonts} from '../../../utils';
import Jarak from '../Jarak';

const TextIcon = ({icon, padding, onPress, title, fontSize}) => {
  const Icon = () => {
    if (icon === 'keranjang') {
      return <IconCart />;
    } else if (icon === 'arrow-left') {
      return <IconArrowLeft />;
    } else if (icon === 'keranjang-putih') {
      return <IconCartPutih />;
    } else if (icon === 'payment') {
      return <IconPayment />;
    } else if (icon === 'checkout') {
      return <IconArrowRightPutih />;
    }
    return <IconCart />;
  };

  return (
    <TouchableOpacity style={styles.container(padding)} onPress={onPress}>
      <Icon />
      <Jarak width={5} />
      <Text style={styles.title(fontSize)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TextIcon;

const styles = StyleSheet.create({
  container: padding => ({
    backgroundColor: colors.primary,
    padding: padding,
    borderRadius: 5,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  }),
  title: fontSize => ({
    color: colors.white,
    fontSize: fontSize,
    fontFamily: fonts.primary.bold,
  }),
});
