import axios from 'axios';
import {
  API_HEADER_RAJAONGKIR,
  API_TIMEOUT,
  API_RAJAONGKIR,
} from '../../utils/constant/index';

export const GET_PROVINSI = 'GET_PROVINSI';
export const GET_KOTA = 'GET_KOTA';

export const getProvinsiList = () => {
  return dispatch => {
    //Loading
    dispatch({
      type: GET_PROVINSI,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    axios({
      method: 'get',
      url: API_RAJAONGKIR + 'province',
      timeout: API_TIMEOUT,
      headers: API_HEADER_RAJAONGKIR,
    })
      .then(response => {
        // console.log('response axios', response);
        if (response.status !== 200) {
          // console.log('response gagal', response);
          //ERROR
          dispatch({
            type: GET_PROVINSI,
            payload: {
              loading: false,
              data: false,
              errorMessage: response,
            },
          });
        } else {
          //BERHASIL
          // console.log('response berhasil', response.data.rajaongkir.results);
          dispatch({
            type: GET_PROVINSI,
            payload: {
              loading: false,
              data: response.data ? response.data.rajaongkir.results : [],
              errorMessage: false,
            },
          });
        }
      })
      .catch(error => {
        // console.log('response error', error);
        //ERROR
        dispatch({
          type: GET_PROVINSI,
          payload: {
            loading: true,
            data: false,
            errorMessage: false,
          },
        });
        alert(error);
      });
  };
};

export const getKotaList = provinsi_id => {
  return dispatch => {
    //Loading
    dispatch({
      type: GET_KOTA,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    axios({
      method: 'get',
      url: API_RAJAONGKIR + 'city?province=' + provinsi_id,
      timeout: API_TIMEOUT,
      headers: API_HEADER_RAJAONGKIR,
    })
      .then(response => {
        // console.log('response axios', response);
        if (response.status !== 200) {
          // console.log('response gagal', response);
          //ERROR
          dispatch({
            type: GET_KOTA,
            payload: {
              loading: false,
              data: false,
              errorMessage: response,
            },
          });
        } else {
          //BERHASIL
          // console.log('response berhasil', response.data.rajaongkir.results);
          dispatch({
            type: GET_KOTA,
            payload: {
              loading: false,
              data: response.data ? response.data.rajaongkir.results : [],
              errorMessage: false,
            },
          });
        }
      })
      .catch(error => {
        // console.log('response error', error);
        //ERROR
        dispatch({
          type: GET_KOTA,
          payload: {
            loading: true,
            data: false,
            errorMessage: false,
          },
        });
        alert(error);
      });
  };
};
