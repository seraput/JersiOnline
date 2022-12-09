import {Text, StyleSheet, View, ScrollView, Image} from 'react-native';
import React, {Component} from 'react';
import {dummyProfile} from '../../data';
import {colors, fonts, responsiveWidth, responsiveHeight} from '../../utils';
import {Inputan, Pilihan, Tombol} from '../../components';

export default class EditProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataProvinsi: [],
      dataKota: [],
      profile: dummyProfile,
    };
  }

  render() {
    const {dataKota, dataProvinsi, profile} = this.state;
    return (
      <View style={styles.pages}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Inputan label="Nama" value={profile.nama} />
          <Inputan label="Email" value={profile.email} />
          <Inputan label="No. Handphone" value={profile.nomerHp} />
          <Inputan
            label="Alamat"
            textarea
            fontSize={14}
            value={profile.alamat}
          />
          <Pilihan label="Provinsi" datas={dataProvinsi} fontSize={14} />
          <Pilihan label="Kota / Kabupaten" datas={dataKota} fontSize={14} />

          <View style={styles.editFoto}>
            <Text style={styles.label}>Foto Profile :</Text>

            <View style={styles.wrapperUpload}>
              <Image source={profile.avatar} style={styles.foto} />

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
