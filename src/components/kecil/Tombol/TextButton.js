import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';

const TextButton = ({padding, title, onPress, fontSize}) => {
  return (
    <TouchableOpacity style={styles.container(padding)} onPress={onPress}>
      <Text style={styles.text(fontSize)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TextButton;

const styles = StyleSheet.create({
  container: padding => ({
    backgroundColor: colors.primary,
    padding: padding,
    borderRadius: 5,
  }),
  text: fontSize => ({
    color: colors.white,
    textAlign: 'center',
    fontSize: fontSize ? fontSize : 12,
    fontFamily: fonts.primary.bold,
  }),
});
