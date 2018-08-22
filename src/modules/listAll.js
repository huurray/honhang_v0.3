import { Map, List } from 'immutable';
import { handleActions, createAction } from 'redux-actions';
import { pender } from 'redux-pender';
import firebase from 'firebase';

function getListAll() {
  const db = firebase.firestore();
  const docRef = db.collection('donghang');
  const date = new Date();
  const currentDate = date.getTime()-86400000;
  let dataList = [];
  
  return docRef
    .where("dateNum", ">=", currentDate)
    .orderBy("dateNum")
    .get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        let data = doc.data();
        dataList = [...dataList, data];
      });
      return dataList;
    });
}

//action
const GET_LIST_ALL = 'GET_LIST_ALL';
export const listUpAll = createAction(GET_LIST_ALL, getListAll);

//reducer
const initialState = Map({
  data: List([]),
  loading: false
});

export default handleActions(
  {
    ...pender({
      type: GET_LIST_ALL,
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
