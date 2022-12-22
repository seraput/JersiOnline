import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {colors, fonts} from '../../../utils';
import {Picker} from '@react-native-picker/picker';
import {responsiveHeight} from '../../../utils';

const Pilihan = ({
  label,
  datas,
  width,
  height,
  fontSize,
  color,
  selectedValue,
  onValueChange,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label(fontSize)}>{label} :</Text>
      <View style={styles.wrapperPicker}>
        <Picker
          selectedValue={selectedValue}
          style={styles.selectPicker(width, height, fontSize)}
          onValueChange={onValueChange}>
          <Picker.Item label="--Pilih--" value="" />
          {datas.map((item, index) => {
            if (label == 'Provinsi') {
              return (
                <Picker.Item
                  label={item.province}
                  value={item.province_id}
                  key={item.province_id}
                />
              );
            } else if (label == 'Kota/Kab') {
              return (
                <Picker.Item
                  label={item.type + ' ' + item.city_name}
                  value={item.city_id}
                  key={item.city_id}
                />
              );
            } else {
              return <Picker.Item label={item} value={item} key={index} />;
            }
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
  label: color => ({
    fontSize: 12,
    fontFamily: fonts.primary.regular,
    color: color ? color : 'black',
    marginBottom: 3,
  }),
  selectPicker: (width, height, fontSize) => ({
    fontSize: fontSize ? fontSize : 10,
    fontFamily: fonts.primary.regular,
    width: width,
    height: height ? height : responsiveHeight(46),
    marginTop: -10,
    marginBottom: 10,
  }),
  wrapperPicker: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.border,
  },
});
