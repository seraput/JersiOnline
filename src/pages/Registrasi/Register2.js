import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import React, {Component} from 'react';
import {colors, fonts, responsiveHeight, responsiveWidth} from '../../utils';
import {Reg2} from '../../assets';
import {Inputan, Jarak, Pilihan, Tombol} from '../../components';
export default class Register2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataProvinsi: [],
      dataKota: [],
    };
  }

  render() {
    const {dataKota, dataProvinsi} = this.state;
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.page}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.btBack}>
              <Tombol
                icon="arrow-left"
                onPress={() => this.props.navigation.goBack()}
              />
            </View>

            <View style={styles.images}>
              <Reg2 />
              <Text style={styles.text}>Register</Text>
              <View style={styles.wrapper}>
                <View style={styles.primary}></View>
                <Jarak width={10} />
                <View style={styles.second}></View>
              </View>
            </View>

            <View style={styles.card}>
              <Inputan label="Alamat" textarea fontSize={14} height={40} />
              <Pilihan label="Provinsi" datas={dataProvinsi} />
              <Pilihan label="Kota / Kab" datas={dataKota} />
              <View style={styles.btn}>
                <Tombol
                  title="Submit"
                  type="text"
                  padding={10}
                  fontSize={16}
                  onPress={() => this.props.navigation.navigate('login')}
                />
              </View>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: responsiveWidth(30),
    paddingVertical: responsiveHeight(20),
  },
  images: {
    alignItems: 'center',
    marginTop: responsiveHeight(30),
  },
  text: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 20,
    fontFamily: fonts.primary.bold,
    color: colors.primary,
    textDecorationLine: 'underline',
  },
  card: {
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
    borderRadius: 10,
    padding: 15,
    marginTop: 20,
    margin: 10,
  },
  btn: {
    marginTop: 20,
    marginHorizontal: 10,
  },
  wrapper: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'center',
  },
  second: {
    backgroundColor: colors.primary,
    width: responsiveWidth(10),
    height: responsiveHeight(10),
    borderRadius: 10,
  },
  primary: {
    backgroundColor: colors.border,
    width: responsiveWidth(10),
    height: responsiveHeight(10),
    borderRadius: 10,
  },
});
