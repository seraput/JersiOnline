export const GET_USER = 'GET_USER';

export const getUser = () => {
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
