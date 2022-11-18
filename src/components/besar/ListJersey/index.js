import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CardJersey} from '../../kecil';

const ListJersey = ({jerseys}) => {
  return (
    <View style={styles.container}>
      {jerseys.map(jersey => {
        return <CardJersey key={jersey.id} jersey={jersey} />;
      })}
    </View>
  );
};

export default ListJersey;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
