import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  IconHome,
  IconHomeA,
  IconCatalog,
  IconCatalogA,
  IconProfile,
  IconProfileA,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const TabItem = ({isFocused, onLongPress, onPress, label}) => {
  const Icon = () => {
    if (label === 'Catalog') {
      return isFocused ? <IconCatalogA /> : <IconCatalog />;
    }
    if (label === 'Home') {
      return isFocused ? <IconHomeA /> : <IconHome />;
    }
    if (label === 'Profile') {
      return isFocused ? <IconProfileA /> : <IconProfile />;
    }
    return <IconHome />;
  };

  return (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityState={isFocused ? {selected: true} : {}}
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
      <Text style={styles.text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: isFocused => ({
    color: isFocused ? colors.white : colors.secondary,
    fontSize: 11,
    marginTop: 4,
    fontFamily: fonts.primary.bold,
  }),
});
