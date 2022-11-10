import { StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {responsiveWidth, responsiveHeight, colors} from '../../../utils'

const CardLiga = ({liga}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={liga.gambar} style={styles.logo} />
    </TouchableOpacity>
  )
}

export default CardLiga

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        padding: 10,
        borderRadius: 15,
        marginTop: 10
    },
    logo: {
        width: responsiveWidth(60),
        height: responsiveHeight(70)
    }
})