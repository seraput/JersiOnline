import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';

const Inputan = ({textarea, width, height, fontSize, placeholder, label}) => {
  if (textarea) {
    return (
      <View style={styles.container}>
        <Text style={styles.label(fontSize)}>{label} :</Text>
        <TextInput
          style={styles.inputTextArea(fontSize)}
          multiline={true}
          numberOfLines={3}
        />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.label(fontSize)}>{label} :</Text>
      <TextInput style={styles.input(width, height, fontSize)} />
    </View>
  );
};

export default Inputan;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  label: fontSize => ({
    fontSize: fontSize ? fontSize : 14,
    fontFamily: fonts.primary.regular,
  }),
  input: (width, height, fontSize) => ({
    fontSize: fontSize ? fontSize : 14,
    fontFamily: fonts.primary.regular,
    width: width,
    height: height,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.border,
    color: 'black',
    paddingHorizontal: 10,
    paddingVertical: 5,
  }),
  inputTextArea: fontSize => ({
    fontSize: fontSize ? fontSize : 14,
    fontFamily: fonts.primary.regular,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.border,
    color: 'black',
    paddingHorizontal: 10,
    paddingVertical: 5,
  }),
});
