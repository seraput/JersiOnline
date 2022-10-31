import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  IconHome,
  IconHomeActive,
  IconCatalog,
  IconCatalogActive,
  IconProfile,
  IconProfileActive,
} from '../../../assets';
import {colors} from '../../../utils';

const TabItem = ({isFocused, onLongPress, onPress, label}) => {
  const Icon = () => {
    if (label === 'Home') {
      return isFocused ? <IconHomeActive /> : <IconHome />;
    } else if (label === 'Catalog') {
      return isFocused ? <IconCatalogActive /> : <IconCatalog />;
    } else if (label === 'Profile') {
      return isFocused ? <IconProfileActive /> : <IconProfile />;
    }

    return <IconHome />;
  };

  return (
    <TouchableOpacity
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
  }),
});
