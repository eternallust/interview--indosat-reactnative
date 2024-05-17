/* eslint-disable react-hooks/rules-of-hooks */
import api from '../../services/contactServices';
import {setContactList} from './slice';

export const fetchData = async (dispatch: any) => {
  try {
    const response = await api.getData();

    dispatch(setContactList(response.data.data));
  } catch (error) {
    console.log(error);
  }
};
