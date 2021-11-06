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
    const user = fbUser.additionalUserInfo.profile;
    if (fbUser.additionalUserInfo?.isNewUser) {
      const userInfo = {
        firstName: user?.given_name,
        lastName: user?.family_name,
        imageUrl: user?.picture,
        uid: user?.id,
        contactEmail: user?.email,
        status: true
      };
      createUser(userInfo);
    }
  });
};

const signOutUser = () => new Promise((resolve, reject) => {
  firebase.auth().signOut().then(resolve).catch(reject);
});

export { signInUser, signOutUser };
