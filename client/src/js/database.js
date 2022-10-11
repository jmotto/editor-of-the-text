import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log('PUT to the database');
  const jateDb = await openDB('jate', 1);
  const tx = jateDb.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  // create a new request to update the store with a put operation to update the item with keyPath of 1
  const request = store.put({ id: 1, value: content });
   // await the request to complete
  const result = await request;
  console.log('data saved to the database', result);
};
// export const putDb = async (content) => console.error('putDb not implemented');

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('GET all from the database');
  // open database
  const jateDb = await openDB('jate', 1);
  // open a new transaction to a store to interact with our db
  const tx = jateDb.transaction('jate', 'readonly');
  // select the store from the transaction 
  const store = tx.objectStore('jate');
  const request = store.get(1);
  const result = await request;
  console.log('result.value', result);
  return result?.value;
};

// export const getDb = async () => console.error('getDb not implemented');

initdb();
