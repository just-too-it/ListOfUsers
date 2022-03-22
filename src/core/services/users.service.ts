import { IUserItem } from '../../components/UserItem/UserItem.types';
import axios from 'axios';

export const getUsers = async (): Promise<IUserItem[] | undefined> => {
  const url = 'https://jsonplaceholder.typicode.com/users';

  try {
    const response = await axios.get(url);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return response.data;
  } catch (error) {
    alert(error);
  }
};


export const getUser = async (id): Promise<IUserItem> => {
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;

  try {
    const response = await axios.get(url);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return response.data;
  } catch (error) {
    alert(error);
  }
};
