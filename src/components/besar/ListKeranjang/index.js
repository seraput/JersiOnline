import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CardKeranjang} from '../../kecil';

const ListKeranjang = ({keranjangx}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
      <View style={styles.keranjang}>
        {keranjangx.map(keranjang => {
          return <CardKeranjang keranjang={keranjang} key={keranjang.id} />;
        })}
      </View>
    </ScrollView>
  );
};

export default ListKeranjang;

const styles = StyleSheet.create({
  keranjang: {
    marginVertical: 10,
  },
});
