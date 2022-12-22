import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  Alert,
} from 'react-native';
import React, {Component} from 'react';
import {colors, fonts, responsiveHeight, responsiveWidth} from '../../utils';
import {Reg1} from '../../assets';
import {Inputan, Jarak, Tombol} from '../../components';

export default class Registrasi extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nama: '',
      email: '',
      nohp: '',
      password: '',
    };
  }

  onContinue = () => {
    const {nama, email, nohp, password} = this.state;

    if (nama && email && nohp && password) {
      this.props.navigation.navigate('register2', this.state);
    } else {
      Alert.alert('Alert', 'Data belum lengkap!');
    }
  };

  render() {
    const {nama, email, nohp, password} = this.state;
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
              <Reg1 />
              <Text style={styles.text}>Register</Text>
              <View style={styles.wrapper}>
                <View style={styles.primary}></View>
                <Jarak width={10} />
                <View style={styles.second}></View>
              </View>
            </View>

            <View style={styles.card}>
              <Inputan
                label="Nama"
                fontSize={14}
                height={40}
                value={nama}
                onChangeText={nama => this.setState({nama})}
              />
              <Inputan
                label="Email"
                fontSize={14}
                height={40}
                value={email}
                onChangeText={email => this.setState({email})}
              />
              <Inputan
                label="No. Handphone"
                fontSize={14}
                height={40}
                keyboardType="number-pad"
                value={nohp}
                onChangeText={nohp => this.setState({nohp})}
              />
              <Inputan
                label="Password"
                fontSize={14}
                height={40}
                secureTextEntry
                value={password}
                onChangeText={password => this.setState({password})}
              />
              <View style={styles.btn}>
                <Tombol
                  title="Next Step"
                  type="text"
                  padding={10}
                  fontSize={16}
                  onPress={() => this.onContinue()}
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
  },
  btBack: {
    marginTop: responsiveHeight(20),
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
  primary: {
    backgroundColor: colors.primary,
    width: responsiveWidth(10),
    height: responsiveHeight(10),
    borderRadius: 10,
  },
  second: {
    backgroundColor: colors.border,
    width: responsiveWidth(10),
    height: responsiveHeight(10),
    borderRadius: 10,
  },
});
