import {
  getFirestore,
  collection,
  query,
  getDocs,
} from 'firebase/firestore';
// } from 'firebase/firestore/lite'; // 軽量版の場合はこちら

import { firebaseApp } from '../plugins/firebase.client';

export const useFirestore = () => {
  const db = getFirestore(firebaseApp);

  const GetArticles = async () => {
    const q = query(
      collection(db, 'articles'),
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => {
      return {id: doc.id, ...doc.data()}
    });
  };
  return {
    GetArticles,
  };
};