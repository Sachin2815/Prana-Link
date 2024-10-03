import { ID } from 'appwrite';
import account from './appWriteConfig';

export const createAccount = async (userDetails) => {
  const { email, password, name } = userDetails;
  try {
    const promise = await account.create(ID.unique(), email, password, name);
    console.log(promise);
    return promise;
  } catch (error) {
    console.log(error);
  }
};

export const login = async (userDetails) => {
  const { email, password } = userDetails;
  try {
    const promise = await account.createEmailSession(email, password);
    console.log(promise);
  } catch (error) {
    console.log(error);
  }
};

export const oauthGoogle = async () => {
  try {
    const promise = await account.createOAuth2Session(
      'google',
      'http://localhost:5173/done',
      'http://localhost:5173/notdone'
    );
    return promise;
  } catch (error) {
    console.log(error);
  }
};

export const logout = async () => {
  try {
    const promise = await account.deleteSession('current');
    console.log(promise);
  } catch (error) {
    console.log(error);
  }
};
