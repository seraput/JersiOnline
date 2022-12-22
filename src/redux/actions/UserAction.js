export const GET_USER = 'GET_USER';

export const getUser = () => {
  console.log('action in');
  return dispatch => {
    dispatch({
      type: GET_USER,
      payload: {
        nama: 'Septian',
        email: 'septian@gmail.com',
      },
    });
  };
};
