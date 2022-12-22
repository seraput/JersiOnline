import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';
import Jarak from '../Jarak';

const Loading = ({padding, fontSize}) => {
  return (
    <TouchableOpacity style={styles.container(padding)}>
      <ActivityIndicator size="small" color="#FFFFFF" />
      <Jarak width={5} />
      <Text style={styles.title(fontSize)}>Loading ...</Text>
    </TouchableOpacity>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: padding => ({
    backgroundColor: colors.border,
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
