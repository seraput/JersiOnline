import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CardLiga} from '../../kecil'

const ListLiga = ({ligas}) => {
  return (
    <View style={styles.container}>
      {ligas.map((liga) => {
        return(

      <CardLiga liga={liga} key={liga.id}/>
        )
      })}
    </View>
  );
};

export default ListLiga;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
