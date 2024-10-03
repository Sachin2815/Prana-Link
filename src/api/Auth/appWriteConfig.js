import { Client, Account } from 'appwrite';

const client = new Client();

const account = new Account(client);

client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('64e3e3bc26d9a053d16a');
  
export default account;
