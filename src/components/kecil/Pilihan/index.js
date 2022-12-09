import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {colors, fonts} from '../../../utils';
import {Picker} from '@react-native-picker/picker';

const Pilihan = ({label, datas, width, height, fontSize, color}) => {
  const [selectedValue, setSelectedValue] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.label(fontSize)}>{label} :</Text>
      <View style={styles.wrapperPicker}>
        <Picker
          selectedValue={selectedValue}
          style={styles.selectPicker(width, height, fontSize)}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
          <Picker.Item label="--Pilih--" value="" />
          {datas.map((item, index) => {
            return <Picker.Item label={item} value={item} key={index} />;
          })}
        </Picker>
      </View>
    </View>
  );
};

export default Pilihan;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  label: (fontSize, color) => ({
    fontSize: fontSize ? fontSize : 10,
    fontFamily: fonts.primary.regular,
    color: color ? color : 'black',
  }),
  selectPicker: (width, height, fontSize) => ({
    fontSize: fontSize ? fontSize : 10,
    fontFamily: fonts.primary.regular,
    width: width,
    height: height,
  }),
  wrapperPicker: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.border,
  },
});
