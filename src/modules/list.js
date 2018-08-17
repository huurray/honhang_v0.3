import { Map, List } from 'immutable';
import { handleActions, createAction } from 'redux-actions';
import { pender } from 'redux-pender';
import algoliasearch from 'algoliasearch';

const ALGOLIA_APP_ID = 'LCW2SDIQSU';
const ALGOLIA_SEARCH_KEY = '37953a1db3c8409d1f48f74c46aa107f';

function getList(searchValue) {
  const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_SEARCH_KEY);
  const index = client.initIndex('donghang');
  const date = new Date();
  const currentDate = date.getTime();
  let dataList = [];
  
  return index
    .search({
      query: searchValue
    })
    .then(function(responses) {
      dataList = responses.hits.filter(list => list.dateNum > currentDate);
      return dataList;
    });
}

//action
const GET_LIST = 'GET_LIST';
export const listUp = createAction(GET_LIST, getList);

//reducer
const initialState = Map({
  data: List([]),
  loading: false
});

export default handleActions(
  {
    ...pender({
      type: GET_LIST,
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
