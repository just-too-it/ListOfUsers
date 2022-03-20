import { IUserItem } from "../../components/UserItem/UserItem.types";

export const getUsers = async (): Promise<IUserItem[] | undefined> => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const response = await fetch(url);
    try {
      const parseResponse = await response.json();
      return parseResponse as IUserItem[];
    } catch (error) {
      alert(error);
    }
  };
