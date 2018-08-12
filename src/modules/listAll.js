import { Map, List } from 'immutable';
import { handleActions, createAction } from 'redux-actions';
import { pender } from 'redux-pender';
import firebase from 'firebase';

function getListAll() {
  const db = firebase.firestore();
  const docRef = db.collection('donghang');

  let dataList = [];
  docRef.get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
      let data = doc.data();

      dataList = [...dataList, data];
    });
    console.log(dataList);
  });
  return dataList;
}
//action
const GET_LIST_ALL = 'GET_LIST_ALL';
export const ListUpAll = createAction(GET_LIST_ALL, getListAll);

//reducer
const initialState = List([
  Map({
    city: '',
    content: '',
    date: '',
    dateNum: 0,
    email: '',
    howMany: '',
    kakao: '',
    place: '',
    time: '',
    title: '',
    uid: ''
  })
]);

export default handleActions(
  {
    ...pender({
      type: GET_LIST_ALL,
      onSuccess: (state, action) => {
        
        return state.push(action.payload);
      }
    })
  },
  initialState
);
