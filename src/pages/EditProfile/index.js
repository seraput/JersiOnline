import {Text, StyleSheet, View, ScrollView, Image, Alert} from 'react-native';
import React, {Component} from 'react';
import {dummyProfile} from '../../data';
import {
  colors,
  fonts,
  responsiveWidth,
  responsiveHeight,
  getData,
} from '../../utils';
import {Inputan, Pilihan, Tombol} from '../../components';
import {connect} from 'react-redux';
import {
  getProvinsiList,
  getKotaList,
} from '../../redux/actions/RajaOngkirAction';
import {launchImageLibrary} from 'react-native-image-picker';

class EditProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nama: '',
      email: '',
      nohp: '',
      alamat: '',
      provinsi: false,
      kota: false,
      avatar: false,
      avatarForDB: '',
      avatarLama: '',
      updateAvatar: false,
    };
  }

  componentDidMount() {
    this.getUserData();
    this.props.dispatch(getProvinsiList());
  }

  ubahProvinsi = provinsi => {
    this.setState({
      provinsi: provinsi,
    });
    this.props.dispatch(getKotaList(provinsi));
  };

  getUserData = () => {
    getData('user').then(res => {
      const data = res;

      this.setState({
        uid: data.uid,
        nama: data.nama,
        email: data.email,
        nohp: data.nohp,
        alamat: data.alamat,
        kota: data.kota,
        provinsi: data.provinsi,
        avatar: data.avatar,
        avatarLama: data.avatar,
      });

      this.props.dispatch(getKotaList(data.provinsi));
    });
  };

  getImage = () => {
    launchImageLibrary(
      {quality: 1, maxWidth: 500, maxHeight: 500},
      response => {
        if (response.didCancel || response.errorCode || response.errorMessage) {
          Alert.alert('Error', 'Maaf sepertinya anda belum memilih foto!');
        } else {
          const source = response.uri;
          const fileString = `data:${response.type};base64,${response.data}`;

          this.setState({
            avatar: source,
            avatarForDB: fileString,
          });
        }
      },
    );
  };

  render() {
    const {profile, nama, email, nohp, alamat, provinsi, kota} = this.state;
    const {getProvinsiResult, getKotaResult} = this.props;
    return (
      <View style={styles.pages}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Inputan
            label="Nama"
            value={nama}
            onChangeText={nama => this.setState({nama})}
          />
          <Inputan
            label="Email"
            value={email}
            disabled
            onChangeText={email => this.setState({email})}
          />
          <Inputan
            label="No. Handphone"
            value={nohp}
            onChangeText={nohp => this.setState({nohp})}
            keyboardType="number-pad"
          />
          <Inputan
            label="Alamat"
            textarea
            fontSize={14}
            value={alamat}
            onChangeText={alamat => this.setState({alamat})}
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

          <View style={styles.editFoto}>
            <Text style={styles.label}>Foto Profile :</Text>

            <View style={styles.wrapperUpload}>
              <Image
                source={avatar ? avatar : defaultImage}
                style={styles.foto}
              />

              <View style={styles.btnChange}>
                <Tombol title="Change Photo" type="text" padding={7} />
              </View>
            </View>
          </View>

          <View style={styles.btnSubmit}>
            <Tombol
              title="Submit"
              type="textIcon"
              icon="checkout"
              padding={5}
              fontSize={18}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  getProvinsiResult: state.RajaOngkirReducer.getProvinsiResult,
  getKotaResult: state.RajaOngkirReducer.getKotaResult,
});

export default connect(mapStateToProps, null)(EditProfile);

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 30,
    paddingTop: 10,
    marginBottom: 10,
  },
  editFoto: {
    marginTop: 20,
  },
  label: {
    fontSize: 14,
    fontFamily: fonts.primary.regular,
    color: 'black',
  },
  foto: {
    width: responsiveWidth(130),
    height: responsiveWidth(130),
    borderRadius: 40,
  },
  wrapperUpload: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  btnChange: {
    marginLeft: 20,
    flex: 1,
  },
});
