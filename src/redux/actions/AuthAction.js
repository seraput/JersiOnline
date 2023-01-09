import FIREBASE from '../../config/Firebase';
import {storeData} from '../../utils';

export const REGISTER_USER = 'REGISTER_USER';
export const LOGIN_USER = 'LOGIN_USER';

export const registerUser = (data, password) => {
  return dispatch => {
    //Loading
    dispatch({
      type: REGISTER_USER,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    FIREBASE.auth()
      .createUserWithEmailAndPassword(data.email, password)
      .then(success => {
        //get UID & create new data
        const newData = {
          ...data,
          uid: success.user.uid,
        };

        //SIMPAN KE REALTIME DATABASE
        FIREBASE.database()
          .ref('users/' + success.user.uid)
          .set(newData);

        //SUKSES
        dispatch({
          type: REGISTER_USER,
          payload: {
            loading: false,
            data: newData,
            errorMessage: false,
          },
        });

        //SIMPAN KELOKAL STORAGE
        storeData('user', newData);
      })
      .catch(error => {
        //Error
        dispatch({
          type: REGISTER_USER,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
        alert(error.message);
      });
  };
};

export const loginUser = (email, password) => {
  return dispatch => {
    //Loading
    dispatch({
      type: LOGIN_USER,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    FIREBASE.auth()
      .signInWithEmailAndPassword(email, password)
      .then(success => {
        // Signed in
        FIREBASE.database()
          .ref('/users/' + success.user.uid)
          .once('value')
          .then(resDB => {
            if (resDB.val()) {
              dispatch({
                type: LOGIN_USER,
                payload: {
                  loading: false,
                  data: resDB.val(),
                  errorMessage: false,
                },
              });

              //SIMPAN KELOKAL STORAGE
              storeData('user', resDB.val());
            } else {
              //Error
              dispatch({
                type: LOGIN_USER,
                payload: {
                  loading: false,
                  data: false,
                  errorMessage: 'Data tidak ditemukan.',
                },
              });
              alert('Data tidak ditemukan.');
            }
            //SUKSES
          });
        // ...
      })
      .catch(error => {
        //Error
        dispatch({
          type: LOGIN_USER,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
        alert(error.message);
      });
  };
};
