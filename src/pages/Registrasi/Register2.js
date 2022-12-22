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
import {Reg2} from '../../assets';
import {Inputan, Jarak, Pilihan, Tombol} from '../../components';
import {connect} from 'react-redux';
import {
  getProvinsiList,
  getKotaList,
} from '../../redux/actions/RajaOngkirAction';
import {registerUser} from '../../redux/actions/AuthAction';

class Register2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      kota: false,
      provinsi: false,
      alamat: '',
    };
  }

  componentDidMount() {
    this.props.dispatch(getProvinsiList());
  }

  componentDidUpdate(prevProps) {
    const {registerResult} = this.props;

    if (registerResult && prevProps.registerResult !== registerResult) {
      this.props.navigation.replace('MainApp');
    }
  }

  ubahProvinsi = provinsi => {
    this.setState({
      provinsi: provinsi,
    });
    this.props.dispatch(getKotaList(provinsi));
  };

  onContinue = () => {
    const {kota, provinsi, alamat} = this.state;

    if (kota && provinsi && alamat) {
      const data = {
        nama: this.props.route.params.nama,
        email: this.props.route.params.email,
        nohp: this.props.route.params.nohp,
        alamat: alamat,
        provinsi: provinsi,
        kota: kota,
        status: 'user',
      };

      //Kirim ke Auth Action
      console.log('Data', data);
      this.props.dispatch(registerUser(data, this.props.route.params.password));
    } else {
      Alert.alert('Alert', 'Data belum lengkap!');
    }
  };

  render() {
    const {kota, provinsi, alamat} = this.state;
    const {getProvinsiResult, getKotaResult, registerLoading} = this.props;
    // console.log('Data register1 :', this.props.route.params);

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
              <Inputan
                label="Alamat"
                textarea
                fontSize={14}
                height={40}
                onChangeText={alamat => this.setState({alamat})}
                value={alamat}
              />
              <Pilihan
                label="Provinsi"
                datas={getProvinsiResult ? getProvinsiResult : []}
                selectedValue={provinsi}
                onValueChange={provinsi => this.ubahProvinsi(provinsi)}
              />
              <Pilihan
                label="Kota/Kab"
                datas={getKotaResult ? getKotaResult : []}
                selectedValue={kota}
                onValueChange={kota => this.setState({kota: kota})}
              />
              <View style={styles.btn}>
                <Tombol
                  title="Submit"
                  type="text"
                  padding={10}
                  fontSize={16}
                  onPress={() => this.onContinue()}
                  loading={registerLoading}
                />
              </View>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = state => ({
  getProvinsiResult: state.RajaOngkirReducer.getProvinsiResult,
  getKotaResult: state.RajaOngkirReducer.getKotaResult,

  registerLoading: state.AuthReducer.registerLoading,
  registerResult: state.AuthReducer.registerResult,
  registerError: state.AuthReducer.registerError,
});

export default connect(mapStateToProps, null)(Register2);

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
