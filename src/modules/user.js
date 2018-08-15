import { Map } from 'immutable';
import { handleActions, createAction } from 'redux-actions';
import { pender } from 'redux-pender';
import firebase from 'firebase';

function uploadUser(
  name,
  age,
  city,
  phone,
  kakaoId,
  kakaoBigImg,
  kakaoSmallImg
) {
  const db = firebase.firestore();
  const docRef = db.collection('users');
  return new Promise(resolve => {
    firebase.auth().onAuthStateChanged(function(user) {
      let userData = {};
      docRef
        .add({
          name,
          age,
          city,
          phone,
          kakaoId,
          kakaoBigImg,
          kakaoSmallImg,
          email: user.email,
          uid: user.uid
        })
        .then(function(docRef) {
          console.log('Document written with ID: ', docRef.id);
          userData = {
            name,
            age,
            city,
            phone,
            kakaoId,
            kakaoBigImg,
            kakaoSmallImg,
            email: user.email,
            uid: user.uid
          };
          resolve(userData);
        })
        .catch(function(error) {
          console.error('Error adding document: ', error);
        });
    });
  });
}

function downloadUser() {
  const db = firebase.firestore();
  const docRef = db.collection('users');

  return new Promise(resolve => {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        let userData = {};
        docRef
          .where('uid', '==', user.uid)
          .get()
          .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
              const data = doc.data();
              userData = {
                name: data.name,
                age: data.age,
                city: data.city,
                phone: data.phone,
                kakaoId: data.kakaoId,
                kakaoBigImg: data.kakaoBigImg,
                kakaoSmallImg: data.kakaoSmallImg,
                email: data.email,
                uid: data.uid
              };
              resolve(userData);
            });
          })
          .catch(function(error) {
            console.log('Error getting documents: ', error);
          });
      }
    });
  });
}

//action
const POST_USER = 'user/POST_USER';
const GET_USER = 'user/GET_USER';
export const postUser = createAction(POST_USER, uploadUser);
export const getUser = createAction(GET_USER, downloadUser);

//reducer
const initialState = Map({
  data: Map({}),
  loading: false
});

export default handleActions(
  {
    ...pender({
      type: POST_USER,
      onPending: (state, action) => {
        return state.set('loading', true);
      },
      onSuccess: (state, action) => {
        return state.set('data', action.payload).set('loading', false);
      }
    }),
    ...pender({
      type: GET_USER,
      onPending: (state, action) => {
        return state.set('loading', true);
      },
      onSuccess: (state, action) => {
        return state.set('data', action.payload).set('loading', false);
      }
    })
  },
  initialState
);
