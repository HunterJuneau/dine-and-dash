import firebase from 'firebase';
import axios from 'axios';
import { createUser } from './data/UserData';

axios.interceptors.request.use((request) => {
  const token = window.sessionStorage.getItem('token');

  if (token != null) {
    request.headers.Authorization = `Bearer ${token}`;
  }

  return request;
}, (err) => Promise.reject(err));

const signInUser = () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider).then((fbUser) => {
    if (fbUser.additionalUserInfo?.isNewUser) {
      const userInfo = {
        firstName: fbUser.fbUser?.displayName.split(' ')[0],
        lastName: fbUser.fbUser?.displayName.split(' ')[1],
        imageUrl: fbUser.fbUser?.photoURL,
        uid: fbUser.fbUser?.uid,
        contactEmail: fbUser.fbUser?.email,
        status: true,
        customerCreated: '',
      };
      createUser(userInfo);
      window.location.href = '/';
    }
  });
};

const signOutUser = () => new Promise((resolve, reject) => {
  firebase.auth().signOut().then(resolve).catch(reject);
});

export { signInUser, signOutUser };
