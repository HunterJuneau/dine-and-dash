import firebase from 'firebase';
// import axios from 'axios';
// axios.interceptors.request.use((request) => {
//   const token = window.sessionStorage.getItem('token');

//   if (token != null) {
//     request.headers.Authorization = `Bearer ${token}`;
//     return request;
//   } if (error) {
//     Promise.reject(error);
//   }
// });
// axios.interceptors.request.use((request) => {
//   const token = sessionStorage.getItem('token');

//   if (token != null) {
//     request.headers.Authorization = `Bearer ${token}`;
//   }

//   return request;
// }, (err) => {
//   return Promise.reject(err);
// });

const signInUser = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const signOutUser = () => new Promise((resolve, reject) => {
  firebase.auth().signOut().then(resolve).catch(reject);
});

export { signInUser, signOutUser };
